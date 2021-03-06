// SR: I commented these out because they were throwing an error which was causing the map to not load properly
var letsGoFormEl = document.getElementById("form")
var yourDateEl = $("#your-date")
var tempEl = $("#temp")
var letsGoButtonEl = document.getElementById("lets-go-btn")
var recommendedTemp = 0



var sanFrancisco = {
    name: "San Francisco",
    latLong: { lat: 37.76, lng: -122.45 },
    temp: "",
    distance: "",
    imageSrc: "images/sanfrancisco.jpeg",
    imageAlt: "San Francisco, California"
};

let saltLakeCity = {
    name: "Salt Lake City",
    latLong: { lat: 40.77, lng: -111.92 },
    temp: "",
    distance: "",
    imageSrc: "images/saltlakecity.jpeg",
    imageAlt: "Salt Lake City, Utah"
}

let sanAntonio = {
    name: "San Antonio",
    latLong: { lat: 29.46, lng: -98.57 },
    temp: "",
    distance: "",
    imageSrc: "images/sanantonio.jpeg",
    imageAlt: "San Antonio, Texas"
}

let newYork = {
    name: "New York City",
    latLong: { lat: 40.76, lng: -74.00 },
    temp: "",
    distance: "",
    imageSrc: "images/newyork.jpeg",
    imageAlt: "New York, New York"
}

let miami = {
    name: "Miami",
    latLong: { lat: 25.77, lng: -80.26 },
    temp: "",
    distance: "",
    imageSrc: "images/miami.jpeg",
    imageAlt: "Miami, Florida"
}

let lasVegas = {
    name: "Las Vegas",
    latLong: { lat: 36.14, lng: -115.20 },
    temp: "",
    distance: "",
    imageSrc: "images/lasvegas.jpeg",
    imageAlt: "Las Vegas, Nevada"
}

var sixCities = [sanFrancisco, saltLakeCity, sanAntonio, newYork, miami, lasVegas]

var startLocation = {
    latLong: { lat: "", lng: "" },
}
var desiredTemp = "";
var desiredDate = {
    dateAsString: "",
    dateWithHour: "",
    dateAsNumber: "",
};
var cityIndexByDistanceArray = [];
var cityIndexByTemperatureArray = [];


// put code in a function, on click, grab the input and run the function
// weather forecast call to get 8-day forecast for sixCities array
var APIKey = "be713046da2f1520bb5a2702cd2e8948";
function getTemp(event) {
    event.preventDefault()
    console.log('being clicked')
    var yourDateEl = $("#your-date").val()
    var yourDateFormat = moment(yourDateEl).format("MMM D, YYYY")

    for (var i = 0; i < sixCities.length; i++) {
        var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + sixCities[i].name + "&appid=" + APIKey;
        fetch(forecast).then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        cityIndexByTemperatureArray.push(data)

                        //loop thru day1 to day 5 of forecast
                        for (var i = 0; i < 5; i++) {
                            //date

                            var forecastDay = data.list[i * 8]  //data given in 3hrs,multiply by 8 to get 24 hrs
                            var date = new Date(parseInt(forecastDay.dt) * 1000)
                            var formatDate = moment(date).format("MMM D, YYYY")
                            //console.log(forecastDay.dt, "forecastDay" + i, date, formatDate)
                            if (yourDateFormat == formatDate) {
                                //temp
                                var temp = Math.round((forecastDay.main.temp - 273.15) * 1.80 + 32);

                                // populate temp in sixCities array
                                sixCities[i].temp = temp

                                console.log(temp, sixCities[i])
                            }
                            //compareTemp(sixCities[i], temp)


                        }

                    })
            }
        })

        console.log(sixCities[i], temp)



    }
    //set timeout
    //const myTimeout = setTimeout(updateCityCards, 500)
}

function updateCityCards() {

    for (var data of cityIndexByTemperatureArray) {
        //loop thru day1 to day 5 of forecast
        for (var i = 0; i < 5; i++) {
            //date

            var forecastDay = data.list[i * 8]  //data given in 3hrs,multiply by 8 to get 24 hrs
            var date = new Date(parseInt(forecastDay.dt) * 1000)
            var formatDate = moment(date).format("MMM D, YYYY")
            //console.log(forecastDay.dt, "forecastDay" + i, date, formatDate)
            if (yourDateFormat == formatDate) {
                //temp
                var temp = Math.round((forecastDay.main.temp - 273.15) * 1.80 + 32);

                // populate temp in sixCities array
                sixCities[i].temp = temp

                console.log(temp, sixCities[i])
            }
            compareTemp(sixCities[i], temp)


        }
    }

}


// then compare temp values to input temp
function compareTemp(city, temp) {
    console.log('here')
    //var temp = Math.round((forecastDay.main.temp - 273.15) * 1.80 + 32);
    // reference value of user's desired temp
    var userTemp = $("#temp").val()
    // show temp on the card
    //var $otherOptionsCard = $(".destinations-card")
    //console.log($otherOptionsCard)
    //if ($otherOptionsCard.data("name") === city.name) {
    // $otherOptionsCard.find("h4").text(city.temp)



    // compare desired temp to actual city temp
    if (temp > userTemp) {
        var $recommendedCard = $("#recommended-destination")
        // add the city info to the recommended card
        $recommendedCard.find("h3").text(city.name)
        $recommendedCard.find("img").attr({ "src": city.imageSrc, "alt": city.imageAlt })
        $recommendedCard.find("h4").text(city.temp)
        console.log("city", "temp")

    }
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


function initMap() {
    const middle = { lat: 41, lng: -98 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
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
        console.log(evt.latLng);
        console.log(evt.latLng.lat());
        startLocation.latLong.lat = evt.latLng.lat();
        console.log(evt.latLng.lng());
        startLocation.latLong.lng = evt.latLng.lng();
        console.log(startLocation);
        getDistance2();
    });
    // ~~~ keep this event listener, but turn it off after the user clicks the map
}

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    console.log(location);
    new google.maps.Marker({
        position: location,
        label: "U",
        map: map,
    });
}

var getDistance2 = function () {
    // initialize services
    // const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();

    // build request
    var originLocationsArray = [];
    var destinationLocationsArray = [];
    destinationLocationsArray[0] = startLocation.latLong;
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


var acceptFormData = function (formData) {
    formData.preventDefault();
    console.log(formData);
}


letsGoFormEl.addEventListener("submit", getTemp)

//letsGoButtonEl.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     console.log(evt);
//     desiredTemp = evt.target.form[1].value;
//     desiredDate.dateAsString = evt.target.form[0].value;
//     desiredDate.dateWithHour = evt.target.form[0].valueAsDate;
//     desiredDate.dateAsNumber = evt.target.form[0].valueAsNumber;
// });



