;(function(){
  'use strict';
  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Controller', <%= classedName %>Controller);

  /* @inject */
  function <%= classedName %>Controller($scope) {
      // Controller Logic
      // ...

  }
}).call(this);