import '../css/styles.css';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import ko from '../bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';

const viewModel = new ViewModel(ko);

function _init() {
  ko.applyBindings(viewModel);
  viewModel.getMap();
}

_init()
console.log("Webpack setup!");
