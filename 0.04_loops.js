//Loops

//do while loop
/*
lcv = 0

do {
	lcv = lcv + 1;
	// some code goes here
} while( true || false)

*/

var lcv = 0;
do{
	lcv = lcv + 1 ;
	console.log(lcv);
} while(lcv < 5);

//count to 20 by 2's
var lcv = 0;

do{
	lcv = lcv + 2;
	console.log(lcv);
} while(lcv < 20);

//count down from 10 to 0

var thiss = 11

do {
	thiss--;
	console.log(thiss);
} while(thiss > 0);


//while loop
/*

lcv = 0
while(true || false) {
	increment || decrement;
	//code goes here;
}
*/

var counting = 0;

while(counting < 50) {
	counting += 5;
	console.log(counting);
}

//challange count 10-0.. instead of 0, print blastoff

var countdown= 11

while(countdown > 0) {
	countdown --;
	if(countdown == 0) {
		console.log("Blast Off");
	}else{
		console.log(countdown);
	}
}


//For loop

/*

for (lcv = 0; true or false expression ; increment || decrement) {
	//code here
}

*/

for(apples = 0 ; apples < 10; apples++) {
	console.log(apples);
}