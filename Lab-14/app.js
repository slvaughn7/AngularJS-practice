(function() {
var catdogModule = angular.module("catdogApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/cat", {
      templateUrl: "views/cat.html"
  });
  $routeProvider.when("/dog", {
      templateUrl: "views/dog.html",
    });
    $routeProvider.otherwise({
        template: "Please select a link."
    });
});
})();
