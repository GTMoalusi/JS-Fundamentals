const numberOfArgumentsPassed = process.argv.length - 2;;

if (numberOfArgumentsPassed === 0) {
	console.log(`${numberOfArgumentsPassed} No argument`);
}else if (numberOfArgumentsPassed === 1) {
	console.log(`${numberOfArgumentsPassed} Argument found`);
}else{
	console.log(`${numberOfArgumentsPassed} Arguments found`);
}
