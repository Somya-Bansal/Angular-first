(function(){
  var app = angular.module('store-directives', []);

  app.directive('productTabs',function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;
        this.setTab = function(tabValue){
          this.tab = tabValue;
        };
        this.isSet = function(setValue){
          return this.tab===setValue;
        };
      },
      controllerAs: "tab",
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict:'E',
      templateUrl:'product-description.html',


    };
  });

  app.directive('productSpecs', function(){
    return {
      restrict:'A',
      templateUrl:'product-specs.html',

    };
  });

  app.directive('productReviews', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-reviews.html',
    };
  });

})();
