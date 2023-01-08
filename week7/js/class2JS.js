// MATH object
var x = 1.9;
var y = 2;

Math.floor(x); // closest integer that is less than x (ans 1)
Math.ceil(x); // 2
Math.abs( x );// 1.9 ~ Math.abs gives the postive of a number all the time
Math.exp(x);// e^x
Math.pow(x, y);// x^y (x is 1.9 and y is 2 => 1.9^2)

// String object
var str = "Yaser";
console.log(str.charAt(0));// provide the char at the specified index ~ will print 'y'
console.log(str.concat( " Al Mtawa")); //Yaser Al Mtawa
 
let str2 = str.concat( " Al Mtawa");// Yaser Al Mtawa ~ concat means concatination (+)
str2 = str2.replace("Yaser", "Yasmin"); //
console.log(str2.replace("Yaser", "Yasmin")); //replace Yaser with Yasmin => "Yasmin Al Mtawa"

var strArr = str2.split(" "); //yields an array => ['Yasmin', 'Al', 'Mtawa']
console.log(strArr);


console.log(str2.includes("Yaser")); //.includes returns true or false, its a boolean ~ asking if the substring "Yaser" is included in str2 which returns false
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());



class A{
    constructor(name1, age1){
        this.name=name1;
        this.age= age1;    
    }
}

class B{
    constructor(name1, age1){
        this.name=name1;
        this.age= age1;       }
}

var instB = new B("Salah", 29); //instance object

let instZ = {}; //literal object that is empty
//key is name and age ~ are properties
for(var key in instB){ //first iteration goes to the name key, second iteration goes to the age key
    instZ[key] = instB[key]; //first iteration: instB[name] ~ return 'Salah' , second iteration: instB[age] ~ return 29, copying contents of isntB into instZ
}



instZ.name = "Yasmin";

console.log(instB);
console.log(instZ);


var instA = new A("Salah", 29);

var instX = new A("Salah", 29); // both instX and instA refering to the same object in memory (i.e., copy the reference/address)

console.log(instX);
console.log(instA);

console.log(instA===instX); //memory location is also being compared thus it will return false



instX.name = "Tarandeep";

console.log(instX);
console.log(instA);



if (instA === instB)//comparing the addresses
   console.log("They are equal")
else
   console.log("They are not equal!");

// is there any case that instA === instB will give true

/*
var arr1 = [1, 2, 3, 4];//litral array

var arr3 = arr1; //by reference

var arr2 = [];

*/


// Both object and arrays (=), copy by by reference 
// It is NOT copy by value (i.e., cloning) 
/*
for (var i=0; i < arr1.length; i++){
     arr2[i] = arr1[i];
}



// copy by value using the spread operator

//arr2 = [...arr1]; //cloning or copy by value

arr2 = arr1.slice();// another way to copy by value

arr2[3] = 0;

console.log(arr1);

console.log(arr2);

*/