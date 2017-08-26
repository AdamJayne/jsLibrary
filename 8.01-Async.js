//  SYNCHRONOUS AND ASYNCHRONOUS JAVASCRIPT

//   Synchronous Javascript
var first = "I am first!";
var second = "I am second!";

console.log(first);
console.log(second);
// The expected output is that first would console log first
//  and second would follow.

var initial = 3-8;
var secondary = initial * 45;

console.log(initial);
console.log(secondary);

//  Asynchronous Javascript

var cake1 = "batter"; // we start the cake with just some batter

function oven1(pan){  // we pass a pan into the oven
	pan = "cake";       // what is in that pan then becomes cake
}

oven1(cake1);  // we pass the batter into the pan, then the oven bakes the cake
console.log(cake1); // we expect to get cake, but the oven isn't done baking

//  Lets approach the problem so we can get the cake after it's baked

var cake2 = "batter"; //start another cake with some batter

function oven(pan, callback){ //this time our oven function has a callback
	pan = "cake"; // what's in the pan becomes cake after baking
	callback(pan); //our callback function comes after the cake bakes
				      // and gets the contents of the pan
}

oven(cake2, function(pan){ // pass the cake in the pan, then the pan in the callback
	console.log(pan);  // lets inspect what is in the pan after it has been baked.
});

console.log(cake2);  // what happens if we ask for the contents outside of the funciton?