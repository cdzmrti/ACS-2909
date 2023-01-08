// Use the spread (...) syntax
// Use the Object.assign() method
// Use the JSON.stringify() and JSON.parse() methods

//The following code illustrates how to copy an object using three methods above:

const person = {
	name: "Salah",
	age: 30,
};

// using spread ...// ES6 way
let p1 = {
	...person, 
};
console.log(p1);

// using  Object.assign() method
let p2 = Object.assign({}, person);
console.log(p2);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
console.log(p3);
