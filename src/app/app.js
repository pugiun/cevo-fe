angular.module( 'ngCevo', [
  'templates-app',
  'templates-common',
  'ngCevo.category',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/category/1' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $http ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle;
    }
  });
  $http.get('assets/menu.json').success(function(data) {
    $scope.nav = data;
    console.log($scope);
  });
})

;

