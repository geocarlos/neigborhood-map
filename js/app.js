import '/js/map';
import ko from '/bower_components/knockout/dist/knockout';
import ViewModel from './view_model/view_model';
import '/css/styles.css';
import '/bower_components/jquery/dist/jquery.min.js';
import '/bower_components/bootstrap/dist/js/bootstrap.bundle.min.js';
import '/bower_components/bootstrap/dist/js/bootstrap.min.js';
import '/bower_components/bootstrap/dist/css/bootstrap.min.css';

const viewModel = new ViewModel(ko);

function _init() {
  ko.applyBindings(viewModel);
}

init()
