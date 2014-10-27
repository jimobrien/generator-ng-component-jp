;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .config(Configuration);

  /* @inject */
  function Configuration($stateProvider) {
    // <%= humanized %> state routing
    $stateProvider
      .state('<%= name %>', {
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller'
      });
  }

}).call(this);