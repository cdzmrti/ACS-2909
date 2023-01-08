/* Date Object and relational operators */

var now = new Date(); // current date and time
var hour = now.getHours(); // current hour (0-23)

// determine whether it's morning
if (hour < 12) console.log("Good Morning, ");
// determine whether the time is PM
if (hour >= 12) {
	// convert to a 12-hour clock
	hour = hour - 12;
	// determine whether it is before 6 PM
	if (hour < 6) console.log("Good Afternoon, ");
	// determine whether it is after 6 PM
	if (hour >= 6) console.log("Good Evening, ");
} // end if

/* Equality (=) (==) (===) (!=) (!==)*/

if ("15" == 15)
	// implicit conversion
	console.log("the are equal");
else console.log("they are not equal!");

if ("15" === 15) console.log("the are equal");
else console.log("they are not equal!");

/* The switch Construct */
var month = "10"; // values 1-12
var monthName;
switch (month) {
	case "1":
		monthName = "January";
	case "2":
	case "3":
	case "4":
	case "5":
		monthName = "May";
		break;
	case "6":
	case "7":
		monthName = "July";
		break;
	case "8":
	case "9":
	case "10":
		monthName = "October";
		break;
	case "11":
	case "12":
		monthName = "January";
		break;
	default:
		alert("Your month entry should be between 1-12!");
}

console.log("Month Name = ", monthName);
