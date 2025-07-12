let sizeArg = process.argv[2];

let size = parseInt(sizeArg);

if (isNaN(size)) {
	console.log("Missing size");
} 
else {
	let squareRows = [];

	for (let i = 0; i < size; i++) {
		let row = "";

		for (let j = 0; j < size; j++) {
			row += "X";
		}
		squareRows.push(row);
	}
	let finalOutput = squareRow.join("\n");

	console.log(finalOutput);
}
