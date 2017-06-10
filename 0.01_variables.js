// Declaring a variable with a value
var name = "Adam";
	console.log(name);
// Declaring without content
var esmy;
	console.log(esmy);
// Initializing the content
esmy = "adam";
	console.log(esmy);

// variables cannot be declared with a number starting the name. But can be after a letter. NOT 3week, YES week3.

console.log("name")


var firstName = "Adam";
var lastName = "Jayne";
// Concatenation
console.log(firstName + " " + lastName);


//challange address in 3 var. st state zip
//add them together and print to console

var street = "2131 West Co Rd 300 South";
var state =  "Indiana";
var zipCode= "46135";

console.log(street +"\n"+ state , zipCode);

console.log("Ben says, \"Good Morrow to you sir\" ")
console.log('Ben says, "Good morrow to you sir" ')


//Booleans

var isAwake = true;
var rainy = false;

console.log("Are you awake? " +isAwake);
console.log(rainy);

/*
	Operators:

	+ addition
	- subtraction
	* multiplication
	/ division
	% modulos
	= assignment
*/
console.log("The answer to 10 % 3 is:", 10 % 3 );
console.log(typeof("The answer to 10 % 3 is: "+ 10 % 3 ));


// challanges
	
	//Integers
		//bronze

		var age = 23;
		var birthYear = 1994;
		var gradYear = 2012;
		var broNum = 1;

		console.log(age);
		console.log(birthYear);
		console.log(gradYear);
		console.log(broNum);

		//silver

		console.log(13%4);
		console.log(100 % 7);
		console.log(100 % 88);

		//gold

		console.log(isNaN("Gummy Worm"));

	//Variables
		//bronze

		var isEmployed = "unemployed";
		var drinksCoffee = "I love coffee";
		var middleName = "Thomas";
		var favoriteMovie = "Star Wars";
		var favoriteGame = "Squad";

		//silver

		var myNumber = 0;
		console.log(myNumber);
		myNumber = myNumber + 10;
		console.log(myNumber);
		myNumber = myNumber - 1;
		console.log(myNumber);
		myNumber = myNumber * 9;
		console.log(myNumber);
		myNumber = myNumber / 7;
		console.log(myNumber);

		//gold

		var myAge = 23;
		var maxAge = 95;
		var years = maxAge - myAge;
		var breathPerDay = 22000;
		var lifetimeSupply;
		var oxygenIntake = 0.18;
		var carbonExhale = 0.36;
		var roomPopulation = 24;
		var worldPopulation = 7000000000;

		lifetimeSupply = ((maxAge - myAge) * 365) * breathPerDay;
		console.log("I will take about "+lifetimeSupply+" breaths until I am " + maxAge +"!");
		console.log("This means you will breathe in " + lifetimeSupply*oxygenIntake + " grams of Oxygen");
		console.log("This also means you will exhale " + lifetimeSupply*carbonExhale + " grams of CO2");
		console.log("If everyone in this room were to live another "+years+" years, then we would collectively breathe in "+lifetimeSupply*oxygenIntake*roomPopulation+" grams of oxygen.");
		console.log("This will also mean that collectively we will exhale "+lifetimeSupply*carbonExhale*roomPopulation+" grams of CO2.");
		console.log("Lets say 7 billion people on the planet live exaclty "+years+" years, how much oxygen would they breathe?  "+lifetimeSupply*oxygenIntake*worldPopulation+ " grams of oxygen");
		console.log("Same for CO2: "+lifetimeSupply*carbonExhale*worldPopulation+" grams of CO2.");

	//Strings

		//bronze
		var highSchool = "Big Time High School";
		var gradYr= "1994";

		console.log("I graduated from",highSchool,"in",gradYr);

		//silver
		var year = 2006;
		var make = "Lexus";
		var model = "Rx 350";

		console.log("I drive a",year,make,model);

		//gold
		var help = "help";

		console.log(help:toUppercase)
