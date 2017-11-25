(function(){
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems =[
  {
    name: 'Dodecehedron',
    price: 2.95,
    description: '......',
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
