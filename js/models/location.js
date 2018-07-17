export default class Location {
  constructor(ko, id, place, lat, lng, icon, category, address){
    this.id = id;
    this.place = ko.observable(place);
    this.lat = ko.observable(lat);
    this.lng = ko.observable(lng);
    this.selected = ko.observable(false);
    this.icon = ko.observable(icon);
    this.category = ko.observable(category);
    this.address = ko.observable(address)
    // This to decide on showing "add favorite"
    this.isHovering = ko.observable(false)
  }
}
