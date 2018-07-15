import '../css/styles.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import * as _map from './map';
import ko from '../bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';

const viewModel = new ViewModel(ko, _map);
window.viewModel = viewModel;

function _init() {
  getMap();
  ko.applyBindings(viewModel);
}

// export viewModel;

function getMap(){
  const url = 'https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyBZsbMUm9vj6GQrYRRl9QxMrA-n7V68Dag&callback=initMap';
  const mapTag = document.createElement('script');
  mapTag.src = url;
  mapTag.async = true;
  mapTag.defer = true;
  document.body.appendChild(mapTag)

}

_init(_map.selectMarker)
console.log("Webpack setup!");
