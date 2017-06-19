/*
Closures essentially functions
	variables inside of functions cannot be used outside
*/

var init = function(){
	var name = 'Summer';
	function displayName(){
		console.log(name);
	}
	displayName();
}
init();

var friend = {};
var setAge = function(myAge){
 	var birthday = '2/7/1994';
 	return {
 		getAge: function(){
 			console.log(myAge);
 			return myAge;
 		}
 	};
};

friend.age = setAge(23);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);