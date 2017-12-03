angular.module( 'ngCevo.category.area.sub.child', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'category.area.sub.children', {
      url: '/child/:childId',
      views: {
        "child": {
          controller: 'ChildCtrl',
          templateUrl: 'category/area/sub/child/child.tpl.html'
        }
      },
      data:{ pageTitle: 'Child-Area' }
    });
})

.controller( 'ChildCtrl', function ChildCtrl( $scope, $state ) {
  $scope.childId = $state.params.childId;
})

;
