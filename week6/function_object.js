var n = Math.random();// return random number between 0-1
var int_n = Math.floor(n*10); // 0-10  
var original_len = int_n + 50;// 50-60

console.log("Length of original Array = ",original_len);

var orig_subject=[];// empty array

for (var i=0; i < original_len; i++){
    //an empty object would jus be like this: var object_i = {};
   var object_i = {
        //properties or key (name and id)
        name:"subject"+i, //values are "subject"+i and i
        id:i
    };
    orig_subject.push(object_i); //an array of objects
}
console.log(orig_subject);


var orig_subject2 =[];// second array
let n_myProduct = 5;
for (var i=0; i < n_myProduct; i++){
   var object_i = {
        name:"mySubject_"+i, 
        id:i
    };
    orig_subject2 .push(object_i);
}
console.log(orig_subject2);


function addTwoArrays(origina_arr, mySubject_array){
    var myAndOriginal = [...origina_arr];// spread operator(...) to copy the array by value (deep copy / cloning)
    len_orig = origina_arr.length;// give array1 length
    len_myProd = mySubject_array.length;//

    let index = 0;
    for (var i=len_orig; i < (len_orig+len_myProd); i++){
        object_i = mySubject_array[index];
        myAndOriginal.push(object_i);
        index += 1;
    }
   return myAndOriginal;
}

var combinedArrays = addTwoArrays(orig_subject, orig_subject2);
console.log(combinedArrays);


//console.log(orig_subject);

