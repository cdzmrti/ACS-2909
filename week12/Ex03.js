/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var map = null;

window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("Opps, no geolocation support");
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + " , Longitude: " + longitude;
    
    showMap(position.coords);
}

function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    
    var mapOptions = {
        zoom: 17,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

}
