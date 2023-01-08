/*
function validateName(name)
{
    let namePattern= /[/.'\w]+/;
    return p = namePattern.test(name);
}
let nameToMatch = "-  -";
console.log(`her we go ${validateName(nameToMatch)}`);
*/
/*
function validateEmail(address)
{
    let emailPattern= /\w+([\.-]?\w+)+@\w+([\.-]+\w+)+(\.\w{2,3})/;
    return p = emailPattern.test(address);
    //return p = address.search(emailPattern);

}
let eAddressToMatch = "M.salah.salah@1.lvc.uk";
console.log(`her we go ${validateEmail(eAddressToMatch)}`);
*/
/*
function validatePhone(phone)
{
    var phonePattern1 = /^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/;
    //var phonePattern2 = /\d{3}[-\s]{0,1}\d{4}/;
    //var p1, p2 = false;
    var p1 = phonePattern1.test(phone);
    //p2 = phonePattern2.test(phone);

    return p1; //|| p2;
}
*/
function validatePhone(phone)
{
    var phonePattern1 = /188[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}/;
    return phonePattern1.test(phone);
}

let phoneToMatch = "182 422 0583";
console.log(`her we go ${validatePhone(phoneToMatch)}`);


//let validNumber = /(\d{3}[-\s]{0,1}){0,1}\d{3}[-\s]{0,1}\d{4}/;
/*
let validNumber = /^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/;

numbers = ["902 420 57594", "902420-5798", "902-4205798", "902420 5798", "902420-5798", "9024205798", "902-420 5798", "902-420-5798", 
"902-4205798", "420 5798", "420-5798", "4205798"];
for (var i=0; i < numbers.length; i++){
    console.log(validNumber.test(numbers[i]));
}
*/