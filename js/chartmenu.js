var isTriggeringClick=false;
var selectedChartIndex=1;

var jsFiddleLinkMap={
"1" : "http://jsfiddle.net/PAXCEL/ycevhobo/3/",
"2" : "http://jsfiddle.net/PAXCEL/vk04sohw/2/",
"3" : "http://jsfiddle.net/PAXCEL/Lj2bsdnr/3/",
"4" : "http://jsfiddle.net/PAXCEL/ogy6uoco/3/",
"5" : "http://jsfiddle.net/PAXCEL/75331cub/2/",
"6" : "http://jsfiddle.net/PAXCEL/1o2d6yxj/2/",
"7" : "http://jsfiddle.net/PAXCEL/ndgww2n3/3/",
"8" : "http://jsfiddle.net/PAXCEL/fbLdbgdw/1/",
"9" : "http://jsfiddle.net/PAXCEL/g7sujqLr/2/",
"10" : "http://jsfiddle.net/PAXCEL/3fwtgp6h/2/",
"11" : "http://jsfiddle.net/PAXCEL/4nb73yvx/3/",
"12" : "http://jsfiddle.net/PAXCEL/6xke3jct/2/",
"13" : "http://jsfiddle.net/PAXCEL/ns715wcv/3/",
"14" : "http://jsfiddle.net/PAXCEL/5xnj5e9v/3/",
"15" : "http://jsfiddle.net/PAXCEL/6degx86y/2/",
"16" : "http://jsfiddle.net/PAXCEL/tgLh5t6w/2/",
"17" : "http://jsfiddle.net/PAXCEL/2kLky6t0/2/",
"18" : "http://jsfiddle.net/PAXCEL/uo9oL6v1/2/",
"19" : "http://jsfiddle.net/PAXCEL/3whv97g8/2/",
"20" : "http://jsfiddle.net/PAXCEL/nh2yfehp/1/",
"21" : "http://jsfiddle.net/PAXCEL/u62v8k9m/2/", 
"22" : "http://jsfiddle.net/PAXCEL/9qy6jbj9/2/",
"23" : "http://jsfiddle.net/PAXCEL/f4pez9be/1/",
"24" : "http://jsfiddle.net/PAXCEL/Lob2myog/1/",
"25" : "http://jsfiddle.net/PAXCEL/udghncaq/2/",
"26" : "http://jsfiddle.net/PAXCEL/6r1kjkgo/2/",
"27" : "http://jsfiddle.net/PAXCEL/fdjuyu3o/3/",
"28" : "http://jsfiddle.net/PAXCEL/e0acaxm9/2/",
"29" : "http://jsfiddle.net/PAXCEL/g2us9n5n/4/",
"30" : "http://jsfiddle.net/PAXCEL/q0zbeoh4/3/",
"31" : "http://jsfiddle.net/PAXCEL/u9oohepu/3/",
"32" : "http://jsfiddle.net/PAXCEL/jcw3ubvx/2/",
"33" : "http://jsfiddle.net/PAXCEL/81ewp9ty/1/",
"34" : "http://jsfiddle.net/PAXCEL/108apo8f/3/",
"35" : "http://jsfiddle.net/PAXCEL/ub2620sx/3/",
"36" : "http://jsfiddle.net/PAXCEL/th2rfsrk/2/",
"37" : "http://jsfiddle.net/PAXCEL/w0qkv82g/4/",
"38" : "http://jsfiddle.net/PAXCEL/fzp00bg3/2/",
"39" : "http://jsfiddle.net/PAXCEL/6njfewoy/2/",
"40" : "http://jsfiddle.net/PAXCEL/4o9cku73/3/",
"41" :"http://jsfiddle.net/PAXCEL/d7nvk1ub/2/",
"42" :"http://jsfiddle.net/PAXCEL/fkd4af81/2/",
"43" :"http://jsfiddle.net/PAXCEL/856jwvvw/",
"44" :"http://jsfiddle.net/PAXCEL/09cefcuo/",
"45" :"http://jsfiddle.net/PAXCEL/3w4f6zmz/",
"46" :"http://jsfiddle.net/PAXCEL/csw25fcw/"

}

function updateJsfiddleLink(index){
	var linkPath=jsFiddleLinkMap[index];
	var jsfiddleBtn=$("#jsFiddle-share-btn");
	$(jsfiddleBtn).attr("href",linkPath);
}


$(document).ready(function(){
  
 var textStyleConfg={"font-family":"'Maven Pro',sans-serif","font-size":"12","background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":300,"xLabelColor":"#a7a7a7","yLabelColor":"white","chartTitleColor":"white"};
  $("#basicLineChartMenu").click(function(){
	
	 selectedChartIndex=$(this).attr("index");
	 updateJsfiddleLink(selectedChartIndex);
	  //doc detail	
	  $(".chartDetails").hide();
	  $(".basicLineChartMenu").show();
	  	
	  $(".chartBigOuter").hide();	
	  $("#line1").empty();
	  
	  var basicLineData =
		{
				title : "Sold Quantity in Last 10 Month ",
				xAxisTickArray:["Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14"],
				yAxisfactor : "Sold Quantity",
				yLabelColor:"red",
				xAxisfactor : "Indexes(in whole number)",
				xLabelColor:"green"	,
				padding:30,	
				yAxisData:
				[{				
					"Name" : "Angel",
					"Shape" : "circle",
					"color": "#00ff7e",
					"data" : [12345,42345.23,30234,22345,72345,22345,32345,70345,52345,78345]
				},
				{
					"Name" : "Venture",
					"Shape" : "square",
					"color": "orange",
					"data" : [90234,90234.34,12034,22394,72934,62394,32374,9234,5234,56034]			
				},
				{
					"Name" : "Micro",
					"Shape" : "triangle",
					"color": "#4fb6f2",
					"data" : [33340,62304,67214,6734,90734,12034,43240,42340,15234,100034]			
				},
				{
					"Name" : "Capital",
					"Shape" : "circle",
					"color": "cyan",
					"data" : [68333,23304,90314,9734,19734,90834,67240,82340,51234,97034]			
				}]
				
		};
		
		
		$("#basicLineChart").show();
		
		setTimeout(function(){
			var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};	
			var stocChart1=$("#line1").stocCharts(textStyleConfg);
			stocChart1.drawBasicLineChart('#line1', basicLineData);	
		},50);
		
	});
  
  $("#scatterPlotChartMenu").click(function(){
	//$(".chartBigOuter").hide();
	
	selectedChartIndex=$(this).attr("index");
	updateJsfiddleLink(selectedChartIndex);
	$(".chartDetails").hide();
	  $(".scatterPlotChartMenu").show();
	  
	$("#line1").empty();
	
	var scatterPlotData = {
     chartTitle:"Population Density Analysis",
     xAxisTickArray:["Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14","Nov'14","Dec'14","Jan'15","Feb'15","Mar'15","Apr'15","May'15","Jun'15"],
     xIndicationLabel:"Month",
     yIndicationLabel:"Population",
     padding:30,
     yAixsData:[
     {
      "name": "Women",
      "color":"#ff43c3",
      "shape":"circle",
      "data": [20,560,90,250,300,100,130,330,250,500,15,30,200,56,290,150,320,120]
     },
     
     {
      "name": "Child",
      "color":"#3dc69e",
      "shape":"triangle",
      "data": [200,45,25,330,89,15,220,450,125,380,389,315,190,450,250,430,589,150]
     },
     {
      "name": "Men",
      "color":"#ffc000",
      "shape":"square",
      "data": [20,90,50,33,95,150,200,190,500,330,450,250,200,340,312,290,140,150]          
     }] 
  };
	
	var cfgScatterPlot =  {
		
		padding :30,
		toolTipLabel : 'Population'		
	}  	
	
	var xAxisTickArray=["Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14","Nov'14","Dec'14","Jan'15","Feb'15","Mar'15","Apr'15","May'15","Jun'15"];
	
	$("#scatterPlotChart").show();
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
	var stocChart2=$("#line1").stocCharts(textStyleConfg);
	stocChart2.drawScatterPlotChart('#line1', scatterPlotData);	
	
    
  });
  
   $("#drillDownChartMenu").click(function(){
		$("#line1").empty();
		
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".drillDownChartMenu").show();
		
		var barData = {
				
					'IE':{data:5,color:"#A8F667","subData":{'v5.0':31,'v6.0':10,'v7.0':20,'v8.0':53,'v9.0':25,'v10.0':35,'v11.0':23},subDataColorArray:['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785','#a48ad4','#fb77d1']},
					'Firefox':{data:10,color:"#95d7bb","subData":{'v25.0':22,'v26.0':19,'v27.0':25,'v28.0':10,'v29.0':34},subDataColorArray:['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785']},
					'Safari':{data:30,color:"#fcb322","subData":{},subDataColorArray:[]},
					'Opera':{data:20,color:"#6d788e","subData":{},subDataColorArray:[]},
					'Not Known':{data:10,color:"#FF78AF","subData":{},subDataColorArray:[]},
					'Chrome':{data:50,color:"#61b7E8","subData":{},subDataColorArray:[]},
					"Netscape Navigator":{data:25,color:"#05908D","subData":{},subDataColorArray:[]}
				
				
				};
		
		var cfgDrillDown = {
			
				topMargin: 5,
				rightMargin: 0,
				bottomMargin: 40,
				leftMargin: 40,
				color: d3.scale.category20c(),
				toolTipLabel:'Drilled Chart',
				xLabel:"Browser",
				yLabel:"Usage",
				title : 'Usage Of Browser in Last Year'
		}
		
		$("#drillDownChart").show();
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart3=$("#line1").stocCharts(textStyleConfg);
		stocChart3.drawDrillDownChart("#line1", barData,cfgDrillDown);
	
	
	
	
  });
  
  
   $("#heatmapMenu").click(function(){
   $(".chartDetails").hide();
	  $(".heatmapMenu").show();
	
	selectedChartIndex=$(this).attr("index");
	updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
	
	/*
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
	*/
	
	var heatMapData = {
			data:{
				Rajiv:[18,20,22,16,10],
				Akash:[10,29,21,50,22],
				Mohit:[11,26,23,9,27],
				Gurjant:[13,16,29,18,21],
				Guarav:[18,12,23,14,8]
			},
			xLabel:"Employee Name",
			yLabel:"Working Hours",
			yAxisValue:['Monday','Tuesday','Wednesday','Thursday','Friday']
	};
	
	var cfgHeatMap = {
		
			colorLow: '#5c6b6b',
			colorMed: '#535c5c',
			colorHigh: '#2f3939',
			yAxisLabelSpacing: 80
	}
	
	//var yAxisValue = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
	//var xAxisValue = ['Akash', 'Rajiv', 'Mohit', 'Gaurav', 'Gurjant'];
	
	$("#heatmap").show();
	var stocChart4=$("#line1").stocCharts(textStyleConfg);
	stocChart4.drawHeatMapChart('#line1', heatMapData,cfgHeatMap);
  });
  
    $("#transitPieMenu").click(function(){
		$("#line1").empty();
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".transitPieMenu").show();
		
		$("#transitPie").show();
		
		var dataSet= {
						key :['Agnitio','Apple Inc','IBM','Facebook','Accenture','Gold Man Sach'],
						value : [12000,8850,10000,4234,10234,12134],
						label : 'Cost',
						color : ['#e67a77','#95d7bb','#aec785','#fcb322','#6d788e','#a48ad4'],
						legendOrient : "left"
					};
		   
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":12,"background":"none","font-color":"white","font-weight":30"axisTextColor":"purple","legendTextColor":"#a7a7a7"};	
		var stocChart5=$("#line1").stocCharts(textStyleConfg);
		//var colorPieArray=["#7cb5ec","#434348","#90ed7d","orange","green","cyan"];
		stocChart5.drawPieChartWithTransition(dataSet);
		
	});
  
    $("#radarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	    $(".radarChartMenu").show();
		$("#line1").empty();
		
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
		
		var mycfg = {
		  
		  maxValue: 15,
		  levels: 3,
		  ExtraWidthX: 100
		}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart6=$("#line1").stocCharts(textStyleConfg);
		stocChart6.drawRadarChart("#line1", d, mycfg);
		
	});
  
  
    $("#multiAxisMenu").click(function(){
	
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		
		$(".chartDetails").hide();
	  $(".multiAxisMenu").show();
	  
		$("#line1").empty();
		$("#multiAxis").show();	
		
		var mulitpleLineBarData={'sea-level':{"color":'#3be5b1','indicationLabel':'Sea Level Pressure','chartType':'line','lineType':'cardinal','isDottedLine':false,'unit':'mb','data':gernerateMultiLineData(40,80)},'temperature':{'color':'#90ed7d','chartType':'line','indicationLabel':'Temperature','lineType':'linear','unit':'C','data':gernerateMultiLineData(60,80),'isDottedLine':true},'rainfall':{'color':'#7cb5ec','chartType':'bar','indicationLabel':'Rain Fall','unit':'mm','data':gernerateMultiLineData(20,100)}};
		var xAxis={'ticks':generateDate()};
		
		var textStyleConfg1={};
		var stocChartLineBars=$("#line1").stocCharts(textStyleConfg1);
		stocChartLineBars.drawBarWithMultipleLineAndCircle({'data':mulitpleLineBarData,'marginLeft':50,'marginRight':50,'xAxis':xAxis,'indicationLabel':'Category'});
		

  });
  
  
    $("#groupedBarMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
	$(".chartDetails").hide();
	  $(".groupedBarMenu").show();
		$("#groupedBar").show();
		
		var groupedChartData=generateDataForStackChart();
		groupedChartData=groupedChartData.slice(0,groupedChartData.length-3);
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var colorJson={"pending":"#00FFFF","approved":"#00FF7E","rejected":"#FFA500","halted":"#4FB6F2"};
		var stocChart8=$("#line1").stocCharts(textStyleConfg);
		
		//var colorJson={"pending":"#3e99f0","approved":"rgb(237, 128, 250)","rejected":"#fe8625","halted":"#5fe9e4"};
		
		
		
		var colorArray=["#7cb5ec","#434348","#90ed7d","red"];
		stocChart8.groupedBarChart({'data':groupedChartData,'xFieldName':'doj','widthOfBar':'',
		'showAllTicks':true,'colors':colorJson,yAxisfactor : "Orders Quantity",title:"Orders Analysis Of Last 11 Month's",
			yLabelColor:"grey",
			xAxisfactor : "Month",
			xLabelColor:"green"});
		
	});
	  
	  
	$("#3DBarChartMenu").click(function(){
		
	  selectedChartIndex=$(this).attr("index");
	  updateJsfiddleLink(selectedChartIndex);
	  $("#line1").empty();
	  $(".chartDetails").hide();
	  $(".3DBarChartMenu").show();
		$("#3DBarChart").show();
		
		var barData = [15, 80, 120, 280, 50, 65, 900, 40, 23, 98];
		
		var cfg3DBarChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			toolTipLabelForYAxis: "Sales(in Crores)",
			color: "#92e2dd",
			xAxisTickArray:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
			xLabel:"Year",
			yLabel:"Sales(in Crores)",
			title : "Last 10 Year Sales"
		}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart10=$("#line1").stocCharts(textStyleConfg);
	    stocChart10.drawThreeDBarChart("#line1", barData, cfg3DBarChart);
		
	});
	
	$("#3DGroupedBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
        $("#line1").empty();
		$("#3DGroupedBarChart").show();
		
		$(".chartDetails").hide();
	  $(".3DGroupedBarChartMenu").show();
		
		var barDataOne = [15, 80, 120, 280, 50, 65, 900, 40, 23, 98, 634];
		var barDataTwo = [150, 180, 20, 20, 90, 650, 300, 400, 230, 308, 434];
		
		var cfg3DBarChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			toolTipLabelForYAxis: "Sales(in Crores)",
			colorArray:["#39ec6e","#ff9811","#63deff","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"],
			xAxisTickArray:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019, 2020],
			barColorArray : ['#16ffb5','#869cb3'],
			xLabel:"Year",
			yLabel:"Sales(in Crores)",
			title : "Comparision Of Sale OF Two Item's in Last 10 years"
		}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart38=$("#line1").stocCharts(textStyleConfg);
	    stocChart38.drawThreeDGroupedBarChart("#line1", barDataOne, barDataTwo, cfg3DBarChart);
		
	});

	
	 $("#3DStackedBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		 $(".chartDetails").hide();
	  $(".3DStackedBarChartMenu").show();
	  
	$("#line1").empty();
		$("#3DStackedBarChart").show();
		
		var heightOfBarOne = [15, 80, 120, 180, 50, 65, 30];
		var heightOfBarTwo = [60, 20, 70, 40, 100, 95, 500];
		
		var threeDStackedBarsData = [{
				'key': 'Barclays',
				'data': [15, 80, 120, 180, 50, 65, 30, 109, 210,13, 123,210, 210]
			}, {
				'key': 'Morgan Stanley',
				'data': [60, 20, 70, 40, 100, 95, 230, 123, 100,24, 231, 210, 210]
			}, {
				'key': 'SBI',
				'data': [40, 28, 79, 100, 40, 195, 20, 78, 321,45, 109, 210, 210]
			}, {
				'key': 'American Express Bank',
				'data': [140, 280, 179, 200, 109, 95, 300, 86, 123,56, 290, 210, 210]
			}, {
				'key': 'Indusland Bank',
				'data': [120, 34, 50, 100, 400, 65, 30, 34, 310,76, 19, 210, 210]
			}, {
				'key': 'Yes Bank',
				'data': [80, 180, 179, 300, 40, 109, 89, 120, 230,89, 99, 210, 210]
			}];

		
		
		var colorArray=["#39ec6e","#ff9811","#63deff","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"];
		var cfg3DBarChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			toolTipLabelForYAxis: "Sales(in Crores)",
			colorArray: ["#39ec6e","#ff9811","#63deff","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"],
			title:"Sale Comparision Of Companies In Respective Year",
			xLabel:"Year",
			yLabel : "Sales(in Crores)",
			axisTextColor:'purple',
			legendTextColor:'purple'
		}
		var gridLineColor = "#4d4d4d";
		var textColor = "Grey";
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart27=$("#line1").stocCharts(textStyleConfg);
		var xAxisArray = ['1994', '1995', '1996', '1997', '1998', '1999','2000','2001','2002','2003', '2004', '2005', '2006'];
	    stocChart27.drawThreeDStackedBarChart("#line1", heightOfBarOne, heightOfBarTwo, threeDStackedBarsData, cfg3DBarChart, colorArray, gridLineColor, textColor, xAxisArray);
		
	});
	  
	$("#stackedAreaChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".stackedAreaChartMenu").show();
		$("#line1").empty();
		$("#stackedAreaChart").show();
		
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
		
		var cfgStackedAreaChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c(),
			xLabel:"Time"
		}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};	
		var stocChart11=$("#line1").stocCharts(textStyleConfg);
	    stocChart11.drawStackedAreaChart("#line1", stackedAreaData, cfgStackedAreaChart);
		
	});
	  
	$("#stackedBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".stackedBarChartMenu").show();
		$("#line1").empty();
		$("#stackedBarChart").show();
		
		var sdata=[];		
		var stackChartData=[];
		
		d3.json("getBuisinessDetailByChannel.json?v=10", function(error, treeData) {
			stackChartData=treeData.data.MarketplaceInfo.summary;
			
			
			$(stackChartData).each(function(i,obj){
			
				sdata.push({"settledAmount":obj.settledAmount,"unsettledAmount":obj.unsettledAmount,'timeIndex':obj.channelId});
			});
			
			
			var colorArray={"settledAmount":"#FFA500","unsettledAmount":"#4FB6F2"};
			var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":"12","background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white"};
			var stockChart12=$("#line1").stocCharts(textStyleConfg);
			stockChart12.stackedBarChart({'data':sdata,'colorArray':colorArray,'xFieldName':'timeIndex','widthOfBar':20,'showAllTicks':true,'columnHeadingArray':treeData.columnHeading,'xAxisIndicationLabel':'Company','yAxisIndicationLabel':'Amount'});
		});
		
	});
	  
    $("#funnelChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".funnelChartMenu").show();
		$("#line1").empty();
		$("#funnelChart").show();
		
		var data =  {
     
					  funnelData : [50,40,30,20],
					  funnelKey : ["Product A","Product B","Product C","Product D"],
					  colorArray : ["#76aaa0","#e97953","#fcca7a","#597090"],
					  label:"Consumption",
					  unit:"%"
      
					}
  
      var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"red","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};	
	  var stockChart14=$("#line1").stocCharts(textStyleConfg);
	  stockChart14.drawFunnelChart(data)
	});
	  
    $("#guageGraphMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".guageGraphMenu").show();
	$("#line1").empty();
		$("#guageGraph").show();
		
		var dataA=generateData(100,10000);
		var stockChart15=$("#line1").stocCharts();
		stockChart15.gaugeGraph({'dataA':[{"maxSpeedVal":200,"speedVal":80}],"id":"#line15",'arcStartIndLabel':'No Risk','arcMiddleIndLabel':'Meter','arcEndIndLabel':'Total', 'textColor':'#000'});
		
	});
	  
	$("#areaChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".Zoomable").show();
		$("#line1").empty();	
		$("#areaChart1").show();
		
		var data=generateData(100,500);
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stockChart=$("#line1").stocCharts(textStyleConfg);
		stockChart.areaChart({'data':data,'xFieldName':'doj',"yFieldName":'id','title':'Profit Analysis Chart','xAxisIndicationLabel':'Time Index','yAxisIndicationLabel':'Money','axisColor':'#222222','attachBrushEvent':true,'redraw':false});
		stockChart.circleChart({'color':"#fff953",'r':3,'data':data});
		
		
	});
	  
	 
	$("#pyramidChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		console.log("clicked");	
		
		$("#line1").empty();
		$("#pyramidChart").show();
		$(".chartDetails").hide();
	  $(".pyramidChartMenu").show();
		
		var cfgPyramidChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c()
		}
		
		var stockChart13=$("#line1").stocCharts();
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
			var yLabel="Amount";
			stockChart13.drawPyramidChart(pyramidPercentData,payableSummaryArray,false,yLabel);
			
		});
		
	});
	  
	$("#invertPyramidMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();	
		$('#invertPyramid').show();
		
		$(".chartDetails").hide();
	  $(".invertPyramidMenu").show();
		
		var cfgPyramidChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			color: d3.scale.category20c()
		}
		
		
		var invertStockChart=$("#line1").stocCharts();
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
			
			var yLabel="Amount";	
			invertStockChart.drawPyramidChart(pyramidPercentData,payableSummaryArray,true,yLabel);		
			
		});
	});
	  
	  
	$("#meterChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$('#meterChart').show();
		
		$(".chartDetails").hide();
	  $(".meterChartMenu").show();
		
		try{
		  
		  meterChart.init('line1','',380,320);
		  meterChart.turnNeedle(-90);
		  setTimeout(function(){
		   meterChart.turnNeedle(90);
		  },2000);
		  
		}
		catch(err){
			console.log("error meter chart ");
		}	
	});
	
	$("#groupedBar2DMenu").click(function(){
		
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
       $("#line1").empty();
	   $(".chartDetails").hide();
	  $(".groupedBar2DMenu").show();
	  
		$("#groupedBar2D").show();
		
		var groupedChartData=generateDataForStackChart(-20);
		groupedChartData=groupedChartData.slice(0,groupedChartData.length-3)
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var colorJson={"pending":"#00FFFF","approved":"#00FF7E","rejected":"#FFA500","halted":"#4FB6F2"};
		
		var stocChart19=$("#line1").stocCharts(textStyleConfg);
		//var colorJson={"pending":"#3e99f0","approved":"#69ff4a","rejected":"#fe8625","halted":"#5fe9e4"};
		//var colorArray=["#7cb5ec","#434348","#90ed7d","#f9b169"];
		var midVal=0;
		stocChart19.groupedBar2DChart({'data':groupedChartData,'xFieldName':'doj','widthOfBar':'',
		'showAllTicks':true,'colors':colorJson,yAxisfactor : "Sales Percentage","title":"Sale Analysis Of Last 11 Month's",
			yLabelColor:"grey",
			xAxisfactor : "Indexes(in whole number)",
			xLabelColor:"green"
			
			},midVal);
		
	});	
	
	$("#3DPyramidChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#3DPyramidChart").show();
		
		$(".chartDetails").hide();
	  $(".3DPyramidChartMenu").show();
		
		var colorArray1=["#fffc00","#ffb400","#2ca02c","#d62728","#9467bd","#5fe9e4", "#3e99f0", "#1cff31", "#bcbd22"];
		var data1=[200, 150, 100, 100, 202, 201, 50];
		
		var labelArray=["DUSTER","Qualis","Scorpio","Eco Sport","Honda city","Altis","EON"];
		var confg1={"data":data1,"colorArray":colorArray1,"labels":labelArray,"unit":"M$"};
		
		var stocChart20=$("#line1").stocCharts();
		stocChart20.draw3DPyramidChartWithoutSlice(confg1);
	});	
	
	
	$("#3DPyramidSliceChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#3DPyramidSliceChart").show();
		$(".chartDetails").hide();
	  $(".3DPyramidSliceChartMenu").show();
		
		var colorArray=["#fffc00","#ffb400","#2ca02c","#d62728","#9467bd","#5fe9e4", "#3e99f0", "#1cff31", "#bcbd22"];
		var data=[200, 155, 110, 130, 240, 270, 185];
		var labelArray=["Ford","Mercedes","Volkswagon","Ferrari","BMW","RENUALT","HYUNDAI"];
		var config={"data":data,"colorArray":colorArray,"labels":labelArray,"unit":"B$"};
		
		var stocChart21=$("#line1").stocCharts();
		stocChart21.draw3DPyramidSliceChart(config);
	});	
	
	
	$("#dountChartWithLegendMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$(".chartDetails").hide();
	  $(".dountChartWithLegendMenu").show();
	  
		$("#dountChartWithLegend").show();
		
		var data= {
				key :['Mozilla','IE','Firefox','Chrome','Opera','Safari'],
				value : [10,50,80,60,40,80],
				label : 'popular',
				color : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785','#a48ad4']
		   };
		
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":12,"background":"none","font-color":"green","font-weight":300,"axisTextColor":"purple","legendTextColor":"#a7a7a7"};	
		var cnfg={"data":data,"divId":"line1"}
		var stocChart21=$("#line1").stocCharts(textStyleConfg);
		stocChart21.dountChartWithLegend(cnfg);
	});	
	
	//data consideration
	$("#dountWithBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$(".chartDetails").hide();
	  $(".dountWithBarChartMenu").show();
		$("#dountWithBarChart").show();
		
		var data= {
				key :['India','China','Japan','Canada','Australia','England'],
				value : [10,50,80,60,40,80],
				label : 'employee',
				textAndLegendColor : 'white',
				color : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785','#a48ad4']
		   };
		var subDataArray = {
					key :['Doctor','Engineers','Social Worker','Government Employees','unemployed'],
					color :["#3e9ad9","#f99237","#5ace5a","#fa5051","#c198e6"],
					India :[45,67,32,56,34],
					China :[34,54,42,24,45],
					Japan :[23,34,45,40,23],
					Canada : [82,62,54,199,78],
					Australia : [45,34,23,32,44],
					England :[56,24,54,32,40]
				}; 
		
		var legendTextColor="purple";	
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":12,"background":"none","font-color":"#333333","font-weight":300,"axisTextColor":"purple","legendTextColor":"#a7a7a7"};
		var cnfg={"data":data,"divId":"line1","subDataArray":subDataArray}
		var stocChart23=$("#line1").stocCharts(textStyleConfg);
		stocChart23.drawDountWithBarChart(cnfg);
	});	
	
	$("#BulletBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
	$(".chartDetails").hide();
	  $(".BulletBarChartMenu").show();
		$("#BulletBarChart").show();
		
		var data1=[{"population":100,'year':2007},{"population":50,'year':2008},{"population":150,'year':2009},{"population":100,'year':2010},{"population":200,'year':2011},{"population":150,'year':2012},{"population":250,'year':2013},{"population":300,'year':2014}];
		var data2=[{"population":200,'year':2007},{"population":50,'year':2008},{"population":150,'year':2009},{"population":100,'year':2010},{"population":200,'year':2011},{"population":150,'year':2012},{"population":400,'year':2013},{"population":700,'year':2014}];
		
		var colorArray=["#90ed7d","#5fe9e4"];
		var xFieldName="population";
		var yFieldName="year";
		var axisColor="#a7a7a7";
		var cnfg={"data1":data1,"data2":data2,"colorArray":colorArray,"xFieldName":xFieldName,"yFieldName":yFieldName,"axisColor":axisColor,"xLabel":"Population","yLabel":"Year","title":"Sales Comparisons Chart Of Last 8 Years"};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart24=$("#line1").stocCharts(textStyleConfg);
		stocChart24.bulletBar(cnfg);
	});	
	
	
	$("#CricketAnalChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".CricketAnalChartMenu").show();
$("#line1").empty();
		$("#CricketAnalChart").show();
		
		//var data=[{"over":10,'run':10},{"over":12,'run':5},{"over":15,'run':8},{"over":18,'run':2},{"over":20,'run':0},{"over":22,'run':20}];
		
		var AdvancedBarData={
			"textColor":"Black",
			 "textFontFamily":"Cursive",
			 "tital" : ['INDIA','ENGLAND','Fourth Royel London ODI','Edgbaston'],
			 "titalColor" : "#867114",
			 "yLabel":"RUNS",
			 "yData":[3,5,6,8,9,10,1,13,15,3,5,6,2,1,2,4,7,8,3,13,6,5,6,7,5,4,7,9,3,4,5,6,8,14,12],
			 "xLabel":"OVERS",
			 "xLabelColor" : "white",
			 "xDatacolor" : "#182051",
			 "xData":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
			 "specialXDataLabel"  : 'power Play',
			 "specialXDataColor"  :  "#9a862d",
			 "specialXData" : [1,2,3,4,5,6,33,34,35],
			 "specialDataLabel":"./img/red-ball.png",
			 "specialIcon":"circle",
			 "specialData":{1:[{"Maxwell":"bowled Umesh Yadav"}],7:[{"Watson":"c Kohli b Jadeja"},{"Baily":"c & b Jadeja"}]},
			 "font-style":"Arial Black",
			 "specialDataLabelOfWicket" : "./img/wikets.png"
		}
		
		var colorArray=["#A3BFDB"];
		var xFieldName="over";
		var yFieldName="run";
		var axisColor="black";

		
		var cnfg={"data":AdvancedBarData,"colorArray":colorArray,"xFieldName":xFieldName,"yFieldName":yFieldName,"axisColor":axisColor};
		var stocChart25=$("#line1").stocCharts();
		stocChart25.cricketAnalysis(cnfg);
	});	
	
	
	$("#CombinationalChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#CombinationalChart").show();
		
		$(".chartDetails").hide();
	  $(".CombinationalChartMenu").show();
		
		
		var data = {
					title : 'GDP comparison Chart',
					xAxisLabel : 'years',
					xAxisData: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013],
					yLabel : 'GDP',
					labelLine1 :'india',
					dataOfLine1 : [19,34,70,12,-42,20,-14,67,112,78],
					labelLine2 : 'canada',
					dataOfLine2 :[34,25,-60,22,92,30,24,47,53,38],
					revenueUnit : '$',
					PieData:{
					         //point wise data
					         'Data1':[76,43,54,32,66,34,21,56,12,55],
					         'Data2':[45,56,23,67,49,34,65,24,57,66]
							 },
				    pieDataFactor:"Revenue($)",
					revenueOfLine1 :[76,43,54,32,66,34,21,56,12,55],
					revenueOfLine2 :[45,56,23,67,49,34,65,24,57,66],
					color : ["#1bff8c","#5fe7ff"],
					clickedInfo :{2009:"INDAIN GDP IS FASTEST GROWING ECONOMY",
					2006:"INDAIN GDP IS FASTEST GROWING ECONOMY",
					2012:"INDAIN GDP IS FASTEST GROWING ECONOMY"}
								,	
					clickedSybmol :'./img/N.png'
	           };
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart26=$("#line1").stocCharts(textStyleConfg);
		stocChart26.drawCombinationalChart(data);
		
	});	
	
	$("#variationChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#variationChart").show();
		
		$(".chartDetails").hide();
	  $(".variationChartMenu").show();
		
		var variationData={
							"title" : "Temperature variation by month",
							"subTitle" : "Observed in Vik i Sogn, Norway, 2014",
				     		"titleColor" : "gray",
							"yAxisLabel" : 'Month',
				            "yAxisData": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						    "xAxisLabel" : "\u00B0"+"C",
						    "xAxisData" : [
					     					[-9.7, 9.4],                  
					 	    				[-8.7, 6.5],
							    			[-3.5, 9.4],
									    	[-1.4, 19.9],
		    						  		[0.0, 22.6],
	     									[2.9, 29.5],
										    [9.2, 30.7],
										    [7.3, 26.5],
										    [4.4, 18.0],
										    [-3.1, 11.4],
										    [-5.2, 10.4],
										    [-13.5, 9.8]
									      ],
							}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var cnfg={"data":variationData};
		var stocChart28=$("#line1").stocCharts(textStyleConfg);
		stocChart28.variationAnalysis(cnfg);
	});	
	
	$("#globChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
		$("#globChart").show();
		$(".chartDetails").hide();
	  $(".globChartMenu").show();
		var globData = {
						'title' : 'Connected Airlines',
						'titleColor' : 'gray',
						'titleSize' : 20,
						'hoverColor':"orange",
						'nodesArray':['Mumbai','Delhi','calgary','New York','Cape Town','Perth','Sydney','Quito','Brasilia','Santiago','Mexico City','Reykjavik','Omsk','Accra','Dakar','Tokyo','Malaysia','Kenya'],
						'nodesColor':["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#ff7f0e","#ff7f0e","#2ca02c","#d62728","#ff7f0e","#2ca02c","#8c564b", "#e377c2", "#0e0c1a", "#bcbd22","#0e0c1a", "#bcbd22","9467bd","d62728"],
						'cordArray':[[71,53],[73,58],[18,78],[29,72],[55,20],[84,22],[95,19],[26,43],[37,36],[27,20],[21,60],[44,82],[72,78],[49,49],[44,56],[89,66],[80,39],[59,39]],
						'backGroundImage' : "./img/world-map.jpg",
						'Data':
							[ 
								{
									"node":"Mumbai", 
									"connectedNodes":['New York','Cape Town','Perth'],
									"pathTexts":['23h 40m','2h 3m','19h 23m'],
									'pathColor':'green'
								},
								{
									"node":"Delhi", 
									"connectedNodes":['Tokyo','Quito','Reykjavik'],
									"pathTexts":['13h 10m','4h 3m','14h 21m'],
									'pathColor':'orange'
								},
								{
									"node":"calgary", 
									"connectedNodes":['Brasilia','Santiago','Reykjavik','Accra'],
									"pathTexts":['13h 30m','5h 23m','9h 3m','7h 53m'],
									'pathColor':'black'
								},
								{
									"node":"New York", 
									"connectedNodes":['Brasilia','Sydney','Santiago','Omsk'],
									"pathTexts":['4h 42m','12h 31m','11h 13m','9h 3m'],
									'pathColor':'cyan'
								},
								{
									"node":"Dakar", 
									"connectedNodes":['Mexico City','Santiago','Cape Town','Kenya'],
									"pathTexts":['18h 22m','8h 38m','18h 3m','10h 33m'],
									'pathColor':'purple'
								},
								{
									"node":"Omsk", 
									"connectedNodes":['Tokyo','Reykjavik','Malaysia'],
									"pathTexts":['23h 40m','2h 3m','4h 22m'],
									'pathColor':'purple'
								},
								{
									"node":"Sydney", 
									"connectedNodes":['Tokyo','Cape Town','Malaysia','Kenya'],
									"pathTexts":['23h 40m','2h 3m','3h 21m','7h 7m'],
									'pathColor':'brown'
								}
							]
   
					}
		
		var cnfg={"data":globData};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"gray","titleFontSize":16};
		var stocChart29=$("#line1").stocCharts(textStyleConfg);
		stocChart29.globChartAnalysis(cnfg);
	});	
	
	$("#barWithLogoMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#barWithLogo").show();
		
			$(".chartDetails").hide();
	  $(".barWithLogoMenu").show();
		
		//var data=[{"over":10,'run':10},{"over":12,'run':5},{"over":15,'run':8},{"over":18,'run':2},{"over":20,'run':0},{"over":22,'run':20}];
		
		var AdvancedBarData={
			 "title":"Company Profit Analysis Graph",
			 "yData":[3,5,6,2,10,20,10],
			 'xData':["Volkswagen","Hyundai","Toyota","Ford","porsche","Ebay","Paxcom"],
			 "imagePathArray":["./img/logos/1.jpg","./img/logos/2.jpg","./img/logos/3.jpg","./img/logos/4.jpg","./img/logos/5.jpg","./img/logos/6.jpg","./img/logos/7.jpg"],
			 "color":["#e67a77"],
			 "yIndicationLabel":"Profit(in Billion $)",
			 "xIndicationLabel":"Company"
			 
			 /*
			 "yData":[3,5,6],
			 "xData":[1,2,3],
			 "imagePathArray":["./img/logos/1.jpg","./img/logos/2.jpg","./img/logos/3.jpg"],
			 "color":["cyan"]
			 */
		}
		
		var colorArray=["#A3BFDB"];
		var xFieldName="over";
		var yFieldName="run";
		var axisColor="black";

		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var cnfg={"data":AdvancedBarData};
		var stocChart30=$("#line1").stocCharts(textStyleConfg);
		stocChart30.barWithLogo(cnfg);
	})
	
	$("#detailChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#detailChart").show();
		
		$(".chartDetails").hide();
	    $(".detailChartMenu").show();
		
		
		var data = {
						'title' : 'Last 20 Balls Progression Of Innings',
						'titleSize' : 20,
						'titleColor' : 'gray',
						'leftYAxisData' :   [6,6.1,6,6.5,6.2,7,4,3,6,7,4,3.4,5,5,6,5,3,6,7,6],
						'leftYAxisColor' : 'yellow',
						'leftYAxisLabel' :  'Average',
						'leftYAxisUnit' : 'rpo',
						'rightYAxisData' :  [202,203,205,205,209,210,216,218,220,221,222,223,227,231,233,239,243,243,245,249],
						'rightYAxisColor' : '#00ffff',
						'rightYAxisLabel' : 'Total Runs',
						'rightYAxisUnit' : 'runs',
						'xAxisData' :       [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
						'xAxisLabel' : 'Last 20 Balls',
						'topYSymbolArray'  : ['two','one','two','wicket','four','one','six','two','two','one','one','one','four','four','two','six','four','wicket','two','four'],
						'topYSymbolLabel' : 'Runs Scored',
						'bottomYSymbolArray' :  ['inSwing','shortPitch','outSwing','yorker','outSwing','yorker','inSwing','shortPitch','outSwing','yorker','outSwing','yorker','inSwing','shortPitch','outSwing','yorker','outSwing','yorker','outSwing','yorker'],
						'bottomYSymbolLabel' : 'Ball Type',
						"imageFolderPath":'./img/'
					}
		
		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart31=$("#line1").stocCharts(textStyleConfg);
		stocChart31.detailAnalysis(cnfg);
	});	

	$("#3DbubbleChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
	$("#3DBubbleChart").show();
	
	$(".chartDetails").hide();
	  $(".3DbubbleChartMenu").show();
	
	
	var series= [{
		data: [[97, 36, 79], [94, 74, 60], [68, 76, 58], [64, 87, 56], [68, 27, 73], [74, 99, 42], [17, 93, 87], [151, 69, 40], [138, 123, 33], [57, 86, 31]]
	}, {
		data: [[125, 10, 87], [12, 75, 59], [111, 54, 8], [86, 55, 93], [115, 3, 58], [190, 63, 44], [191, 33, 17], [97, 113, 56], [115, 67, 48], [54, 125, 81]]
	}, {
		data: [[147, 47, 21], [120, 12, 4], [116, 76, 91], [38, 30, 60], [57, 98, 64], [61, 117, 80], [183, 60, 13], [167, 78, 75], [164, 112, 10], [30, 77, 82]]
	}];

	var bubbleData={
						"title" : "Project Staffing And Revenue",
						"titleColor" : "gray",
						"yAxisLabel" : 'No. of Resources',
						"yAxisData": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						"xAxisLabel" : "Revenue(in Crores)",
						"xAxisData" : [
										[-9.7, 9.4],                  
										[-8.7, 6.5],
										[-3.5, 9.4],
										[-1.4, 19.9],
										[0.0, 22.6],
										[2.9, 29.5],
										[9.2, 30.7],
										[7.3, 26.5],
										[4.4, 18.0],
										[-3.1, 11.4],
										[-5.2, 10.4],
										[-13.5, 9.8]
									  ],
						"series" : [{
										data: [[97, 36, 79], [94, 74, 60], [68, 76, 58], [64, 87, 56], [68, 27, 73], [74, 99, 42], [17, 93, 87], [151, 69, 40], [138, 123, 33], [57, 86, 31]]
									}, {
										data: [[125, 10, 87], [12, 75, 59], [111, 54, 8], [86, 55, 93], [115, 3, 58], [190, 63, 44], [191, 33, 17], [97, 113, 56], [115, 67, 48], [54, 125, 81]]
									}, {
										data: [[147, 47, 21], [120, 12, 4], [116, 76, 91], [38, 30, 60], [57, 98, 64], [61, 117, 80], [183, 60, 13], [167, 78, 75], [164, 112, 10], [30, 77, 82]]
									}],
						'legendArray':["Accenture","Wipro","Infosys"],
						'colorArray'  :["#10d0d0","#ffa500","#00ff7e"] 	
					}
	
	var cnfg={"data":bubbleData};
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
	var stocChart32=$("#line1").stocCharts(textStyleConfg);
	stocChart32.threeDBubbleChart(cnfg);
});	
	
	$("#treeChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
	 $("#treeChartMenu").show();
	 $(".chartDetails").hide();
	  $(".treeChartMenu").show();
	  
	
		var data = {

  "Root": "Intake Type",
  "SubRoot": 
   [

    {
      "Element":"Protein",
      "SubRoot":
     [
       {          
       "Element":"Tuna",
       "SubRoot":[{
        
         "Element" : "New",
         "SubRoot":[{
        
           "Element" : "New"
          },
          {        
           "Element" : "Old"
          }
         ]
        },
        {        
         "Element" : "Old"
        }
       ]
       },
       {
       "Element":"Salmon"           
       },
       { 
       "Element":"Egg Whites"          
       },
       {
       "Element":"Whey Protein"           
       },
       {
       "Element":"Plant based protein"           
       }
     ]
    },
      {
      "Element":"Carbohydrate",
      "SubRoot":
     [
      {          
       "Element":"Quinoa"            
      },    
      {       
       "Element":"High-fiber bread"          
      },
      {          
       "Element":"Oats"            
      },    
      {       
       "Element":"Muesli"          
      }
     ],
      
    },
    {
      "Element":"Fluids",
      "SubRoot":
     [
      {          
       "Element":"Coconut Water"            
      },    
      {       
       "Element":"Black Coffee"          
      },
      {          
       "Element":"Green Tea"            
      },    
      {       
       "Element":"BCAA"          
      }
     ]          
      },
    {
      "Element":"Fats",
      "SubRoot":
     [
      {           
       "Element":"Olive Oil"             
      },    
      {       
       "Element":"Canola Oil"           
      },
      {           
       "Element":"Natural Nutt Butters"             
      },    
      {       
       "Element":"Fatty Fish"           
      }
      ]          
      }
    
   ]};
			
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white"};
		var stocChart33=$("#line1").stocCharts(textStyleConfg);
		var cfg={"data":data,"link-color":"#ccc","node-color":"#fff"};
		stocChart33.treeChart(cfg);
	});	
	
	$("#areaChartWithVaryColorMenu").click(function(){	
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#areaChartWithVaryColor").show();
		
		$(".chartDetails").hide();
	  $(".areaChartWithVaryColorMenu").show();
		
		var data = {
						 title : "FootFall Intensity in last 10 hours",	
						 yAxisArray : [-23,45,12,-23,-13,-66,-44,24,34,-12,40,67,-20,-32,-24,-28,20,40,70,-78],
						// xAxisArray:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
						 xAxisArray:["8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],
						 midPoint : 5,
						 midPointLabel : "Average Amount",
						 conditionArrayAboveMidPoint : [{34:"#df4242"},{48:"#e7a61a"},{70:"#154b07"}],
						 conditionArrayBelowMidPoint : [{25:"#bc0000"},{40:"#1f406e"},{50:"#c8b61b"}],
						 xAxisLabel:"Month",
						 yAxisLabel:"Amount"
					}
		
		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart34=$("#line1").stocCharts(textStyleConfg);
		stocChart34.areaChartWithVaryColorAnalysis(cnfg);
	});	
	
	$("#areaChartWithNegativeValueMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#areaChartWithNegativeValue").show();
		
		$(".chartDetails").hide();
	  $(".areaChartWithNegativeValueMenu").show();
		
		var data = {
						 title : "FootFall Intensity in last 10 hours",
						 yAxisArray : [33,65,32,53,23,86,64,44,54,32,60,87,40,52,44,48,40,60,90,98],
						 xAxisArray:["8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],
						 midPoint : 55,
						 midPointLabel : "Average Amount",
						 conditionArrayAboveMidPoint : [{64:"#aaefec"},{78:"#90e0dc"},{100:"#6cc0bc"}],
                         conditionArrayBelowMidPoint : [{45:"#ffd1d0"},{35:"#f6b0ae"},{30:"#e67a77"}],
//						 conditionArrayAboveMidPoint : [{64:"green"},{78:"yellow"},{100:"red"}],
//						 conditionArrayBelowMidPoint : [{45:"green"},{35:"red"},{30:"yellow"}],
						 xAxisLabel:"Time",
						 yAxisLabel:"Amount"
					}
		
		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart35=$("#line1").stocCharts(textStyleConfg);
		stocChart35.areaChartWithNegativeValueAnalysis(cnfg);
	});
	
	$("#musicSpikesMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
	$("#line1").empty();
		$("#musicSpikes").show();
		
		$(".chartDetails").hide();
	  $(".musicSpikesMenu").show();

		var data = {
					    title : "Last 15 day's temperature readings",
						titleColor : "gray",
						yAxisUnit : "\u00B0"+"C",
						yAxisLabel : "Temperature",
						yAxisData : [18,25,42,25,20,35,45,20,40,10,30,40,32,44,40],
						xAxisLabel : "Month",
						xAxisData : ["1'Mar","2'Mar","3'Mar","4'Mar","5'Mar","6'Mar","7'Mar","8'Mar","9'Mar","10'Mar","11'Mar","12'Mar","13'Mar","14'Mar","15'Mar"]
				   }

		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart36=$("#line1").stocCharts(textStyleConfg);
		stocChart36.musicSpikesAnalysis(cnfg);
	});

	$("#comparisonChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#comparisonChart").show();
		
		$(".chartDetails").hide();
	  $(".comparisonChartMenu").show();

		var data =  {
						title : "Last 16 Year Data , Estimated v/s Actual Profit",
						titleColor : "gray",
						yAxisLabel : "Profit",
						yAxisUnit : "Million",
						yAxisEstimateData : [300,390,300,270,230,180,150,350,300,300,390,300,270,200,230,180],
						yAxisEstimateDataUnit : 'Estimated',
						yAxisActualData : [330,450,320,250,270,140,190,300,370,330,450,320,250,230,270,140],
						yAxisActualDataUnit : 'Actual',
						xAxisLabel : "Years",
						xAxisData : [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
					}

		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15};
		var stocChart37=$("#line1").stocCharts(textStyleConfg);
		stocChart37.comparisonAnalysis(cnfg);
	});
	
	$("#multipleDountChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#multipleDountChart").show();
		
		$(".chartDetails").hide();
	  $(".multipleDountChartMenu").show();

		var data =  
			{
			data:
			 [
				{
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"7th",
							totalStudent : "45"
				},
				{
						
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"8th",
							totalStudent : "45"
				},
				{
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"9th",
							totalStudent : "48"
				},
				{
						
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"10th",
							totalStudent : "44"
				},
				{
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"11th",
							totalStudent : "52"
				},
				{
						
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"12th",
							totalStudent : "45"
				},/*
				{
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"11th",
							totalStudent : "52"
				},
				{
						
							dountData : [50,80,60,40,80],
							dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
							colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785'],
							className :"12th",
							totalStudent : "45"
				},*/
				
				
			],
			title : "Represent Data Of Different Classes",
			unit:"Student's",
			legend : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
			legendColor: ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785']
			}
		

		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart39=$("#line1").stocCharts(textStyleConfg);
		stocChart39.multipleDountChartAnalysis(data);
	});
	
	$("#barWithLabelChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#barWithLabelChartMenu").show();
		
		$(".chartDetails").hide();
	  $(".barWithLabelChartMenu").show();

		var data =  {
						title : "Last Scores as compared to average of class",
						yAxisLabel : "Profit",
						yAxisUnit : "Million",
						yAxisData : [25,-17,36,-8,20,-10],
						averageValue : 0,
						yAxisDataUnit : 'Estimated',
						xAxisLabel : "Years",
						xAxisData : ["9th(math)","9th(physics)","9th(chemistry)","10th(math)","10th(physics)","10th(chemistry)"],
						colorArray : ['#e67a77','#95d7bb','#fcb322','#6d788e','#aec785','#a48ad4'],
						unit : "%"
						
					}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15};
		var stocChart40=$("#line1").stocCharts(textStyleConfg);
		stocChart40.barWithLabelAnalysis(data);
	});
	
	$("#logoChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
		$("#logoChart").show();
		
		$(".chartDetails").hide();
	  $(".logoChartMenu").show();

		var data =  
			{
				title:"Repesent Individual Performance Of Student",
				nameArray: ['John','Mark','Steev','Hussy','John','John','John','John',],
				classArray : ['10th','10th','10th','10th','10th','10th','10th','10th'],
				imageArray:["./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png"],
				imageFrameColor:["#00ff79","#00ff79","#ffa500","#ffa500","#00ff79","#00ff79","#ffa500","#ffa500"],
				textArray:[-20,30,-40,-50,20,10,50,-80],
				textColor : ["#00ff79","#ffa500"],
				legendArray:["Above Average","Below Average","Improving","Worsening"],
				legendImageArray:['#00ff79','#ffa500','#00ff79','#ffa500'],
				unit : "%"
				
				/*
				nameArray: ['John','Mark','Steev','Hussy','John'],
				classArray : ['10th','10th','10th','10th','10th'],
				imageArray:["./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png","./img/S3.png"],
				arrowImageArray:["./img/forward.png","./img/LeftArrow.png","./img/forward.png","./img/LeftArrow.png","./img/forward.png"],
				imageFrameColor:["green","red","#95d7bb","green","red","green","green","green"],
				textArray:["+20%","+30%","-40%","-50%","+20%","+10%","-50%","-80%"],
				legendArray:["Above Average","Below Average","Improving","Worsening"],
				legendImageArray:['#e67a77','#95d7bb','#fcb322','#6d788e']*/
				/*
				imageArray:["./img/S3.png","./img/S3.png"],
				arrowImageArray:["./img/forward.png","./img/forward.png"],
				imageFrameColor:["green","green"],
				textArray:["20%","30%"],
				legendArray:["Top Performer","Weak Performer"],
				legendColorArray:["green","red"]
				*/
			}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart41=$("#line1").stocCharts(textStyleConfg);
		stocChart41.logoChart(data);
	});
	
	$("#multiAxisChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
	//	$("#multiAxisChart").show();
		
		
			$(".chartDetails").hide();
	  $(".multiAxisChartMenu").show();

		var data =  
			{
			yObject:
			 [
				{
							yAxisData : [210,280,270,320,350,260,325],
							yAixsAvgData : [80,37,40,100,75,45,30],
							yAxisColor : "#00ffff"
				},
				{
						
							yAxisData : [240,250,160,295,160,180,170],
							yAixsAvgData : [35,25,20,45,30,20,55],
							yAxisColor : "#4fb6f2"
				},
				{
						
							yAxisData : [100,150,50,200,125,75,230],
							yAixsAvgData : [135,125,120,150,130,120,155],
							yAxisColor : "#ffa500"
				},
			],
			title:"V/S Chart",
			xAxisData : ["Jan","Feb","Mar","Apr","May","June","July"],
			unit:"Student's",
			legend : ["Student Login","Class Avg.Login","Student Interaction","Class.Avg Interaction","Student Time Spent","Class Time Spent"],
			legendColor: ['#00ffff','#00ffff','#4fb6f2','#4fb6f2','#ffa500','#ffa500']
			}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart42=$("#line1").stocCharts(textStyleConfg);
		stocChart42.multiAxisChartAnalysis(data);
	});
	
	$("#roundedThreeDBarMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
//		$("#multiAxisChart").show();	
			$(".chartDetails").hide();
	    $(".roundedThreeDBarMenu").show();

		var data =
			{
					title : "Foreign Visitors Rate",
					barData: [{
						"country": "USA",
						"visits": 4250,
						"color": "#FF0F00"
						}, {
						"country": "China",
						"visits": 3882,
						"color": "#FF6600"
						}, {
						"country": "Japan",
						"visits": 3409,
						"color": "#FF9E01"
						}, {
						"country": "Germany",
						"visits": 3022,
						"color": "#FCD202"
						}, {
						"country": "pakistan",
						"visits": 2622,
						"color": "#F8FF01"
						}, {
						"country": "France",
						"visits": 2214,
						"color": "#B0DE09"
						}, {
						"country": "India",
						"visits": 1984,
						"color": "#04D215"
						}, {
						"country": "Spain",
						"visits": 1511,
						"color": "#0D8ECF"
						}, {
						"country": "England",
						"visits": 1165,
						"color": "#0D52D1"
						}, {
						"country": "Russia",
						"visits": 980,
						"color": "#2A0CD0"
						}, {
						"country": "UK",
						"visits": 743,
						"color": "#8A0CCF"
						}, {
						"country": "Canada",
						"visits": 641,
						"color": "#CD0D74"
						}, {
						"country": "Brazil",
						"visits": 595,
						"color": "#754DEB"
						}, {
						"country": "Italy",
						"visits": 516,
						"color": "#999999"
						}],  
				
				xAxisLabel : "Country",
				yAxisLabel :"Visit(in Millons)",
				unit : ""		
			}
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart43=$("#line1").stocCharts(textStyleConfg);
		stocChart43.roundedThreeDBarAnalysis(data);
	});
	
	$("#threeDDountChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".threeDDountChartMenu").show();
		var data = 
		{
			dountData : [231,123,184,155,55],
			dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
		    colorArray : ['pink','#95d7bb','#fcb322','#e67a77','#aec785'],
			unit : "%",
			factor :"Students"
		}
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white"};
		var stocChart43=$("#line1").stocCharts(textStyleConfg);
		stocChart43.threeDDountChartAnalysis(data);
	});
	
	$("#threeDPieChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".threeDPieChartMenu").show();
		var data = 
		{
			dountData : [231,123,184,155,55],
			dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
		    colorArray : ['pink','#95d7bb','#fcb322','#e67a77','#aec785'],
			unit : "%",
			factor :"Students"
		}
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white"};
		var stocChart44=$("#line1").stocCharts(textStyleConfg);
		stocChart44.threeDPieChartAnalysis(data);
	});
	
	
	$("#arcWithCylinderMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".arcWithCylinderMenu").show();
		var data = 
		{
			title : "JAMES ANDERSON",
			subData:
			 [
				{
							key : "MATCH",
							barData: [80,30,18,15,10,5],
							label : ['AUS','PAK','SA','WI','INDIA','ENG']						
				},
				{
							key : "RUN",
							barData: [575,75,66,56,52,47],
							label : ['INDIA','ENG','AUS','WI','SA','PAK']
							
							
				},
				{
							key : "SR",
							barData: [77,47,41,34,32,20],
							label : ['SA','PAK','INDIA','ENG','AUS','WI']
							
				},
				{
							key : "AVG",
							barData: [15.6,14,12,11,10,9],
							label : ['INDIA','WI','ENG','PAK','AUS','SA']
							
				},
				{
							key : "100s",
							barData: [90,70,60,50,20,10],
							label : ['WI','ENG','INDIA','PAK','AUS','SA']
							
				}
			],
			color :{ "INDIA" : "#e67a77",
				     "PAK": "#95d7bb",
					"SA": "#fcb322",
					"WI": "#6d788e",
					"AUS": "#aec785",
					"ENG": "#a48ad4"
				 }
					
		}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16};
		var stocChart45=$("#line1").stocCharts(textStyleConfg);
		stocChart45.arcWithCylinderChartAnalysis(data);
	});
	
	$("#threeDComparisionChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".threeDComparisionChartMenu").show();
		
		var data =  {
						title : "Last 16 Year Data , Estimated v/s Actual Profit",
						yAxisLabel : "Profit",
						yAxisUnit : "Million",
						yAxisEstimateData : [325,250,340,230,250,290,100,220,350,300],
						yAxisEstimateDataUnit : 'Estimated',
						yAxisActualData : [275,300,320,250,230,270,140,190,300,370],
						yAxisActualDataUnit : 'Actual',
						xAxisLabel : "Years",
						xAxisData : [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
						legendArray : ['Estimate Data','Actual Data']
		    }
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15};
		var stocChart46=$("#line1").stocCharts(textStyleConfg);
		stocChart46.ThreeDComparisionAnalysis(data);
	});
	
	$('.chartMenuList ul li a').click(function() {
		$('.chartMenuList ul li.active').removeClass('active');
		$(this).closest('.chartMenuList ul li').addClass('active');
	});
  


	 $('.nav ul li').click(function() {
		$('.multiplechart').addClass('addopacity');
		
	});
	
	
	//show next and previous chart binding
	
	$(".nextPreBtnList .fa-chevron-right").on("click",function(event){
		isTriggeringClick=true;
		event.stopPropagation();
		selectedChartIndex=parseInt(selectedChartIndex);
		//add one step up
		var maxUpperLimit=$(".chartListGrup").find("li").length;
		
		if(maxUpperLimit >= (selectedChartIndex+1)){
			
			selectedChartIndex=selectedChartIndex+1;
			
			var nextCharttoBeShown=$('a[index='+selectedChartIndex+']');
			$(nextCharttoBeShown).trigger("click");
		}
		
		$(".chartNavContainor").removeClass("hideDiv");
		$(".chartNavContainor").addClass("pullLeft");
	});
	
	$(".nextPreBtnList .fa-chevron-left").on("click",function(event){
		isTriggeringClick=true;
		event.stopPropagation();
		selectedChartIndex=parseInt(selectedChartIndex);
		//add one step prev
		
		if(!((selectedChartIndex-1)<=0 ) ){
			selectedChartIndex=selectedChartIndex-1;
			var previousCharttoBeShown=$('a[index='+selectedChartIndex+']');
			$(previousCharttoBeShown).trigger("click");
		}
		$(".chartNavContainor").removeClass("hideDiv");
		$(".chartNavContainor").addClass("pullLeft");
		
	});
	
	$(".nextPreBtnList .fa-th").click(function(event){
		
		$(".chartNavContainor").removeClass("pullLeft");
		$(".chartNavContainor").addClass("hideDiv");
	})
	
	//play again
	$(".chartBtn .play-again-btn").click(function(event){
		isTriggeringClick=true;
		var charttoBeShown=$('a[index='+selectedChartIndex+']');
		$(charttoBeShown).trigger("click");
		
		$(".chartNavContainor").removeClass("hideDiv");
		$(".chartNavContainor").addClass("pullLeft");
	})
	
	//download graph as image
	$(".chartBtn .download-graph").click(function(){
		
		var chartContainerId="line1";
		var canvasId="canvas2";
		
		var width=$("#line1").width()+50;
		var height=$("#line1").outerHeight();
		
		$("#"+canvasId).show();
		
		var canvasObj=document.getElementById("canvas2");
		canvasObj.width=width;
		canvasObj.height=height;	
			
		
		copyChartToCanvas(chartContainerId,canvasId);
		$("#"+canvasId).hide();
		
	})
	
	
});

