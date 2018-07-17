import Location from '../models/location';
import * as _map from '../google_api/map';
import {API_KEY} from '../google_api/API_KEY';

export default class ViewModel {

  constructor(ko, locations) {

    this.locations = ko.observableArray([]);
    this.menuToggle = ko.observable(false);
    this.locationFilter = ko.observable('');
    this._map = _map;

    /**
      Turn the simple locations array into an observableArray */
    locations.map(l => {
      this.locations.push(
        new Location(
          ko,
          l.venue.name,
          l.venue.location.lat,
          l.venue.location.lng,
          l.venue.categories[0].icon,
          l.venue.categories[0].shortName,
          l.venue.location.formattedAddress
        ));
    })

    setTimeout(()=>{
      console.log("Venue: ", locations[0].venue);
      console.log("Categories", locations[0].venue.categories);
    }, 2000)

    /**
      Filter array based on the textInput */
    this.filteredLocations = ko.computed(()=>{
      return this.locations().filter((l)=>{
        return (
          l.place().toLowerCase().includes(this.locationFilter().toLowerCase()) ||
          l.category().toLowerCase().includes(this.locationFilter().toLowerCase()) ||
          this.getCatInEnglish(l.icon().prefix).toLowerCase().includes(this.locationFilter().toLowerCase())
        );
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

  /**
   This would allow search in English in a location where categories are in
   another language. In this case, this would allow somebody who cannot write
   in Portuguese perform searches by cateogory in English. */
  getCatInEnglish(iconPrefix){
    return iconPrefix.substring(39).substring(iconPrefix.indexOf('/') - 1);
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
