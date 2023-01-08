
var nsProducts = ["Turmeric Curcumin", "Joint Exercise", "Vegan D", "Vegan K", "Well Balanced Diet", "Muscle Soreness Bundle"]; // sample Products to start with
var proposedProduct;

//**************************Part 1 **************************/

function addProduct() {
    // This function is implmented for you
    // reads the value from the newProductId field, 
    let aProduct = document.getElementById("newProductId").value; 
    nsProducts[nsProducts.length] = aProduct; // and adds it at the end of the nsProducts array
    listProducts(); // calls listProducts() to reflect the new <li> on the page

    var product = aProduct.split(" "); //Exercise A
    let plaintext_char = product[1]; //A
    let num_rotations = 1;
    let ascii_number = ((plaintext_char.charCodeAt() + num_rotations)- 65 )%26 + 65;
    let encoded_char = String.fromCharCode(ascii_number);
    document.getElementById("newProductId").value = product[0] + " " + encoded_char; 
}

function listProducts() {
    let menu = document.getElementById('productsId');
    menu.innerHTML = '';

    for (let i = 0; i < nsProducts.length; i++) {
        addItemToList(nsProducts[i]);
    }
}

function addItemToList(new_item) {
    //You should implment this function
    //function addItemToList() adds a new <li> with new_item to list it on the page
    let ul = document.getElementById("productsId");
    var newLI = document.createElement("li");
    ul.appendChild(newLI);
    newLI.innerHTML = new_item;
}

//**************************Part 2 **************************/

function randomProduct() {
    //You should implement this function
    // Rhis function dsipays a random product from nsProducts array in the corresponding textbox.
    var rand = Math.random();
    var index = Math.floor(rand*nsProducts.length);
    document.getElementById("randomProductId_txt").value = nsProducts[index].toUpperCase();
}

function encrypt() {
    //You should implement this function
    // function encrypt() iniitally gets the name of the randomely proposed product and encrypt it using 
    // Caesar Cipher based on a rotation number entered by the used.

    if(numRotationValidate(parseInt(document.getElementById("num_rotations").value))){ //validate number rotation
        var num_rotate = parseInt(document.getElementById("num_rotations").value);
    }

    if(proposedProdValidate(document.getElementById("randomProductId_txt").value)){ //validate proposed product
        var plaintext = (document.getElementById("randomProductId_txt").value).split("");
    }

    var ciphertxt_arr = [];
    for(let i = 0; i < plaintext.length; i++){
        var ascii_num = (plaintext[i].charCodeAt() + num_rotate)%128;
        ciphertxt_arr[i] = String.fromCharCode(ascii_num);
    }
    var ciphertxt = ciphertxt_arr.join("");
    console.log(ciphertxt);
    document.getElementById("encr_txt_CC").value = ciphertxt;
}

//resetting the second form
function resetFunc(){
    document.getElementById("Part2_forms").reset();
}

//validating number of rotations entered by user
function numRotationValidate(num) {
    if(num == "" || isNaN(num)){
        return alert("Error: Please enter a number of rotation.");
    } else {
        if(num < 0 || num > 20){
            return alert("Error: Rotation number must be in the range 0 - 20.");
        }
    }
    return true;
}

//validating the proposed product
function proposedProdValidate(randProd) {
    if(randProd == ""){
        return alert("Error: Please input the name of the product.");
    } else {
        if(randProd !== randProd.toUpperCase() || !(/^[A-Za-z\s]*$/.test(randProd))){
            return alert("Error: Name must only contain capital letters and spaces.")
        }
    }
    return true;
}
