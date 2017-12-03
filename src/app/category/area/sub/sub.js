angular.module( 'ngCevo.category.area.sub', [
  'ui.router',
  'ngCevo.category.area.sub.child'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'category.area.sub', {
      url: '/sub/:subId',
      views: {
        "sub": {
          controller: 'SubCtrl',
          templateUrl: 'category/area/sub/sub.tpl.html'
        }
      },
      data:{ pageTitle: 'Sub-Area' }
    });
})

.controller( 'SubCtrl', function SubCtrl( $scope, $state ) {
  $scope.subId = $state.params.subId;
})

;
