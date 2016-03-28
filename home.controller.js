angular
  .module('jeopardy')
  .controller('HomeController', function($scope, JeopardyService, $routeParams) {


    function loadQuestions() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions", data);
          window.glob = data;
          var jeps = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps = jeps;
          $scope.title = data.data.title;
          // console.log(jeps);
        })
    }
    loadQuestions();


    function loadQuestions1() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions1", data);
          var jeps1 = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps1 = jeps1;
          $scope.title1 = data.data.title;
        })

    }
    loadQuestions1();


    function loadQuestions2() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions2", data);
          var jeps2 = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps2 = jeps2;
          $scope.title2 = data.data.title;
          // console.log(jeps);
        })
    }
    loadQuestions2();

    function loadQuestions3() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions3", data);
          var jeps3 = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps3 = jeps3;
          $scope.title3 = data.data.title;
          // console.log(jeps);
        })
    }
    loadQuestions3();

    function loadQuestions4() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions4", data);
          var jeps4 = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps4 = jeps4;
          $scope.title4 = data.data.title;
          // console.log(jeps);
        })
    }
    loadQuestions4();

    function loadQuestions5() {
      JeopardyService.getQuestions()
        .then(function(data) {
          console.log("inside questions5", data);
          var jeps5 = data.data.clues.map(function(el) {
            // console.log("inside map", el);
            return {
              answer: el.answer,
              question: el.question,
              value: el.value,
              id: el.category_id
            }
          })
          $scope.jeps5 = jeps5;
          $scope.title5 = data.data.title;
          // console.log(jeps);
        })
    }
    loadQuestions5();




  })// end of HomeController
