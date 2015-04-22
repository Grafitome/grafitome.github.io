	/*
	$(document).ready(function(){
		
		var heatMapData = [
			{row: 0, col: 0, hours: 18},
			{row: 0, col: 1, hours: 20},
			{row: 0, col: 2, hours: 22},
			{row: 0, col: 3, hours: 16},
			{row: 0, col: 4, hours: 10},			
			{row: 1, col: 0, hours: 10},
			{row: 1, col: 1, hours: 29},
			{row: 1, col: 2, hours: 19},
			{row: 1, col: 3, hours: 21},
			{row: 1, col: 4, hours: 50},
			{row: 2, col: 0, hours: 11},
			{row: 2, col: 1, hours: 26},
			{row: 2, col: 2, hours: 23},
			{row: 2, col: 3, hours: 9},
			{row: 2, col: 4, hours: 27},
			{row: 3, col: 0, hours: 13},
			{row: 3, col: 1, hours: 16},
			{row: 3, col: 2, hours: 29},
			{row: 3, col: 3, hours: 18},
			{row: 3, col: 4, hours: 21},
			{row: 4, col: 0, hours: 18},
			{row: 4, col: 1, hours: 12},
			{row: 4, col: 2, hours: 23},
			{row: 4, col: 3, hours: 14},
			{row: 4, col: 4, hours: 8}
			
		];

		var yAxisValue = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
		var xAxisValue = ['Akash', 'Rajiv', 'Mohit', 'Gaurav', 'Gurjant']
		
		var scatterPlotData = [
					{
						"name": "Men",
						"color":"blue",
						"shape":"square",
						"values": [{"x":5, "y": 20}, {"x":480, "y":90}, {"x":250, "y":50}, {"x":100, "y":33}, {"x":330, "y":95},
										{"x":600, "y":150},{"x":25, "y": 200}, {"x":48, "y":190}, {"x":250, "y":500}, {"x":200, "y":330}, {"x":230, "y":450},
										{"x":60, "y":250},{"x":50, "y": 200}, {"x":48, "y":340}, {"x":25, "y":312}, {"x":120, "y":290}, {"x":190, "y":140},
										{"x":60, "y":150}]								  
					}
					,
					{
						"name": "Women",
						"color":"pink",
						"shape":"circle",
						"values": [{"x":300, "y": 20}, {"x":560, "y":90}, {"x":250, "y":300}, {"x":100, "y":130}, {"x":330, "y":250},
										{"x":500, "y":15},{"x":30, "y": 200}, {"x":56, "y":290}, {"x":150, "y":320}, {"x":120, "y":230}, {"x":400, "y":260},
										{"x":400, "y":159},{"x":230, "y": 200}, {"x":260, "y":190}, {"x":350, "y":300}, {"x":290, "y":230}, {"x":430, "y":150},
										{"x":300, "y":150}
									  ]
					},
					
					{
						"name": "Child",
						"color":"green",
						"shape":"triangle",
						"values": [{"x":200, "y": 200}, {"x":180, "y":45}, {"x":250, "y":25}, {"x":100, "y":330}, {"x":330, "y":89},
										{"x":50, "y":15},{"x":190, "y": 220}, {"x":280, "y":450}, {"x":350, "y":125}, {"x":120, "y":380}, {"x":230, "y":389},
										{"x":250, "y":315},{"x":20, "y": 190}, {"x":280, "y":450}, {"x":350, "y":250}, {"x":200, "y":430}, {"x":430, "y":589},
										{"x":500, "y":150}
									  ]
					}			
			];
				
		var basicLineData =
		[
				{				
					"Name" : "Angel",
					"Shape" : "circle",
					"color": "brown",
					"Values" : [{"value": 12345}, {"value": 42345.23}, {"value": 30234}, {"value": 22345}, {"value": 72345}, {"value": 22345}, {"value": 32345},
								{"value": 70345}, {"value": 52345}, {"value": 78345}]
				},
				{
					"Name" : "Venture",
					"Shape" : "square",
					"color": "orange",
					"Values" : [{"value": 90234}, {"value": 90234.34}, {"value": 12034}, {"value": 22394}, {"value": 72934}, {"value": 62394}, {"value": 32374}, {"value": 9234},
							{"value": 5234}, {"value": 56034}]			
				},
				{
					"Name" : "Micro",
					"Shape" : "triangle",
					"color": "blue",
					"Values" : [{"value": 33340}, {"value": 62304}, {"value": 67214}, {"value": 6734}, {"value": 90734}, {"value": 12034}, {"value": 43240}, {"value": 42340},
							{"value": 15234}, {"value": 100034}]			
				},
				{
					"Name" : "Capital",
					"Shape" : "circle",
					"color": "cyan",
					"Values" : [{"value": 68333}, {"value": 23304}, {"value": 90314}, {"value": 9734}, {"value": 19734}, {"value": 90834}, {"value": 67240}, {"value": 82340},
							{"value": 51234}, {"value": 97034}]			
				}
				
		];
		
		 var stackedAreaData = [
            {"layoutID":309,"nationalAvg":1,"category":"Dec","categoryorder":11,"y":34.6240,"name":"PRODUCT1","type":"area","band1Color":"#bb533f","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Jan","categoryorder":12,"y":31.7140,"name":"PRODUCT1","type":"area","band1Color":"#bb533f","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Feb","categoryorder":13,"y":34.8570,"name":"PRODUCT1","type":"area","band1Color":"#bb533f","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Dec","categoryorder":11,"y":144.4390,"name":"PRODUCT2","type":"area","band1Color":"#ba8e3e","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Jan","categoryorder":12,"y":153.1140,"name":"PRODUCT2","type":"area","band1Color":"#ba8e3e","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Feb","categoryorder":13,"y":126.4660,"name":"PRODUCT2","type":"area","band1Color":"#ba8e3e","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Dec","categoryorder":11,"y":13.0250,"name":"PRODUCT3","type":"area","band1Color":"#3ca2b8","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Jan","categoryorder":12,"y":6.0190,"name":"PRODUCT3","type":"area","band1Color":"#3ca2b8","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Feb","categoryorder":13,"y":5.3900,"name":"PRODUCT3","type":"area","band1Color":"#3ca2b8","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Dec","categoryorder":11,"y":99.8900,"name":"PRODUCT4","type":"area","band1Color":"#7929b2","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Jan","categoryorder":12,"y":79.9660,"name":"PRODUCT4","type":"area","band1Color":"#7929b2","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Feb","categoryorder":13,"y":84.7040,"name":"PRODUCT4","type":"area","band1Color":"#7929b2","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Dec","categoryorder":11,"y":102.3490,"name":"PRODUCT5","type":"area","band1Color":"#be2f96","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Jan","categoryorder":12,"y":114.9680,"name":"PRODUCT5","type":"area","band1Color":"#be2f96","metric1Label":""},
            {"layoutID":309,"nationalAvg":1,"category":"Feb","categoryorder":13,"y":100.8590,"name":"PRODUCT5","type":"area","band1Color":"#be2f96","metric1Label":""}
            ];
			
		var heightOfBars = [15, 80, 120, 180, 50, 65, 30];
		var dataset=[5, 10, 20, 45, 6, 25];
		var data=generateData(100,10000);
		var data1=generateData(100,5000);
		var d = [		  
			[
			  {axis: "DT01", value: 13, yOffset: 5}, 
			  {axis: "DT02", value: 6}, 
			  {axis: "DT03", value: 5},  
			  {axis: "DT04", value: 9},  
			  {axis: "DT05", value: 2, xOffset: -10},
			  {axis: "DT06", value: 4, xOffset: -20}
			]
		  ,
			 [
			  {axis: "DT01", value: 6}, 
			  {axis: "DT02", value: 7}, 
			  {axis: "DT03", value: 10},  
			  {axis: "DT04", value: 13},  
			  {axis: "DT05", value: 9},
			  {axis: "DT06", value: 7}
			]
		];
		
		var barData = [{
				'x': 'IE',
					'y': 5
			}, {
				'x': 'Chrome',
					'y': 20
			}, {
				'x': 'Firefox',
					'y': 10
			}, {
				'x': 'Safari',
					'y': 30
			}, {
				'x': 'Opera',
					'y': 5
			}, {
				'x': 'Not Known',
					'y': 33
			}];

			var Chrome = [{
				'x': 'v5.0',
					'y': 31
			}, {
				'x': 'v6.0',
					'y': 10
			}, {
				'x': 'v7.0',
					'y': 20
			}, {
				'x': 'v8.0',
					'y': 53
			}, {
				'x': 'v9.0',
					'y': 25
			}, {
				'x': 'v10.0',
					'y': 35
			}, {
				'x': 'v11.0',
					'y': 23
			}];
			
			var Firefox = [{
				'x': 'v25.0',
					'y': 22
			}, {
				'x': 'v26.0',
					'y': 19
			}, {
				'x': 'v27.0',
					'y': 25
			}, {
				'x': 'v28.0',
					'y': 10
			}, {
				'x': 'v29.0',
					'y': 34
			}];
		
		
		var mycfg = {
		  
		  maxValue: 15,
		  levels: 3,
		  ExtraWidthX: 100
		}
		
		var cfgDrillDown = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c(),
			toolTipLabel:'Drilled Chart'
		}
		
		var cfgHeatMap = {
		
			colorLow: '#F6fdff',
			colorMed: '#81DCFF',
			colorHigh: '#0BBCFF',
			yAxisLabelSpacing: 80
		}
		
		var cfgScatterPlot =  {
		
			padding :30,
			toolTipLabel : 'Population'		
		}  
		
		var cfgBasicLine =  {
		
			padding :30,
			yAxisfactor : "Sold Quantity(last 10 days)",
			yLabelColor:"red",
			xAxisfactor : "Indexes(in whole number)",
			xLabelColor:"green"			
		}
		
		var cfg3DBarChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			toolTipLabelForYAxis: "Sales(in Crores)",
			color: d3.scale.category20c()
		}
		
		var cfgStackedAreaChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c()
		}
		
		var cfgPyramidChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c()
		}
		
		//make all chart outer div show initially so that it can take its parent width
		$('.chartBigOuter').show();
		$(".d3Chart").show();

		var pendingVsApprovedRequestData=generateDataForPendingAndAppr(10,100);
				
		var stocChart=$("#line").stocCharts(data,'doj','id');
		stocChart.areaChart({'color':'green','axisColor':'#222222'});
		
		var tickController={
		     getTickArray:function(minVal,maxVal,noOfTicksRequired){
			     var tickArray=[];
				 var factor=Math.round((maxVal-minVal)/(noOfTicksRequired-1));
				 var curval=minVal;
				 tickArray.push(curval);
				 noOfTicksRequired--;
				 for(var i=1;i<noOfTicksRequired;i++){
					curval+=factor;
					tickArray.push(curval);
					if(i==noOfTicksRequired-1)
					tickArray.push(maxVal);
				 }
				 return tickArray;
			 },
			  getXTickArray:function(minVal,maxVal,maxCharacterLength,svgWidth){
			     var tickArray=[];
				 var maxTickWidth=2*maxCharacterLength;
				 var totalTicks=Math.round(svgWidth/maxTickWidth);
				
				 var curval=minVal;
				 tickArray.push(curval);
				 var factor=(maxVal-minVal)/totalTicks;
				 while(curval<maxVal){
					curval=Math.floor(curval+factor);
					if(tickArray.indexOf(curval)==-1 && curval<=maxVal)
					tickArray.push(curval);
				 }
				 return tickArray;
			 }
		
		};
		var stocChart6=$("#line6").stocCharts();
		stocChart6.drawRadarChart("#line6", d, mycfg);
			
		
		
		var mulitpleLineBarData={'sea-level':{"color":'green','indicationLabel':'Sea Level Pressure','chartType':'line','lineType':'cardinal','isDottedLine':false,'unit':'mb','data':gernerateMultiLineData(40,80)},'temperature':{'color':'#90ed7d','chartType':'line','indicationLabel':'Temperature','lineType':'linear','unit':'C','data':gernerateMultiLineData(60,80),'isDottedLine':true},'rainfall':{'color':'#7cb5ec','chartType':'bar','indicationLabel':'Rain Fall','unit':'mm','data':gernerateMultiLineData(20,100)}};
		
		
		var xAxis={'ticks':generateDate()};
		
		
		var stocChartLineBars=$("#line7").stocCharts();
		stocChartLineBars.drawBarWithMultipleLineAndCircle({'data':mulitpleLineBarData,'marginLeft':50,'marginRight':50,'xAxis':xAxis,'indicationLabel':'Category'});

			
		var stocChart3=$("#line3").stocCharts();
	    stocChart3.drawDrillDownChart("#line3", barData, Chrome, Firefox, cfgDrillDown, "#backData");
		var dataset=[12000,1350,433,1234,30234,2134]; 
		var legendSet=['Agnitio','Apple Inc','IBM','Facebook','Accenture',"Gold Man Sach"];
		var stocChart5=$("#line5").stocCharts();
		var colorPieArray=["#7cb5ec","#434348","#90ed7d","orange","green","cyan"];
		stocChart5.drawPieChartWithTransition({'data':dataset,'legends':legendSet,"colors":colorPieArray,'factorName':'COST'});
			
		
				
		var stocChart4=$("#line4").stocCharts();
		stocChart4.drawHeatMapChart('#line4', heatMapData, yAxisValue, xAxisValue, cfgHeatMap);
		
		
		
		
		var stocChart9=$("#line9").stocCharts();
		stocChart9.drawHeatMapChart('#line9', heatMapData, yAxisValue, xAxisValue, cfgHeatMap);
		
		var stocChart2=$("#line2").stocCharts();
		stocChart2.drawScatterPlotChart('#line2', scatterPlotData, cfgScatterPlot);
		
		var stocChart1=$("#line1").stocCharts();
		stocChart1.drawBasicLineChart('#line1', basicLineData, cfgBasicLine);	
		
		var groupedChartData=generateDataForStackChart();
		var stocChart8=$("#line8").stocCharts();
		var colorJson={"pending":"#7cb5ec","approved":"#434348","rejected":"#90ed7d","halted":"red"};
		var colorArray=["#7cb5ec","#434348","#90ed7d","red"];
		stocChart8.groupedBarChart({'data':groupedChartData,'xFieldName':'doj','widthOfBar':'',
		'showAllTicks':true,'colors':colorJson,yAxisfactor : "Orders Quantity(last 10 days)",
			yLabelColor:"grey",
			xAxisfactor : "Indexes(in whole number)",
			xLabelColor:"green",});
		
		
		//var heightOfBars = [15, 30, 30, 180, 50, 15, 30];
		var stocChart10=$("#line10").stocCharts();
	    stocChart10.drawThreeDBarChart("#line10", heightOfBars, cfg3DBarChart);
		
		var stocChart11=$("#line11").stocCharts();
	    stocChart11.drawStackedAreaChart("#line11", stackedAreaData, cfgStackedAreaChart);	
		
		
		
		
		
		var sdata=[];		
		var stackChartData=[];
		
		d3.json("getBuisinessDetailByChannel.json", function(error, treeData) {
			stackChartData=treeData.data.MarketplaceInfo.summary;
			
			
			$(stackChartData).each(function(i,obj){
			
				sdata.push({"settledAmount":obj.settledAmount,"unsettledAmount":obj.unsettledAmount,'timeIndex':obj.channelId});
			});
			$('.chartBigOuter').show();
			$(".d3Chart").show();
			
			var stockChart=$("#line16").stocCharts(data,'doj','id');
			stockChart.areaChart({'xAxisIndicationLabel':'Time Index','yAxisIndicationLabel':'Money','axisColor':'#222222','attachBrushEvent':true});
			stockChart.circleChart({'color':"black",'r':3,'data':data});
			
			
			
			var stockChart12=$("#line12").stocCharts();
			stockChart12.stackedBarChart({'data':sdata,'xFieldName':'timeIndex','widthOfBar':20,'showAllTicks':true,'columnHeadingArray':treeData.columnHeading,'xAxisIndicationLabel':'Category','yAxisIndicationLabel':'Amount'});
			
			$(".chartBigOuter").hide();
			
		});
		
		
		//make all chart outer div show initially so that it can take its parent width
		$('.chartBigOuter').show();
		$(".d3Chart").show();

		var stockChart13=$("#line13").stocCharts();
		var invertStockChart=$("#line17").stocCharts();
		
		d3.json("getSortedPayableSummary.json?v=1", function(error, treeData) {
			var payableSummaryArray=treeData.data.payableSummary;
			var pyramidPercentData=[];
			var exactData=[];
			var sum=0;
			$(payableSummaryArray).each(function(i,obj){
			
				exactData.push({"accountName":obj.accountName,'amount':obj.amount});
				sum+=parseFloat(obj.amount);
			});
			
		    $(payableSummaryArray).each(function(i,obj){
			  pyramidPercentData.push(parseFloat(obj.amount/sum)*100);
			});
			
			stockChart13.drawPyramidChart(pyramidPercentData,payableSummaryArray,false);
			invertStockChart.drawPyramidChart(pyramidPercentData,payableSummaryArray,true);	
			$(".chartBigOuter").hide();
		});
		
		$('.chartBigOuter').show();
		$(".d3Chart").show();

		var percent = [
			"40",
			"30",
			"10",
			"15",
			"5"
		];
		
		
		var funnelChartData= [
				["Food",      12000, "#008080"],
				["Travel", 4000,  "#702963"],
				["Bill", 2500,  "#ff634d"],
				["Others",     1500,  "#007fff"]
			];
		
		
		
		var stockChart14=$("#line14").stocCharts();
		stockChart14.drawFunnelChart(funnelChartData)
		
		
		
		var dataA=generateData(100,10000);
		var stockChart15=$("#line15").stocCharts(dataA,'doj','id');
		stockChart15.gaugeGraph({'dataA':[{"maxSpeedVal":200,"speedVal":80}],"id":"#line15",'arcStartIndLabel':'No Risk','arcMiddleIndLabel':'Meter','arcEndIndLabel':'Total'});
			
		$(".chartBigOuter").hide();
	})
	*/
	function generateDataForStackChart(minNegative){
			var stackChartDataArray=[];
			var noOfRecords=15;
			var currentDate=new Date(2014,0,1);
			var dateOfJoining=currentDate;
			var minVal;
			if(!isNaN(minNegative)){
				minVal=minNegative;
			}else{
				minVal=10;
			}
			
			var colorJson={"pending":"red","approved":"cyan",'rejected':"blue","halted":"orange"};
			for(var i=1;i<noOfRecords;i++){
				var id=i;
				dateOfJoining.setMonth(dateOfJoining.getMonth()+1);
				var doj=convertDateIntoYYMMDD(dateOfJoining);
				var pending=generateRandomNumber(minVal,100);
				var approved=generateRandomNumber(minVal,50);
				var rejected=generateRandomNumber(minVal,10);
				var halted=generateRandomNumber(minVal,100);
				
				var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
					"Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
				var fomratttedDate=monthNames[(new Date(doj)).getMonth()] +"'"+(new Date(doj)).getFullYear().toString().substring(2,4);
				
				var obj={"doj":fomratttedDate,"pending":pending,"approved":approved,'rejected':rejected,"halted":halted};
				stackChartDataArray.push(obj);
			}
			
			return stackChartDataArray;
		}
		function generateRandomNumber(minLimit,maxLimit){
			return Math.floor(Math.random()*(maxLimit-minLimit+1)+minLimit);
		};
	function convertDateIntoYYMMDD(date){
			var month=date.getMonth()+1;
			var dateInDigit=date.getDate();
			if(month<10){
				month="0"+month;
			}
			if(dateInDigit<10){
				dateInDigit="0"+dateInDigit;
			}
			var dateInString=date.getFullYear()+"-"+month+"-"+dateInDigit;
			return dateInString;
	}
	
	function gernerateMultiLineData(min,max){
			var pendingApprovedOrders=[];
			var noOfRecords=50;
			
			for(var i=1;i<noOfRecords;i++){
				
				var approvedOrder=generateRandomNumber(min,max);
				pendingApprovedOrders.push(approvedOrder);
			}
			console.log(JSON.stringify(pendingApprovedOrders));
			return pendingApprovedOrders;
		}
		function generateDate(){
			var noOfRecords=50;
			var currentDate=new Date();
			var dateOfJoining=currentDate
			var dateArray=[];
			for(var i=1;i<noOfRecords;i++){
				dateOfJoining=addDays(dateOfJoining,1);
				var doj=convertDateIntoYYMMDD(dateOfJoining);
				dateArray.push(doj);
			}
			return 	dateArray;
		}
		
		function generateDataForPendingAndAppr(min,max){
			var pendingApprovedOrders=[];
			var noOfRecords=30;
			var currentDate=new Date();
			var dateOfJoining=currentDate
			for(var i=1;i<noOfRecords;i++){
				var id=i;
				dateOfJoining=addDays(dateOfJoining,1)
				var doj=convertDateIntoYYMMDD(dateOfJoining);
				var pendingOrder=generateRandomNumber(0,50);
				var approvedOrder=generateRandomNumber(50,100);
				var total=pendingOrder+approvedOrder;
				
				var obj={"total":total,"doj":doj,"pending":pendingOrder,"approved":approvedOrder};
				pendingApprovedOrders.push(obj);
			}
			return pendingApprovedOrders;
		}
		
		function generateData(min,max){
			var empDataArray=[];
			var noOfRecords=30;
			var currentDate=new Date();
			var dateOfJoining=currentDate
			for(var i=1;i<noOfRecords;i++){
				var id=i;
				dateOfJoining=addDays(dateOfJoining,1)
				var doj=convertDateIntoYYMMDD(dateOfJoining);
				var empId=generateRandomNumber(min,max);
				var employee={"id":empId,"doj":doj};
				empDataArray.push(employee);
			}
			return empDataArray;
		}
		
		function addDays(theDate, days) {
			return new Date(theDate.getTime() + days*24*60*60*1000);
		}
		
		
		
		function generateRandomNumber(minLimit,maxLimit){
			return Math.floor(Math.random()*(maxLimit-minLimit+1)+minLimit);
		};

	setInterval(function(){
	 var redB=Math.random()*100;
	 $('.redBar').width(redB+'%');
	 var greenB=Math.random()*100;
	 $('.greenBar').width(greenB+'%');
	 var orgB=Math.random()*100;
	 $('.orgBar').width(orgB+'%');
	
	},2500);
	
  