angular.module("chartApp").controller("leftPanelChartCtlr", function ($scope,$rootScope){
$scope.chartType="pieChart";
var firstSymbolData;
var secondSymbolData;
var firstSymbol='NKE',secondSymbol='AAPL';
var xScale;
var yScale;
var xAxis;
var yAxis;
var areaChartSvg; 
var cmfChartSvg;
var	parseDate = d3.time.format("%Y-%m-%d");
var formatDate = d3.time.format("%b");
var startDate=getDate('start',2,true);
var endDate=getDate('end','');
var closeDataArray,dateArray,demaDataArray,cmfDataArray;
var width;
var height;
var marginLeft=40;
var marginBottom=40;
var marginTop=10;
var bearishColor;
var burishColor;
var isDonutChart;
var selector;
var selector2;
var selector3;
function initAreaChart(){
	selector='#'+'areaChart';
	selector2='#'+'staticBarChart';
	selector3='#'+'staticPieChart';
	bearishColor='red';
	burishColor='green';
	isDonutChart=true;
	buildChart();
}
initAreaChart();

$rootScope.$on('showHistoricChartForSymbol',function(e,msg,switchSymbol){ 
	console.log("broadCast event in area chart "+$scope.$parent.symbol +"switchSymbol "+switchSymbol);
	if(switchSymbol){
		buildChart();
	}
});
$(window).resize(function () {
		console.log('window resize ');
		drawChart();
});

function getSymbolData(symbol,callback){
		
		$.ajax({
			type: "GET",
			//url: "http://app.chaikinpowertools.com/CPTRestSecure/app/sessionless/getPowerTrendChartData?symbol="+ symbol+"&startDate="+startDate+"&endDate="+endDate,          
			url:"http://app.chaikinpowertools.com/CPTRestSecure/app/sessionless/getCMFChartData?symbol="+symbol+"&startDate="+startDate+"&endDate="+endDate,          
			dataType:'json',
			crossDomain: true,
			async: true,
		
			success: function(data,status){
				var historicChartData=[];
				var relativeStrengthArray=[];
				closeDataArray=data.close_price;
				dateArray=data.calculations_date;
				demaDataArray=data.dema;
				cmfDataArray=data.cmf;
				relativeStrengthArray=data.relativeStrength;
				for(var i=0;i<dateArray.length;i++){
					historicChartData.push({'close':closeDataArray[i],'dema':demaDataArray[i],'timeIndex':dateArray[i],'cmf':cmfDataArray[i],'timeIndex1':i,'relativeStrength':relativeStrengthArray[i]});
				}
				if(callback){
					callback(historicChartData);
				}
			},
			error:function(data,status){
				alert('fail to fetch data for  '+symbol);
			}
		});
}
	function getDate(dateType,interVal,interValInMonth){
		
		var todayDate=new Date();
		var dateValue;
		var months = new Array('01','02','03','04','05','06','07','08','09','10','11','12');
		var date = ((todayDate.getDate()<10) ? "0" : "")+ todayDate.getDate();
		if(dateType=="start"){
			if(interValInMonth){
				todayDate.setMonth(todayDate.getMonth()-interVal);
			}
			else{
				todayDate.setFullYear(todayDate.getFullYear()-interVal);
			}
			
		}
		dateValue =  todayDate.getFullYear()+"-" +months[todayDate.getMonth()] + "-" +date ;
		
		return dateValue;
		
	}
	$('.beanish-color').click(function(e){
	$('#colorPicker').unbind('colorchange');
			console.log("offset is:"+$('.beanish-color'));
			$("#colorPicker").jqxColorPicker({
				width: 200,
				height: 180
			});
			$("#colorpickerbox").css('left',e.offSetX +'px');
			$('#colorpickerbox').show();
			$('#colorPicker').bind('colorchange', function (event)
			{ 
			 	var cCode='#'+$("#colorPicker").jqxColorPicker('getColor').hex;
				$('.beanish-color').css('background',cCode);
				setCredentailForPieChart(cCode,burishColor,true);
				drawPieChart('relativeStrength',firstSymbolData,selector3);	
			});
			  
	});
	
	$('.bullish-color').click(function(e){
		$('#colorPicker').unbind('colorchange');
			$("#colorPicker").jqxColorPicker({
				width: 200,
				height: 180
			});  
			$("#colorpickerbox").css('left',e.offSetX +'px');
			$('#colorpickerbox').show();
			$('#colorPicker').bind('colorchange', function (event)
			{ 
			 	var cCode='#'+$("#colorPicker").jqxColorPicker('getColor').hex;
				$('.bullish-color').css('background',cCode);
				setCredentailForPieChart(bearishColor,cCode,true);
				drawPieChart('relativeStrength',firstSymbolData,selector3);	
			});
			  
	});
	
	$('.barrs1').click(function(e){
		$('#colorPicker').unbind('colorchange');
			console.log("offset is:"+$('.beanish-color'));
			$("#colorPicker").jqxColorPicker({
				width: 200,
				height: 180
			});
			$("#colorpickerbox").css('left',e.offSetX +'px');
			$('#colorpickerbox').show();
			$('#colorPicker').bind('colorchange', function (event)
			{ 
			 	var cCode='#'+$("#colorPicker").jqxColorPicker('getColor').hex;
				$('.barrs1').css('background',cCode);
				d3.selectAll('.staticBarChart').style('fill',cCode);
					//makeAreaComparisonChart('.areaComparisonChart1',areaSymbolData1,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,cCode,cCode);
			});
			  
	});
	function buildChart(){
		firstSymbol=$scope.$parent.symbol;
		getSymbolData(firstSymbol,function(dataForSymbol){
			firstSymbolData=dataForSymbol;
			drawChart();
		});
	}
	function drawChart(){
		var xAxisField='timeIndex';
		var yAxisField='close';
		drawCmfChart(xAxisField,yAxisField,selector,firstSymbolData);
		drawBarChart('timeIndex','relativeStrength',selector2,firstSymbolData);
		setCredentailForPieChart(bearishColor,burishColor,isDonutChart);
		drawPieChart('relativeStrength',firstSymbolData,selector3);	
	}
	
	function setCredentailForPieChart(bearishColor1,bullishColor1,isDonut){
		console.log("color code "+bearishColor);
		bearishColor=bearishColor1;
		burishColor=bullishColor1;
		isDonutChart=isDonut;
	}
	$scope.drawChartType=function(){
		drawPieChart('relativeStrength',firstSymbolData,selector3);	
	}
	
	function drawPieChart(fieldName,dataForSymbol,selector3){
		
		var pieChartData=convertDataFormat(fieldName,dataForSymbol);
		var width=$(selector3).width();
		var height=$(selector3).height();
		var r=height/2 -10;
		var innerRadi=20;
		console.log("width height "+width +" height "+height +" length "+pieChartData.length);
		$(selector3).empty();
		
		var vis = d3.select(selector3)
			.append("svg")              //create the SVG element inside the <body>
			.attr("width", width)           //set the width and height of our visualization (these will be attributes of the <svg> tag
			.attr("height", height)
			.append("svg:g")                //make a group to hold our pie chart
				.attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius
		arc = d3.svg.arc()              //this will create <path> elements for us using arc data
			.outerRadius(r);
		if($scope.chartType == "donutChart"){	
			arc.innerRadius(innerRadi);
		}
			
		pie = d3.layout.pie()           //this will create arc data for us given a list of values
			.value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array
	 
		arcs = vis.selectAll("path")     //this selects all <g> elements with class slice (there aren't any yet)
			.data(pie(pieChartData.filter(function(data){
					return (parseInt(data.value) != -1);
					})
			));
			arcs.enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
			.append("svg:path");	
			                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
			
			arcs.transition()
				.duration(500)
				.attr("fill", function(d, i) { console.log("color for arc "+pieChartData[i].color);return pieChartData[i].color; } ) //set the color for each slice to be chosen from the color function defined above
				.attr("d", arc)                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function
				.each(function(d) { this._current = d; });
	 
		
	 
		textLabelElements=vis.selectAll("text").data(pie(pieChartData)).enter().append("svg:text")                                     //add a label to each slice
			.attr("transform", function(d) {                    //set the label's origin to the center of the arc
				//we have to make sure to set these before calling arc.centroidd
				d.innerRadius =0;
				d.outerRadius = r;
				return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
			})
			.attr("text-anchor", "middle")                          //center the text on it's origin
			.attr("dy", ".35em")
			.text(function(d, i) { 
				if(parseFloat(pieChartData[i].value).toFixed(2) == 0.00){
					return "";
				}
				return parseFloat(pieChartData[i].value).toFixed(2); 
				
			});        //get the label from our original data array
	}	
	
	function convertDataFormat(fieldName,data){
		var pieChartDataArray=[];
		var positivePer,negativePer,neutralPer;
		var positive=0,negative=0,neutral=0;
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			if(obj[fieldName] > 0.5){
				positive++;
			}
			else if(obj[fieldName]<0.5){
				negative++;
			}
			else{
				neutral++;
			}
		}
		
		positivePer=((positive)/data.length)*100;
		negativePer=((negative)/data.length)*100;
		neutralPer=((neutral)/data.length)*100;
		
		pieChartDataArray.push({'value':positivePer,'color':burishColor},{'value':negativePer,'color':bearishColor},{'value':neutralPer,'color':'white'});
		//console.log("array length "+pieChartDataArray.length+ " color "+pieChartDataArray[1].color);
		return pieChartDataArray;
	}
	
	function drawCmfChart(xAxisField,yAxisField,selector,dataForSymbol){
		$(selector).empty();
		calculateDimension(selector);
		generateXScale(xAxisField,dataForSymbol);
		calculateYScale(yAxisField,dataForSymbol);
		drawSvg(selector);
		buildCmfChart(dataForSymbol,'firstSymbol',selector);
		buildTimeAxis(selector);
		buildYAxis(selector);
	}
	function  drawBarChart(xAxisField,yAxisField,selector2,dataForSymbol){
		console.log("data for symbol length "+dataForSymbol.length);
		$(selector2).empty();
		calculateDimension(selector2);
		generateXScale(xAxisField,dataForSymbol);
		calculateYScale(yAxisField,dataForSymbol);
		drawSvg(selector2);
		buildBarChart(dataForSymbol,'firstSymbol',selector2,xAxisField,yAxisField);
		buildTimeAxis(selector2);
		buildYAxis(selector2);
	}
	function buildBarChart(dataForSymbol,className,selector,xAxisField,yAxisField){
		var rectWidth =  (width / dataForSymbol.length) - 5;
		/*
		var widthForDiv=width/dataForSymbol.length;
		if(widthForDiv>=1){
			widthForDiv=widthForDiv-1;
		}
		*/
		
		console.log("rectangle width "+rectWidth);
		d3.select(selector)
		.select('svg').
		selectAll('.staticBarChart')
		.data(dataForSymbol)
		.enter().append('rect')
		.attr('class','staticBarChart')
		.attr('width',function(d,i){
			//console.log(i);
			return rectWidth;
		})
		.attr('y',0)
		.attr('height',0)
		.transition()
		.duration(400)
		.attr('height',function(d){
			//return 5;
			return yScale(minYScale)-yScale(d[yAxisField]);
		})
		.attr('x',function(d){
			return xScale(parseDate.parse(d[xAxisField]));//(parseDate.parse(d[xAxisField]));
		})
		.attr('y',function(d){
			return yScale(d[yAxisField]);
		})
		.attr('fill','#008DCF');	
	}
	
	function calculateDimension(selector){
		width=$(selector).width();
		height=$(selector).height();
	}
	
	function buildYAxis(selector)
	{
		d3.select(selector).selectAll('svg').append('g').call(yAxis).attr("transform", "translate("+(width-marginLeft+5)+","+(0)+")").attr('id','yAxisG');
		
	}
	function buildTimeAxis(selector){
		d3.select(selector).selectAll('svg').append('g').call(xAxis).attr("transform", "translate(0," + (height-marginBottom) + ")").attr('id','timeAxis');
	}
	function drawYScaleTick(){
		cmfChartSvg.append("text")
            .attr("class", "yrule")
            .attr("x", (width))
            .attr("y", yScale(0))
            .attr("dy", 0)
            .attr("dx", 0)
            .attr("text-anchor", "end")
            .text("0.00");
				
	}
	function drawSvg(selector){
		cmfChartSvg = d3.select(selector)
            .append("svg:svg")
            .attr("class", "cmChart")
            .attr("width",width)
            .attr("height",height);
	}
	var maxYScale;
	var minYScale;
	function calculateYScale(yAxisField,dataForSymbol){
		var minFirstSymbol=d3.min(dataForSymbol.map( function(d) { return d[yAxisField];}));
		var maxFirstSymbol=d3.max(dataForSymbol.map( function(d) { return d[yAxisField];}));
		
		minYScale=minFirstSymbol;
		maxYScale=maxFirstSymbol;
		yScale= d3.scale.linear()
		.domain([minYScale,maxYScale])
		.range([height-marginBottom, 0]);
		yAxis = d3.svg.axis().scale(yScale)
		.orient("right").ticks(4).tickSize(10,0);
	}
	var ticksArray=[];
	function generateXScale(xAxisField,dataForSymbol){
		xMin=d3.min(dataForSymbol.map( function(d) { return parseDate.parse(d[xAxisField]);}));
		xMax=d3.max(dataForSymbol.map(function(d) { return parseDate.parse(d[xAxisField]);}));
		xScale=d3.time.scale().range([0,(width-marginLeft)]).domain([xMin,xMax]);
		xAxis = d3.svg.axis().scale(xScale)
		.orient("bottom").ticks(6).tickFormat(formatDate).tickSize(10,0);
		
	}
	function getYearInInteger(number) {
		return (number < 1000) ? number + 1900 : number;
	}
	function buildCmfChart(data,className){
		console.log("data length "+data.length);
		var turningPoints = [0];
		
		var area= d3.svg.area()
			.x(function (d) {
				return xScale(parseDate.parse(d.timeIndex));
			})
			.y0(yScale(minYScale))
			.y1(function (d) {
				
				if(d.cmf!="N/A"){
					
					return yScale(d.close);
				}else{
					
					return yScale(minYScale);
				}
				
			})
			.interpolate("basis");
		
		var gradient1 = cmfChartSvg.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "gradient123")
		.attr("x1", "0%")
		.attr("y1", yScale(minYScale))
		.attr("x2", "0%")
		.attr("y2", yScale(maxYScale))
		.attr("gradientUnits", "userSpaceOnUse");
		
		gradient1
            .append("stop")
            .attr("offset", "0")
            .attr("stop-color", "#F2F9FC");
        gradient1
            .append("stop")
            .attr("offset", "0.25")
            .attr("stop-color", "#D1EAF6");
        gradient1
            .append("stop")
            .attr("offset", "0.5")
            .attr("stop-color", "#93CFEA");

        gradient1
            .append("stop")
            .attr("offset", ".75")
            .attr("stop-color", "#7FC6E7");
        gradient1
            .append("stop")
            .attr("offset", "1")
            .attr("stop-color", "#47ACDC");
		
		var valueLine = d3.svg.line()
							.x(function(d) { return xScale(parseDate.parse(d.timeIndex)); })
							.y(function(d) { return yScale(d.close); })
							.interpolate("basis-open"); 		
		var classNameForPath="."+className;	
		cmfChartSvg.selectAll(classNameForPath)
				.data([data])
				.enter()
				.append('path')
				.attr("class",className)
				.attr("d", function(d){ return area(d)})
				.attr('fill',"url(#gradient123)");
		
			
		cmfChartSvg.append('path')
					.attr('class','line '+className)
					.attr('d',valueLine(data))
						
		
	}
	
	});