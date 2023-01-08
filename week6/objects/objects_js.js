//An empty object (“empty cabinet”) can be created using one of two syntaxes
var user = new Object(); // "object constructor" syntax
var user = {}; // "object literal" syntax

// Literals and properties
var user = {
	// an object
	name: "Salah",
	age: 29, // by key "age" store value 30
	output: function () {
		//anonymous function
		console.log(user.name, " ", user.age);
	},
};
// user.output();//case 1

// let print = user.output;//case 2
// print();

// let print2 = user.output();//case 3
// print2;

// Property values are accessible using the dot notation
// get property values of the object:
// alert(user.name); // Salah
// alert(user.age); // 29

// Add a property
user.isEmployee = true;

// Remove a property
delete user.age;
console.log(user);

// Multiword property
var user = {
	// an object
	name: "Salah", // by key "name" store value "John"
	age: 29, // by key "age" store value 30
	"likes green tea": true, // multiword property name must be quoted
};

//Multiwor property: “square bracket notation” instead dot notation
// set
//user["likes green tea"] = false;

// get
//alert(user["likes green tea"]); // false

// delete
//delete user["likes green tea"];

// Get key at run-time or depend on the user input.
var key = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user[key]); // Salah (if enter "name")

// The dot notation cannot be used in a similar way
// var key = "name";
// alert(user.key); // undefined

//use existing variables as values for property names
function makeUser(name, age) {
	return {
		name: name,
		age: age,
		// ...other properties
	};
}

var user = makeUser("Salah", 29);
//alert(user.age); // 29

//Property names limitations
// these properties are all right
let obj = {
	for: 1,
	let: 2,
	return: 3,
};

//alert(obj.for + obj.let + obj.return); // 6

// in operator
var user = {
	// an object
	name: "Salah", // by key "name" store value "John"
	age: 29, // by key "age" store value 30
	"likes green tea": true, // multiword property name must be quoted
};

//alert("age" in user); // true, user.age exists
//alert("blabla" in user); // false, user.blabla doesn't exist

var key = "age";
//alert(key in user); // true, property "age" exists

//The “for…in” loop
for (var key in user) {
	if (typeof user[key] == "string")
		//alert(key +" is a string");
		console.log(user[key] + " is a string");
}

//multiple functions
alert(String(Math.trunc(Number("1.2")))); // "1", not same "1.2"




