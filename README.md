# sunny-weekend

The goal of 'Sunny Weekend!' was to create an application that allows people with busy schedules, or people who just want to travel more, to be able to search up one of the "closest" places with a temperature that they desired (preferably sunny), so that they can go out, explore, and enjoy their time travelling! 

## Made With
Our Sunny Weekend! application was made with a combination of the following:
 * HTML 
 * CSS
 * Materialize CSS
 * Google Maps API
 * Weather API
 * Javascript


## How It Works:
Theoretically, in a perfectly developed application it would work like this:

1. You click on any location on the interactive map, and it would immediately calculate the distance between that location, and the hard-coded points on our map, which would be our list of cities: San Francisco, Las Vegas, Salt Lake City, San Antonio, New York, and Miami. 
2. That would prompt the second part of the page to come up: choosing a travel date (nothing in the past, and only within 5 days.), and entering a desired temperature. 
3. Once those have been entered, the form collects the data and organizes the cards for each of the cities, giving:
  1) A recommended destination that's based on both 
      a) distance from the inputted location
      b) a temperature that matches or is near the desired temperature that was entered.
  2) A list of the other options of cities
  3) With each card image redirecting to a website with a list of "must-do's" for that certain destination, if clicked. 

## Known Roadblocks / Bugs 
As we worked through the project, we encountered several roadblocks.
Most obviously when you try to proceed with using the application: 
The process is not appearing step by step, instead you can see the entire website from the get-go.
The cards are hard-coded onto the page, so they do not load/display as if reorganized. We could not get the city's information to display onto the cards with JS. 
However, it works properly if you check the console log!

