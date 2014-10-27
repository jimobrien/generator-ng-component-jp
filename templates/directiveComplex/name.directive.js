;(function(){
'use strict';
angular
  .module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', <%= cameledName %>);

  /* @inject */
  function <%= cameledName %>() {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'E',
      link: postLink
    };

    function postLink(scope, element, attrs) {
    }
  }
  
}).call(this);