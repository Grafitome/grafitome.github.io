var xScaleComparisonChart;
var yScaleComparisonChart,yAxisComparisonChart;
var heightOfComparisonChart;
var widthOfComparisonChart;
var firstSymbol;
var secondSymbol;
var firstSymbolData;
var secondSymbolData;
var areaSymbolData1;
var areaSymbolData2;
var areaSymbolData3;
var	parseDate = d3.time.format("%Y-%m-%d");
var formatDate = d3.time.format("%d %b");
var formatDate1 = d3.time.format("%b|%Y");
var startDate;getDate('start',1,true);
var endDate;getDate('end','');
var selectorElement;
var selectorElement2;
var svgComparisonChart;
var xScaleFieldName;
var yScaleFieldName;
var xAxisComparisonChart;
var xMin;
var xMax;
var yMin;
var yMax;
var marginLeft=30,marginBottom=30,marginTop=10;
var defaultSymbol="SPY";
function initComparisonChart(symbol1,symbol2){
	firstSymbol=symbol1;
	secondSymbol=symbol2;
	selectorElement="#comparitiveChart";
	selectorElement2='#areaComparisonChart';
	xScaleFieldName='timeIndex';
	yScaleFieldName='dema';
	buildComparisonChart();	
}
//initComparisonChart();

function setXAndYScaleField(xFieldName,yFieldName){
	xScaleFieldName=xFieldName;
	yScaleFieldName=yFieldName;
}
function setSelectorElement(elementById){
	selectorElement="#"+elementById;
}
function buildComparisonChart(){
	drawAreaComparisonChart123();
	drawBarComparisonChart();
}
function drawBarComparisonChart(){
	var startDate1=getDate('start',10,'days');
	var endDate1=getDate('end','');
	getDataForSymbol(firstSymbol,startDate1,endDate1,function(firstSymbolDat){
		getDataForSymbol(secondSymbol,startDate1,endDate1,function(secondSymbolDat){
			firstSymbolData=firstSymbolDat;
			secondSymbolData=secondSymbolDat;
			drawComparisonChart(selectorElement);
		});
	});
}
function drawAreaComparisonChart123(){
	var startDate1=getDate('start',5,'year');
	var endDate1=getDate('end','');
	getDataForSymbol(firstSymbol,startDate1,endDate1,function(firstSymbolDat){
		getDataForSymbol(secondSymbol,startDate1,endDate1,function(secondSymbolDat){
			getDataForSymbol(defaultSymbol,startDate1,endDate1,function(thirdSymbolDat){
				
				areaSymbolData1=firstSymbolDat;
				areaSymbolData2=secondSymbolDat;
				areaSymbolData3=thirdSymbolDat;
				drawAreaComparisonChart(selectorElement2);
			});
		});
	});
}
function drawAreaComparisonChart(selectorElement2){
	$(selectorElement2).empty();
	var svgContainer=drawSvgForComparisonChart(selectorElement2);
	var xMinAreaChart=findValue(areaSymbolData1,areaSymbolData2,areaSymbolData3,'min',xScaleFieldName);
	var xMaxAreaChart=findValue(areaSymbolData1,areaSymbolData2,areaSymbolData3,'max',xScaleFieldName);
	var yMinAreaChart=findValue(areaSymbolData1,areaSymbolData2,areaSymbolData3,'min',yScaleFieldName);
	var ymaxAreaChart=findValue(areaSymbolData1,areaSymbolData2,areaSymbolData3,'max',yScaleFieldName);
	yMinAreaChart=0;
	var xScaleAreaChart=d3.time.scale().range([0,(widthOfComparisonChart)]).domain([xMinAreaChart,xMaxAreaChart]);
	var xAxisAreaComparisonChart = d3.svg.axis().scale(xScaleAreaChart)
		.orient("bottom").ticks(6).tickFormat(formatDate1).tickSize(10,0);
	var yScaleAreaComparisonChart= d3.scale.linear()
							 .domain([yMinAreaChart,ymaxAreaChart])
							 .range([heightOfComparisonChart-marginBottom, 0]).nice();
						 
	var yAxisAreaComparisonChart = d3.svg.axis().scale(yScaleAreaComparisonChart)
	.orient("right").ticks(4).tickSize(10,0);
	makeAreaComparisonChart('.areaComparisonChart1',areaSymbolData1,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,'cyan','#1C6900',.7);
	makeAreaComparisonChart('.areaComparisonChart2',areaSymbolData2,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,'blue','#E3E400',.5);
	makeAreaComparisonChart('.areaComparisonChart3',areaSymbolData3,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,'yellow','#E3E400',.4);
	drawXAxisComparisonChart(svgContainer,xAxisAreaComparisonChart);
	drawYAxisComparisonChart(svgContainer,yAxisAreaComparisonChart,'area');
	
		$('.bar1').click(function(e){
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
				$('.bar1').css('background',cCode);
				d3.selectAll('.comparisonImage').style('fill',cCode);
					//makeAreaComparisonChart('.areaComparisonChart1',areaSymbolData1,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,cCode,cCode);
			});
			  
	});
	
		$('.bar2').click(function(e){
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
				$('.bar2').css('background',cCode);
				d3.selectAll('.comparisonImage1').style('fill',cCode);
					//makeAreaComparisonChart('.areaComparisonChart1',areaSymbolData1,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,cCode,cCode);
			});
			  
	});
	

	

}
function makeAreaComparisonChart(className,data,xMinAreaChart,xMaxAreaChart,yMinAreaChart,ymaxAreaChart,xScaleAreaChart,yScaleAreaComparisonChart,svgContainer,color,lineColor,fillOpac){
	var turningPoints = [0];
		
		var area= d3.svg.area()
			.x(function (d) {
				return xScaleAreaChart(parseDate.parse(d[xScaleFieldName]));
			})
			.y0(yScaleAreaComparisonChart(yMinAreaChart))
			.y1(function (d) {
				
				if(d[yScaleFieldName]!="N/A"){
					
					return yScaleAreaComparisonChart(d[yScaleFieldName]);
				}else{
					
					return yScaleAreaComparisonChart(yMinAreaChart);
				}
				
			})
			.interpolate("basis");
		
		var gradient1 = svgContainer.append("svg:defs")
		.append("svg:linearGradient")
		.attr("id", "gradient123")
		.attr("x1", "0%")
		.attr("y1", yScaleAreaComparisonChart(yMinAreaChart))
		.attr("x2", "0%")
		.attr("y2", yScaleAreaComparisonChart(ymaxAreaChart))
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
							.x(function(d) { return xScaleAreaChart(parseDate.parse(d[xScaleFieldName])); })
							.y(function(d) { return yScaleAreaComparisonChart(d[yScaleFieldName]); })
							.interpolate("basis-open"); 		
		var classNameForPath="."+className;	
		svgContainer.selectAll(className)
				.data([data])
				.enter()
				.append('path')
				.attr("class",className)
				.attr('fill','none')
				.transition()
				.duration(400).attr("d", function(d){ return area(d)})
				.attr('fill',color)
				.attr('fill-opacity',fillOpac);
				
		
		
		svgContainer.append('path')
					.attr('class','line '+(className.replace(".","")))
					.attr('d',valueLine(data))
					.attr('stroke-width','1px')
					.attr('stroke',lineColor)
					.attr('fill','none');
		
		
}
function drawComparisonChart(selectorElement){
	$(selectorElement).empty();
	var svgContainer=drawSvgForComparisonChart(selectorElement);
	var xMinBarChart=findValue(firstSymbolData,secondSymbolData,undefined,'min',xScaleFieldName);
	var xMaxBarChart=findValue(firstSymbolData,secondSymbolData,undefined,'max',xScaleFieldName);
	var yMinBarChart=findValue(firstSymbolData,secondSymbolData,undefined,'min',yScaleFieldName);
	var ymaxBarChart=findValue(firstSymbolData,secondSymbolData,undefined,'max',yScaleFieldName);
	yMinBarChart=0;
	var xScaleBarChart=d3.time.scale().range([0,(widthOfComparisonChart-marginLeft)]).domain([xMinBarChart,xMaxBarChart]);
	var xAxisBarComparisonChart = d3.svg.axis().scale(xScaleBarChart)
		.orient("bottom").ticks(6).tickFormat(formatDate).tickSize(10,0);
	var yScaleBarComparisonChart= d3.scale.linear()
							 .domain([yMinBarChart,ymaxBarChart])
							 .range([heightOfComparisonChart-marginBottom, 0]).nice();
						 
	var yAxisBarComparisonChart = d3.svg.axis().scale(yScaleBarComparisonChart)
	.orient("right").ticks(4).tickSize(10,0);
	drawComparisonChartElements('.comparisonImage','img-blue.png',false,firstSymbolData,xMinBarChart,xMaxBarChart,yMinBarChart,ymaxBarChart,xScaleBarChart,yScaleBarComparisonChart,svgContainer);
	//drawComparisonChartElements('.comparisonImage1','img-red.png',true,secondSymbolData);
	drawComparisonChartElements('.comparisonImage1','img-red.png',true,secondSymbolData,xMinBarChart,xMaxBarChart,yMinBarChart,ymaxBarChart,xScaleBarChart,yScaleBarComparisonChart,svgContainer);
	drawXAxisComparisonChart(svgContainer,xAxisBarComparisonChart);
	drawYAxisComparisonChart(svgContainer,yAxisBarComparisonChart,'bar');
}
function findValue(data,data2,data3,criteria,field){
	var valueArray=[];
	var firstDataVal;
	var secondDataVal;
	var thirdDataVal;
	if(field == 'timeIndex'){
		if(criteria == 'min'){
			if(data){
				firstDataVal=d3.min(data.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(firstDataVal);	
			}
			if(data2){
				secondDataVal=d3.min(data2.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(secondDataVal);	
			}
			if(data3){
				thirdDataVal=d3.min(data3.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(thirdDataVal);	
			}
		}
		else{
			if(data){
				firstDataVal=d3.max(data.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(firstDataVal);	
			}
			if(data2){
				secondDataVal=d3.max(data2.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(secondDataVal);	
			}
			if(data3){
				thirdDataVal=d3.max(data3.map( function(d) { return parseDate.parse(d[field]);}));
				valueArray.push(thirdDataVal);	
			}
		}
	}
	else{
		if(criteria == 'min'){
			if(data){
				firstDataVal=d3.min(data.map( function(d) { return d[field];}));
				valueArray.push(firstDataVal);	
			}
			if(data2){
				secondDataVal=d3.min(data2.map( function(d) { return d[field];}));
				valueArray.push(secondDataVal);	
			}
			if(data3){
				thirdDataVal=d3.min(data3.map( function(d) { return d[field];}));
				valueArray.push(thirdDataVal);	
			}
		}
		else{
			if(data){
				firstDataVal=d3.max(data.map( function(d) { return d[field];}));
				valueArray.push(firstDataVal);	
			}
			if(data2){
				secondDataVal=d3.max(data2.map( function(d) { return d[field];}));
				valueArray.push(secondDataVal);	
			}
			if(data3){
				thirdDataVal=d3.max(data3.map( function(d) { return d[field];}));
				valueArray.push(thirdDataVal);	
			}
		}	
	}
	var result;
	if(criteria == 'min'){
		result=d3.min(valueArray.map( function(d) { return d;}));
	}
	else{
		result=d3.max(valueArray.map( function(d) { return d;}));
	}
	return result;
}

function drawComparisonChartElements(className,imgName,isSecondSymbol,data,xMinBarChart,xMaxBarChart,yMinBarChart,ymaxBarChart,xScaleBarChart,yScaleBarComparisonChart,svgContainer){
	//alert(widthOfComparisonChart +" data length "+data.length);
	var widthForEachImage=(widthOfComparisonChart/data.length)/10;
	function rounded_rect(x, y, w, h, r, tl, tr, bl, br) {
		var retval;
		retval  = "M" + (x + r) + "," + y;
		retval += "h" + (w - 2*r);
		if (tr) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; }
		else { retval += "h" + r; retval += "v" + r; }
		retval += "v" + (h - 2*r);
		if (br) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; }
		else { retval += "v" + r; retval += "h" + -r; }
		retval += "h" + (2*r - w);
		if (bl) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; }
		else { retval += "h" + -r; retval += "v" + -r; }
		retval += "v" + (2*r - h);
		if (tl) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; }
		else { retval += "v" + -r; retval += "h" + r; }
		retval += "z";
		return retval;
	}
	function rightRoundedRect(x, y, width, height, radius) {
		return "M" + x + "," + y
       + "h" + (width - radius)
       + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
       + "v" + (height - 2 * radius)
       + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
       + "h" + (radius - width)
       + "z";
	}
	svgContainer.selectAll(className)
					  .data(data)
					  .enter()
					  .append('path')
					  .attr('class',className.replace('.',''))
					  .attr('y',0)
					  .attr('d',function(d){
						var width=widthForEachImage;
						var height=(yScaleBarComparisonChart(yMinBarChart)-yScaleBarComparisonChart(d[yScaleFieldName]));
						var xPos;
						if(isSecondSymbol){
							xPos= (xScaleBarChart(parseDate.parse(d[xScaleFieldName]))+10);
						}else{
							xPos=xScaleBarChart(parseDate.parse(d[xScaleFieldName]));
						}
						var yPos=yScaleBarComparisonChart(d[yScaleFieldName]);
						return rounded_rect(xPos,yPos,width,height,2,2,2,2,2);
						//return rightRoundedRect(xPos,yPos,width,height,5);
					  });
					  /*
					  .append('rect')
					  .attr('class',className.replace('.',''))
					  //.attr('xlink:href',imgName)
					  .attr('width',widthForEachImage)
					  .attr('height',function(d){
							return (yScaleComparisonChart(yMin1)-yScaleComparisonChart(d[yScaleFieldName]));
					  })
					  
					  
					  .attr('x',function(d){
							if(isSecondSymbol){
								return (xScaleComparisonChart(parseDate.parse(d[xScaleFieldName]))+5);
							}else{
								return xScaleComparisonChart(parseDate.parse(d[xScaleFieldName]));
							}
					  })
					  .attr('y',function(d){
							//console.log("y value "+d[yScaleFieldName] +" yScale value "+yScaleComparisonChart(d[yScaleFieldName])) ;
							return yScaleComparisonChart(d[yScaleFieldName]);
					  });
					  */	
}
function calculateXScaleComparisonChart(){
	xMin=d3.min(firstSymbolData.map( function(d) { return parseDate.parse(d[xScaleFieldName]);}));
	xMax=d3.max(firstSymbolData.map(function(d) { return parseDate.parse(d[xScaleFieldName]);}));
	xScaleComparisonChart=d3.time.scale().range([0,(widthOfComparisonChart-marginLeft)]).domain([xMin,xMax]);
	xAxisComparisonChart = d3.svg.axis().scale(xScaleComparisonChart)
		.orient("bottom").ticks(6).tickFormat(formatDate).tickSize(10,0);
}

function drawXAxisComparisonChart(svgContainer,xAxis){
	svgContainer.append('g').call(xAxis).attr("transform", "translate("+0+","+(heightOfComparisonChart-marginBottom)+")").attr('id','xAxisComparisonChart');
}
function drawYAxisComparisonChart(svgContainer,yAxis,chartType){
	if(chartType == 'bar'){
		svgContainer.append('g').call(yAxis).attr("transform", "translate("+(widthOfComparisonChart)+","+0+")").attr('id','yAxisComparisonChart');
	}
	else{
		svgContainer.append('g').call(yAxis).attr("transform", "translate("+(widthOfComparisonChart-10)+","+0+")").attr('id','yAxisComparisonChart');
	}
}
function calculateYScaleComparisonChart(){
	var minFirstSymbol=d3.min(firstSymbolData.map( function(d) { return d[yScaleFieldName];}));
	var maxFirstSymbol=d3.max(firstSymbolData.map( function(d) { return d[yScaleFieldName];}));
	var minSecondSymbol=d3.min(secondSymbolData.map( function(d) { return d[yScaleFieldName];}));
	var maxSecondSymbol=d3.max(secondSymbolData.map( function(d) { return d[yScaleFieldName];}));
	
	if(minFirstSymbol>minSecondSymbol){
		yMin1=minSecondSymbol;
	}
	else{
		yMin1=minFirstSymbol;
	}
	if(maxFirstSymbol>maxSecondSymbol){
		yMax1=maxFirstSymbol;
	}
	else{
		yMax1=maxSecondSymbol;
	}
	console.log("y min "+yMin +" y max "+yMax);
	yMin1=0;
	yScaleComparisonChart= d3.scale.linear()
							 .domain([yMin1,yMax1])
							 .range([heightOfComparisonChart-marginBottom, 0]).nice();
						 
	yAxisComparisonChart = d3.svg.axis().scale(yScaleComparisonChart)
	.orient("right").ticks(4).tickSize(10,0);
}
function drawSvgForComparisonChart(selector){
	//alert("height "+$(selector).height() +(selector) +": width "+$(selector).width());
	heightOfComparisonChart=$(selector).height()-10;
	widthOfComparisonChart=$(selector).width()-10;
	//heightOfComparisonChart=142-10;
	//widthOfComparisonChart=462-10;
	svgComparisonChart= d3.select(selector)
						  .append('svg')
						  .attr('y',0)
						  .attr('width',widthOfComparisonChart+marginLeft)
						  .attr('height',(heightOfComparisonChart+marginBottom))
						  .append('g')
						  .attr("transform", "translate("+0+","+(marginTop)+")")
	return 	svgComparisonChart;				  
}
function getDataForSymbol(symbol,startDate1,endDate1,callback){
		
		$.ajax({
			type: "GET",
			//url: "http://app.chaikinpowertools.com/CPTRestSecure/app/sessionless/getPowerTrendChartData?symbol="+ symbol+"&startDate="+startDate+"&endDate="+endDate,          
			url:"http://app.chaikinpowertools.com/CPTRestSecure/app/sessionless/getCMFChartData?symbol="+symbol+"&startDate="+startDate1+"&endDate="+endDate1,          
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
		
		if(dateType=="start"){
			if(interValInMonth == 'days'){
				todayDate.setDate(todayDate.getDate()-interVal);
			}
			else if(interValInMonth == 'month'){
				todayDate.setMonth(todayDate.getMonth()-interVal);
			}
			else{
				todayDate.setFullYear(todayDate.getFullYear()-interVal);
			}
			
		}
		var date = ((todayDate.getDate()<10) ? "0" : "")+ todayDate.getDate();
		dateValue =  todayDate.getFullYear()+"-" +months[todayDate.getMonth()] + "-" +date ;
		
		return dateValue;
		
}