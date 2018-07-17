import '../css/styles.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import ko from '../bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';
import {getInitialLocations, getFavorites} from './foursquare_api/locations';

let locations = [];
const favorites = getFavorites();

getInitialLocations((data)=>{
  return new Promise((res)=>{
    locations = data;
    if(locations) res()
  })
  .then(()=>{
    console.log("Favorites: ",favorites);
    const viewModel = new ViewModel(ko, locations, favorites);
    _init(viewModel)
  })
})

function _init(viewModel) {
  ko.applyBindings(viewModel);
  viewModel.getMap();
}
