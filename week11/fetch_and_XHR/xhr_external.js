window.onload = function () {
	var button = document.getElementById("add_button");
	var notePaper = document.getElementById("notePaper");

	button.addEventListener("click", function () {
		notePaper.innerHTML = ""; // clear the ul
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://127.0.0.1:5501/assignment4.json");
		xhr.onload = function () {
			var dataStored = JSON.parse(xhr.responseText);
			process(dataStored);
		};
		xhr.send();
	});

	var del_button = document.getElementById("del_button");
	del_button.addEventListener("click", function () {
		notePaper.innerHTML = "";
	});
};

function process(myObject) {
	var objCopy = myObject;

	for (const obj of objCopy) {
		//iterate over the objects
		var txt = "";
		for (const key in obj) {
			//iterate over the properties
			if (key !== "Botanical Name") txt += key + ": " + obj[key] + "<br> <br>";
		} //inner for loop
		createNote(txt);
	} // outer for loop
}

function createNote(txt) {
	var currentDate = new Date();
	var key = "sticky_" + currentDate.getTime();
	var value = txt; //document.getElementById("note_text").value;

	var item = { stickyId: key, stickyValue: value };
	addNoteToDOM(item);
}

function addNoteToDOM(obj) {
	var notePaper = document.getElementById("notePaper");
	var sticky = document.createElement("li");
	var span = document.createElement("span");
	//span.classList.add("sticky");
	span.innerHTML = obj.stickyValue;
	sticky.appendChild(span);
	sticky.addEventListener("click", function () {
		sticky.parentNode.removeChild(sticky);
	});
	notePaper.appendChild(sticky);
}
