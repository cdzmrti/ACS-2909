/* 
*Student Name: Maritoni Cadiz
*Student Number: 3160896
*ACS 2909 Internet Programing
*Assignment 2 
*/

// PART A
var n = Math.random();  //return a # between 0-1
var int_n = Math.floor(n*20); //0-20
var original_len = int_n + 10; //random number b/w 10 and 30
var original = []; //empty array

console.log("**************PART A**************");
console.log("length of the array is",original_len);

for(var i = 0; i < original_len; i++){
    var object_i = {
        name:"natureProduct_"+i,
        value:i
    };
    original.push(object_i);
}
console.log(original);

var myNameProd_len = 5;

var myNameProducts = [];

for(var i = 0; i < myNameProd_len; i++){
    var object_i = {
        name:"Maritoni_"+i,
        value:i,
    };
    myNameProducts.push(object_i);
}

// PART B
console.log("**************PART B**************");
function addToOriginalArray(myNamedProducts_array){
    var myAndOriginal = [...myNamedProducts_array];
    original_len = original.length;
    myProd_len = myNamedProducts_array.length;

    let index = 0;
    for(var i = myProd_len; i < (original_len+myNameProd_len); i++){
        object_i = original[index];
        object_i.name = "natureProduct_"+i;
        object_i.value = i;
        myAndOriginal.push(object_i);
        index++;
    }
    return myAndOriginal;
}
var combinedArrays = addToOriginalArray(myNameProducts);
console.log(combinedArrays);

// PART C
console.log("**************PART C**************");
function proposeRandomItem(myAndOriginal_array){
    var rand = Math.random();
    myAndOrig_len = myAndOriginal_array.length;
    let index = Math.floor(rand*(myAndOrig_len));
    return myAndOriginal_array[index];
} 

var randItem = proposeRandomItem(combinedArrays);
console.log(randItem);

console.log((myNameProducts.includes(randItem)) ? "Yes, the random proposed item includes my name." :
"No, the random proposed item DOES NOT include my name.");

// PART D
console.log("**************PART D**************");

function generateFactors(myAndOriginal_array, rnd_num){
    var array_Factors = [];
    for(let i = 1; i <= rnd_num; i++){
        if(rnd_num%i == 0 )
        {
            array_Factors.push(myAndOriginal_array[i]);
        }
    }
    return array_Factors;
}


var n1= Math.random();
var rnd_num = Math.floor(n1*combinedArrays.length);
var factors = generateFactors(combinedArrays, rnd_num);
console.log("Random number", rnd_num);
console.log(factors);

