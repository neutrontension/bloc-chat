//using an IIFE (immediately-invoked function expression) - a JS idiom which
//produces a lexical scope using JS's function scoping
 (function() {
     //Dependency Injection (DI) is a software design pattern that deals with
     //how components get hold of their dependencies.
     //config function with providers injected to define first state which Will
     //hold the main view for the application
     function config($stateProvider, $locationProvider) {
        $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

        $stateProvider
            .state('home', {
                url: '/',
                //The 'home' state is being designated a controller, HomeCtrl
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
     }

     angular
          //connecting to application, dependencies - ui.Router,
          //and firebase
         .module('blocChat', ['ui.router', 'firebase'])
         //passing config function through angular config method
         .config(config);
 })();
