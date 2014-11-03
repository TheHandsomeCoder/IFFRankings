angular.module('RankingsApp')
.controller('FencerModalCtrl', function ($scope, $modalInstance, fencers, edit, fencer) {

  $scope.submitted = false;



  $scope.fencer = angular.copy(fencer);
  $scope.edit = edit;



  $scope.ok = function () {
    $scope.submitted = true;

    if($scope.firstNameIsNotValid() || $scope.lastNameIsNotValid() || $scope.clubIsNotValid() || $scope.genderIsNotValid())
    {
      return false;
    }   
    else
    {
      if($scope.edit == false)
      {
       fencers.insertFencer($scope.fencer);
       $modalInstance.close();
     }
     else
     {
       fencers.updateFencer($scope.fencer);
        $modalInstance.close();
     }
    
   }
 }

 $scope.firstNameIsNotValid = function()
 {
   return ($scope.fencer.firstname == "" || angular.isUndefined($scope.fencer.firstname))
 }

 $scope.lastNameIsNotValid = function()
 {
  return ($scope.fencer.lastname == "" || angular.isUndefined($scope.fencer.lastname))
 }

 $scope.clubIsNotValid = function()
 {
  return ($scope.fencer.club == "" || angular.isUndefined($scope.fencer.club))
 }

 $scope.genderIsNotValid = function()
 {
  return ($scope.fencer.gender == "" || angular.isUndefined($scope.fencer.gender))
 }
 $scope.cancel = function () {
  $modalInstance.dismiss('cancel');
};
});
