//Arrays

//[]

var students = ["Harrison", "Rose", "ben", "Caitlyn", "Kay"];

students.push("Aaron");

console.log(students);

students.pop();

console.log(students);

students.push("Nick");

//for each loop

for (var s in students){
	console.log(students[s] + " is in the position of: " + s);
}

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);


// for (var n in students){
// 	var 
// 	console.log()
// }


// challange: create an array of numbers 1-10, then use a for in loop to print to the console.

var numbers = []

for (var i = 1; i < 11; i++){
	numbers.push(i);
}

for (var r in numbers) {
	console.log(numbers[r]);
}


var numArry = [];
for( var num =1; num < 11; num++){
	numArry.push(num);
	console.log(numArry);
}

console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n')

var ranThings = ["Bryce", 45, "Summer", true, [] ]
console.log(ranThings);

console.log('\n\n\n\n\n\n\n');

// Challanges ---------------------------------------------

	//Bronze

	var hobbies = ["video games", "golf", "coding", "cooking"];
	for (var x in hobbies) {
		console.log(hobbies[x]);
	}

	//Silver

	var sportsCars = ["Lamborghini", "Porche", "Pagani", "Maserati", "Bugatti", "Ferrari"];
	for (var sc in sportsCars){
		console.log(sportsCars[sc]);
	}

	//Gold

	var cars = ["Lexus RX350", "Saturn S2", "Audi R8"];
	var pets = ["Phil the Cat", "Willie Anne the Cow", "Stewie the Dog"];
	var children = ["timmy","sally","bob"];

	var list = [cars, pets, children]

	for (var li in list){
		var lil = list[li];
		for (var s in list[li]) {
			console.log(lil[s]);
		}
	}

	// ran number 0-50

	var ranNum= Math.floor( Math.random() * 50 )
	console.log(ranNum)
	
	// array filled with 15 random numbers

	var ranNumArry = [];
	var primeNum = 0

	function isPrime(value){
		for(var po=2;po<9;po++){
			for(var hp in ranNumArry){
				var pn = ranNumArry[hp];
				if (pn%po!=0 && pn!=po) {
				primeNum++;
				console.log(pn%po)
			} else {
				primeNum + 0;
			}
			}
		}
	}


	for (var j=1;j<15;j++){
		ranNumArry.push(Math.floor(Math.random()*50))
	}

	isPrime();
	console.log(primeNum);


	console.log(ranNumArry)

	//
	console.log('\n\n\n\n\n\n\n')

	var empy = []

	for (var k=5;k<46;k++){

		function pushPop(){
			empy.push(k);
			empy.pop();
		}
		if(k%2==1 && k%5!=0 && k%3!=0){
			pushPop()
		} else if(k%5==0 && k%3!=0) {
			pushPop()
		} else if(k%3==0) {
			pushPop()
		} else {
			empy.push(k);
		}
	}
	console.log(empy)

	//
