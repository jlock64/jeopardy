angular
  .module('jeopardy')
  .service('JeopardyService', function($http, $q) {

    var url = 'http://jservice.io/api/category?id=';
    var url2 = 'http://jservice.io/api/categories?count=100&offset='

    function getQuestions() {
      // var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 18000);
       return $http.get(url + randomNumber);
    }

    function getCategories() {
      // var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 18000);
       return $http.get(url2 + randomNumber);
        // .then(function(data) {
        //   defer.resolve.promise;
        // });
      // return defer.promise;
    }

    function sixCat() {
      return [getAllCategories(), getAllCategories(), getAllCategories(), getAllCategories(), getAllCategories(), getAllCategories()];
    }

    return {
      getCategories: getCategories,
      getQuestions: getQuestions,
      sixCat: sixCat
    }
  }) // end of JeopardyService

// angular
//   .module('jeopardy')
//   .service('JeopardyService', function($http) {
//     // var key = 'iyhmf98ikk1p52incedpu8n2';
//     var cors = 'https://free-cors-server.herokuapp.com/any-request/';
//     id = Math.floor(Math.random() * 18416);
//     var url = encodeURIComponent('http://jservice.io/api/category?id=' + id);
//
//     // var cacheEngine = $cacheFactory('myCacheEngine');
//        function getJeps() {
//          return $http.get(cors + url);
//        }
//
//     return {
//       getJeps: getJeps,
//     };
//   })
