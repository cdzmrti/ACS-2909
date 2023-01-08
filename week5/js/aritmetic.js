/* Arithmetic Operations */
var newNum1 = 5;
var newNum2 = 3;
var arithm_var = newNum1 + newNum2; // newNum1 - newNum2; newNum1 * newNum2; newNum1 / newNum2; newNum1 % newNum2;
console.log("newNum1 + newNum2 =", arithm_var);
console.log("newNum1 % newNum2 =", newNum1 % newNum2); //%	Modulus (Remainder)

// Operator Precedence
//Multiplication, division and remainder operations are applied first.
// from left to right.
//
// Example calculate the average (Arithmetic Mean)
// Algebra: m = a+b+c+d+e   / 5
//Javascript: m = a+b+c+d+e / 5

var a, b, c, d, e;
a = 1;
b = 2;
c = 3;
d = 4;
e = 5;
var m = (a + b + c + d + e) / 5;
console.log("m = ", m);

// y = a* x * x +  b * x + c;
// y = (a* x * x) + ( b * x) + c;

/* Boolean datatype */
var isItMorning = false; // true
var time = 10;

if (time < 12) isItMorning = true;

console.log("Is IT Morning = ", isItMorning); // random number between 10-30
