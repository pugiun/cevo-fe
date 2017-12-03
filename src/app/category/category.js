angular.module( 'ngCevo.category', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngCevo.category.area'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'category', {
      url: '/category/:id',
      views: {
        "main": {
          controller: 'CategoryCtrl',
          templateUrl: 'category/category.tpl.html'
        }
      },
      data:{ pageTitle: 'Category' }
    });
})

.controller( 'CategoryCtrl', function CategoryCtrl( $scope, $state ) {
  $scope.categoryId = $state.params.id;
})

;
