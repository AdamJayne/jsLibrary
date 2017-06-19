var fs = require('fs')

function checkGroList(filepath, done){
	fs.readFile(filepath, function(err, checkoff){
		if (err) return done(err);
		fs.readFile('0.081_groList.dictionary', function(err, dict){
			if (err) return done(err);
			compareLists(checkoff, dict);
		});
	});
	var compareLists = function(checkoff, dict){
		dict = dict.toString().split('\n');
		checkoff = checkoff.toString().split('\n').filter(function(checkoff){
			dict.indexOf(checkoff) !== -1;
		});
	done(checkoff);
	};
};

checkGroList('0.081_purchased.txt', function(checkoff){
	console.log(checkoff);
});