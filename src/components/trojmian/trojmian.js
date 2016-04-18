define(['knockout', 'text!./trojmian.html'], function(ko, templateMarkup) {

  function Trojmian(params) {
    this.message = ko.observable('Hello from the trojmian component!');

    this.a = ko.observable("");
    this.b = ko.observable("");
    this.c = ko.observable("");

    this.resolve = function(){}
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Trojmian.prototype.dispose = function() { };
  
  return { viewModel: Trojmian, template: templateMarkup };

});
