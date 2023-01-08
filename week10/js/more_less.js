window.onload = function() {// wait untill DOM is completely loaded
    var textMore = "Read the whole essay";
    var textLess = "(Hide)";
    //get reference to the container that holds the on-demand text
    var whatToHide = document.getElementById("show-hide");
    var moreLess = document.getElementById("more-less");
    whatToHide.className = "hidden";
    moreLess.innerHTML = textMore;
    //moreLess.onclick = function() {
    moreLess.addEventListener("click",()=>{ //arrow function is equivalent to function(){
        if (moreLess.innerHTML === textMore) {
            moreLess.innerHTML = textLess;
            whatToHide.className = "visible";
        }
        else {
            moreLess.innerHTML = textMore;
            whatToHide.className = "hidden";
        }
    });

    };


    