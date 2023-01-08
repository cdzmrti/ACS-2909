// Using JSON to Represent Objects
// JSON: JavaScript Object Notation is quickly becoming the most popular data
// format (replacing xml).
// A common use of JSON is to read data from a web server, and display the data in a web page.
// JSON (JavaScript Object Notation)—a simple way to represent JavaScript objects as strings
// JSON provides a straightforward way to manipulate objects in JavaScript, and Code for reading and generating JSON
// exists in many programming languages.
// In addition to simplifying object
// creation, JSON allows programs to extract data easily and to efficiently transmit data
// across the Internet.
// Each JSON object is represented as a list of property names and values contained in
// curly braces, in the following format:
//{ propertyName1 : value1, propertyName2 : value2 }
//{"firstName":"Salah", "lastName":"Sheng"}

//Arrays are represented in JSON with square brackets in the following format:
//[ value1, value2, value3 ]
employees: [
	{ firstName: "Salah", lastName: "Sheng" },
	{ firstName: "Anna", lastName: "Smith" },
	{ firstName: "Peter", lastName: "Jones" },
];
//Each value can be a string, a number, a JSON object, true, false or null.

//converting a JSON string into an object
var json_str = '{"name":"Salah", "age":29, "car":null}';
const obj = JSON.parse(json_str);
console.log(obj);

// converting an object into a JSON string
json_str_again = JSON.stringify(obj);
console.log(json_str_again);
