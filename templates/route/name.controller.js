;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  /* @ngInject */
  function <%= classedName %>Ctrl($scope) {
    // Controller Logic
    // ...
  }

}).call(this);