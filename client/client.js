var app = angular.module('blueApp', []);

app.controller('ParentController', ['$http',function($http){
  var parent = this;
  parent.user = {};
  parent.userList = [];

  parent.getPeople = function() {
    console.log('getpeople ran');
    $http.get('/create').then(function(response){
      console.log(response.data);
      parent.userList = [];
      parent.userList = response.data;

      if (response.status !== 200){
        console.log('Error on getting data')
      }
      // $scope.user = {};
      // $scope.userList = response.data;
      // return response.data;

      console.log(response.data);

    });
  };

  parent.deletePerson = function(person, index){
    console.log("index", index);
    var id = person._id;
    $http.delete('/delete/' + id).then(function(response){
      console.log('ajax delete call made');
    });
    parent.userList.splice(index, 1);
  }
}])

// [[[[[[[[[[[[[[[[[[ Old Code ]]]]]]]]]]]]]]]]]]
// app.controller('BlueController', ['$scope', '$http', function($scope, $http){
//   $scope.user = {};
//   $scope.userList = [];
//
//   $scope.getPeople = function() {
//     console.log('getpeople ran');
//     $http.get('/create').then(function(response){
//       console.log(response.data);
//       $scope.userList = [];
//       $scope.userList = response.data;
//
//       if (response.status !== 200){
//         console.log('Error on getting data')
//       }
//       // $scope.user = {};
//       // $scope.userList = response.data;
//       // return response.data;
//
//       console.log(response.data);
//
//     });
//   };
//
//   $scope.deletePerson = function(person, index){
//     console.log("index", index);
//     var id = person._id;
//     $http.delete('/delete/' + id).then(function(response){
//       console.log('ajax delete call made');
//     });
//     $scope.userList.splice(index, 1);
//   }
// }])
