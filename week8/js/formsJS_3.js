
var nsProducts = []; 
var proposedProduct;
var n_shifts = 0;
var whole_new_Words;

function addItem() {
    let aProduct = document.getElementById("newItemtId").value; 
    nsProducts[nsProducts.length] = aProduct;
    let ol = document.getElementById("oListId");
    ol.innerHTML = "";

    for (let i = 0; i < nsProducts.length; i++) {
        var newLI = document.createElement("LI");
        ol.appendChild(newLI);
        newLI.innerHTML = nsProducts[i];
    }
    document.getElementById("newItemtId").value = "item"+(nsProducts.length+1);
}

function addItem_v2() {
    let aProduct = document.getElementById("newItemtId").value; 
    nsProducts[nsProducts.length] = aProduct;
    let ol = document.getElementById("oListId");

    var newLI = document.createElement("LI");
    ol.appendChild(newLI);
    newLI.innerHTML = aProduct;
   
    document.getElementById("newItemtId").value = "item"+(nsProducts.length+1);
}


function getRandom(){
   if (nsProducts.length !==0){
    let rndNum = Math.floor(Math.random() * nsProducts.length);// prefer to floor
    document.getElementById("RndNumber").value = rndNum;
    document.getElementById("RndItem").value = nsProducts[rndNum];
    document.getElementById("shiftRnd").value = nsProducts[rndNum];
   }
}

function getShift(){
    //ietm1 ====> 1item ===> m1ite  ===> em1it ===> etc   length = 5 
    let rndItem = document.getElementById("shiftRnd").value;
    let word = rndItem;
    len_word = word.length;
    let new_word = [];
    for (let i=0; i < word.length; i++){
        new_word[(i+1) % word.length] = word[i];
    }
    let str_new_word = new_word.join("");// creating a string out of array, separated by empty string
    document.getElementById("shiftRnd").value = str_new_word;
}


function resetAll(){
    document.getElementById("main_form").reset();
    let ol = document.getElementById("oListId");
    ol.innerHTML  = "";
    nsProducts=[];

}





























/*

function addItem_v2() {
    let aProduct = document.getElementById("newItemtId").value; //.innerHTML;
    nsProducts[nsProducts.length] = aProduct;
    let ol = document.getElementById("oListId");

    var newLI = document.createElement("li");
    ol.appendChild(newLI);
    newLI.innerHTML = aProduct;
    document.getElementById("newItemtId").value = "item"+(nsProducts.length+1);

}

function getRandom(){
    if (nsProducts.length !== 0) {
    let num = Math.floor(Math.random()* nsProducts.length);
    document.getElementById("randomNumber").value = num;
    document.getElementById("corRndItem").value = nsProducts[num];
    document.getElementById("shiftRndItem").value = nsProducts[num];
    }
}

// function randomProduct() picks a random Product from tha array 
// and presents on the page, in the area with id "randomProductId"


function getShift(){
    let itemToShift = document.getElementById("shiftRndItem").value;
    let split_arr = itemToShift.split(" ");// Array of words of itemToShift
    let word = split_arr[0];
    len_word = word.length;
    let new_word = [];
    for (let j = 0; j < len_word; j++) {
        new_word[(j + 1) % len_word] = word[j];// old word: item  new word: mite    // % len_word
    }
    str_new_word = new_word.join("");// creating a string out of array, separated by empty string
    document.getElementById("shiftRndItem").value = str_new_word;
}



function resetAll(){

    document.getElementById("main_form").reset(); 
    let ol = document.getElementById("oListId");
    ol.innerHTML = "";
    nsProducts = [];
}


*/


