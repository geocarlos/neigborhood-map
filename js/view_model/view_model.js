import {locations} from '../default_data/locations';
import Location from '../models/location';
// import ko from '/bower_components/knockout/dist/knockout';

export default class ViewModel {

  constructor(ko, _map) {

    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(true);
    this.locationFilter = ko.observable('');
    this._map = _map;
    this.api_url = `https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyBZsbMUm9vj6GQrYRRl9QxMrA-n7V68Dag&callback=${_map.initMap}`

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
