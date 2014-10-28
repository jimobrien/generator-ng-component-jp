;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .filter('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    return function(input) {
      // <%= humanized %> directive logic
      // ...

      return '<%= cameledName %> filter: ' + input;
    };
  }
  
}).call(this);