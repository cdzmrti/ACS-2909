 /* Loops: for and while */
                     //while (condition) {
                        // code
                        // so-called "loop body"
                     // }
    var i = 0;
    while (i < 3) { // shows 0, then 1, then 2
        console.log( i );
        i++; // like i = i +1
    }

   // do while loop
    var i = 0;
    do{ // shows 0, then 1, then 2
        console.log( i );
        i++; // like i = i +1
    } while (i < 3) ;

    // for loop
    //for (begin; condition; step) {
        // ... loop body ...
    //  }

    for (var i = 0; i < 3; i++) { // shows 0, then 1, then 2
        console.log( i );
      }