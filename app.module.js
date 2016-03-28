angular
  .module('jeopardy', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      // .when('/this-is-another', {
      //   template: "<h1> THIS IS ANOTHER ROUTE WE ARE HITTING"
      // })
  });
