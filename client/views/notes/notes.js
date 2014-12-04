(function(){
  'use strict';

  angular.module('noteable')
  .controller('NotesCtrl', ['$rootScope', '$scope', '$state', 'Note', function($rootScope, $scope, $state, Note){
    $scope.mode = $state.current.name;
    $scope.notes = [];

    $scope.create = function(note){
      Note.create(note).then(function(res){
        $scope.notes.push(res.data);
      });
    };
  }]);
})();
