const add = (function () {
	let counter = 0;
	return function () {
		counter += 1;
		return counter;
	};
})(); // self invocation function

add();
add();
console.log(add());
