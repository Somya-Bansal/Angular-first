(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(tabValue){
      this.tab = tabValue;
    };
    this.isSet = function(setValue){
      return this.tab===setValue;
    };
  });

  var gems =[
  {
    name: 'Dodecehedron',
    price: 2,
    description: 'The finest gem of them all!',
    canPurchase: false,
    soldOut: true,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.45,
    description: '......',
    canPurchase: true,
    soldOut: false,
  }
];

})();
