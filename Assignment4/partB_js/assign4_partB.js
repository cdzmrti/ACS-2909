window.onload=function(){
    var button = document.getElementById("add_button");
    var stickies = document.getElementById("stickies");

    button.addEventListener("click", ()=>{
        stickies.innerHTML = ""; //clear ul

        var xhr = new XMLHttpRequest();
        xhr.open('GET', './partB_json/data.json');
        xhr.onload = function() {
            var dataStored = JSON.parse(xhr.responseText);
            process(dataStored);
        };
        xhr.send();
    });

    var del_button = document.getElementById("del_button");
    del_button.addEventListener("click", function(){
        stickies.innerHTML = "";
    });
}

function process(myObject){
    var objCopy = myObject;
    for(var key in objCopy){ //iterate over properties
        var color = objCopy[key].color;
        if(key !== "color"){
            createSticky(key + " (" + objCopy[key].year + ")<br>" + objCopy[key].title +".<br> <br>", color);
        }
    }
}

function createSticky(txt, colour){
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var value = txt;
    var col = colour;
    
    var item = {stickyId: key, stickyValue: value, color: col};;
    addNoteToDOM(item);
}

function addNoteToDOM(obj){
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.style.backgroundColor = obj.color;

    var span = document.createElement("span");
    span.innerHTML = obj.stickyValue;
    sticky.appendChild(span);
    sticky.addEventListener('click', function() {
        sticky.parentNode.removeChild(sticky);
    });
    stickies.appendChild(sticky);
}