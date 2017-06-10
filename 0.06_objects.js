//Objects

var empObject = {};

var johnQualls = {
//  Key			: Value
	name		: "John Qualls",
	age			: 39,
	hairColor	: "Brown"
};

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.name + " is of the age of " + johnQualls.age);
//outside object literal
johnQualls.height = "6ft"; 

console.log(johnQualls.height);



//create an animal object with the properties of type, weight, commonInIndiana, and habitat

var animal = {
	type				:"Cow",
	weight				:1300,
	commonInIndiana		:true,
	habitat				:"Pasture"
}

console.log(animal["habitat"]);
animal["nickName"] = "Shawnya";

console.log(animal["nickName"] + " lives in a " + animal["habitat"])

// reassigning valuse

animal.type = "moose"
console.log(animal.type)

	//change weight of the animal using square bracket notation
	//then add a new array property of moviesAboutMe
	
	animal["weight"] = 900;

	animal["moviesAboutMe"] = ["Rocky & Bullwinkle", "Monty Python", "National Lampoon's Vacation"];

	console.log(animal);

	console.log(Object.keys(animal))

// Objects with methods(or functions)

var theBryceIsRight = {
	name 		: "Bryce Greene",
	age 		: 55,
	vocation 	: "TA",
	email 		: "thebryceisright@gmail.com",
	greeting	: function() {
					return "Greetings earthlings, I am " + this.name + " and I am here to learn you.";
				  }
}

// console.log(theBryceIsRight.greeting());


//		Create a method for contactMe and include the email property in a return statement

theBryceIsRight.contactMe = function()  {
	return "If you need anything, eMail me at: " + this.email;
}

theBryceIsRight.intro = function() {
	return this.greeting() + '\n' + this.contactMe();
}

console.log(theBryceIsRight.intro());


//object cconstructors
var paul = new Object;
paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking banana muffins"];

console.log(paul);

//object constructor template

function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return "There are "+ (this.rooms - this.booked) +" rooms left."
	};
}
// the new keyword helps us intanitate a new object

var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel("Mini JW", 100, 50);

console.log(jwExp.checkAvailability());
var hotels = [jw, jwExp];
console.log(hotels[1].name);

for(var h in hotels){
	console.log(hotels[h].name);
}


// Challanges

	//Bronze

	var person = {
		firstName :"Thomas",
		lastName :"Billingsworth",
		hairColor:"Blonde",
		eyeColor: "Green"
	}

	//Silver

	function getFirstName(){
		return person.firstName;
	}

	function getLastName(){
		return person.lastName;
	}

	function getHairColor(){
		return person.hairColor;
	}

	function getEyeColor(){
		return person.eyeColor;
	}

	//Gold
	var childOfPerson = {}

	function inherit(){
		for(var s in person){
			childOfPerson[s] = person[s];
		}
	}

	inherit();
	console.log(childOfPerson)

	childOfPerson.age = 2;
	childOfPerson.weight = 30;

	console.log(childOfPerson);
	console.log(person);

	//

	function addPerson(name, age, favoriteShows, height, weight){
		this.name = name,
		this.age = age,
		this.favoriteShows = favoriteShows,
		this.height = height,
		this.weight = weight,
		this.birthday = function(){
			return this.age = this.age + 1;
		}
		this.checkShows = function(person2){
			for(var t in this.favoriteShows){
				for (var z in person2.favoriteShows){
					if(favoriteShows[t] == person2.favoriteShows[z]){
						console.log(this.name +" has a common favorite show of "+ favoriteShows[t] + " with "+ person2.name);
					}
				}
			}
		}
	}

	var Timmy = new addPerson("Timmy Two Toes", 45, ["Tears of the Sun", "Hello Vietnam", "Flags of our Fathers"], 6.5, 230);
	var Rick = new addPerson("Rick Sanchez", 56, ["Two Brothers", "The Fleeb and the Plumbus", "Tears of the Sun"], 6, 150);
	var Morty = new addPerson("Morty Smith", 15, ["Two Brothers", "Tears of the Sun", "The Fleeb and the Plumbus"], 4.6, 110);
	var Jerry = new addPerson("Jerry Smith", 40, ["Pride and Prejudice", "Beef in Bangkok", "Tirade in Tijauana"], 5.8, 200);
	var Summer = new addPerson("Summer Smith", 17, ["Pride and Prejudice", "Two Brothers", "Tears of the Sun"], 5.4, 125);

	console.log(Timmy.birthday());

	Rick.checkShows(Morty);