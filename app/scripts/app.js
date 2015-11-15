var blocJams = angular.module('blocJams', ['ui.router']);

blocJams.config(function($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider
//        .state('landing', {
//        url:"/",
//        controller:"LandingCtrl",
//        templateUrl: "/templates/landing.html"
//    })
        .state('collection', {
        url: "/collection",
        controller: "CollectionCtrl",
        templateUrl: "/templates/collection.html"
    })
        .state('album', {
        url: "/album",
        controller:"AlbumCtrl",
        templateUrl:"/templates/album.html",
    });
    
});