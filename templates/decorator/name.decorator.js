;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .config(<%= cameledName %>);
  
  /* @ngInject */
  function <%= cameledName %>($provide) {
    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  }
  
}).call(this);