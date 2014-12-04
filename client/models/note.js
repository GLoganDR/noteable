(function(){
  'use strict';

  angular.module('noteable')
  .factory('Note', ['$http', function($http){

    function create(note){
      return $http.post('/notes', note);
    }

    return {create:create};
  }]);
})();
