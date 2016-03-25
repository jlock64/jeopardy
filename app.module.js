angular
  .module('jeopardy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
  });
