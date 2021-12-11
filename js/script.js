// weather forecast call
var APIKey = "be713046da2f1520bb5a2702cd2e8948";
//  https://openweathermap.org/data/2.5/onecall?lon={lon}&lat={lat}...&exclude=minutely,hourly..&appid={apikey}


var sanFrancisco = {
    name: "San Francisco",
    latLong: { lat: 37.76, lng: -122.45 },
    temp: "",
    distance: "",
};

let saltLakeCity = {
    name: "Salt Lake City",
    latLong: { lat: 40.77, lng: -111.92 },
    temp: "",
    distance: "",
}

let sanAntonio = {
    name: "San Antonio",
    latLong: { lat: 29.46, lng: -98.57 },
    temp: "",
    distance: "",
}

let newYork = {
    name: "New York City",
    latLong: { lat: 40.76, lng: -74.00 },
    temp: "",
    distance: "",
}

let miami = {
    name: "Miami",
    latLong: { lat: 27.77, lng: -80.22 },
    temp: "",
    distance: "",
}

let lasVegas = {
    name: "Las Vegas",
    latLong: { lat: 36.14, lng: -115.20 },
    temp: "",
    distance: "",
}

let sixCities = [sanFrancisco, saltLakeCity, sanAntonio, newYork, miami, lasVegas]

var startLocation = {
    latLong: { lat: "", lng: "" },
}

var cityIndexByDistanceArray = []
var cityIndexByTemperatureArray = []

function initMap() {
    const middle = { lat: 41, lng: -98 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: middle,
    });
  
    for ( i = 0 ; i < sixCities.length ; i++ ) {
        new google.maps.Marker({
          position: sixCities[i].latLong,
          map: map,
        });
    }      
    // This event listener calls addMarker() when the map is clicked.
    // google.maps.event.addListener(map, "click", (evt) => {
    //   addMarker(evt.latLng, map);
    // });
    // ~~~ keep this event listener, but turn it off after the user clicks the map
    
  }
  
// input 
// accept click from map 
    // criteria:
    // accepted date 
        // set up calendar input?
        // easier to offer dates?
    // accepted minimum temperature
    // modal (box on page?)


// weather 
    // get weather for each city on the specified date


// local storage
    // what is stored / what does it look like?
        // travel date / temperature (?) / current date of search (?)

// compare criteria to the weather
    // what's closest?
    // distance()
    // weather 

// display all(?) data for user to compare / select 
    // highlight(?) recommended city?
    // de-emphasize non-recommended 



// DAVID AND JOANNE: DOES THIS PROCESS MAKE SENSE FOR USER EXPERIENCE?
                    //user opens page
                    //step 1: enter current location, this brings up a modal for step 2
                    //step 2: enter date and minimum temperature desired
                    //webpage shows:
                        // - how many cities are forecasted to meet the weather criteria on the entered date
                        // - cities that meet the criteria in order of distance (cities that don't meet the criteria aren't shown; if no city meets the criteria, no cities are shown and user receives message "no cities meet your criteria on the date selected")
                        // - offer to run another query
