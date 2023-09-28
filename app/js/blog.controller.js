myApp.controller('blogCtrl', ['$scope', '$http', 'myPosts', function ($scope, $http, myPosts) {
  
  $scope.isLoading = true;

   var myDataPromise = myPosts.getData();
    myDataPromise.then(function(result) {  

       // this is only run after getData() resolves
       $scope.posts = result;
       console.log($scope.posts);
    });

var req = {
                          method: 'GET',
                          url: 'http://127.0.0.1:8000/api/posts.json?limit=2&order_by=created',
                      };
                          $http(req).success(function(response){
                              
                              $scope.recent = response;
                       
                          });

	$scope.showPost = function($id){
			console.log("Read more clicked"+$id);
      $location.path('/blog/'+$id);
	};

      var req = {
                          method: 'GET',
                          url: 'http://127.0.0.1:8000/api/tags',
                      };
                          $http(req).success(function(response){
                              
                              $scope.tags = response;
                       
                          });

	$scope.rss = function($scope){
			console.log("RSS clicked");
	};


                var req2 = {
                          method: 'GET',
                          url: 'http://127.0.0.1:8000/api/posts',
                      };
                          $http(req2).success(function(response){
                              $scope.posts = response;
                              $scope.isLoading = false;
                          });
         
}]);


