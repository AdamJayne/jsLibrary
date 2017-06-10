//Functions

/*

	function Name_of_Function() {
	
	}

*/

//Delcaring the function
function greeting(){
	var name = "Thomas";
	console.log(name, "says, \"Helloooooo Vietnaaaaaaaaaam!!!\"");
}
//calling the function
greeting();


//challange declare a function that prints the weather to the console
//then call that function

function weather(){
	console.log("The weather is sunny, with mild temperature.");
}

weather();

//void functions with parameters--------------------

function shoes(brand){
	console.log("Man those " + brand + " are on fleek!");
}

shoes("Crocs");
//void functions with multiple parameters
function add(num1, num2) {
	console.log(num1 + num2);
}

add(34, 66);

//functions that return data --------------

function sum(num1, num2) {
	return num1 + num2;
}

var answerToQuestion = sum(23, 17);

//Challange: Write for * / % -     -----------------------------------------------------

	function product(num1, num2) {
		return num1 * num2;
	}

	var productAnswer = product(45, 32);
	console.log(productAnswer);

	function divis(num1, num2) {
		return num1 / num2;
	}

	var divisAnswer = divis(23, 90);
	console.log(divisAnswer);

	function mod(num1, num2) {
		return num1 % num2;
	}

	var modAnswer = mod(876,234);
	console.log(modAnswer)

	function difference(num1, num2) {
		return num1 - num2;
	}

	var differenceAnswer = difference(23, 525);
	console.log(differenceAnswer);




//challenge:-----------------------------------------------------------------------------

		//Bronze

		function concat(string1, string2){
			return (string1+ " " + string2);
		}

		var concatAnswer = concat("Sleep","Now");
		console.log(concatAnswer);


		//Silver


		function bills(rent, water, electricity, sewage) {
			return rent + water + electricity + sewage;
		}

		var totalBills = bills(500, 45, 89, 20);
		console.log("Your total bill amount this month is $" + totalBills);

		//Gold

		function sodaCost(cokes, cost){
			return cokes * cost;
		}

		var cokes = 100
		var cost = 1.95
		var total = sodaCost(cokes, cost);

		console.log(cokes + " Cokes at $" + cost + " will cost you $" + total)

// Create a calculator function that accepts 3 arguments: 2 numbers and 1 operator.
// ex. calculator(2, *, 2) >> this should return 4
// hints: you will need to use conditionals!!



	function calculator(num1, expression, num2) {
		if (expression === "%") {
			return num1 % num2;
		} else if (expression === "/") {
			return num1 / num2;
		} else if (expression === "*") {
			return num1 * num2;
		} else if (expression === "-") {
			return num1 - num2;
		} else if (expression === "+") {
			return num1 + num2;
		} else {
			return "Choose a proper operation";
		}
	}


	var calcAnswer = calculator(4, "%", 3);
	console.log(calcAnswer);