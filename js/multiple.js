// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
  const middle = { lat: 41, lng: -98 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: middle,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (evt) => {
    addMarker(evt.latLng, map);
  });
  
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}