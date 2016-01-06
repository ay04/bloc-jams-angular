var blocJams = angular.module('blocJams', ['ui.router']);
blocJams.controller('ExampleController', function($scope) {
    $scope.someText = 'Hello World!';
});
blocJams.config(function($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
    $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl',
            templateUrl:'/templates/landing.html'
    })
        .state('collection', {
            url:'/collection',
            controller: 'collectionCtrl',
            templateUrl:'/templates/collection.html'
    })
        .state('album', {
            url:'/album',
            controller:'albumCtrl',
            templateUrl:'/templates/albumhtml'
               
    
});