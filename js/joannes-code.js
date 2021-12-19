var letsGoFormEl = $("#form")
var yourDateEl = $("#your-date")
var tempEl = $("#temp")

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

// C O P Y   S T A R T
// REWORK DOESN'T NEED EVENT..........
function getTemp(event) {
    event.preventDefault()
    var yourDateEl = $("#your-date").val()
// C O P I E D   P A R T   S T A R T
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
                            compareTemp(sixCities[i])
                        }
                    })
            }
        })
        console.log(sixCities[i])
    }
// C O P I E D   P A R T  E N D
    //set timeout
    //const myTimeout = setTimeout(updateCityCards, 500)
}

// C O P Y   E N D

// ?????????????
// NO NEED FOR IF STATEMENT
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
            compareTemp(sixCities[i])
        }
    }
}


// then populate temp value for sixCities array
// then compare temp values to input temp

// ?????????????
// THIS SHOWS AS RECOMMENDED ANY CARD WITH HIGHER TEMP THAN REQUIRED
function compareTemp(city) {
    // reference value of user's desired temp
    var userTemp = $("#temp").val()
    // show temp on the card
    // var $otherOptionsCard = $(".destinations-card")
    // console.log($otherOptionsCard)
    // if ($otherOptionsCard.data("name") === city.name) {
    //     $otherOptionsCard.find("h4").text(city.temp)
    // }
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

// ?????????????
// THIS CODE ONLY HAS CONSOLE.LOG'S
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
// input
// accept click from map
// criteria:
// accepted date
// set up calendar input?
// easier to offer dates?
// accepted minimum temperature
// modal (box on page?)


// ?????????????
// THIS CODE ONLY HAS A CONSOLE.LOG
var acceptFormData = function (formData) {
    formData.preventDefault();
    console.log(formData);
}

// weather
// get weather for each city on the specified date
// local storage
// what is stored / what does it look like?
// travel date / temperature (?) / current date of search (?)
// display all(?) data for user to compare / select
// highlight(?) recommended city?
// de-emphasize non-recommended
letsGoButtonEl.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log(evt);
    desiredTemp = evt.target.form[1].value;
    desiredDate.dateAsString = evt.target.form[0].value;
    desiredDate.dateWithHour = evt.target.form[0].valueAsDate;
    desiredDate.dateAsNumber = evt.target.form[0].valueAsNumber;
});


// ?????????????
// CALL getTemp from function above
letsGoFormEl.on("submit", getTemp)