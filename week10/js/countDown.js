// Wait until the document has been loaded before modifying counterUpdate.
// i.e., the DOM is ready 
window.onload = function() {
    var counterUpdate = function() {// event handler
    var now = new Date();
    var examTime = new Date(Date.UTC(2022, 11, 22, 9));
    //Date.UTC(year, month, day, hours, minutes, seconds, millisec)
    //Date.UTC() is a static method of the Date object.
    var millis;
    var seconds;
    var outputTxt = "";
    var counter = document.getElementById("counter");
    if (examTime.getTime() > now.getTime()) {
        millis = examTime.getTime() - now.getTime();
        seconds = Math.floor(millis / 1000);
        outputTxt += Math.floor(seconds / 86400) + " days, ";

        seconds = seconds % 86400;
        outputTxt += Math.floor(seconds / 3600) + " hours, ";

        seconds = seconds % 3600;
        outputTxt += Math.floor(seconds / 60) + " minutes, ";
        outputTxt += Math.floor(seconds % 60) + " seconds.";
    }
    else {
        outputTxt = "0 seconds."
    }
    counter.innerHTML = outputTxt;
    };

    setInterval(counterUpdate, 1000);// update the counter every 1000 ms = 1 sec using a callback of updateCounter() event handler
    //seetInterval() is a callback function
}
