let argument = process.argv[2];

let myInt = parseInt(argument);

if (isNaN(myInt)){
	console.log("Not a number");
}else{
	console.log(`My number: ${myInt}`);
}
