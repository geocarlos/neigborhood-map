import {locations} from '../default_data/locations';
import Location from '../models/location';
// import ko from '/bower_components/knockout/dist/knockout';

export default class ViewModel {
  constructor(ko) {

    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(true);
    this.locationFilter = ko.observable('');

    /**
      Turn the simple locations array into an observableArray
    */
    locations.forEach(l => {
      this.locations.push(new Location(ko, l.place, l.lat, l.lng));
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

  /**
    Select loation on the list view.
  */
  selectLocation(location){
    for(let loc of this.filteredLocations()){
      loc.selected(false);
    }
    location.selected(true);
  }
}
