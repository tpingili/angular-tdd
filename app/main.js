angular.module('AddressBook', [])
  .service('contactService', function($http){
    this.contacts = [];
    var contactService = this;
    $http.get('http://localhost:9001/contacts').then(function(res){
      console.log(res.data);
      while(res.data[0]){
        contactService.contacts.push(res.data.pop());
      }
    })
  })
  .controller('ContactController', function(contactService, $scope){
    $scope.contacts = contactService.contacts;
  })