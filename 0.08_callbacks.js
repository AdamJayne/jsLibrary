var fs = require('fs');

/* Diagram of a callback

	request = prepare_the_request();
	send_request_asynchronously (request, function(response){
		display(response);
	});

*/
// 		 getBulls([path], callback)
function getBulls(filepath, done){
	//telling filesystem to readfile that the user of the function passes into
	//as a argument. Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		// errror handling
		if (err) return done(err);

		fs.readFile('0.08_bulls.dictionary', function(err, dict){
			//error handling
			if (err) return done(err);
			//do some logic here

			compareBulls(bulls, dict)
		});
	});

	var compareBulls = function (bulls, dict){
		//turn the items from these files into arrays then split them up
		dict = dict.toString().split('\n');
		bulls = bulls.toString().split('\n').filter(function(bulls){
		//going over the dictionary, then it's checking if the bulls are located
		//inside of the dictionary. If it is, then it's returning that value.
		return dict.indexOf(bulls) !== -1;
		});
	done(bulls);
	};
};
//variable way


getBulls('0.08_bulls.txt', function(bulls){
	console.log(bulls);
});


//another example of a callback

console.log('Hey tell me your name?');
var printNameInThreeSeconds = setTimeout(function(){
	console.log('Bryce');
}, 3000);
console.log('nice to meet you');