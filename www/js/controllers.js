angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  var API_URL = 'https://access.alchemyapi.com/calls/data/GetNews?apikey=c896a119a5ccf751b2d928ab59ae5a029d05edb3&return=enriched.url.title,enriched.url.url,enriched.url.author,enriched.url.publicationDate,enriched.url.docSentiment&start=' + $scope.startDate + '&end=' + $scope.endDate + '&q.enriched.url.entities.entity=|text=' + $scope.params.term + ',type=' + $scope.params.type + '|&count=25&outputMode=json'

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }

  $scope.getURL = function () {
    var API_URL = 'https://access.alchemyapi.com/calls/data/GetNews?apikey=c896a119a5ccf751b2d928ab59ae5a029d05edb3&return=enriched.url.title,enriched.url.url,enriched.url.author,enriched.url.publicationDate,enriched.url.docSentiment&start=' + $scope.startDate + '&end=' + $scope.endDate + '&q.enriched.url.entities.entity=|text=' + $scope.params.term + ',type=' + $scope.params.type + '|&count=25&outputMode=json'
    $http.get(API_URL)
    .success(function(data) {
      $scope.sortPosNeg(data);
    });
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
