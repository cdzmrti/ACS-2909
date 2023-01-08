var patt1 = /\d+/;// + is amodifier for repeating the previous part one or mote times (i.e., one or more digits)
console.log(patt1.test("123")); // true
console.log(patt1.test("")); // false
//star * means 0 or more
console.log(/\d*/.test("123")); // true
console.log(/\d*/.test("")); // true

let neighbor = /flavou?r/; // ? is a modifier for repeating the previous part one or none times (zero or one)
console.log(neighbor.test("flavour")); // true
console.log(neighbor.test("flavor")); // true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;// the date pattern written as a regular expression
console.log(dateTime.test("1-30-2003 8:45")); // true

var patt = /[a-f]+/; // try ^ and $, + symbolizes one or more of what's included inside the brackets [a b c d e f]
var patt2 = /[a-z]+/;
console.log(patt.test("Auto")); //false
console.log(patt.test("42")); //false
console.log(patt.test("12 Days")); //true
console.log(patt.test("borrow")); //true
console.log(patt2.test("Auto")); //true
console.log(patt2.test("42")); //false
console.log(patt2.test("12 Days")); //true
console.log(patt2.test("borrow")); //true
