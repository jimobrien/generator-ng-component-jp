;(function(){
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', <%= cameledName %>);

  /* @inject */
  function <%= cameledName %>() {
    return function(input) {
      // <%= humanized %> directive logic
      // ...

      return '<%= cameledName %> filter: ' + input;
    };
  }
}).call(this);