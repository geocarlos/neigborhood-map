class ViewModel{
  constructor(){
      this.locations = ko.observableArray([]);
      locations.forEach(l => {
        this.locations.push(new Location(l.place, l.lat, l.lng));
      })
  }
}
