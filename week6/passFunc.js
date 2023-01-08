function greet() {
	return "Hello";
}

// passing function greet() as a parameter
function shareGreet(user, func) {
	// accessing passed function
	const message = func();

	console.log(`${message} ${user}`);
	
}

shareGreet("Salah", greet);
shareGreet("Jack", greet);
shareGreet("Tarandeep", greet);
