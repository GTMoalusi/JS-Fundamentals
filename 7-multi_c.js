let myStringInput = process.argv[2];

let isANumber = parseInt(myStringInput);

if (isNaN(isANumber)){
	console.log("Missing number of occurrences");
}else{
	let outputString = "";
	for (let i = 0; i < isANumber; i++){
   		outputString += "C is fun\n";
	}
  	console.log(outputString);
}


