myApp.directive('tagcloud', function(){
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    template: '<div class="tagcloud"><a href="google.de" ng-repeat="tag in value" class="tag{{tag.id | tagweight}}"> {{tag.name}} </a></div>'
  };
});

myApp.filter('tagweight', function() {
  return function(wert) {
  	var out = 1;
  	 out = wert % 3;
  	if(out === 0){
  		out = 3;
  	}	
    return out;
  };
});  