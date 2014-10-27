;(function(){
'use strict';

angular
  .module('<%= scriptAppName %>')
  .config(Configuration);

  /* @inject */
  function Configuration($routeProvider) {
    // <%= humanized %> state routing
    $routeProvider
      .when('<%= route %>', {
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Controller'
      });
  }

}).call(this);
