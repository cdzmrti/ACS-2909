
let patt1 = /boo+(hoo+)+/i;// The i makes this regular expression case insensitive
console.log(patt1.test("Boohoooohoohooo")); // true

/* When a group does not end up being matched (ly in the next example), 
its position in the output will be undefined.  */
console.log("bad".match(/bad(ly)?/)); //[ 'bad', undefined, index: 0 ]

/*Similarly, when a group is matched multiple times, only the LAST match ends up in the array.*/
console.log("123".match(/(\d)+/)); // [ '123', '3', index: 0]
