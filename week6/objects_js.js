//An empty object (“empty cabinet”) can be created using one of two syntaxes
var user = new Object(); // "object constructor" syntax
var user = {};  // "object literal" syntax

// Literals and properties
var user = {     // an object
  name: "Salah",  // by key "name" store value "Salah"
  age: 29,        // by key "age" store value 29
  output : function() {
    //anonymous function
    console.log(user.name, " ", user.age);
  }
  
};

user.output(); //case1

let print = user.output; //case2

let print2 = user.output();//case 3
print2;
  

// dot notation
//console.log(user.name);
//console.log(user.age);

// Add a property to an object
user.isEmployee = true;

// Remove a property
delete user.age;


// Multi-word property
var user = {     // an object
  name: "Salah",  // by key "name" store value "Salah"
  age: 29, 
         // by key "age" store value 29
  "likes green tea": true // multi-word property name must be quoted
};

// use the square bracket notation 
user["likes green tea"] = false;

//get
alert(user["likes greent tea"]); //false
//delete
delete user["likes green tea"];

var key = "name";
var key2 = "age";
//alert(user[key]); //Salah
//alert(user.key); //gives undefined bcoz we're dealing w the name as a string
//alert(user.name); //Salah
//alert(user.age) //29
//alert(user.key2) //undefined
//console.log(user[key]); // Salah

//console.log(user.key);// gives undefined

/***************************************************** */
function makeUser(userName, userAge){
  return{
    name: userName,
    age: userAge
  };
}

var user = makeUser("Salah", 29);
alert(user.age); //29


var userArray = [];
for(var i = 0; i < 5; i++){
  var ourUser = makeUser("Tarandeep_"+i, 23+(2*i));
  userArray.push(ourUser);
}

//console.log(userArray);

/****************************************************** */
// naming in objects is different from JS
var obj  = {
 for: 1,
 let: 2, //break: 8,
 return: 3
};

//alert(obj.for + obj.break + obj.return);
//console.log(obj.for + obj.break + obj.return);

// in operator

var user = {     // an object
  name: "Salah",  // by key "name" store value "Salah"
  age: 29        // by key "age" store value 29
};

var key = "age";
if (key in user)
  console.log("TRUE");
else
  console.log("FALSE");

//console.log("Type of key is ", typeof(key));


if ("likeCoffee" in user)
  console.log("TRUE");
else
  console.log("FALSE");

for(var key in user){
  if (typeof(user[key]) == "string") // "number", "boolean, ..."
    
    console.log(key + " is a string");
    //alert(key + "is a string");

}

// using multiple functions
//console.log(String(Math.floor(Number("15.9"))));
//alert(String(Math.trunc(Number("1.2"))));
// JSON: Using JSON to Represent Objects
/*

JSON (JavaScript Object Notation) is quickly becoming the most popular data
format (replacing xml). It is a simple way to represent JavaScript objects as strings
JSON provides a straightforward way to manipulate objects in JavaScript, and Code for reading and generating JSON 
exists in many programming languages.
A common use of JSON is to read data from a web server, and communicating data through the Internet.
Each JSON object is represented as a list of property names and values contained in
curly braces
*/

var json_str =  '{"name":"Salah", "age":29, "car":null}';

console.log(json_str);

const obj2 = JSON.parse(json_str);
console.log(obj2);

//converting an object to a JSON string
json_str_again = JSON.stringify(obj2);
console.log(json_str_again);

// array of JSON strings
//[json_str1, json_str2, json_str3]


