class Location {
  constructor(place, lat, lng){
    this.place = ko.observable(place);
    this.lat = ko.observable(lat);
    this.lng = ko.observable(lng);
    this.selected = ko.observable(false);
  }
}
