myApp.controller('showPostCtrl', ['$scope', '$http', '$routeParams', 'myTags', function ($scope, $http, $routeParams, myTags) {

	var req = {
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/posts/'+$routeParams.post         
               };
    $http(req).success(function(data){
                $scope.post = data;        
                });

    var myDataPromise2 = myTags.getData();

    myDataPromise2.then(function(result){  
       $scope.tags = result;
    });
}]);