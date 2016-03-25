angular
  .module('jeopardy')
  .service('JeopardyService', function($http) {
    // var key = 'iyhmf98ikk1p52incedpu8n2';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var url = encodeURIComponent('http://jservice.io/api/clues');

    // var cacheEngine = $cacheFactory('myCacheEngine');
       function getJeps() {
         return $http.get(cors + url);
       }

    return {
      getJeps: getJeps
    };
  })
