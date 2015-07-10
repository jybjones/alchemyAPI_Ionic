angular.module('starter.controllers', [])

.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute) {
      // var fb = new Firebase(API_URL);
      // $rootScope.auth = fb.getAuth();

      // $rootScope.pos = $rootScope.pos;
      // $rootScope.neg = $rootScope.neg;

    });

  })

.controller('DashCtrl', function($scope, $rootScope) {

})

.controller('ChatsCtrl', function($scope, Chats, $rootScope) {
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

  $scope.params = {
    term: "",
    type: ""
  }


  $scope.positive = []
  $scope.negative = []

  $scope.sortPosNeg = function (data) {

    data.result.docs.forEach(function (article) {
      if (article.source.enriched.url.docSentiment.type = "positive") {
        $scope.positive.push(article);
      } else if (article.source.enriched.url.docSentiment.type = "negative") {
        $scope.negative.push(article)
      }
    })

    $rootScope.pos = $scope.positive;
    $rootScope.neg = $scope.negative;
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $rootScope) {
  $scope.pos = $rootScope.pos;
});
