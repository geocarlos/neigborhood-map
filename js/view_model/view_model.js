class ViewModel {
  constructor() {

    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(true);
    this.locationFilter = ko.observable('');

    /**
      Turn the simple locations array into an observableArray
    */
    locations.forEach(l => {
      this.locations.push(new Location(l.place, l.lat, l.lng));
    })

    /**
      Filter array based on the textInput
    */
    this.filteredLocations = ko.computed(()=>{
      return this.locations().filter((l)=>{
        return l.place().toLowerCase().indexOf(this.locationFilter().toLowerCase()) >= 0;
      });
    }, this);
  }

  /**
    Toggle side menu
  */
  toggleMenu() {
    this.menuToggle(!this.menuToggle());
  }
}
