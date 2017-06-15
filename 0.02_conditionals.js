//Conditionals

/*
	Boolean Operators
-------------------------------
	< Greater than
	> Less than
	>= Greater than or equal to
	<= Less than or equal to
	== Equal to
	=== Strictly eqal to
	! Not
	!= Not equal to

	?: ternary operators

*/

console.log(1 > 3);
console.log(10 != 10);
var name = "Adam";

console.log(name == "adam");
console.log(6 == "6");
console.log(6 === "6");


// if statements
/*
if (boolean expression) {
    //some code goes here
}

*/

if( 242 % 2 === 0) {
	console.log("This number is even");
}

var userName = "admin";
var password = "test123";

if (userName == "admin") {
	console.log("You have been granted access!");
}

if (userName =="admin" && password =="admin") {
	console.log("You have been granted access");
} else {
	//Challenge: Check if the username is the wrong value or the password
	console.log("Incorrect details");
}

/*
chaining boolean expression
---------------------------
	&& and
	|| or
*/



if(userName =="admin" && password == "admin") {
	console.log("You have been granted access");
} else {
	if(userName != "admin") {
		console.log("Username is incorrect");
	} else {
		console.log("Password is incorrect");
	}
}

// else if statements

var age = 20;

if (age >= 35) {
	console.log("You can vote and also hold any place in gov.");
} else if (age >= 25) {
	console.log("You can vote and run for senate.")
} else if (age >= 18) {
	console.log("You can vote!")
} else {
	console.log("You're outta luck")
}






//Challanges
	//Bronze

	var age

	if (age >= 60) {
		console.log("Congratulations, you should probably retire!");
	} else if (age >= 50) {
		console.log("You are now half of a century old..")
	} else if (age >= 21) {
		console.log("You may now purchase and drink alchohol!")
	} else if (age >= 18) {
		console.log("You are now considered an adult, now go vote and work for the man!")
	} else {
		console.log("There is nothing special about you.")
	}


	//Silver

	var lockout = false
	var game = "win"
	var win = 2
	var loss = 1

	if (lockout === false) {
		if (game == "win") {
			win++;
			if (win == 4) {
				console.log("Man, we fuckin killed ya this year!!");
			} else if (win == 3) {
				console.log("Chances are you aren't gonna win the next game, losers!!");
			} else if (win == 2) {
				console.log("Oh boy, thats two. Can't wait to drop you the next game!");
			} else if (win == 1) {
				console.log("Thats one, baby! WOOOO!");
			} else {
				console.log("What?");
			}
		} else if(game == "loss") {
			loss++;
			if (loss == 4) {
				console.log("Its unbelievable how blind those refs have been, you cheated so damn much!");
			} else if (loss == 3) {
				console.log("The refs are blind, and you keep deflating the balls!"); 
			} else if (loss == 2) {
				console.log("We are still going to catch up, just have had bad luck.");
			} else if (loss == 1) {
				console.log("Thats some bullshit, if it had been better weather.");
			}
		}
	} else {
		console.log("Looks like we don't get to hand you your asses today..")
	}

	//Gold

	var num = 0;

	while (num < 100) {
		num++;
		if (num % 3 == 0 && num % 5 == 0){
			console.log("FizzBuzz");
		} else if (num % 5 == 0) {
			console.log("Buzz");
		} else if (num % 3 == 0) {
			console.log("Fizz");
		} else {
			console.log(num);
		}
	}