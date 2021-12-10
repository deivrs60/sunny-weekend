// weather forecast call
var APIKey = "be713046da2f1520bb5a2702cd2e8948";
//  https://openweathermap.org/data/2.5/onecall?lon={lon}&lat={lat}...&exclude=minutely,hourly..&appid={apikey}


var sanFrancisco = {
    name: "San Francisco",
    latLong: { lat: 37.76, lng: -122.45 },
    temp: "",
};

let saltLakeCity = {
    name: "Salt Lake City",
    latLong: { lat: 40.77, lng: -111.92 },
    temp: ""
}

let sanAntonio = {
    name: "San Antonio",
    latLong: { lat: 29.46, lng: -98.57 },
    temp: ""
}

let newYork = {
    name: "New York City",
    latLong: { lat: 40.76, lng: -74.00 },
    temp: ""
}

let miami = {
    name: "Miami",
    latLong: { lat: 27.77, lng: -80.22 },
    temp: ""
}

let lasVegas = {
    name: "Las Vegas",
    latLong: { lat: 36.14, lng: -115.20 },
    temp: ""
}

let sixCities = [sanFrancisco, saltLakeCity, sanAntonio, newYork, miami, lasVegas]

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
    
  }
  
// input 
// accept click from map 
    // criteria:
    // accepted date 
    // accepted minimum temperature
    // modal (box on page?)


// weather 
    // cities into array -- 
        // name: San Francisco,
            // longitude: "",
            // latitude: "",
        // Salt Late City
        // San Antonio
        // New York
        // Miami 
        // Las Vegas 


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