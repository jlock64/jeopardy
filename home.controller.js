angular
  .module('jeopardy')
  .controller('HomeController', function($scope, JeopardyService, $routeParams) {

    JeopardyService.getSix()
      .then(function(data) {
        console.log("Six Categories", data);
        $scope.categories = data;
        $scope.checkAnswer = checkAnswer;
      })

      function checkAnswer(userAnswer) {
        if(userAnswer === answer) {
        console.log('correct');
        } else {
          console.log('wrong');
          }
      }

//       this.answer = {
//         userAnswer = '',
//       }
// console.log(userAnswer);
  })// end of HomeController

// HomeController.getAnswer.userAnswer
