  /* Testing for matches */
  var word = "I am a FSU student"; 
  var re = /fsu/i;// the i is for insensitive  
  if(word.match(re)) // match will return either null (false) or nonempy array (true)
    alert("Yes"); 
  else
    alert("No");
  
    // let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;// the date pattern
    // console.log(dateTime.test("11-10-2022 10:20"));// true
    // console.log(dateTime.test("10-nov-2022 10:20"));// false

    // let notBinary = /[^01]/;// Use a caret (^) character after the opening bracket to invert a set of characters
    // console.log(notBinary.test("1100100010100110")); // false
    // console.log(notBinary.test("1100100010200110")); // true

/* ˆ is the beginning (or start)

$ is the end

 */

// var patt = /^auto$/;
// console.log(patt.test("auto"));
// console.log(patt.test("automatic"));
// console.log("automatic".match(patt));
// var patt2 = /auto/;
// console.log(patt.test("That's our automobile, it's an BMW."));

/* \b defines the boundary of a word

\B defines no boundary*/

// var patt = /\Bco/;// try /\bco/
// console.log(patt.test("it is complex"));
// console.log(patt.test("Oncology is interesting"));

// console.log(/cat/.test("concatenation")); // true
// console.log(/\bcat\b/.test("concatenation")); // false
// console.log(/\Bcat\B/.test("concatenation")); // true






