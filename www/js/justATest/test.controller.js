(function() {
  'use strict';

  angular.module('mtgx.persistence')
         .controller('TestCtrl', ['PouchDBService', TestCtrl]);

  function TestCtrl (PouchDBService){

      var vm = this;

      vm.test = function(name){
        PouchDBService.addDocument({name: name, nickName: "Sobrenome"}).then(function (response) {
        });

        getAll();
      }

      function getAll (){
        PouchDBService.getAllDocuments().then(function (response) {
          vm.Obj = response;
          }, function (err) {
            console.log(err);
          }
        );
      }

  }

})();
