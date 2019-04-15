    
var map;
function initialize(){
    var mapOptions = {
        zoom:12,
        center: {lat: 40.758904,lng:-73.985128}
    }; 
    map: new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
}
google.maps.event.addDomListener(window,'load',initialize);