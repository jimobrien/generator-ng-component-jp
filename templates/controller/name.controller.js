;(function(){
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Controller', <%= classedName %>Controller);

  /* @inject */
  function <%= classedName %>Controller($scope) {
    // <%= humanized %> controller logic
    // ...
  }
}).call(this);