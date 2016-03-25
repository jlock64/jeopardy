angular
  .module('jeopardy')
  .controller('HomeController', function($scope, JeopardyService, $routeParams) {

    function pageLoad() {
      JeopardyService.getJeps()
        .then(function(data) {
          console.log(data);
          window.glob = data;

        })

    }
    // $scope.jeps = data;
    pageLoad();
  })
