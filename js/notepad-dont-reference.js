var assignDistance = function(start, city) {
    // determine distance
    var distance = GoogleDistanceFunction(start.latLong, city.latLong);
    // assign to city array
    city.distance = distance;
};

var fillInDistances = function() {
    for ( i = 0 ; i < sixCities.length ; i++ ) {
        assignDistance( startLocation, sixCities[i] )
    };
};


// D I S T A N C E

var orderCityIndexByDistance = function() {
    // use array function on sixCities.distance to place the appropriate sixCities index into the
    cityIndexByDistanceArray
    // that this array looks something like [3,5,0,1,4,2], where in this example 3 is closest and 2 is farthest
};

// calling the information of the cities in order of distance will look like:

var callInformationInDistanceOrder = function() {
    for ( i = 0 ; i < cityIndexByDistanceArray.length ; i++ ) {
        // the following could be assigned to a global variable or returned 
        sixCities[i].<whatever>
        
    };
}

// T E M P E R A T U R E

var orderCityIndexByTemp = function() {
    // use array function on sixCities.temp to place the appropriate sixCities index into the
    cityIndexByTemperatureArray
    // that this array looks something like [3,5,0,1,4,2], where in this example 3 is warmest and 2 is coldest
};

// calling the information of the cities in order of temperature will look like:

var callInformationInTemperatureOrder = function() {
    for ( i = 0 ; i < cityIndexByTemperatureArray.length ; i++ ) {
        // the following could be assigned to a global variable or returned 
        sixCities[i].<whatever>
        
    };
}

// O T H E R   S O R T I N G

var numberOfCitiesThatMeetTemperatureCriteria = function() {
    // use array function on sixCities.temp to return number of cities 
        // ?? or indices of cities in temperature order
}

// call just cities that meet temp criteria
var callInformationInTemperatureOrder = function() {
    let numCities = numberOfCitiesThatMeetTemperatureCriteria();
    for ( i = 0 ; i < numCities ; i++ ) {
        // the following could be assigned to a global variable or returned 
        sixCities[i].<whatever>
        
    };
}