  function check(email) {
    if (email.match( /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/ )) {
       return true;     
   } 
    else {
       return false;
    }
  }
  
  var email = "yalmtawa@uwinnipeg.ca";

  if  (check(email) == false)
    alert ("Error: invlaid email address");
  else
    document.write("The email is valid. Continue .....");


  


