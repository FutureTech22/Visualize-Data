(function() {
    'use strict';

    angular
        .module('money')
        .controller('mainController', function(API, $scope) {
        	const vm = this
        	

        	 let taco = API.getCurrency();
	            taco.then(res => {
	                vm.currency = res.data.quotes;
	                console.log(res.data.quotes);
	                

	                var data = {
					    labels: ["USDALL", "USDAOA", "USDBTD", "USDAMD", "USDARS"],
					    datasets: [
					        {
					            label: "My First dataset",
					            backgroundColor: [
					                'rgba(255, 99, 132, 0.2)',
					                'rgba(54, 162, 235, 0.2)',
					                'rgba(255, 206, 86, 0.2)',
					                'rgba(75, 192, 192, 0.2)',
					                'rgba(153, 102, 255, 0.2)',
					                'rgba(255, 159, 64, 0.2)'
					            ],
					            borderColor: [
					                'rgba(255,99,132,1)',
					                'rgba(54, 162, 235, 1)',
					                'rgba(255, 206, 86, 1)',
					                'rgba(75, 192, 192, 1)',
					                'rgba(153, 102, 255, 1)',
					                'rgba(255, 159, 64, 1)'
					            ],
					            borderWidth: 1,
					            data: [res.data.quotes.USDAUD, res.data.quotes.USDAWG, res.data.quotes.USDAZN, res.data.quotes.USDANG, res.data.quotes.USDBBD],
					        }
					    ]
					};

                    var myBarChart = new Chart(ctx, {
                        type: 'bar',
                        data:data,
                    })

	            })

	           

	            


        	let ctx = document.getElementById("myChart");

                    

        	
        })

})();
    