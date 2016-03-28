angular
  .module('jeopardy')
  .controller('HomeController', function($scope, JeopardyService, $routeParams) {

    JeopardyService.getSix()
      .then(function(data) {
        console.log("Six Categories", data);
        $scope.categories = data;
      })

  })// end of HomeController
