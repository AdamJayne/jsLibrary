/*
	iffe = immediately invoked function expression
	creates a function and immediatley calls the function at the same time


	Make sure you have a semicolon on lines before the iffe.
*/
var x = 'Hey yo' ; //example here. Remove to see the code break
(function printNum(){
	var a = 5;
	console.log(a);
})();


// create an iffe that counts from 1 to 10

(function countNum(){
	var i = 1
	while(i <= 10){
		console.log(i);
		i++;
	}
})();

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(325, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());