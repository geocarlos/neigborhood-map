import '../css/styles.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import * as _map from './map';
// import '../bower_components/jquery/dist/jquery.min';
// import '../bower_components/bootstrap/dist/js/bootstrap.bundle.min';
// import '../bower_components/bootstrap/dist/js/bootstrap.min';
import ko from '../bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';

export const viewModel = new ViewModel(ko, _map);

function _init() {
  // getMap(viewModel._map.initMap);
  ko.applyBindings(viewModel);
}

// export viewModel;

function getMap(func){
  const url = `https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyBZsbMUm9vj6GQrYRRl9QxMrA-n7V68Dag&callback=${func}`;
  const mapTag = document.createElement('script');
  mapTag.src = url;
  mapTag.async = true;
  mapTag.defer = true;
  document.body.appendChild(mapTag)

}

_init(_map.selectMarker)
console.log("Webpack setup!");
