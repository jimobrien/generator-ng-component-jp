;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  /* @inject */
  function <%= classedName %>Ctrl($scope) {
    // <%= humanized %> controller logic
    // ...
  }
  
}).call(this);