 var andelaForm = angular.module('andelaForm', []);

andelaForm.controller('formController', ['$scope', function($scope) {

$scope.submit= function() {
 // alert('I\'m working');
  $scope.details = {
    'name': $scope.user.name,
    'email': $scope.user.email,
    'location': $scope.user.location,

    'salutation': "Your Name is: ",
    'emailDisp': "Your Mail is: ",
    'locDisp': "You are currently at: "
  };

};

}]);