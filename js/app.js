const viewModel = new ViewModel();

function _init() {
  ko.applyBindings(viewModel);
}

window.onload = _init()
