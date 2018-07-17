import '../css/styles.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import ko from '../bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';
import {getInitialLocations} from './foursquare_api/locations';

let locations = [];

getInitialLocations((data)=>{
  return new Promise((res)=>{
    locations = data;
    if(locations) res()
  })
  .then(()=>{
    const viewModel = new ViewModel(ko, locations);
    _init(viewModel)
  })
})

function _init(viewModel) {
  ko.applyBindings(viewModel);
  viewModel.getMap();
}
