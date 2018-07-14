import ko from '/bower_components/knockout/dist/knockout';
import ViewModel from '.view_model/view_model';

const viewModel = new ViewModel(ko);

function _init() {
  ko.applyBindings(viewModel);
}

window.onload = _init()
