
var stickyEl;

window.onload = function () {
    var  rmv_button = document.getElementById("remove_button");
    rmv_button.addEventListener('click', removeList);

    var clr_button = document.getElementById("clear_button");
    clr_button.addEventListener('click', clearLocalStorage);

    var button = document.getElementById("add_button");
    button.addEventListener('click', createSticky);// the parentheses are not needed. 
    //In fact if you added them the function would execute immediatelly and the return value of the function would be bound to the event.

    stickyEl = document.getElementById('stickies');

    var stickiesArray = getStickiesArray();

    for (var i = 0; i < stickiesArray.length; i++) {
        var obj = JSON.parse(stickiesArray[i]);
        console.log(obj);
        //var value = localStorage[key];
        addStickyToDOM(obj);
    }
};

function createSticky() {
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var value = document.getElementById("note_text").value;

    var colorSelectObj = document.getElementById("note_color");
    var index = colorSelectObj.selectedIndex;
    var color = colorSelectObj[index].value;

    var item = {"stickyId": key, "stickyValue": value, "color": color};

    localStorage.setItem(key, JSON.stringify(item));
    addStickyToDOM(item);
}

function addStickyToDOM(obj) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.style.backgroundColor = obj.color;

    var span = document.createElement("span");
    span.classList.add("sticky");//attach the css style
    span.innerHTML = obj.stickyValue;
    sticky.appendChild(span);
    sticky.addEventListener('click', function () {
        localStorage.removeItem(obj.stickyId);
        sticky.parentNode.removeChild(sticky);
    });
    stickies.appendChild(sticky);
}


function getStickiesArray() {
    var stickiesArray = [];
    for (var x = 0; x < localStorage.length; x++) {
        var key = localStorage.key(x);
        console.log(key);


        if (key.indexOf('sticky') !== -1) {
            stickiesArray.push(localStorage[key]);
        }
    }
    return stickiesArray;
}

function clearLocalStorage() {
    localStorage.clear();
}

function removeList() {
    var stickies = document.getElementById("stickies");
    stickies.innerHTML="";
}
