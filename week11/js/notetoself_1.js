
var stickyEl;

window.onload = function () {//Wait until DOM is loaded
    var button = document.getElementById("add_button");
    button.addEventListener('click', createSticky);// the parentheses are not needed. ~ create a sticky when we click
    //In fact if you added them the function would execute immediatelly and the return value of the function would be bound to the event.

    stickyEl = document.getElementById('stickies'); //stickies here is the ul

    var stickiesArray = getStickiesArray();

    for (var i = 0; i < stickiesArray.length; i++) {
        var obj = JSON.parse(stickiesArray[i]);
        //console.log(obj);
        addStickyToDOM(obj);
    }
};

function createSticky() {
    var currentDate = new Date();
    //the key here is created according to time
    var key = "sticky_" + currentDate.getTime();//evrytime u create a sticky it will be different coz it will be a diff time, a key needs to be unique so when it is retrieved u get the unique value for that key
    var value = document.getElementById("note_text").value; //value extracted from the textbox 

    var item = {stickyId: key, stickyValue: value};

    localStorage.setItem(key, JSON.stringify(item)); //item needs to be converted into a string
    addStickyToDOM(item); //once everything is ready, u add the sticky to DOM ~ need to show 
}

function addStickyToDOM(obj) { //item object
    //all stickies will be stored here
    var stickies = document.getElementById("stickies");//id of our ul (unordered list) ~ must access to make changes
    var sticky = document.createElement("li"); //this is just a single li element, a single sticky, evry sticky is an li
    var span = document.createElement("span"); //used in order to keep them in the same line ~ span is used for inline
    span.classList.add("sticky");//attach the css style
    span.innerHTML = obj.stickyValue; //want to put the value inside the innerHTML of span
    sticky.appendChild(span); //span is a child of sticky which is li
    sticky.addEventListener('click', function () { //once sticky is clicked, delete
        //only want to remove the specific sticky that is clicked
        localStorage.removeItem(obj.stickyId); //physically removes it from the localStorage
        sticky.parentNode.removeChild(sticky); //visually remoces it from the document
    });
    stickies.appendChild(sticky); //stickies is the ul, sticky(li) is a child of stickies (ul)
}


function getStickiesArray() { //this is responsible to load everything that is stored in the local storage, without this code it we will not see the content again when we reload the browser
    var stickiesArray = [];
    for (var x = 0; x < localStorage.length; x++) { //iterate through the localStorage
        var key = localStorage.key(x);
        console.log(key);

        if (key.indexOf('sticky') !== -1) { 
            stickiesArray.push(localStorage[key]);
        }
    }
    return stickiesArray;
}
