angular
  .module('jeopardy')
  .service('JeopardyService', function($http, $q) {

    var url = 'http://jservice.io/api/category?id=';

    function getCategories() {
      var randomNumber = Math.floor(Math.random() * 18000);
       return $http.get(url + randomNumber);
    }

    function getSix() {
      return $q.all([getCategories(),getCategories(),getCategories(),getCategories(),getCategories(),getCategories()]);
    }

    return {
      getCategories: getCategories,
      getSix: getSix
    }
  }) // end of JeopardyService


angular
  .module('jeopardy')
  .directive('jeopardyReader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/jeopardy-reader.html',
      scope: {
        value: '@',
        question: '@',
        answer: '@',
        // title: '@',
      }
    }
  })
