(function() { 
'use strict';
//IIFE
 
angular.module('myContactApp',[])
 
.controller("myCtrl", function($scope) {
   this.msg = "Hello contacts";    
});
 
 
// END IIFE
})();