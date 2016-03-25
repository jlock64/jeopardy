angular
  .module('jeopardy')
  .controller('HomeController', function($scope, JeopardyService, $routeParams) {

    function pageLoad() {
      JeopardyService.getJeps()
        .then(function(data) {
          // console.log(data);
          window.glob = data;
          var jeps = data.data.clues.map(function(el) {
            console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              // category: el.category.title,
              id: el.category_id
            }
          })
          $scope.jeps = jeps;
          $scope.title = data.data.title;
          // console.log(jeps);
        })

    }
    pageLoad();




  })// end of HomeController
