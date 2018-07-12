const markers = [];
let map = null;

function initMap() {
  map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 2.833292,
      lng: -60.677004
    }
  });

  const infoWindow = new google.maps.InfoWindow();

  const bounds = new google.maps.LatLngBounds();

  /**
    Loop through the array 'locations', from ./default_data/locations.js and
    create markers that will show by default, populating the markers array.
  */
  for (loc of viewModel.locations()) {
    const marker = new google.maps.Marker({
      position: {
        lat: loc.lat(),
        lng: loc.lng()
      },
      map: map,
      title: loc.place(),
      animation: google.maps.Animation.DROP
    })

    markers.push(marker);

    bounds.extend(marker.position);

    marker.addListener('click', () => {
      populateInfoWindow(marker, infoWindow, map);
    });
  }
  map.fitBounds(bounds);

  const zoomListener = google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
    if (this.getZoom()) {
      this.setZoom(17);
    }
  });

  setTimeout(function(){google.maps.event.removeListener(zoomListener)}, 2000);
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

function filterMarkers() {
  if (!map) {
    return;
  }

  for (marker of markers) {
    if (marker.map) {
      marker.setMap(null);
    }
  }

  for (loc of viewModel.filteredLocations()) {
    for (marker of markers) {
      if (marker.title === loc.place()) {
        marker.setMap(map);
      }
    }
  }

  map.fitBounds(bounds);
}
