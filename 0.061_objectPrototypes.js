//All objects that are created are linked to a prototype object
//The main object may be manipulated and altered, but the prototype
//Will stay the same. Attempting to retrieve data from the main 
//object that it does not contain, js will then attempt to retrieve
//said data via the prototype. Essentially its a log of the original
//object that was created.

var soup = {
	broth: 'chicken stock',
	vegetables: ['carrots','celery', 'onions'],
	meat: 'chicken',
	noodle: 'egg noodles'
};

console.log(soup);
//now lets update the object

soup['broth'] = 'beef stock';

