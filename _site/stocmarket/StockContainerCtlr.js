myAppModule.controller("StockContinerCtlr", function ($scope){
	
	var containerDataArray=[];
	var stockContainerSvg;
	var containerWidth =$('#stockContainer').width();
	var containerHeight=$('#stockContainer').height();
	var margin={ right:20,left:20,bottom:20,top:20};
	
	$scope.$on('initialisedChart', function(e) { 
		initStockContainerCtlr();	
		//$scope.$parent.drawPieChart();
		//alert("data length "+data.length);
	});
	
	function initStockContainerCtlr(){
			
		//createContainers();
	}
	
	function createContainers(){
	
		stockContainerSvg=d3.select('#stockContainer')
							.append('svg')
							.attr('width',containerWidth)
							.attr('height',containerHeight);
							
		stockContainerSvg.select('.companyName')
						.data($scope.$parent.logoChartJSONData)
						.enter()
						.append('text')
							
	}
});