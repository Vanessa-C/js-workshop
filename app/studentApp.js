let studentApp = angular.module('studentApp', []);

function studentListController($scope) {
  $scope.greetings = "Hello World"
  $scope.students = [{
    "lastname": "Mendy",
    "firstname": "Bénédicte",
    "age": 30,
    "gender": "F",
    "address":"31 rue Jacques Gabriel 33160 Saint Médard en Jalles",
    "id": 0
  }, {
      "lastname": "Delgado  ",
      "firstname": "  Elsa",
      "age": 43,
      "gender": "F",
      "address":"1 place du Gart  33610   CESTAS",
      "id": 1
  }]
}

studentApp.controller("studentListController", studentListController)