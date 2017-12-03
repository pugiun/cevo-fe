angular.module( 'ngCevo.category.area', [
  'ui.router',
  'ngCevo.category.area.sub'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'category.area', {
      url: '/area/:areaId',
      views: {
        "area": {
          controller: 'AreaCtrl',
          templateUrl: 'category/area/area.tpl.html'
        }
      },
      data:{ pageTitle: 'Area' }
    });
})

.controller( 'AreaCtrl', function AreaCtrl( $scope, $state ) {
  $scope.areaId = $state.params.areaId;
})

;
