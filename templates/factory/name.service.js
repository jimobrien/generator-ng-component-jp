;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .factory('<%= classedName %>', classedName);

  /* @ngInject */
  function <%= classedName %>() {

    // Define private variables here . . .

    // Define Public API
    var instance = {
      someMethod: someMethod
    };

    return instance;

    function someMethod() {
      return true;
    }
  }
  
}).call(this);