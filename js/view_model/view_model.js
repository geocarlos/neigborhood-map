import {locations} from '../default_data/locations';
import Location from '../models/location';
import * as _map from '../google_api/map';
import {API_KEY} from '../google_api/API_KEY';

export default class ViewModel {

  constructor(ko) {

    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(true);
    this.locationFilter = ko.observable('');
    this._map = _map;

    /**
      Turn the simple locations array into an observableArray */
    locations.forEach(l => {
      this.locations.push(new Location(ko, l.place, l.lat, l.lng));
    })

    /**
      Filter array based on the textInput */
    this.filteredLocations = ko.computed(()=>{
      return this.locations().filter((l)=>{
        return l.place().toLowerCase().indexOf(this.locationFilter().toLowerCase()) >= 0;
      });
    }, this);
  }

  /**
    Toggle side menu */
  toggleMenu() {
    this.menuToggle(!this.menuToggle());
  }

  /**
    Select loation on the list view. */
  selectLocation(location){
    for(let loc of this.filteredLocations()){
      loc.selected(false);
    }
    location.selected(true);
  }

  getMap(){
    // Send initMap to the global scope
    window.initMap = this._map.initMap;
    // Send this ViewModel to the global scope
    window.viewModel = this;
    // Create a script element for Google Maps Api
    const mapTag = document.createElement('script');
    mapTag.src = `https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=${API_KEY}&callback=initMap`;
    mapTag.async = true;
    mapTag.defer = true;
    document.body.appendChild(mapTag)
  }
}
