myApp.controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {




 var req = {
                            method: 'POST',
                            url: 'http://127.0.0.1:8000/api/contacts',
                            
                            data: { name: $scope.name,
                                    mail: $scope.email,
                                    created: new Date(2010, 11, 28, 14, 57),
                                    text: $scope.txt
                                }
                        };
                           











	$scope.sendMail = function() {
		 $http(req).success(function(){
                                console.log('done');
                            });
    };                   
}]);