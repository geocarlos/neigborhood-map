/**

  This file contains functions to handle data from Google Maps.
  Some functions are exported so that the viewModel may access them in order
  to interact with the map.

  */


const markers = {};
let map = null;
const center = {
  lat: 2.833292,
  lng: -60.677004
}

let infoWindow = null;

export function initMap() {
  console.log('LOAD MAP');
  map = new google.maps.Map(document.querySelector('#map'), {center: center});

  infoWindow = new google.maps.InfoWindow();

  const bounds = new google.maps.LatLngBounds();

  /**
    Loop through the array 'locations', from ./default_data/locations.js and
    create markers that will show by default, populating the markers array. */
  for (let loc of viewModel.locations()) {
    const marker = new google.maps.Marker({
      position: {
        lat: loc.lat(),
        lng: loc.lng()
      },
      map: map,
      title: loc.place(),
      animation: google.maps.Animation.DROP
    })

    markers[marker.title] = marker;

    bounds.extend(marker.position);

    marker.addListener('click', () => {
      populateInfoWindow(marker, infoWindow, map);
      selectMarker(marker.title);
    });
  }
  map.fitBounds(bounds);

  const zoomListener = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
    if (this.getZoom()) {
      this.setZoom(16);
    }
  });

  setTimeout(function() {
    google.maps.event.removeListener(zoomListener)
  }, 2000);
}

function populateInfoWindow(marker, infoWindow, map) {
  if (infoWindow.marker !== marker) {
    infoWindow.marker = marker;
    infoWindow.setContent('<div>' + marker.title + '</div>');
    infoWindow.open(map, marker);
    infoWindow.addListener('closeclick', () => {
      infoWindow.marker = null;
    });
  }
}

/**
  This function is designed in a way that when the users types in the input
  field, markers won't be blinking, what would happen if I turned all the
  markers map attributes to null and then set back the map only for those
  that match the filtered array provided by Knockout viewModel. */
export function filterMarkers() {
  if (!map) {
    return;
  }

  const locations = viewModel.filteredLocations();
  const locs = [];

  for (let loc of locations) {
    locs.push(loc.place());
    // Set map only if it is not set.
    if (!markers[loc.place()].map) {
      markers[loc.place()].setMap(map);
    }
  }

  for (let marker of Object.keys(markers)) {
    // Hide markers that do not match the filtered array.
    if (!locs.includes(marker)) {
      markers[marker].setMap(null)
    }
  }
}

export function selectMarker(location) {

  if (!map) {
    return;
  }

  for (let marker of Object.keys(markers)) {
    if (markers[marker].getAnimation()) {
      markers[marker].setAnimation(null)
    }
  }

  // Show infoWindow
  populateInfoWindow(markers[location], infoWindow, map);

  // Select location on list view
  const loc = viewModel.filteredLocations().filter((l) => {
    return l.place() === location;
  })[0];
  viewModel.selectLocation(loc);

  markers[location].setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(() => {
    markers[location].setAnimation(null);
  }, 1500)
}
