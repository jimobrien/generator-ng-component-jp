;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', <%= cameledName %>);

  /* @inject */
  function <%= cameledName %>() {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  }
  
}).call(this);