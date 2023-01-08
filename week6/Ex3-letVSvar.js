// The let keyword was introduced in ES6 (2015).
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// let provides Block Scope in JavaScript.
if (true) {
	let message = "Hello, I'm JavaScript!"; // local variable
	console.log("inside the Block:", message);
}

console.log("outside the Block", message); // <-- in let case: Error! The variable is local to the block
