class ViewModel {
  constructor() {
    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(true);
    locations.forEach(l => {
      this.locations.push(new Location(l.place, l.lat, l.lng));
    })
  }

  /**
    Toggle side menu
  */
  toggleMenu() {
    this.menuToggle(!this.menuToggle());
  }
}
