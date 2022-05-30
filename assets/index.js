// https://www.youtube.com/watch?v=c3MjU9E9buQ
// https://codepen.io/NickMcBurney/pen/KyzQKp?editors=1010
let Autocomplete;

// set api options to restrict search area to UK.
var options = {
	componentRestrictions: { country: "jm" }
};

function initAutocomplete() {

    // Create the autocomplete object, restricting the search to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
		(document.getElementById("pick-up")), options
    );
    // https://stackoverflow.com/questions/40403251/getting-uncaught-referenceerror-google-is-not-defined-error-using-google-maps
}


// *********************
// This Code is for only the floating card in right bottom corner
// **********************

/* Overlapping Layout With CSS Flex Box
https://www.youtube.com/watch?v=_HTL0XSMcRQ&list=PL3CQ2dylu_2zkP_YtHhe8e5wcpiSS_yH5&index=136&t=17s
https://codepen.io/Web_Cifar/pen/dyXNVep
https://codepen.io/FlorinPop17/pen/OJJKQeK
*/


const pickup = document.querySelector("#pick-up");
const automatic_current_location_container = document.querySelector("#automatic-current-location-container");
const close = automatic_current_location_container.querySelector(".close");

pickup.addEventListener("click", () => {
    automatic_current_location_container.classList.add("active");
});

close.addEventListener("click", () => {
    automatic_current_location_container.classList.remove("active");
});

//Map Logic - Geolocation

var marker; var infowindow; // var map;

function initMap() {
//  var map = new google.maps.Map(document.getElementById('map'), {
//    mapTypeControl: false,
//    center: {lat: 18.4983, lng: -77.8715}
//  });

 infoWindow = new google.maps.InfoWindow;
       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,lng: position.coords.longitude
                     };
           reverseGeoCode(position.coords.latitude, position.coords.longitude);//https://stackoverflow.com/questions/27552653/get-address-out-of-a-reverse-geocoded-callback
         }, function() {
         //    handleLocationError(true, infoWindow, map.getCenter());
        console.log("An error has occured.");
         });
       } else {
         // Browser doesn't support Geolocation
        //  handleLocationError(false, infoWindow, map.getCenter());
        console.log("Browser doesn't support geolocation.");
       }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
        }

    function reverseGeoCode(lat, lng) {


        geocoder = new google.maps.Geocoder();

        //Customer Current Location
        var infowindow = new google.maps.InfoWindow();
        var latlng = new google.maps.LatLng(lat, lng);
        //Customer Current Location    

        //Customer--------------------------------------------------------------------------------------------------------
        geocoder.geocode({'latLng': latlng}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {

                    console.log(results[1].formatted_address);
                    alert(results[1].formatted_address);

                    // https://stackoverflow.com/questions/5457739/change-value-of-input-onchange
                    // https://stackoverflow.com/questions/7609130/set-the-value-of-an-input-field
                    var string_address = results[1].formatted_address;
                    pickup.value = string_address;


                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }

        });
        //Customer--------------------------------------------------------------------------------------------------------

    }
}


const automatic_current_location_button = document.querySelector("#automatic-current-location");

https://stackoverflow.com/questions/49451186/how-to-disable-a-div-after-only-one-click-in-javascript-without-disabling-click

automatic_current_location_button.addEventListener('click', handler);

function handler(e) {

       initMap();

       automatic_current_location_button.removeEventListener('click', handler);
  
}


