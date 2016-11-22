/*controllers for views*/
app.controller('formController', function($scope){

});

app.controller('viewController', function($scope){

});

/*routing for views*/
(function() {
var madlibModule = angular.module("madlibApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/input-form", {
      templateUrl: "views/input-form.html",
      controller: "formController"
  });
  $routeProvider.when("/input-view", {
      templateUrl: "input-view.html",
      controller: "viewController"
    });
    $routeProvider.otherwise({
        template: "Please select a link."
    });
});
})();
