'use strict';

// Declare app level module which depends on filters, and services
angular.module('wastebin', [
  'ngRoute',
  'wastebin.filters',
  'wastebin.services',
  'wastebin.directives',
  'wastebin.controllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/write', {templateUrl: 'partials/write.html', controller: 'TextAreaController'});
    $routeProvider.otherwise({redirectTo: '/write'});
  }]);
