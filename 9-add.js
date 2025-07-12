let firstArg = process.argv[2];
let secondArg = process.argv[3]; 

function add(a, b) {
	return a + b;
}

//let firstArg = process.argv[2];
//let secondArg = process.argv[3];

let num1 = parseInt(firstArg);
let num2 = parseInt(secondArg);

let sum = add(num1, num2);

comsole.log(sum);
