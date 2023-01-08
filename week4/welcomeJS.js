var name;
      //name = window.prompt("Please enter your name");
     // document.writeln("Welcome " + name + " to JavaScript!");
      /*window.alert("Welcome to JavaScript!");*/

      var num1; //var is variable
      var num2;
      var newNum1;
      var newNum2;

      /* alert only shows a message, diff from promtp */
      num1 = window.prompt("Please enter number 1"); //will do some kind of pop-up
      num2 = window.prompt("Please enter number 2"); //prompt i waiting for the user to put something
      newNum1 = parseInt(num1); //convert the entered string into integer
      newNum2 = parseInt(num2); //so num 1 and num 2 can be added together

      var total;
      total = newNum1 + newNum2; //here

      if (newNum1 == newNum2) //check if they are equal
          console.log("They are equal");
          else //if not, do this:
          console.log("They are not equal");

      console.log("The total =", total); //means that we want to write into the console
      document.writeln("The total =", total); //print this on a new line (similar to System.out.println)

      // ***console is different from the document***