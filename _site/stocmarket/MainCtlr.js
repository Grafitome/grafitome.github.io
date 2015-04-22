
/*

angular.module("chartApp",[]).controller("MainCtlr", function ($scope){
	
	$scope.logoChartData=[];
	$scope.genereateLogoChartData=function($scope){
		//alert(""+$scope.logoChartData.length);
		var symbols=['K','AA','GOOG','AACC','G','FB','PEP','ACN','KO','YHOO','AAPL','GALE'];
		for(var i=0;i<symbols.length;i++){
			$scope.logoChartData.push({	symbol:symbols[i],
										perChange:(Math.random()*10)+2*i,
										absChange:(Math.random()*100)+20*i,
										image:'./icon/icon-'+symbols[i].toLowerCase()+'.png'
						});
			alert($scope);			
		}
	}
	
	function bindCheckBoxes(){
		$("input[type='checkbox']").change(function(e) {
			// alert($(this).is(':checked'));
			var boxID=$(e.target).attr('name'); 
			if($(this).is(':checked')== false){
				d3.select('#'+boxID)
				.transition()
				.duration(500)
				.style('display','none');	}
			else
			{
				d3.select('#'+boxID).style('display','block');	
			}
   //rint(e);
		})	
	}
	bindCheckBoxes();
	
});


*/








var myAppModule = angular.module('chartApp', []);

myAppModule.directive('ngBlur', ['$parse', function ($parse) {
	return function (scope, element, attr) {
		var fn = $parse(attr['ngBlur']);
		element.bind('blur', function (event) {
			scope.$apply(function () {
				fn(scope, {$event: event});
			});
		});
	}
}]);
var globalScope;

myAppModule.controller("genereateLogoChartData", function ($scope,$compile,$rootScope){

	$scope.logoChartData=[];
	$scope.logoChartJSONData={};
	$scope.buyXAxisLabel="BUYISH";
	$scope.sellXAxisLabel="SELLISH";
	$scope.AllSymbolArray=[];
	$scope.defaultSymbol="SPY";
	$scope.topRankedData=[];
	
	/*
	function showTopedRankData(){
		setInterval(function(){$scope.topRankedData=sortLogoChartJSONDataByRank();},4000);
	}
	*/
	rankInitiater();
	
	$scope.sortLogoChartJSONDataByRank=function(
	 propertyName /* string */, sortAscending /* bool(optional, defaults to true) */) {
    if(sortAscending == undefined) sortAscending = true;  // default to true
    
	var arraytoSort=[];
	var sortedArray=[];
	for(key in $scope.logoChartJSONData){
   //console.log('array to sort '+key);
		arraytoSort.push({'symbol':key,'msgCount':$scope.logoChartJSONData[key].msgCount,'absProfit':$scope.logoChartJSONData[key].absChange,
		'last':$scope.logoChartJSONData[key].last, 	'change':$scope.logoChartJSONData[key].change });
	}
	
    if(sortAscending) {
        arraytoSort.sort(function (a, b) {
            if(a[propertyName]<b[propertyName]){
			 return -1;
			}
			if(a[propertyName]>b[propertyName]){
			 return 1;
			}
			if(a[propertyName] == b[propertyName]){
			 return 0;
			}
        });
    }
    else {
        arraytoSort.sort(function (a, b) {
          if(a[propertyName]>b[propertyName]){
			 return -1;
			}
			if(a[propertyName]<b[propertyName]){
			 return 1;
			}
			if(a[propertyName] == b[propertyName]){
			 return 0;
			}
        });
    }

		//console.log("sort by "+sortAscending);
		for(var i=0;i<arraytoSort.length;i++){
			//console.log(''+arraytoSort[i].symbol +" arraytoSort "+arraytoSort[i].absProfit +" type "+typeof arraytoSort[i].absProfit );
			sortedArray.push({'rank':i+1,'symbol':arraytoSort[i].symbol,'msgCount':arraytoSort[i].msgCount,'absProfit':arraytoSort[i].absProfit,
			'last':$scope.logoChartJSONData[arraytoSort[i].symbol].last,'change':$scope.logoChartJSONData[arraytoSort[i].symbol].change});	
		}
		
		return sortedArray.splice(0,5);
	}
	
	$scope.stopChart=function(){
		//console.log("stop charting ");
		$scope.$broadcast('stopChart');
	}
	
	$scope.startChart=function(){
		//console.log("redraw chart ");
		$scope.$broadcast('startChart');
	}
	
	$scope.editChartData=function(){
		$('.change').attr('readonly', false);
	}
	
	$scope.changeXAxisBuyLable=function(){
		
		if($scope.buyXAxisLabel){
			d3.select('.xAxisCompanyImagesChart').text($scope.buyXAxisLabel);
		}
	}
	$scope.changeXAxisSellLable=function(){
		
		if($scope.sellXAxisLabel){
			d3.select('.sellLabel').text($scope.sellXAxisLabel);
		}
	}
	
	
	var symbols=['K','AA','GOOG','AACC','G','FB','PEP','ACN','KO','YHOO','AAPL','GALE','NKE','SPY','MSFT','GE','C','F','QQQ','EEM'];
	$scope.symbolsWithImages=['K','AA','GOOG','AACC','G','FB','PEP','ACN','KO','YHOO','AAPL','GALE','NKE','MSFT','SPY'];
	/*
	for(var i=0;i<symbols.length;i++){
				var absCh=window.parseFloat((Math.random()*100)+20*i);
				var perCh=window.parseFloat((Math.random()*10)+9*i);
				absCh=window.parseFloat(absCh).toFixed(2);
				perCh=window.parseFloat(perCh).toFixed(2);
				absCh=parseFloat(absCh);
				perCh=parseFloat(perCh);
				console.log("absCh "+typeof absCh);
			$scope.logoChartData.push({	symbol:symbols[i],
										perChange:perCh,
										absChange:absCh,
										image:'./icon/icon-'+symbols[i].toLowerCase()+'.png'
						});
					console.log("symbnol "+symbols[i] +" "+absCh +"per  "+perCh);	
						//$scope.logoChartJSONData[symbols[i]]={'perChange':window.parseFloat(perCh).toFixed(2),'absChange':window.parseFloat(absCh).toFixed(2)};
						$scope.logoChartJSONData[symbols[i]]={'perChange':perCh,'absChange':absCh};
						}
						*/
						
					//	$scope.$apply();
						
						
						globalScope=$scope;
						$scope.AllSymbolArray=symbols;
						DataHandler.fetchSnapDataViaAjaxCallForSymbolListForPortFolio(symbols.toString());
						DataHandler.init(symbols.toString());
						
						function bindCheckBoxes(){
		$("input[type='checkbox']").change(function(e) {
			// alert($(this).is(':checked'));
			var boxID=$(e.target).attr('name'); 
			if($(this).is(':checked')== false){
				d3.select('#'+boxID)
				.transition()
				.duration(500)
				.style('display','none');	}
			else
			{
				d3.select('#'+boxID).style('display','block');	
			}
   //rint(e);
		})	
	}
	bindCheckBoxes();

	$scope.drawPieChart=function(){
		var r = 50;
		var width=99;
		var height=78;
		
		var pieChartSvg=d3.select('#pieChartDiv')
						.append('svg')
						.attr('width',width)
						.attr('height',height)
						.attr('class','pieChartSvg');
						
						
		var donut = d3.layout.pie().value(function(d){
		  return d.perChange;
		});

		//D3 helper function to draw arcs, populates parameter "d" in path object
		var arc = d3.svg.arc()
					.innerRadius(0)
					.outerRadius(r);
		
		pieChartSvg.data(donut($scope.logoChartData))
		.enter()
		.append("svg:g")               
        .attr("class", "slice")
		.append("svg:path")
        .attr("fill", function(d, i) { return color(d.perChange); } )
		.attr("d", arc)
		.append("svg:text")                                     //add a label to each slice
        .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
        })
		.attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return d.perChange; });  
		
	}

	function color(number){
			if(number>0){
				console.log(">0");
				return "green";
			}
			else if(number<0){
				console.log("=0");
				return "red";
			}
			else{
				console.log("else");
				return "white";
			}
		}
	$scope.comparitiveSymbol1='AAPL';
	$scope.comparitiveSymbol2='AA';	
	$scope.drawComparitiveChart=function(){
		//alert("comparisonChart")
		initComparisonChart($scope.comparitiveSymbol1.toUpperCase(),$scope.comparitiveSymbol2.toUpperCase());
	}	
	$scope.showHistoricChartForSymbol=function(isFetchData,switchSymbol){
		console.log("broadcast event from main ctlr ");
		$rootScope.$emit('showHistoricChartForSymbol',isFetchData,switchSymbol);
		if(switchSymbol){
			$('#currentSymbol').val($scope.symbol);
			$rootScope.$emit("drawBarForSymbol", {
				symbol:$scope.symbol 
			});
		}
	}
	
	/*
	$scope.$watch("historicChartInterval" , function(n){
			console.log("show historic chart interval change ");
			$scope.showHistoricChartForSymbol(true);
	});
	$scope.$watch("areaChart" , function(n){
			console.log("show historic chart area change ");
			$scope.showHistoricChartForSymbol(false);
	});
	$scope.$watch("barChart" , function(n){
			console.log("show historic chart bar change ");
			$scope.showHistoricChartForSymbol(false);
	});
	$scope.$watch("candleChart" , function(n){
			console.log("show historic chart candle change ");
			$scope.showHistoricChartForSymbol(false);
	});
	*/
	
	$scope.symbol='FB';	
	$scope.historicChartInterval="1M";
	$scope.showHistoricChartForInterval=function(){
		console.log("$scope.historicChartInterval "+$scope.historicChartInterval);
		$scope.showHistoricChartForSymbol(true,false);
	}
	
	$scope.showCheckedHistoricChart=function(){
		initCountr++;
	}
	
	$scope.$watch('candleChart', function (newValue, oldValue) {
		//if(initCountr>0 ){
			console.log('oldValue=' + oldValue);
			console.log('newValue=' + newValue);
			$scope.changeInValue="candle";
			$scope.showHistoricChartForSymbol(false,false);
		//}
        //do something
    });
	
	$scope.$watch('barChart', function (newValue, oldValue) {
		//if(initCountr>0 ){
			console.log('oldValue=' + oldValue);
			console.log('newValue=' + newValue);
			$scope.changeInValue="bar";
			$scope.showHistoricChartForSymbol(false,false);
		//}
        //do something
    });
	$scope.$watch('areaChart', function (newValue, oldValue) {
		//if(initCountr>0 ){
			console.log('oldValue=' + oldValue);
			console.log('newValue=' + newValue);
			$scope.changeInValue="area";
			$scope.showHistoricChartForSymbol(false,false);
		//}
        //do something
    });
	
	$scope.changeInValue="";
	
	$scope.areaChart=true;
	$scope.barChart=true;
	$scope.candleChart=true;
	
	var initCountr=0;
	
	
});