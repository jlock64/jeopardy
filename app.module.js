angular
  .module('jeopardy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "index.html",
        controller: "HomeController"
      })
  });
