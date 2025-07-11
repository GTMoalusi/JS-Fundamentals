let numberOfArgumentsPassed = process.argv.length - 2;;

if (numberOfArgumentsPassed === 0) {
	console.log(`No argument`);
}else if (numberOfArgumentsPassed === 1) {
	let firstArgument = process.argv[2];
	console.log(`Argument found`);
}else{
	console.log(`Arguments found`);
}
