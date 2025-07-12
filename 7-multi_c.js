let myStringInput = process.argv[2];

let isANumber = parseInt(myStringInput);

if (isNaN(isANumber)){
	console.log("Missing number of occurrences");
}else{
	let linesToPrint = [];

	for (let i = 0; i < isANumber; i++){
   		linesToPrint.push("C is fun");
	}

	let outputString = linesToPrint.join('\n');
  	console.log(outputString);
}


