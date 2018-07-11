function initMap(){
  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 16,
    center: {lat: 2.833292, lng: -60.677004}
  });

  const markers = [];

  /**
    Loop through the array 'locations', from ./default_data/locations.js and
    create markers that will show by default, populating the markers array.
  */
  for(loc of locations){
    markers.push(new google.maps.Marker({
      position: {lat: loc.lat, lng: loc.lng},
      map: map,
      title: loc.place
    }))
  }
}
