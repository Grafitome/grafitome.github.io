var isTriggeringClick=false;
var flagForPrimeToolTip =  false;
var selectedChartIndex=1;


var jsFiddleLinkMap={
"1" : "http://.net/ycevhobo/4/",
"2" : "http://jsfiddle.net/vk04sohw/3/",
"3" : "http://jsfiddle.net/Lj2bsdnr/4/",
"4" : "http://jsfiddle.net/ogy6uoco/4/",
"5" : "http://jsfiddle.net/75331cub/3/",
"6" : "http://jsfiddle.net/1o2d6yxj/3/",
"7" : "http://jsfiddle.net/ndgww2n3/4/",
"8" : "http://jsfiddle.net/fbLdbgdw/2/",
"9" : "http://jsfiddle.net/g7sujqLr/3/",
"10" : "http://jsfiddle.net/3fwtgp6h/4/",
"11" : "http://jsfiddle.net/4nb73yvx/4/",
"12" : "http://jsfiddle.net/6xke3jct/4/",
"13" : "http://jsfiddle.net/ns715wcv/5/",
"14" : "http://jsfiddle.net/5xnj5e9v/6/",
"15" : "http://jsfiddle.net/6degx86y/4/",
"16" : "http://jsfiddle.net/tgLh5t6w/3/",
"17" : "http://jsfiddle.net/2kLky6t0/3/",
"18" : "http://jsfiddle.net/uo9oL6v1/3/",
"19" : "http://jsfiddle.net/3whv97g8/3/",
"20" : "http://jsfiddle.net/nh2yfehp/3/",
"21" : "http://jsfiddle.net/u62v8k9m/3/", 
"22" : "http://jsfiddle.net/9qy6jbj9/3/",
"23" : "http://jsfiddle.net/f4pez9be/3/",
"24" : "http://jsfiddle.net/Lob2myog/4/",
"25" : "http://jsfiddle.net/udghncaq/3/",
"26" : "http://jsfiddle.net/6r1kjkgo/3/",
"27" : "http://jsfiddle.net/fdjuyu3o/7/",
"28" : "http://jsfiddle.net/e0acaxm9/3/",
"29" : "http://jsfiddle.net/g2us9n5n/5/",
"30" : "http://jsfiddle.net/q0zbeoh4/4/",
"31" : "http://jsfiddle.net/u9oohepu/4/",
"32" : "http://jsfiddle.net/jcw3ubvx/3/",
"33" : "http://jsfiddle.net/81ewp9ty/3/",
"34" : "http://jsfiddle.net/108apo8f/4/",
"35" : "http://jsfiddle.net/ub2620sx/4/",
"36" : "http://jsfiddle.net/th2rfsrk/3/",
"37" : "http://jsfiddle.net/w0qkv82g/5/",
"38" : "http://jsfiddle.net/fzp00bg3/3/",
"39" : "http://jsfiddle.net/6njfewoy/3/",
"40" : "http://jsfiddle.net/4o9cku73/5/",
"41" : "http://jsfiddle.net/d7nvk1ub/4/",
"42" : "http://jsfiddle.net/fkd4af81/3/",
"43" : "http://jsfiddle.net/856jwvvw/1/",
"44" : "http://jsfiddle.net/09cefcuo/32/",
"45" : "http://jsfiddle.net/csw25fcw/1/",
"46" : "http://jsfiddle.net/csw25fcw/7/",
"47" : "http://jsfiddle.net/4ydw5fe2/5/",
"48" : "http://jsfiddle.net/4ydw5fe2/4/",
"49" : "http://jsfiddle.net/4ydw5fe2/3/",
"50" : "http://jsfiddle.net/4ydw5fe2/2/",
"51" : "http://jsfiddle.net/4ydw5fe2/1/",
"52" : "http://jsfiddle.net/4ydw5fe2/",
"53" : "http://jsfiddle.net/csw25fcw/6/",
"54" : "http://jsfiddle.net/csw25fcw/5/",
"55" : "http://jsfiddle.net/csw25fcw/4/",
"56": "http://jsfiddle.net/csw25fcw/3/",
"57" : "http://jsfiddle.net/csw25fcw/2/"
}
function updateJsfiddleLink(index){
	var linkPath=jsFiddleLinkMap[index];
	var jsfiddleBtn=$("#jsFiddle-share-btn");
	$(jsfiddleBtn).attr("href",linkPath);
}

$(document).ready(function(){
  
 var textStyleConfg={"font-family":"'Maven Pro',sans-serif","font-size":"12px","background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":300,"xLabelColor":"#a7a7a7","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
 
   
 
  $("#basicLineChartMenu").click(function(){
	
	 selectedChartIndex=$(this).attr("index");
	 updateJsfiddleLink(selectedChartIndex);
	  //doc detail	
	  $(".chartDetails").hide();
	  $(".basicLineChartMenu").show();
	  	
	  $(".chartBigOuter").hide();	
	  $("#line1").empty();
/*	var basicLineData =   
			{
			"xAxisTickArray":["January","February","March","April","May","June","July","August","September","October","November","December"],
			"yAxisfactor":"Number Of Orders",
			"yLabelColor":"red",
			"xAxisfactor":"Month Wise Data",
			"xLabelColor":"green",
			"padding":10,
			"yAxisData":[
						{"Name":"Sale","Shape":"circle","color":"cyan","data":[67,1644,39,22,62,191,1161,110,1,12,0,0]},
						{"Name":"Refunded","Shape":"circle","color":"blue","data":[0,1,0,0,4,149,76,24,0,2,0,0]},
						{"Name":"Partially Refunded","Shape":"circle","color":"orange","data":[0,0,0,0,0,0,0,0,0,0,0,0]},
						{"Name":"Pending","Shape":"circle","color":"brown","data":[0,0,0,0,0,0,1,25,0,2,0,0]}]
	   }
	  
	*/  var basicLineData =
		{
				title : "Sold Quantity in Last 10 Month ",
				xAxisTickArray:["Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14"],
				yAxisfactor : "Sold Quantity",
				yLabelColor:"red",
				xAxisfactor : "Indexes(in whole number)",
				xLabelColor:"green",
				padding:30,
				lineStrokeWidth:1,
				yAxisData:
				[{				
					"Name" : "Angel",
					"Shape" : "circle",
					"color": "#00ff7e",
					"data" : [123,423,302,223,723,223,323,703,523,783]
				},
				{
					"Name" : "Venture",
					"Shape" : "square",
					"color": "orange",
					"data" : [902,902,120,223,729,623,323,923,523,560]			
				},
				{
					"Name" : "Micro",
					"Shape" : "triangle",
					"color": "#4fb6f2",
					"data" : [333,623,672,673,907,120,432,423,152,100]			
				},
				{
					"Name" : "Capital",
					"Shape" : "circle",
					"color": "cyan",
					"data" : [683,233,903,973,197,908,672,823,512,970]			
				}]
				
		};
		
		
		
		$("#basicLineChart").show();
		
		setTimeout(function(){
			var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};	
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
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
			pointerImage:"http://stocinn.github.io/stocweb/img/pointer.png",
			xLabel:"Employee Name",
			yLabel:"Working Hours",
			yAxisValue:['Monday','Tuesday','Wednesday','Thursday','Friday']
	};
	
	var cfgHeatMap = {
		
			colorLow: '#5c6b6b',
			colorMed: '#535c5c',
			colorHigh: '#2f3939',
			yAxisLabelSpacing: 80,
			xLabelRotate :"false"
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
						innerRadius:0,
						legendOrient : "right"
						
					};
					/*
		var dataSet= {
						key :['Kurkure','7UP','Mountain Dew'],
						value : [12000,8850,10000],
						label : 'Cost',
						color : ['#e67a77','#95d7bb','#aec785'],
						innerRadius:0,
						legendOrient : "right"
						
					};*/
		   
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":10,"background":"none","font-color":"white","font-weight":300,"axisTextColor":"purple","legendTextColor":"#a7a7a7","gridLineColor":"#353b37"};	
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
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var colorJson={"pending":"#00FFFF","approved":"#00FF7E","rejected":"#FFA500","halted":"#4FB6F2"};
		var stocChart8=$("#line1").stocCharts(textStyleConfg);
		
		//var colorJson={"pending":"#3e99f0","approved":"rgb(237, 128, 250)","rejected":"#fe8625","halted":"#5fe9e4"};
		
		
		console.log(JSON.stringify(groupedChartData));
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
		
		var data =  {
						title : "Last 10 year sales",
						yAxisLabel : "Sales",
						yAxisUnit : "Crores",
						toolTipUnit : "Year",
						currencyUnit:"\u20B9",
						yAxisData : [275,300,320,250,230,270,140,190,300,370],
						xAxisLabel : "Years",
						xAxisData : [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
						barColor : "#68aad1"
		    }
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart10=$("#line1").stocCharts(textStyleConfg);
	    stocChart10.drawThreeDBarChart(data);
		
	}); 
	
	$("#3DGroupedBarChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
        $("#line1").empty();
		$("#3DGroupedBarChart").show();
		
		$(".chartDetails").hide();
	  $(".3DGroupedBarChartMenu").show();
		
		var barDataOne = [15, 80, 120, 280, 0, 65, 900, 40, 23, 98, 634];
		var barDataTwo = [150, 180, 20, 20, 90, 650, 300, 400, 230, 308, 434];
		
		var cfg3DBarChart = {
			toolTipLabelForYAxis: "Sales(in Crores)",
			xAxisTickArray:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019, 2020],
			barColorArray : ['#16ffb5','#869cb3'],
			lagendArray:["bar1","bar2"],
			xLabel:"Year",
			yLabel:"Sales(in Crores)",
			title : "Comparision Of Sale OF Two Item's in Last 10 years"
		}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		
		var data = {
					"title" : "Sale Comparision Of Companies In Respective Year",
					"xAxisLabel" :"Years",
					"yAxisLabel" :"Sales(In Crores)",
					"toolTipUnit":"Year",
					"xAxisData" : ["1994", "1995", "1996", "1997", "1998", "1999","2000","2001","2002","2003", "2004", "2005", "2006"],
					"color" : ["#39ec6e","#ff9811","#4f85bb","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"],
					"yAxisData": [{
							
							"key": "Barclays",
							"data": [15, 80, 120, 180, 50, 65, 30, 109, 210,13, 123,210, 210]
						}, {
							"key": "Morgan Stanley",
							"data": [60, 20, 70, 40, 100, 95, 230, 123, 100,24, 231, 210, 210]
						}, {
							"key": "SBI",
							"data": [40, 28, 79, 100, 40, 195, 20, 78, 321,45, 109, 210, 210]
						}, {
							"key": "American Express Bank",
							"data": [140, 280, 179, 200, 109, 95, 300, 86, 123,56, 290, 210, 210]
						}, {
							"key": "Indusland Bank",
							"data": [120, 34, 50, 100, 400, 65, 30, 34, 310,76, 19, 210, 210]
						}, {
							"key": "Yes Bank",
							"data": [80, 180, 179, 300, 40, 109, 89, 120, 230,89, 99, 210, 210]
						}]
				}  
		
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart27=$("#line1").stocCharts(textStyleConfg);
		
	    stocChart27.drawThreeDStackedBarChart(data);
		
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};	
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
			var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":"12","background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
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
  
      var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"#a7a7a7","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};	
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
		var gaugeChartData =  {
				"data" :[{"totalValue":100,"valAchieve":40.34}],
				"colorArray" : ["#a70328","#c1e0f7"],
				"toolTipMsg":"speed",
				"meterLabel" : ["Min","Max"]
		}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"black","tick-font-color":"#a7a7a7","legendTextColor":"#a7a7a7","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};	
		var stockChart15=$("#line1").stocCharts(textStyleConfg);
		stockChart15.gaugeGraph(gaugeChartData);
		
	});
	  
	$("#areaChartMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$(".chartDetails").hide();
	  $(".Zoomable").show();
		$("#line1").empty();	
		$("#areaChart1").show();
		
		var data=generateData(100,500);
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
	/*	var meterChartData =  {
				"data" :[0,20,40,60,80,100,120,140,160,180,200,220],
				"dataLeft":[0,1,2,3,4,5,6,7],
				"colorArray" : ["#2ec7c9","#5ab1ef","#d87a80"],
				"meterLabel" : "Km/h"
		}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
		var stocChart43=$("#line1").stocCharts(textStyleConfg);
		stocChart43.meterChartAnalysis(meterChartData);
		*/
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
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var colorJson={"pending":"#00FFFF","approved":"#00FF7E","rejected":"#FFA500","halted":"#4FB6F2"};
		
		var stocChart19=$("#line1").stocCharts(textStyleConfg);
		//var colorJson={"pending":"#3e99f0","approved":"#69ff4a","rejected":"#fe8625","halted":"#5fe9e4"};
		//var colorArray=["#7cb5ec","#434348","#90ed7d","#f9b169"];
		var midVal=0;
		stocChart19.groupedBar2DChart({'data':groupedChartData,'xFieldName':'doj','widthOfBar':'',
		'showAllTicks':true,'colors':colorJson,yAxisfactor : "Sales Percentage","title":"Sale Analysis Of Last 11 Month's",
			yLabelColor:"grey",
			xAxisfactor : "Month",
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
		var data=[200, 155, 110, 130, 240, 270, 185];//11.03, 59.8, 306.84, 2.02, 5.09, 43.9
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
		
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":12,"background":"none","font-color":"green","font-weight":300,"axisTextColor":"purple","legendTextColor":"#a7a7a7","gridLineColor":"#353b37"};	
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
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":12,"background":"none","font-color":"#333333","font-weight":300,"axisTextColor":"purple","legendTextColor":"#a7a7a7","gridLineColor":"#353b37"};
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
		
	var cnfg = {
				"title" : "Sales Comparisons Chart Of Last 8 Years",
				"yAxisLabel" : "Year",
				"yAxisData" : ["2000","2001","2002","2003","2004","2005","2006","2007","2008"],
				"xAxisLabel" : "Population",
				"xAxisLabelData1" : "Male",
				"xAxisData1" : [23,45,56,43,23,55,33,22,55],
				"colorOfData1" :"#90ed7d",
				"xAxisLabelData2" : "Female",
				"xAxisData2" : [33,15,46,43,53,25,23,32,15,],
				"colorOfData2" :"#5fe9e4",
					}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"gray","titleFontSize":16,"gridLineColor":"#353b37"};
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

		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
			
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
				   
	/*	var data = {
					    title : "Last 15 day's temperature readings",
						titleColor : "gray",
						yAxisUnit : "\u00B0"+"C",
						yAxisLabel : "Temperature",
						yAxisData : [28,55,42,65,20,35],
						xAxisLabel : "Month",
						xAxisData : ["Mirinda","pepsi","Kurkure","7UP","Duke","Mtn Dew"]
				   }*/

		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
						yAxisUnit : "",
						currencyUnit:"\u20B9",
						yAxisEstimateData : [300,390,300,270,230,180,150,350,300,300,390,300,270,200,230,180],
						yAxisEstimateDataUnit : 'Estimated',
						yAxisActualData : [330,450,320,250,270,140,190,300,370,330,450,320,250,230,270,140],
						yAxisActualDataUnit : 'Actual',
						xAxisLabel : "Years",
						xAxisData : [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
					}
					/*
		var data =  {
						title : "Last 16 Year Data , Estimated v/s Actual Profit",
						titleColor : "gray",
						yAxisLabel : "Profit",
						yAxisUnit : "Million",
						yAxisEstimateData : [300,390,300,270,200,230,180],
						yAxisEstimateDataUnit : 'Estimated',
						yAxisActualData : [330,450,320,250,230,270,140],
						yAxisActualDataUnit : 'Actual',
						xAxisLabel : "Years",
						xAxisData : [2008,2009,2010,2011,2012,2013,2014]
					}
*/
		var cnfg={"data":data};
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
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
		

		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
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
				unit : "%",
				circleStrokeWidth : 8
				
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
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
			xAxisLabel : "Month",
			legend : ["Student Login","Class Avg.Login","Student Interaction","Class.Avg Interaction","Student Time Spent","Class Time Spent"],
			legendColor: ['#00ffff','#00ffff','#4fb6f2','#4fb6f2','#ffa500','#ffa500']
			}
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart42=$("#line1").stocCharts(textStyleConfg);
		stocChart42.multiAxisChartAnalysis(data);
	});
	
	$("#roundedThreeDBarMenu").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
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
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
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
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
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
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
		var stocChart44=$("#line1").stocCharts(textStyleConfg);
		stocChart44.threeDPieChartAnalysis(data);
	});
	
	
	$("#arcWithCylinderMenu").click(function(){
//		selectedChartIndex=$(this).attr("index");
//		updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();	
	//		$(".chartDetails").hide();
	//    $(".arcWithCylinderMenu").show();
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
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart45=$("#advanceChartContainer").stocCharts(textStyleConfg);
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
						yAxisUnit : "",
						yAxisEstimateData : [325,250,340,230,250,290,100,220,350,300],
						yAxisEstimateDataUnit : 'Estimated',
						yAxisActualData : [275,300,320,250,230,270,140,190,300,370],
						yAxisActualDataUnit : 'Actual',
						xAxisLabel : "Years",
						xAxisData : [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
						currencyUnit:"\u20B9",
						legendArray : ['Estimate Data','Actual Data']
		    }
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart46=$("#line1").stocCharts(textStyleConfg);
		stocChart46.ThreeDComparisionAnalysis(data);
	});
	
	
	$("#brushingChart").click(function(){
//		selectedChartIndex=$(this).attr("index");
//		updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();	
//			$(".chartDetails").hide();
//	    $(".brushingChart").show();
		
		var data =  {
						"title" : "Sold Quantity in Last 10 Month ",
						"xAxisTickArray" :["Jan'11","Feb'11","Mar'11","Apr'11","May'11","Jun'11","Jul'11","Aug'11","Sept'11","Oct'11","Nov'11","Dec'11","Jan'12","Feb'12","Mar'12","Apr'12","May'12","Jun'12","Jul'12","Aug'12","Sept'12","Oct'12","Nov'12","Dec'12","Jan'13","Feb'13","Mar'13","Apr'13","May'13","Jun'13","Jul'13","Aug'13","Sept'13","Oct'13","Nov'13","Dec'13"
						,"Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14","Nov'14","Dec'14","Jan'15","Feb'15","Mar'15","Apr'15","May'15","Jun'15","Jul'15","Aug'15","Sept'15","Oct'15","Nov'15","Dec'15"],
						"yAxisUnit" : "Million",
						"xAxisLabel" : "Month",	
						"yAxisData1" : [330,450,320,250,270,140,190,300,370,330,450,320,250,230,270,140,300,370,330,450,320,250,230,270,330,450,320,250,270,140,190,300,370,330,450,320,250,230,270,140,300,370,330,450,320,250,230,270,250,230,270,140,300,370,330,450,320,250,230,270],
						"yAxisLabel1" : "Profit",
						"yAxisData2" : [80,37,40,90,75,45,30,35,25,20,45,30,20,55,80,37,40,90,75,45,30,35,25,20,45,30,20,55,80,37,40,90,75,45,30,35,25,20,45,30,20,55,90,75,45,30,35,25,40,90,75,45,30,35,25,20,45,30,20,55],
						"yAxisLabel2" : "Volume",
						"dataColor" : "#76bee0"
		    }
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15};
		var stocChart47=$("#advanceChartContainer").stocCharts(textStyleConfg);
		stocChart47.brushingChartAnalysis(data);
	});	

	$("#angularMeterChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".angularMeterChart").show();
		
		var meterChartData =  {
				"data" :[0,20,40,60,80,100,120,140,160,180,200,220],
				"colorArray" : ["#2ec7c9","#5ab1ef","#d87a80"],
				"meterLabel" : "Km/h"
		}
		
		var textStyleConfg={};
		var stocChart47=$("#line1").stocCharts(textStyleConfg);
		stocChart47.angularMeterChartAnalysis(meterChartData);
	});

	$("#comparisionAreaChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".comparisionAreaChart").show();
		
		var data =  {
					"title" : "Product Status",
					"xAxisData" : ["1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009"],
					"xAxisLabel" : "Years",
					"yAxisLabel" : "sssssss",
					"yDataObj" : [
									{
										"yAxisData" : [330,450,320,250,270,140,190,300,370,330,450],
										"legend" : "Complete",
										"color" : "#90e0dc"
									},
									{
										"yAxisData" : [230,432,267,272,188,299,388,255,299,466,133],
										"legend" : "Total",
										"color" : "#2ab298"
									},
									{
										"yAxisData" : [344,234,321,123,432,123,322,266,166,211,356],
										"legend" : "Approved",
										"color" : "#d9d66d"
									},
									{
										"yAxisData" : [453,234,378,212,367,234,321,378,211,111,324],
										"legend" : "Active",
										"color" : "#e56969"
									}
								]
					
		}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart48=$("#line1").stocCharts(textStyleConfg);
		stocChart48.comparisionAreaChartAnalysis(data);
	});
	
	
	$("#newDountChartWithBar").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".newDountChartWithBar").show();
		
		var data =  {
				"title":"Product Distribution",
				"obj" :[{
							"key" : "chips",
							"color" : "#c4a7ff",
							"data" : 45,
							"subData" : [56,23,78,43,56]
						},
						{
							"key" : "soft drinks",
							"color" : "#c799ff",
							"data" : 42,
							"subData" : [78,43,23,56,67]
						},
						{
							"key" : "oats",
							"color" : "#9bc8ff",
							"data" : 48,
							"subData" : [45,45,32,67,45]
						},
						{
							"key" : "Product 1",
							"color" : "#8faeff",
							"data" : 40,
							"subData" : [45,78,45,23,56]
						},
						{
							"key" : "Product 2",
							"color" : "#9999ff",
							"data" : 50,
							"subData" : [45,65,23,56,43]
						},
						],
				"subDataColor" : ["#5bc0de","#f0ad4e","#5cb85c","#d9534f","#428bca"],
				"subDataKey" : ["amazon","snapdeal","flipkart","local banya","big basket"],
				"unit" : "%"	
			}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart48=$("#line1").stocCharts(textStyleConfg);
		stocChart48.newDountChartWithBarAnalysis(data);
	});
	
	$("#threeDPieChartWithLegend").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".threeDPieChartWithLegend").show();
		var data = 
		{
			dountData : [231,123,184,155,55],
			dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
		    colorArray : ['#a7a7a7','#95d7bb','#fcb322','#e67a77','#aec785'],
			unit : "%",
			factor :"student"
		}
		
	/*
	var data= {
     dountKey :['Kurkure','7UP','Mountain Dew'],
     dountData : [12000,8850,10000],
     label : 'Cost',
     colorArray : ['#e67a77','#95d7bb','#aec785'],
     unit : "%",
	factor :"% Share"
     
    };
	*/
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
		var stocChart49=$("#line1").stocCharts(textStyleConfg);
		stocChart49.threeDPieChartWithLegendAnalysis(data);
	});
	
	$("#threeDDountChartWithLegend").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".threeDDountChartWithLegend").show();
		var data = 
		{
			dountData : [231,123,184,155,55],
			dountKey : ["Excellent","Above Avg.","Average","Below Avg.","Poor"],
		    colorArray : ['#a7a7a7','#95d7bb','#fcb322','#e67a77','#aec785'],
			unit : "%",
			factor :"Students"
		}
	/*	var data = 
		{
			dountData : [65,35],
			dountKey : ["Other than Pepsi Products","Pepsi Products"],
		    colorArray : ['#a7a7a7','#95d7bb'],
			unit : "%",
			factor :"Students"
		}
		*/
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
		var stocChart49=$("#line1").stocCharts(textStyleConfg);
		stocChart49.threeDDountChartWithLegendAnalysis(data);
	});
	
	
	
	$("#dountChartWithMapping").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
	//		$(".chartDetails").hide();
	//    $(".dountChartWithMapping").show();
		data = {
		 "key1":{
				"Feb 14 2015" :{
								"Match":["New Zeland","Sri Lanka","Australia","England"],
								"Venue":["Hagley Oval","Melbourne"],
								"Group":["Pool A","Pool B"]
								
							},
				"Feb 15 2015" :{
								"Match":["South Africa","Zimbabwe","India","Pakistan"],
								"Venue":["Seddon Park","Adelaide Oval"],
								"Group":["Pool B","Pool B"]
							
							},
				"Feb 16 2015" :{
								"Match":["Ireland","West Indies"],
								"Venue":["Adelaide Oval"],
								"Group":["Pool B"]
								
							},
				"Feb 17 2015" :{
								"Match":["New Zealand","Scotland"],
								"Venue":["University Oval"],
								"Group":["Pool A"]
								
							},
				"Feb 18 2015" :{
								"Match":["Afghanistan","Bangladesh"],
								"Venue":["Manuka Oval"],
								"Group":["Pool A"]
								
							},
				"Feb 19 2015" :{
								"Match":["UAE","Zimbabwe"],
								"Venue":["Saxton Oval"],
								"Group":["Pool B"]
								
							},
				"Feb 20 2015" :{
								"Match":["New Zealand","England"],
								"Venue":["Westpac Stadium"],
								"Group":["Pool A"]
								
							},
				"Feb 21 2015" :{
								"Match":["Australia","Bangladesh"],
								"Venue":["Brisbane"],
								"Group":["Pool A"]
								
							},
				"Feb 22 2015" :{
								"Match":["Afghanistan","Sri Lanka","India","South Africa"],
								"Venue":["University Oval","Melbourne"],
								"Group":["Pool A","Pool B"]
								
							},
				"Feb 23 2015" :{
								"Match":["England","Scotland"],
								"Venue":["Hagley Oval"],
								"Group":["Pool A"]
								
							},
				"Feb 24 2015" :{
								"Match":["West Indies","Zimbabwe"],
								"Venue":["Manuka Oval"],
								"Group":["Pool B"]
								
							},
				
				"Feb 25 2015" :{
								"Match":["Ireland","UAE"],
								"Venue":["Brisbane"],
								"Group":["Pool B"]
								
						},
				"Feb 26 2015" :{
								"Match":["Afghanistan","Scotland","Bangladesh","Sri Lanka"],
								"Venue":["University Oval","Melbourne"],
								"Group":["Pool A"]
								
						},
				"Feb 27 2015" :{
								"Match":["South Africa","West Indies"],
								"Venue":["Sydney"],
								"Group":["Pool B"]
							
						},
				"Feb 28 2015" :{
								"Match":["India","UAE"],
								"Venue":["WACA"],
								"Group":["Pool B"]
								
						},
				"Mar 01 2015" :{
								
								"Match":["England","Sri Lanka","Pakistan","Zimbabwe"],
								"Venue":["Westpac Stadium","Brisbane"],
								"Group":["Pool B","Pool A"]
								
						},
				"Mar 03 2015" :{
								"Match":["Ireland","South Africa"],
								"Venue":["Manuka Oval"],
								"Group":["Pool B"]
								
						},
				"Mar 04 2015" :{
								"Match":["Pakistan","UAE","Australia","Afghanistan"],
								"Venue":["McLean Park","WACA"],
								"Group":["Pool B"]
								
						},
				"Mar 05 2015" :{
								"Match":["Bangladesh","Scotland"],
								"Venue":["Saxton Oval"],
								"Group":["Pool A"]
								
						},
				"Mar 06 2015" :{
								"Match":["India","West Indies"],
								"Venue":["WACA"],
								"Group":["Pool B"]
								
						},
				"Mar 07 2015" :{
								"Match":["Ireland","Zimbabwe","Pakistan","South Africa"],
								"Venue":["Eden Park","Bellerive Oval"],
								"Group":["Pool B"]
								
						},
				"Mar 08 2015" :{
								"Match":["NewZealand","Afghanistan","Australia","Sri Lanka"],
								"Venue":["McLean Park","Sydney"],
								"Group":["Pool A"]
								
						},
				"Mar 09 2015" :{
								"Match":["England","Bangladesh"],
								"Venue":["Adelaide Oval"],
								"Group":["Pool A"]
								
						},
				"Mar 10 2015" :{
								"Match":["India","Ireland"],
								"Venue":["Seddon Park"],
								"Group":["Pool B"]
								
						},
				"Mar 11 2015" :{
								"Match":["Scotland","Sri Lanka"],
								"Venue":["Bellerive Oval"],
								"Group":["Pool A"]
								
						},
				"Mar 12 2015" :{
								"Match":["South Africa","UAE"],
								"Venue":["Westpac Stadium"],
								"Group":["Pool B"]
								
						},
				"Mar 13 2015" :{
								"Match":["NewZealand","Bangladesh","Afghanistan","England"],
								"Venue":["Seddon Park","Sydney"],
								"Group":["Pool A"]
								
						},
				"Mar 14 2015" :{
								"Match":["India","Zimbabwe","Australia","Scotland"],
								"Venue":["Eden Park","Bellerive Oval"],
								"Group":["Pool B","Pool A"]
								
						},
				"Mar 15 2015" :{
								"Match":["UAE","West Indies","Ireland","Pakistan"],
								"Venue":["McLean Park","Adelaide Oval"],
								"Group":["Pool B"]
								
						},
				"Mar 18 2015" :{
								"Match":["Sri Lanka","South Africa"],
								"Venue":["Sydney"],
								"Group":["Quarter Finals"]
								
							},
				"Mar 19 2015" :{
								"Match":["India","Bangladesh"],
								"Venue":["Melbourne"],
								"Group":["Quarter Finals"]
								
							},
				"Mar 20 2015" :{
								"Match":["Australia","Pakistan"],
								"Venue":["Adelaide Oval"],
								"Group":["Quarter Finals"]
								
							},
				"Mar 21 2015" :{
								"Match":["New zealand","West Indies"],
								"Venue":["Westpac Stadium"],
								"Group":["Quarter Finals"]
								
							},
				"Mar 24 2015" :{
								"Match":["New Zealand","South Africa"],
								"Venue":["Eden Park,Auckland"],
								"Group":["Semi Finals"]
								
						},
				"Mar 26 2015" :{
								"Match":["Australia","India"],
								"Venue":["Sydney"],
								"Group":["Semi Finals"]
								
							},
				"Mar 29 2015" :{
								"Match":["New Zealand","Australia"],
								"Venue":["Melbourne"],
								"Group":["Final"]
								
							}
			},
		"key2" :{
				"Adelaide Oval":{
								"Match":["India","Pakistan","Ireland","West Indies","England","Bangladesh","Australia"],
								"Group":["Pool A","Pool B","Quarter Finals"],
								"Date":["Feb 15 2015","Feb 16 2015","Mar 9 2015","Mar 15 2015","Mar 20 2015"]
							},
				"Eden Park":{
								"Match":["India","Pakistan","New Zealand","South Africa","Australia","Zimbabwe"],
								"Group":["Pool A","Pool B","Semi Finals"],
								"Date":["Feb 28 2015","Mar 07 2015","Mar 14 2015","Mar 24 2015"]
							},
				"Brisbane Stadium":{
								"Match":["Ireland","UAE","Australia","Zimbabwe","Bangladesh","Pakistan"],
								"Group":["Pool A","Pool B"],
								"Date":["Feb 21 2015","Feb 25 2015","Mar 01 2015"]
							},
				"Hagley Oval":{
								"Match":["New Zeland","Sri Lanka","Pakistan","West Indies","England vs Scotland"],
								"Group":["Pool A","Pool B"],
								"Date":["Feb 14 2015","Feb 21 2015","Feb 23 2015"]
							},
				"Manuka Oval":{
								"Match":["Afghanistan","Bangladesh","West Indies","Zimbabwe","Ireland","South Africa"],
								"Group":["Pool A","Pool B"],
								"Date":["Feb 18 2015","Feb 24 2015","Mar 03 2015"]
							},
				"University Oval":{
								"Match":["New Zealand","Scotland","Afghanistan","Sri Lanka","Afghanistan","Scotland"],
								"Group":["Pool A"],
								"Date":["Feb 17 2015","Feb 22 2015","Feb 26 2015"]
							},
				"Seddon Park" :{
								"Match":["South Africa","Zimbabwe","India","Ireland","NewZealand","Bangladesh"],
								"Group":["Pool A","Pool B"],
								"Date":["Feb 15 2015","Mar 10 2015","Mar 13 2015"]
							},
				"Melbourne":{
								"Match":["Australia","England","India","South Africa","Bangladesh","Sri Lanka","New Zealand"],
								"Group":["Pool A","Pool B","Quarter Finals","Final"],
								"Date":["Feb 14 2015","Feb 22 2015","Feb 26 2015","Mar 19 2015","Mar 29 2015"]
							},
				"McLean Park":{
								"Match":["Pakistan","UAE","NewZealand","Afghanistan","West Indies"],
								"Group":["Pool A","Pool B"],
								"Date":["Mar 04 2015","Mar 08 2015","Mar 15 2015"]
							
							},
				"Saxton Oval":{
								"Match":["Zimbabwe","UAE","Bangladesh","Scotland"],
								"Group":["Pool A","Pool B"],
								"Date":["Feb 19 2015","Mar 05 2015"]
							},
				"WACA":{
								"Match":["India","UAE","Australia","Afghanistan","West Indies"],
								"Group":["Pool B"],
								"Date":["Feb 28 2015","Mar 04 2015","Mar 06 2015"]
						},
				"Sydney":{
								"Match":["South Africa","West Indies","Australia","Sri Lanka","Afghanistan","England"],
								"Group":["Pool B","Pool A","Quarter Finals","Semi Finals"],
								"Date":["Feb 27 2015","Mar 08 2015","Mar 13 2015","Mar 18 2015","Mar 26 2015"]
						},
				"Westpac Stadium":{
								"Match":["New Zealand","England","Sri Lanka","South Africa","UAE","West Indies"],
								"Group":["Pool B","Pool A","Quarter Finals"],
								"Date":["Feb 20 2015","Mar 01 2015","Mar 12 2015","Mar 21 2015"]
						}
				},
			"key3":{			
				"Pool A" :{ 
								"Teams":["Australia","England","Bangladesh","Afghanistan","New Zealand","Sri Lanka","Scotland"]
						},
				"Pool B" :{
								"Team":["India","South Africa","Pakistan","West Indies","Zimbabwe","Ireland","UAE"]
						},
				"Quarter Finals":{
								"Teams":["India","South Africa","Pakistan","West Indies","Australia","New Zealand","Sri Lanka","Bangladesh"]
								},
				"Semi Finals":{
								"Teams":["India","South Africa","Australia","New Zealand"]
							},
				"Final":{
								"Teams":["Australia","New Zealand"]
					}
						
			},
			"key4":{
							//	"Teams":["Australia","England","Bangladesh","Afghanistan","New Zealand","Sri Lanka","Scotland","India","South Africa","Pakistan","West Indies","Zimbabwe","Iraland","UAE"],
				"Australia":{
								"Group":["Pool A","Quarter Finals","Semi Finals","Final"],
								"Date":["Feb 14 2015","Feb 21 2015","Feb 28 2015","Mar 04 2015","Mar 08 2015","Mar 14 2015","Mar 20 2015","Mar 26 2015","Mar 29 2015"],
								"Venue":["Melbourne","Brisbane","Eden Park","WACA","Sydney","Bellerive Oval","Adelaide Oval"]
						},
				"England":{
								"Group":["Pool A"],
								"Date":["Feb 14 2015","Feb 20 2015","Feb 23 2015","Mar 01 2015","Mar 09 2015","Mar 13 2015"],
								"Venue":["Melbourne","Westpac Stadium","Hagley Oval","Sydney","Adelaide Oval"]
						},
				"Bangladesh":{
								"Group":["Pool A","Quarter Finals"],
								"Date":["Feb 18 2015","Feb 21 2015","Feb 26 2015","Mar 05 2015","Mar 09 2015","Mar 13 2015","Mar 19 2015"],
								"Venue":["Melbourne","Brisbane","Seddon Park","Saxton Oval","Manuka Oval","Adelaide Oval"]
							},
				"Afghanistan":{
								"Group":["Pool A"],
								"Date":["Feb 18 2015","Feb 22 2015","Feb 26 2015","Mar 04 2015","Mar 08 2015","Mar 13 2015"],
								"Venue":["WACA","Sydney ","McLean Park","Manuka Oval","University Oval"]
							},
				"New Zealand":{
								"Group":["Pool A","Quarter Finals","Semi Finals","Final"],
								"Date":["Feb 14 2015","Feb 17 2015","Feb 20 2015","Feb 28 2015","Mar 08 2015","Mar 13 2015","Mar 21 2015","Mar 24 2015","Mar 29 2015"],
								"Venue":["Melbourne","Seddon Park","Eden Park","McLean Park","Hagley Oval","University Oval","Westpac Stadium"]
							},
				"Sri Lanka":{
								"Group":["Pool A","Quarter Finals"],
								"Date":["Feb 14 2015","Feb 22 2015","Feb 26 2015","Mar 01 2015","Mar 08 2015","Mar 11 2015","Mar 18 2015"],
								"Venue":["Melbourne","Sydney","Bellerive Oval","Hagley Oval","University Oval","Westpac Stadium"]
						},
				"Scotland":{
								"Group":["Pool A"],
								"Date":["Feb 17 2015","Feb 23 2015","Feb 26 2015","Mar 05 2015","Mar 11 2015","Mar 14 2015"],
								"Venue":["University Oval","Saxton Oval","Hagley Oval","Bellerive Oval","Adelaide Oval"]
						},
				"India":{
								"Group":["Pool B","Quarter Finals","Semi Finals"],
								"Date":["Feb 15 2015","Feb 22 2015","Feb 28 2015","Mar 06 2015","Mar 10 2015","Mar 14 2015","Mar 19 2015","Mar 26 2015"],
								"Venue":["Melbourne","Seddon Park","Eden Park","WACA","Sydney","Adelaide Oval"]
						},
				"South Africa":{
								"Group":["Pool B","Quarter Finals","Semi Finals"],
								"Date":["Feb 15 2015","Feb 22 2015","Feb 27 2015","Mar 03 2015","Mar 07 2015","Mar 12 2015","Mar 18 2015","Mar 24 2015"],
								"Venue":["Melbourne","Seddon Park","Eden Park","Manuka Oval","Sydney","Westpac Stadium"]
							},
				"Pakistan":{
								"Group":["Pool B","Quarter Finals"],
								"Date":["Feb 15 2015","Feb 21 2015","Mar 01 2015","Mar 04 2015","Mar 07 2015","Mar 15 2015","Mar 20 2015"],
								"Venue":["Eden Park","Adelaide Oval","Hagley Oval","Brisbane","McLean Park"]
						},
				"West Indies":{
								"Group":["Pool B","Quarter Finals"],
								"Date":["Feb 16 2015","Feb 21 2015","Feb 24 2015","Feb 27 2015","Mar 06 2015","Mar 15 2015","Mar 21 2015"],
								"Venue":["Sydney","Adelaide Oval","Hagley Oval","Manuka Oval","McLean Park","Westpac Stadium","WACA"]
							},
				"Zimbabwe":{
								"Group":["Pool B"],
								"Date":["Feb 15 2015","Feb 19 2015","Feb 24 2015","Mar 01 2015","Mar 07 2015","Mar 14 2015"],
								"Venue":["Seddon Park","Saxton Oval","Brisbane","Manuka Oval","Bellerive Oval","Eden Park"]
						},
				"UAE":{
								"Group":["Pool B"],
								"Date":["Feb 19 2015","Feb 25 2015","Feb 28 2015","Mar 04 2015","Mar 12 2015","Mar 15 2015"],
								"Venue":["Westpac Stadium","Saxton Oval","Brisbane","McLean Park","WACA"]
					},
				"Ireland":{
								"Group":["Pool B"],
								"Date":["Feb 16 2015","Feb 25 2015","Mar 03 2015","Mar 07 2015","Mar 10 2015","Mar 15 2015"],
								"Venue":["Seddon Park","Adelaide Oval","Brisbane","Manuka Oval","Bellerive Oval"]
						}
			}
			
			
		}
	var data2={
					"color":["#4f85bb","#2c539e"],
					"title":["Date","Venue","Group","Team"],
					"textColor":"white",
					"key4":{
								"Australia":"img/Australia.png",
								"England":"img/england.png",
								"Bangladesh":"img/Bangladesh.png",
								"Afghanistan":"img/Afghanistan.jpg",
								"New Zealand":"img/zealand.png",
								"Sri Lanka":"img/Lanka.png",
								"Scotland":"img/Scotland.jpg",
								"India":"img/india.png",
								"South Africa":"img/Africa.jpg",
								"Pakistan":"img/Pakistan.png",
								"West Indies":"img/Indies.jpg",
								"Zimbabwe":"img/Zimbabwe.png",
								"UAE":"img/UAE.jpeg",
								"Ireland":"img/Ireland.png"
						}
			}
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","gridLineColor":"#353b37"};
		var stocChart50=$("#advanceChartContainer").stocCharts(textStyleConfg);
		stocChart50.dountChartWithMappingAnalysis(data,data2);
	});
	
	$("#smoothLineChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".smoothLineChart").show();
		
		var data ={
				xAxisLabel :"Years",
				yAxisLabel :"Sale",
				title : "Product Sale",
				yAxisData: [10,60,32,20,44,70,50,20,70,10,25,30,28,33,65,77,50,58,40,20,15],
				xAxisData :["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"],
				lineColor : ["#2c539e","#7d011d"],
				average : 40,
				circleBoundaryColor : "white"
				}
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart51=$("#line1").stocCharts(textStyleConfg);
		stocChart51.smoothLineChartAnalysis(data);
	});	
	
	$("#activeAreaChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".activeAreaChart").show();
		
		var data ={
				xAxisLabel :"Years",
				yAxisLabel :"Sale",
				title : "Product Sale",
				yAxisData: [100,200,800,600,700,400,500],
				xAxisData :["2008","2009","2010","2011","2012","2013","2014"],
				lineStrokeColor : "#0e3ab2",
				areaColor : "#4866ba"
				}
		//'#95d7bb','#fcb322','#e67a77','#aec785'],
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart52=$("#line1").stocCharts(textStyleConfg);
		stocChart52.activeAreaChartAnalysis(data);
	});	
	
	$("#treeMapChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();	
			$(".chartDetails").hide();
	    $(".treeMapChart").show();
		
		var treeData = {
				factor : "Asset Value",
				unit : "$",
				range : [-40,40],
				name: "tree",
				children:[
					{ name: "Portfolio 1", size: 45, portfolioId:"Portfolio1"},
					{ name: "Portfolio 2", size: 40, portfolioId:"Portfolio2"},
					{ name: "PortFolio 3", size: 35, portfolioId:"Portfolio3"},
					{ name: "Portfolio 4", size: 30, portfolioId:"Portfolio4"},
					{ name: "Portfolio 5", size: 25, portfolioId:"Portfolio5"},
					{ name: "Portfolio 6", size: 20, portfolioId:"Portfolio6"}

				]
			};

		 var colorCombination = {
		  colorLow: 'red',
		   colorMed: 'yellow',
		   colorHigh: 'green',
		 }
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart53=$("#line1").stocCharts(textStyleConfg);
		stocChart53.treeMapChartAnalysis(treeData,colorCombination);
	});	
	
	$("#drillDownDountChart").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();	
	//		$(".chartDetails").hide();
//	    $(".drillDownDountChart").show();
		
		var data=  {
        "factor":"Data",
		"unit":"",
        "key":{
			"India":{
				"data":44,
				"color":"#006BB2",
					"key":{
						"Punjab":{
							"data":20,
							"color":"#008AE6",
							"key":{
								"Barnala":{
									"data":50,
									"color":"#19A3FF",
									"key":{
										"Bhaini Fatta":{
											"data":50,
											"color":"#66C2FF"
										},
										"Nangal":{
											"data":75,
											"color":"#B2E0FF"
										},
										"Uppli":{
											"data":75,
											"color":"#E6F5FF"
										},
										"Bhaini Mehraj":{
											"data":75,
											"color":"#CCEBFF"
										},
										"Kothe Akalgarh":{
											"data":20,
											"color":"#99CCFF"
										}
									}
								},
								"Firozepur":{
									"data":75,
									"color":"#7A1F99",
									"key":{
										"Ghuriana":{
											"data":50,
											"color":"#CC33FF"
										},
										"Abohar":{
											"data":75,
											"color":"#D65CFF"
										},
										"Rajpura":{
											"data":75,
											"color":"#E699FF"
										},
										"Gobindgarh":{
											"data":75,
											"color":"#F0C2FF"
										}
									}
								},
								"Ludhiana":{
									"data":20,
									"color":"#5C7A99",
									"key":{
										"Boparai Kalan":{
										
											"data":50,
											"color":"#336699"
										},
										"Raqba":{
											"data":75,
											"color":"#5C85AD"
										},
										"Sudhar":{
											"data":75,
											"color":"#85A3C2"
										},
										"Mullanpur":{
											"data":75,
											"color":"#ADC2D6"
										},
										"Pandori":{
											"data":20,
											"color":"#D6E0EB"
										}
									}
								}
							}
						},
						"Rajasthan":{
							"data":40,
							"color":"#009999",
							"key":{
								"Ajmer":{
									"data":90,
									"color":"#00CCCC",
									"key":{
										"Vijainagar":{
											"data":50,
											"color":"#00FFFF"
										},
										"Pushkar":{
											"data":75,
											"color":"#80FFFF"
										},
										"Nasirabad dsdsa dsdfsd sfasfa adsfas":{
											"data":75,
											"color":"#CCFFFF"
										},
										"Kishangarh":{
											"data":75,
											"color":"#E6FFFF"
										},
										"Kiranipura":{
											"data":20,
											"color":"#D1FFFF"
										}
									}
								},
								"Bikaner":{
									"data":30,
									"color":"#DBFFFF"
								},
								"Jodhpur":{
									"data":200,
									"color":"#F0FFFF"
								}
							}
						},
						"Himachal Pradesh":{
							"data":20,
							"color":"#7A7ACC",
							"key":{
								"Chamba":{
									"data":300,
									"color":"#A3A3FF"
								},
								"Kangra":{
									"data":105,
									"color":"#C2C2FF"
								},
								"Shimla":{
									"data":98,
									"color":"#E0E0FF"
								}
							}
						}
					}
			},
			"Pakistan":{
				"data":20,
				"color":"#754719",
					"key":{
						"Balochistan":{
							"data":500,
							"color":"#855C33",
							"key":{
								"Quetta":{
									"data":30,
									"color":"#94704D"
								},
								"Khuzdar":{
									"data":65,
									"color":"#A38566"
								},
								"Kadha":{
									"data":20,
									"color":"#C2AD99"
								}
							}
						},
						"Sindh":{
							"data":100,
							"color":"#949470"
						},
						"Islamabad":{
							"data":300,
							"color":"#B2B299"
						}
					}
			},
			"Aus":{
				"data":60,
				"color":"#CC0066",	
				"key":{
					"New South Wales":{
						"data":20,
						"color":"#E680B2"
					},
					"Victoria":{
						"data":20,
						"color":"#EB99C2"
					},
					"South Australia":{
						"data":20,
						"color":"#F5CCE0"
					}
				}
			}
		}
	}	
		
		var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":15,"gridLineColor":"#353b37"};
		var stocChart54=$("#advanceChartContainer").stocCharts(textStyleConfg);
		stocChart54.drillDownDountChartAnalysis(data);
	});	
	
	$("#LineChartWithReverseYAxis").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".LineChartWithReverseYAxis").show();
		  var data =
		{
				title : "Sold Quantity in Last 10 Month ",
				xAxisData:["Jan'14","Feb'14","Mar'14","Apr'14","May'14","Jun'14","Jul'14","Aug'14","Sept'14","Oct'14"],
				yAxisLabel : "Sold Quantity",
				xAxisLabel : "Month",
				lineStrokeWidth : 1,
				circleRadius : 3,
				yAxisData:
				[{				
					"name" : "Angel",
					"color": "#00ff7e",
					"data" : [123,423,302,223,723,223,323,703,523,783]
				},
				{
					"name" : "Venture",
					"color": "red",
					"data" : [850,870,120,223,729,623,323,832,523,800]			
				},
				{
					"name" : "Micro",
					"color": "#4fb6f2",
					"data" : [333,623,672,673,850,120,432,423,152,100]			
				}
				]
				
		}
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart55=$("#line1").stocCharts(textStyleConfg);
		stocChart55.LineChartWithReverseYAxisAnalysis(data);
	});
	
	$("#performanceChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".performanceChart").show();
		
		var performanceChartData=
		{
		  "title" : "Class Performence",
		  "yLabel" : "subject(class vise)",
          "xLabel" : "activity",
		  "legendArray":["legend1","legend2","legend3"],
		  "legendColor":["cyan","#f7f7f7","yellow"],
		  "data": [
			{
			  "class_name": "7th-B Maths",
			  "class_url": "http://example.com",
			  "activity": 12,
			  "recall": 24,
			  "understanding": 36,
			  "xData":[45,34,67,34,56,20],
			  "xDataColor":["#f7f7f7","#f7f7f7","#f7f7f7","#f7f7f7","#f7f7f7","#f7f7f7"],
			  "toolTipActivities":["Good","Very Good","Brilient","Good","Very Good","Brilient"],
			  "tip-activity": "Lorem Ipsum activity",
			  "tip-recall": "Lorem Ipsum recall",
			  "tip-understanding": "Lorem Ipsum understanding",
			  "color-activity": "#f7f7f7",
			  "color-recall": "#f7f7f7",
			  "color-understanding": "#f7f7f7"
			},
			{
			  "class_name": "7th-A Maths",
			  "class_url": "http://example.com",
			  "activity": 12,
			  "recall": 24,
			  "understanding": 36,
			  "xData" : [34,56,43,23,43,45],
			  "xDataColor" : ["#fcb322","#fcb322","#fcb322","#fcb322","#fcb322","#fcb322"],
			  "toolTipActivities":["Good","Very Good","Brilient","Good","Very Good","Brilient"],
			  "tip-activity": "Lorem Ipsum activity",
			  "tip-recall": "Lorem Ipsum recall",
			  "tip-understanding": "Lorem Ipsum understanding",
			  "color-activity": "#fcb322",
			  "color-recall": "#fcb322",
			  "color-understanding": "#fcb322"
			},
			{
			  "class_name": "6th-A Maths",
			  "class_url": "http://example.com",
			  "activity": 12,
			  "recall": 24,
			  "understanding": 36,
			  "xData" : [54,63,36,23,25,49],
			  "xDataColor" : ["#fcb322","#fcb322","#fcb322","#fcb322","#fcb322","#fcb322"],
			  "toolTipActivities":["Good","Very Good","Brilient","Good","Very Good","Brilient"],
			  "tip-activity": "Lorem Ipsum activity",
			  "tip-recall": "Lorem Ipsum recall",
			  "tip-understanding": "Lorem Ipsum understanding",
			  "color-activity": "#fcb322",
			  "color-recall": "#fcb322",
			  "color-understanding": "#fcb322"
			},
			{
			  "class_name": "6th-B Maths",
			  "class_url": "http://example.com",
			  "activity": 12,
			  "recall": 24,
			  "understanding": 36,
			  "xData" : [54,23,"fsy",43,35,39],
			  "xDataColor" : ["#fcb322","#fcb322","#fcb322","#fcb322","#fcb322","#fcb322"],
			  "toolTipActivities":["Good","Very Good","Brilient","Good","Very Good","Brilient"],
			  "tip-activity": "Lorem Ipsum activity",
			  "tip-recall": "Lorem Ipsum recall",
			  "tip-understanding": "Lorem Ipsum understanding",
			  "color-activity": "#fcb322",
			  "color-recall": "#fcb322",
			  "color-understanding": "#fcb322"
			}
		  ],
		  "differentActivity" : ["activity","recall","understanding","aaaaa","bbbb","cccc"],
		  "maxValue" : 67,
		  "minValue" : 20,
          "lineColor" : "gray"		  
		}
		
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart55=$("#line1").stocCharts(textStyleConfg);
		stocChart55.performanceChartAnalysis(performanceChartData);
	});
	
		
	$("#horizontalStackedBarChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".horizontalStackedBarChart").show();
		
		var data = {
					title : "Product Sale(Brand wise)",
					xAxisLabel :"Current Status",
					yAxisLabel :"Product",
					yAxisData : ["Formal Shirt","Jeans","T-Shirt","Trouser","Blazers","Sports Wear"],
					key: [
							{
								name: 'Zara',
								data: [50, 30, 40, 37, 20,30],
								color : "#00FFFF"
							},
							{
								name: 'Levis',
								data: [58, 40, 32, 25, 50,20],
								color : "#DCDCDC"
							}, 
							{
								name: 'Woodland',
								data: [30, 43, 74, 22, 55,35],
								color : "#7FFFD4"
							}
							
						]
				}  
		/*
			
		var data = {
					title : "Product Sale(Brand wise)",
					xAxisLabel :"Current Status",
					yAxisLabel :"Product",
					yAxisData : ["Formal Shirt","Jeans","T-Shirt","Trouser"],
					key: [
							{
								name: 'Zara',
								data: [50, 30, 40, 37],
								color : "#00FFFF"
							},
							{
								name: 'Levis',
								data: [0, 40, 32, 25],
								color : "#DCDCDC"
							}, 
							{
								name: 'Woodland',
								data: [0, 43, 0, 22],
								color : "#7FFFD4"
							}
							
						]
				}  
				*/
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":12,"gridLineColor":"#353b37"};
		var stocChart55=$("#line1").stocCharts(textStyleConfg);
		stocChart55.horizontalStackedBarChartAnalysis(data);
	});
	
	
	$("#simpleBarChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".simpleBarChart").show();
		
		var data = {
					title : "Product Sale(Brand wise)",
					xAxisLabel :"Brand",
					yAxisLabel :"Product sale",
					
					
					xAxisData : ["Formal Shirt","Jeans","T-Shirt","Trouser","Blazers","Sports Wear"],
					yAxisData : [50, 30, 40, 37, 20,30],
					color :["#00FFFF"]
					
				}  
		/*
		var data = {
					title : "Product Sale(Product Wise)",
					xAxisLabel :"Brand",
					yAxisLabel :"Product sale",
					xAxisData : ["Pepsi","Mirinda","Mountain Dew","Kurkure","Lipton"],
					yAxisData : [50, 30, 40, 37, 20],
					color :["#00FFFF"]
					
				}  
		*/
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart55=$("#line1").stocCharts(textStyleConfg);
		stocChart55.simpleBarChartAnalysis(data);
	});
	
	
	
	$("#multiGroupedBarChart").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".multiGroupedBarChart").show();
		
	var data = {
					title : "Comparison Of Sale",
					xAxisLabel :"Years",
					yAxisLabel :"Sales(In Crores)",
					xAxisData : ["2010","2011","2012","2013","2014"],
					toolTipUnit: "Year",
					key: [
							{
								name: 'Zara',
								data: [50, 30, 40, 37, 20],
								color : "#EBD6CC"
							},
							{
								name: 'Levis',
								data: [58, 70, 95, 25, 50],
								color : "#00FFFF"
							}, 
							{
								name: 'Woodland',
								data: [30, 40, 74, 22, 55],
								color : "#7FFFD4"
							}
							
						]
				}  
		
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart55=$("#line1").stocCharts(textStyleConfg);
		stocChart55.multiGroupedBarChartAnalysis(data);
	});
	
	
	$("#mapOfIndianPopulation").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".mapOfIndianPopulation").show();
		
		
 
		 var colorRange = ["#add8e6", "#9acd32", "#9acd32", "#d2b48c", "#98fb98", "#3cb371"];

		 var labelDomain = [0,10000000,25000000 ,50000000 ,75000000 ,100000000];


		 var style = {
			 "colorRange" :colorRange,
			 "labelDomain" : labelDomain,
			 "toolTipLabel" : "population"
			};  
		 var indiaStatesData = { 
			 "Andhra Pradesh"  :{"population" : 84580777 , "growthRate" : 10.98  , "area": 275045, "density":308 , "sex Ratio":993 ,"Literacy":67.02},
			 "Andhra Pradesh"  :{"population" : 84580777 , "growthRate" : 10.98  , "area": 275045, "density":308 , "sex Ratio":993 ,"Literacy":67.02},
			 "Arunachal Pradesh"  :{"population": 1383727  , "growthRate":26.03 , "area":83743, "density":17, "sex Ratio":938, "Literacy":65.38},
			 "Assam"     :{"population" : 31205576,"growthRate": 17.07 , "area":78438, "density":398, "sex Ratio":958, "Literacy":72.19},
			 "Bihar"     :{"population" : 104099452 ,"growthRate": 25.42 , "area":94163, "density":1106, "sex Ratio":918, "Literacy":61.80},
			 "Chhattisgarh"   :{"population" :25545198 ,"growthRate": 22.61  , "area":135192, "density":189, "sex Ratio":991, "Literacy":70.28},
			 "Delhi"     :{"population" : 16787941,"growthRate": 21.21 , "area":1483, "density":11320, "sex Ratio":868, "Literacy":86.21},
			 "Goa"      :{"population" : 1458545,"growthRate":8.23  , "area":3702, "density":394, "sex Ratio":973, "Literacy":88.70},
			 "Gujarat" :  {"population" :60439692 ,"growthRate":19.28  , "area":196244, "density":308, "sex Ratio":919, "Literacy":78.03},   
			 "Haryana" :  {"population" :25351462 ,"growthRate":19.90  , "area":44212, "density":573, "sex Ratio":879, "Literacy":75.55},
			 "Himachal Pradesh" :{"population" : 6864602,"growthRate":12.94  , "area":55673, "density":123, "sex Ratio":972, "Literacy":82.80},
			 "Jammu and Kashmir" :{"population" :12541302 ,"growthRate":23.64  , "area":222236, "density":56, "sex Ratio":889, "Literacy":67.16},
			 "Jharkhand" : {"population" :32988134 ,"growthRate": 22.42 , "area":79716, "density":414, "sex Ratio":948, "Literacy":66.41},
			 "Karnataka" : {"population" :61095297 ,"growthRate":15.60  , "area":191791, "density":319, "sex Ratio":973, "Literacy":75.36},
			 "Kerala" :  {"population" :33406061 ,"growthRate": 4.91 , "area":38852, "density":860, "sex Ratio":1084, "Literacy":94.00},   
			 "Madhya Pradesh" :{"population" : 72626809,"growthRate": 20.35 , "area": 308252, "density": 236, "sex Ratio": 931, "Literacy": 69.32},
			 "Maharashtra" : {"population" : 112374333, "growthRate": 15.99 , "area": 307713, "density": 365, "sex Ratio": 929, "Literacy":82.34},
			 "Manipur" :  {"population" : 2570390,"growthRate":12.05  , "area":22327, "density":115, "sex Ratio":992, "Literacy":79.21}   ,
			 "Meghalaya" : {"population" : 2966889,"growthRate":27.95  , "area":22429, "density":132, "sex Ratio":989, "Literacy":74.43},
			 "Mizoram" :  {"population" :1097206 ,"growthRate":23.48  , "area":21081, "density":52, "sex Ratio":976, "Literacy":91.33},
			 "Nagaland" : {"population" : 1978502,"growthRate":-0.58  , "area":16579, "density":119, "sex Ratio":931, "Literacy":79.55},     
			 "Orissa" :  {"population" : 41974218,"growthRate": 14.05 , "area":155707, "density":270, "sex Ratio":979, "Literacy":72.87},
			 "Punjab" :  {"population" : 27743338,"growthRate":13.89  , "area":50362, "density":551, "sex Ratio":895, "Literacy":75.84},
			 "Rajasthan" : {"population" : 68548437 ,"growthRate":21.31  , "area":342239, "density":200, "sex Ratio":928, "Literacy":66.11},
			 "Sikkim" :  {"population" :610577 ,"growthRate":12.89  , "area":7096, "density":86, "sex Ratio":890, "Literacy":81.42},
			 "Tamil Nadu" : {"population" :72147030 ,"growthRate":15.61  , "area":130060, "density":555, "sex Ratio":996, "Literacy":80.09},
			 "Tripura" :  {"population" : 3673917,"growthRate":14.84  , "area":10486, "density":350, "sex Ratio":960, "Literacy":87.22},   
			 "Uttar Pradesh":{"population" :199812341 ,"growthRate":20.23  , "area":240928, "density":829, "sex Ratio":912, "Literacy":67.68}, 
			 "Uttarakhand" : {"population" : 10086292,"growthRate": 18.81 , "area":53483, "density":189, "sex Ratio":963, "Literacy":78.82},
			 "West Bengal" : {"population" :91276115 ,"growthRate": 13.84 , "area":88752, "density":1028, "sex Ratio":950, "Literacy":76.26}
			 };
			 
			 
		var stocMap1 = $("#line1").stocMaps();
		  stocMap1.indiaStates("line1",indiaStatesData,style);
	});
	
	
		$("#zoomableMapOfIndiaChart").click(function(){

		$("#advanceChartContainer").empty();
		
		var colorRange = ["#CCFFFF", "#E6E6E6", "#B8DBFF", "#B2FFB2", "#FFFF94", "#FFCCCC","#B2F0D1", "#B2CCCC", "#EBAD99", "#C28585", "#D1D1E0", "#E0E0D1","#D6EBE0", "#CCD6E0", "#CCFFE6",  "#E6E6E6",  "#CCD6CC",  "#00ff7e",  "#333385"];

		var stocMap1 = $("#advanceChartContainer").stocMaps();
		  stocMap1.zoomableIndiaStates("advanceChartContainer",colorRange);
	});
	
	
	
	$("#mapOfUSAUnemployement").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".mapOfUSAUnemployement").show();
		
	var labelDomain =[0,.02, .04, .06, .08, .10];
	var colorRange =  ["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"];
 
		var style = {
			"colorRange" :colorRange,
			"labelDomain" : labelDomain,
			"toolTipLabel" : "unemployement Rate"
		};
 var usa = USA.unemployement; 
 

  var stocMap1 = $("#line1").stocMaps();
  stocMap1.usaUnemployement("line1",usa,style);
		
		

	});
	
	
		$("#mapOfUSAAgricultureTrend").click(function(){
		selectedChartIndex=$(this).attr("index");
		updateJsfiddleLink(selectedChartIndex);
		$("#line1").empty();
			$(".chartDetails").hide();
	    $(".mapOfUSAAgricultureTrend").show();
		
var colorRange =["#cc8e79", "#4fb845", "#fef200",  "#a46db0",  "#5ebfea",  "#00ff7e",  "#88cf8d"];
 var labelDomain =[0,100,250,500, 1500,2500,3000];
 var usa = USA.dataUsaAgri;
 var style = {
     "colorRange" :colorRange,
     "labelDomain" : labelDomain,
     "toolTipLabel" : "independent Farms"
    };

  var stocMap1 = $("#line1").stocMaps();
  stocMap1.usaAgriculture("line1",usa,style);
		
		
	
	});
	
	
	
	
		
	$("#mapOfIndiaWithChart").click(function(){

		$("#advanceChartContainer").empty();
		 var container = $('#advanceChartContainer');
		 
		 var template  = '<div><span class="map-chart-heading">LOK SABHA ELECTION RESULTS 2014</span> <button class="btn btn-warning btn-sm" style="position : absolute; left :'+ '30px;z-index :999999999" id="chartResetButton">Reset</button><div id="advanceChartDivision"><div style="width : 50%; margin-top:-60px;'+
		 'height:90%;position:absolute;left:0"'+
		'id="indiaMapWithChartInnerLeft"></div><span class="stateName" id="stateName">ALL INDIA STATES</span><div style="width : 50%;height:90%;'+
		'padding-top: 100px;position:absolute ; margin-top:-60px; right:0;"'+
		'id="indiaMapWithChartInnerRight"></div></div></div>';
		 
		 container.append(template);
		 
		 var colorRange = ["#CCFFFF", "#E6E6E6", "#B8DBFF", "#B2FFB2", "#FFFF94", "#FFCCCC","#B2F0D1", "#B2CCCC", "#EBAD99", "#C28585", "#D1D1E0", "#E0E0D1","#D6EBE0", "#CCD6E0", "#CCFFE6",  "#E6E6E6",  "#CCD6CC",  "#00ff7e",  "#333385"];
					

		 var style = {
			 "colorRange" :colorRange,
			 "toolTipLabel" : "total seats"
		 };  
			 
		var stocMap1 = $("#indiaMapWithChartInnerLeft").stocMaps();
		  stocMap1.advanceIndiaStates("indiaMapWithChartInnerLeft",style,100);
		  /*
		  	 var data = {
					title : "",
					xAxisLabel :"Potitical Parties",
					yAxisLabel :"No of Seat's",
					
					xAxisData : ["BJP","INC","SAD","AAP","total"],
					key: [
							{
								name: 'Punjab',
								data: [2, 3, 4, 4, 13],
								color : "#EBD6CC"
							}						
						]
				}  
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
		var stocChart55=$("#indiaMapWithChartInnerRight").stocCharts(textStyleConfg);
		stocChart55.multiGroupedBarChartAnalysis(data);
		
		  */
		 var data = {
								title : "",
								xAxisLabel : "Political Parties",
								yAxisLabel :"Seats",
								unit : "",
								barData: [{
									"country": "BJP",
									"visits": 280,
									"color": "#f97d09"
									}, {
									"country": "INC",
									"visits": 44,
									"color": "#148708"
									},{
									"country": "AIADMK",
									"visits": 37,
									"color": "#000000"
									},{
									"country": "Total Seat's",
									"visits": 542,
									"color": "#8aabcc"
									}]  
							};
		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
						 var stocChart43=$("#indiaMapWithChartInnerRight").stocCharts(textStyleConfg);
						 stocChart43.roundedThreeDBarAnalysis(data);
		  
		  
	});
	
$("#twoDStackedBarChart").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
		
		 var data = {
					title : "Web performance today",
					xAxisLabel :"Websites",
					yAxisLabel :"performance Rate",
					xAxisData : ["Abebooks.com","Amozon.com","Adpost.com","walgreens.com","Amazon.co.uk","Netflix.com","Zppos.com","Barnesandnoble.com","CDuniverse.com","Wiley"],
					key: [
							{
								name: 'Time To Interact(TTI)',
								data: [1.0, 6.4, 1.5, 3 , 2.3 , 2.4 , 2.4 , 2.4 , 2.5 , 5.5],
								color : "#ccdb4b"
							},
							{
								name: 'Total Load Time',
								data: [2.0, 4.7, 4.5, 2.5 , 4.3 , 13.3 , 7.3 , 6.2 , 3.6 , 1.0],
								color : "#de4943"
							},
							{
								name: 'Total Load Time',
								data: [2.0, 1.9, 4.5, 2.5 , 4.3 , 13.3 , 7.3 , 6.2 , 3.6 , 5.0],
								color :"#8ad4e2"
							}
							
						]
				}  
		

 		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
						 var stocChart43=$("#advanceChartContainer").stocCharts(textStyleConfg);
						 stocChart43.twoDStackedBarChartAnalysis(data);
		
		
	
	});
	
	$("#areaChartWithRange").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
		
		var data =  {
					"title" : "Product Status",
					"xAxisData" : ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"],
					"xAxisLabel" : "Years",
					"yAxisLabel" : "Range Value",
					"averageValue" : 0,
					"yDataObj" : [
									{
										"yAxisDataUpper" : [20,100,20,120,35,150,60,115,-70,55,105],
										"yAxisDataLower" : [-40,60,-40,60,-15,90,0,70,-120,-15,75],
										"legend" : "Complete",
										"color" : "#90e0dc"
									},
									{
										"yAxisDataUpper" : [10,-80,0,-50,50,100,-10,-25,125,15,45],
										"yAxisDataLower" : [-40,-130,-50,-100,0,50,-60,-75,75,-35,14],
										"legend" : "Approved",
										"color" : "#c6c2ea"
									},
									{
										"yAxisDataUpper" : [40,-10,30,-20,70,-30,-10,-25,50,15,45],
										"yAxisDataLower" : [-10,-60,-20,-80,20,-80,-60,-75,0,-35,14],
										"legend" : "Total",
										"color" : "#919199"
									},
									{
										"yAxisDataUpper" : [10,70,10,50,15,100,60,95,-10,55,-15],
										"yAxisDataLower" : [-40,20,-50,0,-35,50,0,45,-40,-15,-65],
										"legend" : "Active",
										"color" : "#DCFBDA"
									}
								]
					
					}		
		

 		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
						 var stocChart43=$("#advanceChartContainer").stocCharts(textStyleConfg);
						 stocChart43.areaChartWithRangeAnalysis(data);
		
		
	
	});
	
	
	$("#primeChart").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
		
		
		$(document).ready(function(){
			flagForPrimeToolTip = true;
			initialiseChartPrime();
		});

 		
/*	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
		 var stocChart43=$("#advanceChartContainer").stocCharts(textStyleConfg);
		 stocChart43.twoDStackedBarChart1Analysis();

	*/	
	
	});
	
	$("#threeDStackedDountChart").click(function(){
	//	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
	var data = [
				{
					"dountData" : [77,86,65],
					"dountKey" : ["Maths Avg.","Science Avg.","English Avg."],
					"colorArray" : ["#61d376","#966161","#436199"],
					"unit" : "%",
					"legendColor":"#b0b0ba",
					"heading" :"8th Class"
				},
				{
					"dountData" : [33,95,87],
					"dountKey" : ["Maths Avg.","Science Avg.","English Avg."],
					"colorArray" : ["#61d376","#966161","#436199"],
					"unit" : "%",
					"legendColor":"#dcfbda",
					"heading" :"9th Class"
				},
				{
					"dountData" : [35,75,68],
					"dountKey" : ["Maths Avg.","Science Avg.","English Avg."],
					"colorArray" : ["#61d376","#966161","#436199"],
					"unit" : "%",
					"legendColor":"#de4943",
					"heading" :"10th Class"
				},
				{
					"dountData" : [99],
					"dountKey" : ["Passing Avg."],
					"colorArray" : ["#61d376"],
					"unit" : "%",
					"legendColor":"#356aa0",
					"heading" :"Total pass percentage"
				}/*,
				{
					"dountData" : [82,59,77,92],
					"dountKey" : ["Maths Avg.","Science Avg.","English Avg.","Hindi Avg."],
					"colorArray" : ["#436199","#b1d3a0","cyan","#7a5344","#aec785"],
					"unit" : "%",
					"legendColor":"blue",
					"heading" :"9th Class"
				},
				{
					"dountData" : [52,69,78,62],
					"dountKey" : ["Maths Avg.","Science Avg.","English Avg.","Hindi Avg."],
					"colorArray" : ["#c6c2ea","#dcfbda","#ccdb4b","#c3e3eb","#aec785"],
					"unit" : "%",
					"legendColor":"blue",
					"heading" :"9th Class"
				}*/
			]

 		
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						
		 var stocChart43=$("#advanceChartContainer").stocCharts(textStyleConfg);
		 stocChart43.threeDStackedDountChartAnalysis(data);

		
	
	});

$("#racingVisualization").click(function(){
 //	selectedChartIndex=$(this).attr("index");
	//	updateJsfiddleLink(selectedChartIndex);
		$("#advanceChartContainer").empty();
	  var data =
		{
			
				"xAxisData":["0.00.000","0.26.222","0.52.444","1.18.666","1.44.888","0.00.000","0.26.222","0.52.444","1.18.666","1.44.888",
				"0.00.000","0.26.222","0.52.444","1.18.666","1.44.888","0.00.000","0.26.222","0.52.444","1.18.666","1.44.888",
				"0.00.000","0.26.222","0.52.444","1.18.666","1.44.888","0.00.000","0.26.222","0.52.444","1.18.666","1.44.888"],
				"lineStrokeWidth" : 1,
				"largeValueLines" :[
										{				
											"name" : "Angel",
											"color": "#de1a19",
											"data" : [123,423,302,223,723,123,423,302,223,723,123,423,302,223,723,123,423,302,223,723,123,423,302,223,723,123,423,302,223,723]
										},
										{
											"name" : "Venture",
											"color": "#b6ca16",
											"data" : [850,870,120,223,729,850,870,120,223,729,850,870,120,223,729,850,870,120,223,729,850,870,120,223,729,850,870,120,223,729]			
										}
									],
				
				"yAxisData":
				[
					{				
						"name" : "Angel",
						"color": "#249f19",
						"data" : [13,13,13,13,13,13,13,13,13,13,13,13,12,13,13,13,13,12,11,13,13,13,12,11,13,13,13,12,13,13]
					},
					{
						"name" : "Venture",
						"color": "#d08c0c",
						"data" : [12,17,20,23,29,12,17,20,23,29,12,17,20,23,29,12,17,20,23,29,12,17,20,23,29,12,17,20,23,29]			
					},
					{
						"name" : "Micro",
						"color": "#acc8cd",
						"data" : [33,32,33,33,34,34,34,34,34,35,35,35,35,35,35,36,36,36,36,36,37,37,37,37,37,37,37,38,38,38]			
					},
					{
						"name" : "Micro",
						"color": "#c932c0",
						"data" : [53,23,12,23,30,53,23,12,23,30,53,23,12,23,30,53,23,12,23,30,53,23,12,23,30,53,23,12,23,30]			
					},
					{
						"name" : "Micro",
						"color": "#8f7031",
						"data" : [43,43,43,43,44,43,43,45,45,40,43,43,42,43,40,43,43,42,43,40,43,43,42,43,40,43,43,42,43,40]			
					},
					{
						"name" : "Micro",
						"color": "#156d12",
						"data" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]			
					}
					
				]
				
		}
		var dataLeft = 
		{
			"rectColorArray" : ["#de1a19","#b6ca16","#249f19","#d08c0c","#acc8cd","#c932c0","#8f7031","#156d12"],
			"units" : ["mm","mm","rpm","m","km/hr","km/hr","",""],
			"textArray" : ["GPS_LAT","GPS_LON","RPM","ODOMT","GPS_SPEED","SPEED","GEAR_SPEED","TH20"],
			"rectBackColor": "#757575"
		}
		
		
		var positionArray=[{"lat": 50.8284, "lon":4.71969},{"lat": 50.828, "lon":4.7217},{"lat": 50.828, "lon":4.72407}
			,{"lat": 50.828, "lon":4.72407},{"lat": 50.828, "lon":4.7252},{"lat": 50.826, "lon":4.72938}
			,{"lat": 50.8286, "lon":4.71969},{"lat": 50.8286 , "lon":4.71952},{"lat": 50.8286, "lon":4.71938},
			{"lat": 50.8284, "lon":4.71979},{"lat": 50.8284, "lon":4.72969},{"lat": 50.8284, "lon":4.72979},
			{"lat": 50.8284, "lon":4.73969},{"lat": 50.8284, "lon":4.73979},{"lat": 50.8284, "lon":4.72379},
			{"lat": 50.8284, "lon":4.71969},{"lat": 50.828, "lon":4.7217},{"lat": 50.828, "lon":4.72407}
			,{"lat": 50.828, "lon":4.72407},{"lat": 50.828, "lon":4.7252},{"lat": 50.826, "lon":4.72938}
			,{"lat": 50.8286, "lon":4.71969},{"lat": 50.8286 , "lon":4.71952},{"lat": 50.8286, "lon":4.71938},
			{"lat": 50.8284, "lon":4.71979},{"lat": 50.8284, "lon":4.72969},{"lat": 50.8284, "lon":4.72979},
			{"lat": 50.8284, "lon":4.73969},{"lat": 50.8284, "lon":4.73979},{"lat": 50.8284, "lon":4.72379}
			
			
			];
			
	var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
  var stocChart55=$("#advanceChartContainer").stocCharts(textStyleConfg);
  stocChart55.racingVisualizationAnalysis(data,dataLeft,positionArray);
 });
	

 
 
  
  
 
 
 
 

 

 
jQuery(document).ready(function() {
  checkContainer();
});

function checkContainer () {


  if($('#infographicChartContainer').is(':visible')){ //if the container is visible on the page
     $("#infographicTilledBarChart").empty();

	var data = 
	{
		"rank" : ["01","02","03","04"],
		"icon" : ["img/logos/lays.png","img/logos/kurkure.png","img/logos/tropicana.png","img/logos/mirinda.png"],
		"yAxisData" : [35,50,70,90],
		"title" : ["Lays","Kurkure","Tropicana","Mirinda"],
		"description" : ["Lay,s Potato Chips india's Magic Masala","Kurkure Festive Giftbox","Tropicana Mixed Fruit 100 % juice","Mirinda Orange Soft Drink"],
		"color" : ["#74a317","#4e4a47","#92979b","#62aed2","#3dbfb7","#503721"],
		"backColor" : "#dadada",
		"leftTitle":"Product Name",
		"rightTitle":"Product Description",
		"unit": "%"
	}
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":13,"background":"none","font-color":"white","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#333","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"white","font-description-family":"'Open Sans', sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"white","font-heading-family":"'Roboto', sans-serif","font-heading-weight":400,"font-number-size":14,"font-number-color":"white","font-number-family":"'Roboto', sans-serif","font-number-weight":600,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
	var stocChart55=$("#infographicTilledBarChart").stocCharts(textStyleConfg);
	stocChart55.infographicTilledBarChartAnalysis(data);
	
	

	$("#infographicSmoothPath").empty();
	var data = 
	{
		"rank" : ["01","02","03","04","05"],
		"key" : [23,1359.01,54,65,876],
		"title" : ["Cheetos","Tropicana Tomato","Tropicana Cranberry","Tropicana Coconut","Pepsi"],
		"description" : ["Cheetos Cheese Ball - 30g","Tropicana Tomato Fruit Juice - 1000ml","Tropicana Cranberry Delight Friut Juice - 1000ml","Tropicana Creations Coconut & Mixed Fruit - 200ml","Pepsi Soft Drink 1L Bottle"],
		"color" : ["#f15c5e","#797a7c","#f8b75d","#55b8be","#1fb7cf","#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"]
	}
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"white","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":12,"font-heading-color":"white","font-heading-family":"'Roboto', sans-serif","font-heading-weight":400,"font-number-size":14,"font-number-color":"#ffffff","font-number-family":"'Roboto', sans-serif","font-number-weight":400,"font-rank-size":16,"font-rank-color":"#000","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicSmoothPath").stocCharts(textStyleConfg);
  stocChart55.infographicSmoothPathAnalysis(data);
  
  
  
  	$("#infographicBarChartWithPercentage").empty();
	var data = 
			{
				"xAxisData" : [43.09,11.03,5.09,306.83,59.8],
				"color" : ["#f15c5e","#797a7c","#f8b75d","#55b8be","#1fb7cf","#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"],
				"labelColor":["#f15c5e","#797a7c","#f8b75d","#55b8be","#1fb7cf"],
				"icon" : ["img/logos/amazon.png","img/logos/srs.png","img/logos/basket.png","img/logos/grocermax.png","img/logos/kada.png"],
				"key" : ["Amazon","Srs","Big-Basket","Grocermax","Kada"],
				"backColor"	:"#d1cfd0",
				"unit" : "%"
			}
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"white","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":10,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":100,"font-number-size":10,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicBarChartWithPercentage").stocCharts(textStyleConfg);
  stocChart55.infographicBarChartWithPercentageAnalysis(data);
  
  
  
  	$("#infographicBarChartCardStand").empty();
	var data = 
	{
		"rank" : ["01","02","03","04","05"],
		"icon" : ["img/logos/lays.png","img/logos/kurkure.png","img/logos/tropicana.png","img/logos/mirinda.png"],
		"yAxisData" : [35,50,70,100],
		"description" : ["Lay,s Potato Chips india's Magic Masala","Kurkure Festive Giftbox","Tropicana Mixed Fruit 100 % juice","Mirinda Orange Soft Drink"],
		"color" : ["#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"],
		"rotateText" : "true",
		"backColor"	:"#d1cfd0"
		
	}
		
var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":12,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":12,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800,"font-rank-size":16,"font-rank-color":"#000","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicBarChartCardStand").stocCharts(textStyleConfg);
  stocChart55.infographicBarChartCardStandAnalysis(data);
  
  
 
$("#infographicRankStand").empty(); 
var data = 
	{
		"rank" : ["01","02","03"],
		"icon" : ["img/logo_colored/img1.png","img/logo_colored/img9.png","img/logo_colored/img6.png","img/logo_colored/img5.png","img/logo_colored/img7.png"],
		"title" : ["Rank 10","Rank 12","Rank 15"],
		"description" : ["Pepsi","Kurkure","Gatorade"],
		"bulbImage" :"img/logo_colored/bulb.png",
		"cylinderColor" : "#c9c9c7",
		"pathColor" : "#FFFFFF",
		"unit" : "%"
	}
	
var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":12,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":14,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800,"font-rank-size":14,"font-rank-color":"#000","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicRankStand").stocCharts(textStyleConfg);
  stocChart55.infographicRankStandAnalysis(data);



  	
	$("#infographicStepUpChart").empty();
	var data = 
	{
		"icon" : ["img/logos/lays.png","img/logos/kurkure.png","img/logos/tropicana.png","img/logos/mirinda.png"],
		"yAxisData" : [35,50,70,100],
		"title" : ["Lays","Kurkure","Tropicana","Mirinda"],
		"description" : ["Lay,s Potato Chips india's Magic Masala","Kurkure Festive Giftbox","Tropicana Mixed Fruit 100 % juice","Mirinda Orange Soft Drink"],
		"color" : ["#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"]
	}
		
		
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":14,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800,"font-rank-size":14,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicStepUpChart").stocCharts(textStyleConfg);
  stocChart55.infographicStepUpChartAnalysis(data);

 


$("#infographicBarChart").empty();
  var data = 
	{
		"rank":["01","02","03","04","05"],
		"icon":["img/logos/himalayan.png","img/logos/quaker.png","img/logos/tropicana.png","img/logos/quaker.png","img/logos/quaker.png"],
		"yAxisData":[133164.0,77989.0,75290.0,66975.0,63816.0],
		"title": ["Himalayan","Quaker Oats","tropicana","Quaker Oats","Quaker Oats"],
		"description":["Himalayan natural mineral water - 1L Carton(pack of 12)","Quaker Oats - 1kg Pouch","tropicana Orange 100% juice - 1000ml","Quaker Oats - 1.5kg Pack","Quaker Oats - 1kg Pouch"],
		"color":["#d5be8c","#fce9a7","#8dceb6","#f26748","#757547","#503721"],
		"backColor":"#fffceb",
		"mainTitle" : "product sales",
		"currencyUnit":"\u20B9",
		"unit" : ""
	}
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":100,"font-number-size":10,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":13,"font-rank-color":"#000","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicBarChart").stocCharts(textStyleConfg);
  stocChart55.infographicBarChartAnalysis(data);

 
 


 
		
$("#infographicBartWithPieChart").empty();
var data = 
	{
		"rank" : ["01","02","03","04","05"],
			"icon":["img/logos/lays.png","img/logos/lays.png","img/logos/lays.png","img/logos/lays.png","img/logos/lays.png"],
		"yAxisData" : [35,50,70,90,100],
		"title" : ["Lays","Lays","Lays","Lays","Lays"],
		"description" : ["Lays Potato Chips - American Style Cream & Onion Flavour 52g","Lays Potato Chips - India's Magic Masala - 52g pack","Lays Potato Chips - India's Magic Masala(Party Pack) 177g pack","Lays Potato Chips - American Style Cream & Onion Flavour 52g","Lays Potato Chips - American Style Cream & Onion Flavour 52g"],
		"color" : ["#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"],
		"backColor"	:"#d1cfd0",//
		"pieBackColor" : "#503721",
		"innerArcColor" : "#fce9a7",
		
	}
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":12,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":400,"font-number-size":12,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":14,"font-rank-color":"#000","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
  var stocChart55=$("#infographicBartWithPieChart").stocCharts(textStyleConfg);
  stocChart55.infographicBartWithPieChartAnalysis(data);

 
  
  $("#infographicCircleChart").empty();
	var data = {
		"key":[133164.0,77989.0,75290.0,66975.0,63816.0],
		"description":["Himalayan natural mineral water - 1L Carton(pack of 12)","Quaker Oats - 1kg Pouch","tropicana Orange 100% juice - 1000ml","Quaker Oats - 1.5kg Pack","Quaker Oats - 1kg Pouch"],
		"icon":["img/logos/himalayan.png","img/logos/quaker.png","img/logos/tropicana.png","img/logos/quaker.png","img/logos/quaker.png"],
		"centerIcon" : "img/logo_colored/img2.png",
		"color" : "white"
		
	}
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":9,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":14,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
	
  var stocChart55=$("#infographicCircleChart").stocCharts(textStyleConfg);
  stocChart55.infographicCircleChartAnalysis(data);
  
  
  
 
$("#infographicTrianglePath").empty();
	var data = {
		"key" : 3,
		"color" : "#ef2f1a"
	}
	
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":12,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":20,"font-number-color":"#ffffff","font-number-family":"'Maven Pro',sans-serif","font-number-weight":800};
  var stocChart55=$("#infographicTrianglePath").stocCharts(textStyleConfg);
  stocChart55.infographicTrianglePathAnalysis(data);

  
  	

	$("#threeDRoundedBarChart").empty();
 	var data = {
				"yAxisData" : [60,90,80,58,86],
				"lowerColorArray":["#ed1e79","#fbb03b","#666666","#92278f","#0071bd","#cc886d","#356aa0"],
				"upperColor":"#e6e6e6",
				"imagesArray" :["img/logos/lays.png","img/logos/kurkure.png","img/logos/tropicana.png","img/logos/mirinda.png"],
				"threeDPathColor":"#f7fbf4",
				"xAxisData" : ["Lays","Kurkure","Tropicana","Mirinda"],
				"unit" : "%"
			}
			
		
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":12,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":11,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":12,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
						
	var stocChart43=$("#threeDRoundedBarChart").stocCharts(textStyleConfg);
		 stocChart43.threeDRoundedBarChartAnalysis(data);


	

$("#threeDShutterStack").empty();
  var data =
   {
     title : "Product Rate",
     barData: [{
      "yTick": "01 Step",
      "yData": 80,
      "color": "#FF0F00"
      }, {
      "yTick": "02 Step",
      "yData": 148,
      "color": "#FF6600"
      }, {
      "yTick": "03 Step",
      "yData": 121,
      "color": "#FF9E01"
      }, {
      "yTick": "04 Step",
      "yData": 100,
      "color": "#FCD202"
      }, {
      "yTick": "05 Step",
      "yData": 180,
      "color": "#F8FF01"
      }],  
    commonColor : "#ffffff", 
    upperEclipsColor : "gray",
 //   xAxisLabel : "Country",
 //   yAxisLabel :"Visit(in Millons)",
    upperPathHeight : 35,
	cylinderHeight : 120,
	"imagesArray" :["img/logos/himalayan.png","img/logos/quaker.png","img/logos/tropicana.png","img/logos/quaker.png","img/logos/quaker.png"],
	"lowerTextDes" :["Himalayan","Quaker Oats","tropicana","Quaker Oats","Quaker Oats"],
    unit : "%"  
   }  

var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":16,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":10,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":12,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};
						
  var stocChart55=$("#threeDShutterStack").stocCharts(textStyleConfg);
  stocChart55.threeDShutterStackAnalysis(data);
 	
 
  $("#infographicBarChartWithCylinder").empty();
var data = 
			{
				"xAxisData" : [50,70,88,95,100],
				"color" : ["#42a5f5","#ef5350","#5c6bc0","#66bb6a","#26a69a","#f3aa1f","#cb1b6e","#7e3d97","#318dcc","#3dbfb7","#503721"],
				"icon" : ["logo_colored/img1.png","logo_colored/img9.png","logo_colored/img6.png","logo_colored/img5.png","logo_colored/img7.png"],
				"key" : ["Lays","Kurkure","Tropicana","Mirinda","Pepsi"],
				"backColor"	:"#d1cfd0",
				"unit" : "%"
			}
	var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":12,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":12,"font-description-color":"#000","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":9,"font-heading-color":"black","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":12,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":16,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":600};

  var stocChart55=$("#infographicBarChartWithCylinder").stocCharts(textStyleConfg);
  stocChart55.infographicBarChartWithCylinderAnalysis(data);
  
  
 
	$("#rankWiseInformaticChart").empty();
	var data = {
	
		"rank":["01","02","03","04","05"],
		"icon":["img/logos/img1.png","img/logos/img9.png","img/logos/img6.png","img/logos/img5.png","img/logos/kurkure.png"],
		"name":["9","7","6","4","2"],
		"description":["7UP","Mountain Dew","Lays","Lipton","Kurkure"],
		"innerCircleColor":["#d35454","#2d459b","#0289c9","#01a765","#503721"],
		"outerCircleColor" :"#dddee2",
		"leftLabel":"rank data",
		"rightLabel":"product name"
	}
	
var textStyleConfg={"font-family":"'Roboto', sans-serif","font-size":13,"background":"none","font-color":"white","tick-font-color":"#000","legendTextColor":"white","font-weight":400,"xLabelColor":"#000","yLabelColor":"#a7a7a7","chartTitleColor":"black","titleFontSize":10,"gridLineColor":"#353b37","font-description-size":10,"font-description-color":"#ffffff","font-description-family":"Open Sans, sans-serif","font-description-weight":100,"font-heading-size":14,"font-heading-color":"#000","font-heading-family":"Open Sans, sans-serif","font-heading-weight":10,"font-number-size":14,"font-number-color":"#000","font-number-family":"'Maven Pro',sans-serif","font-number-weight":400,"font-rank-size":14,"font-rank-color":"white","font-rank-family":"'Roboto', sans-serif","font-rank-weight":400};
  var stocChart55=$("#rankWiseInformaticChart").stocCharts(textStyleConfg);
  stocChart55.rankWiseInformaticChartAnalysis(data);
  
  } else {
    setTimeout(checkContainer, 50); //wait 50 ms, then try again
  }
}
	
	$(document).on('click','#chartResetButton',function(){
		$('#mapOfIndiaWithChart').trigger('click');
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

