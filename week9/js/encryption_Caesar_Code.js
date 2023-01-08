let plaintext_char = "A";
let ascii_number = plaintext_char.charCodeAt();
let ascii_char = String.fromCharCode(80);
console.log(ascii_number);// 65
console.log(ascii_char);//"P"



let num_rotations = 10;
let encoded_char = String.fromCharCodeNumber(plaintext_char.charCodeAt() + num_rotations ) % 128;
console.log(encoded_char);
