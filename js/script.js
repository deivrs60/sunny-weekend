var letsGoBtnEl = $("#lets-go-btn")
var yourCityEl = $("#your-city")
var yourDateEl = $("#your-date")
var tempEl = $("#temp")




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

// weather forecast call to get 8-day forecast for sixCities array
var APIKey = "be713046da2f1520bb5a2702cd2e8948";
for (var i = 0; i < sixCities.length; i++) {
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + sixCities[i] + "&appid=" + APIKey;
    fetch(forecast).then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (data) {
                    //console.log(data)
                    //loop thru day1 to day 8 of forecast
                    for (var i = 0; i < 7; i++) {
                        //date
                        var forecastDay = data.list[i * 8]  //data given in 3hrs,multiply by 8 to get 24 hrs
                        var date = new Date(parseInt(forecastDay.dt) * 1000)
                        var formatDate = moment(date).format("MMM D, YYYY")
                        console.log(forecastDay.dt, "forecastDay" + i, date, formatDate)

                        //temp
                        var temp = Math.round((forecastDay.main.temp - 273.15) * 1.80 + 32);

                    }
                })
        }
    })

}

// compare criteria to the weather
    //1. what's closest? yourCity input compared to sixCities array which contains lon/lat info
    // get a diff API to get distance and then sort closest to furthest


    //2. weather criteria > 80degrees
    // function to see if temp in each city is greater than 80, if yes, have different background




// input 
// accept click from map 
    // criteria:
    // accepted date 
    // accepted minimum temperature
    // modal (box on page?)





// local storage
    // what is stored / what does it look like?
        // travel date / temperature (?) / current date of search (?)



// display all(?) data for user to compare / select 
    // highlight(?) recommended city?
    // de-emphasize non-recommended 