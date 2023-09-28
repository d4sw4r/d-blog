myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'start.html' })
    .when('/about', { templateUrl: 'about.html' })
    .when('/showroom', { templateUrl: 'showroom.html' })
    .when('/contact', { templateUrl: 'contact.html' })
    .when('/blog', { templateUrl: 'blog.html' })
    .when('/blog/post/:post', { templateUrl: 'post.html' })
    .when('/projects', { templateUrl: 'projects.html' })
    .when('/impressum', { templateUrl: 'impressum.html' })
    .otherwise({ redirectTo: '/' });
});
