(function() {

    angular
        .module('money')
        .directive('taco', function(API) {

            return {
                templateUrl: '../partials/worldMoney.html',
                link: function(vm, element, attributes) {

                    let taco = API.getCurrency(attributes.market);
                    taco.then(res => {
                        vm.currency = res.data;
                        console.log(res);
                    })

                

                }

            }

        })
})();
