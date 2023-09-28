myApp.controller('projectsCtrl', ['$scope', '$http','$mdDialog', function ($scope, $http, $mdDialog) {
var req = {
                          method: 'GET',
                          url: '/api/v3/projects?private_token=',
                      };
                          $http(req).success(function(response){
                              
                              $scope.projects = response;
                       
                          });

$scope.showAlert = function(project) {
	console.log(project);
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Clone from Http')
        .textContent(project.http_url_to_repo)
        .ariaLabel('Clone from Http')
        .ok('Got it!')
        .targetEvent()
    );
    };                          

}]);

