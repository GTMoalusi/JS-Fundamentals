function factorial(n) {
	if (isNaN(n)) {
		return 1;
	}

	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

let inputArg = process.argv[2];
let num = parseInt(inputArg);

if (isNaN(num)) {
	console.log(factorial(num));
}
else if (num < 0) {
	
}
else {
	console.log(factorial(num));
}
