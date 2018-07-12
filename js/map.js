function initMap() {
  const map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 2.833292,
      lng: -60.677004
    },
    zoom: 8
  });

  const markers = [];

  const infoWindow = new google.maps.InfoWindow();

  const bounds = new google.maps.LatLngBounds();

  /**
    Loop through the array 'locations', from ./default_data/locations.js and
    create markers that will show by default, populating the markers array.
  */
  for (loc of locations) {
    const marker = new google.maps.Marker({
      position: {
        lat: loc.lat,
        lng: loc.lng
      },
      map: map,
      title: loc.place,
      animation: google.maps.Animation.DROP
    })

    markers.push(marker);

    bounds.extend(marker.position);

    marker.addListener('click', () => {
      populateInfoWindow(marker, infoWindow, map);
    });
  }
  map.fitBounds(bounds);
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
