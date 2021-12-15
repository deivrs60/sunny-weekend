// SR: I commented these out because they were throwing an error which was causing the map to not load properly
//var letsGoBtnEl = $("#lets-go-btn")
//var yourCityEl = $("#your-city")
//var yourDateEl = $("#your-date")
//var tempEl = $("#temp")




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
    latLong: { lat: 25.77, lng: -80.26 },
    temp: "",
    distance: "",
}

let lasVegas = {
    name: "Las Vegas",
    latLong: { lat: 36.14, lng: -115.20 },
    temp: "",
    distance: "",
}

var sixCities = [sanFrancisco, saltLakeCity, sanAntonio, newYork, miami, lasVegas]

// weather forecast call to get 8-day forecast for sixCities array
var APIKey = "be713046da2f1520bb5a2702cd2e8948";
for (var i = 0; i < sixCities.length; i++) {
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + sixCities[i].name + "&appid=" + APIKey;
    fetch(forecast).then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (data) {
                    console.log(data)
                    //loop thru day1 to day 8 of forecast
                    for (var i = 0; i < 5; i++) {
                        //date
                        var forecastDay = data.list[i * 8]  //data given in 3hrs,multiply by 8 to get 24 hrs
                        var date = new Date(parseInt(forecastDay.dt) * 1000)
                        var formatDate = moment(date).format("MMM D, YYYY")
                        console.log(forecastDay.dt, "forecastDay" + i, date, formatDate)

                        //temp
                        var temp = Math.round((forecastDay.main.temp - 273.15) * 1.80 + 32);
                        console.log(temp)

                    }
                })
        }
    })

}

// compare criteria to the weather
//1. what's closest? yourCityEl input compared to sixCities array which contains lon/lat info
// get a diff API call to get distance and then sort closest to furthest
function getDistance(yourCityEl) {

    // query url to make the API call 
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + yourCityEl + "&appid=" + APIKey;

    // make a get request to url
    fetch(queryURL)
        .then(function (response) {
            //request successful
            if (response.ok) {

                response.json().then(function (data) {
                    //console.log(data)
                    // get date using moment js
                    var date = moment().format(" MM/DD/YYYY");
                    console.log(date)

                    // temp in degreeF
                    var temp = Math.round((data.main.temp - 273.15) * 1.80 + 32);
                    console.log(temp)

                    // lat and lon
                    var lat = data.coord.lat;
                    var lon = data.coord.lon;
                    console.log(lat, lon)
                })
            }

        })



}

//2. weather criteria > 80degrees
// function to see if temp in each city is greater than 80, if yes, have different background or some marker



var startLocation = {
    latLong: { lat: "", lng: "" },
}

var cityIndexByDistanceArray = []
var cityIndexByTemperatureArray = []

function initMap() {
    const middle = { lat: 41, lng: -98 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: middle,
    });

    for (i = 0; i < sixCities.length; i++) {
        new google.maps.Marker({
            position: sixCities[i].latLong,
            map: map,
        });
    }
    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, "click", (evt) => {
        addMarker(evt.latLng, map);
    });
    // ~~~ keep this event listener, but turn it off after the user clicks the map


}

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    new google.maps.Marker({
        position: location,
        label: "A",
        map: map,
    });
}

var getDistance2 = function () {
    // initialize services
    // const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();

    // build request
    const chicagoString = "Chicago, Illinois";
    var originLocationsArray = [];
    var destinationLocationsArray = [];
    destinationLocationsArray[0] = chicagoString;
    for (i = 0; i < sixCities.length; i++) {
        originLocationsArray[i] = sixCities[i].latLong;
        // destinationLocationsArray[i] = chicagoString;
    }
    console.log(originLocationsArray);
    const request = {
        origins: originLocationsArray,
        destinations: destinationLocationsArray,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    };

    // get distance matrix response
    service.getDistanceMatrix(request).then((response) => {
        // put response
        console.log(JSON.stringify(
            response,
            null,
            2
        ));
        console.log(response);
        var receivedDistanceInformation = response;
        console.log(receivedDistanceInformation);
        for (i = 0; i < sixCities.length; i++) {
            sixCities[0].distance = receivedDistanceInformation.rows[i].elements[0].distance;
        }
    })
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