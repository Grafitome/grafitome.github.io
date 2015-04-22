angular.module("chartApp").controller("BarGraphCtlr", function ($scope,$rootScope){
	var data=[];
	var	margin = {top: 40, right: 60, bottom: 50, left: 10},
	width = $(window).width()*.20 - margin.left - margin.right,
	height = $(window).height()*.15 - margin.top - margin.bottom;
	var	parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ");
	//var formatDate = d3.time.format("%e-%b-%Y");
	var formatDate = d3.time.format("%H:%M");
	var	xScale;
	var yScale;
	var xAxis;
	var yAxis;
	var svg;
	var minDate;
	var maxDate;
	var numBars=16;
	
	
	$scope.$on('startChart1', function(e) { 
			
			redrawGraph();
			//alert('after redraw '+data.length);
	});
	
	$rootScope.$on("drawBarForSymbol",function(event,obj){
			$('.chartDiv2').empty();
			data=[];
			$scope.$parent.defaultSymbol=obj.symbol;
			$scope.initialseBarGraph();
		}
	);
	
	
	$scope.$on('initialisedChart', function(e) { 
		$scope.initialseBarGraph();	
		//$scope.$parent.drawPieChart();
		//alert("data length "+data.length);
	});
	
	$scope.initialseBarGraph=function(){
		createBarGraph();
		updateBarGraph();
	}
	
	function updateBarGraph(){
		setInterval(function(){
			redrawGraph();
		},4000);
	}
	
	var firstTime=false;

	function drawHorizontalPriceMapLine(d,minXScaleValue){
		
		var horizontalLineMap=d3.selectAll('.horizontalLineMapOfBarChart');
		
		horizontalLineMap
		.attr('x1',function(){ return xScale(d.timeIndex);})
		.attr('y1',function(){ return yScale(d.close);})
		.attr('x2',function(){ return xScale(d.timeIndex);})
		.attr('y2',function(){ return yScale(d.close);}).attr('stroke','yellow').style("stroke-dasharray", ("2, 2"));
		var horizontalMapTransition=horizontalLineMap.transition()
		.duration(700);
		
		horizontalMapTransition.attr('x2',function(){ return xScale(minXScaleValue);});
	}

	function drawTextForPriceMap(d,maxXScaleValue,minXScaleValue){
		d3.selectAll('.priceForBarChart').attr("transform", "translate(" + xScale(minXScaleValue) + "," + yScale(d3.min(data.map(function (d) {
					return d.close;
				}))) + ")");
		d3.selectAll('.priceForBarChart')
			.attr('fill','white')
		   .transition()
		   .duration(700)
		   //.delay(700)
		   .attr("transform", "translate(" + xScale(minXScaleValue) + "," + yScale(d.close) + ")")
		   .attr('fill','#E9044E')
		   .tween("text", function() {
				var last = d3.min(data.map(function (d) {
					return d.close;
				}));
				var i = d3.interpolate(last,d.close );
				return function(t){
					this.textContent = ""+i(t);
				};
			});	 
	}

	
	function createBarGraph(){
		var newElementClass;
		var newElementValue;
		
		var ds=new Date();
		var hours=ds.getHours();
		var datevalue=ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+"T"+hours+":"+ds.getMinutes()+":"+ds.getSeconds()+"."+ds.getMilliseconds()+"Z";
		newElementValue=Math.floor((Math.random()*200)+1);
		
		newElementClass='green';
		
		//console.error("timeindex for bar "+$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].last);
		data.push({timeIndex:datevalue,
			close:$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].last,
			className:$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].className
		});
		
		
		
		data[data.length-1].timeIndex=parseDate.parse(data[data.length-1].timeIndex);
		
		firstTime=false;
		minDate = d3.min(data, function(d) {

			return d.timeIndex;
		});
		maxDate = d3.max(data, function(d) {
			return d.timeIndex;
		});
		
		var dt=new Date();
		var minYScale=d3.min(data.map(function (d) {
					return d.close;
				}));
		
		xScale = d3.time.scale().domain([minDate,maxDate]).range([0, width]);
		yScale = d3.scale.linear().domain([d3.min(data.map(function (d) {
					return d.close;
				})),d3.max(data.map(function (d) {
					return d.close;
				}))]).range([height, 0]);
				
		// Define the axes
		xAxis = d3.svg.axis().scale(xScale)
			.orient("bottom").ticks(3).tickFormat(formatDate);
		//MARKING TICKS 6 FOR SPACING AMONG THEM
		yAxis = d3.svg.axis().scale(yScale)
			.orient("right").ticks(2).tickFormat(function(d) { return "-"+ d;});
			
		// Adds the svg canvas
		var svgWidth=width+100;
		var svgheight=height+100;
		svg = d3.select(".chartDiv2")
				  .append("svg")
				  .attr("width", svgWidth)
				  .attr("height", svgheight)
				  .attr("transform", "translate(" + 30 + "," + margin.top + ")")
				  .append("g")
				  .attr("transform", "translate(" + 30 + "," + margin.top + ")");
		
		
		
	//	svg=svg.transition().duration(750);
		var allRect=svg.selectAll('rect')
					   .data(data);
		allRect.enter()
			   .append('rect')
			   .attr("class", function(d) { 
					return "rectBarChart "+d.className;	
				})
				.attr("x", function(d, i) { return xScale(d.timeIndex); })
				.attr('y',function(d){
					return yScale(minYScale); 
				})
				.attr("width", 10)
				.on("mouseover",function(d){
					
					d3.select('.horizontalLineMapOfBarChart').style('display','block');
					//console.log("time index "+xScale(d.timeIndex) +" close "+yScale(d.close) +"  min data "+xScale(width) +" "+width +" close "+d.close +" timeIndex "+d.timeIndex);					
					drawHorizontalPriceMapLine(d,maxDate) ;
					
				})
				.on('mouseout',function(d){
					d3.select('.horizontalLineMapOfBarChart').style('display','none');
				});
				
		
		allRect.attr('height',function(d){
			return 0;
		})
		.transition()
		.duration(1000)
		.attr("y",function(d){
			return yScale(Math.max(minYScale, d.close));
		})
		.attr('height',function(d){
			return Math.abs(yScale(d.close) - yScale(minYScale)); 
		});
		
		
		i=0;
		// Add the X Axis
		svg.append("g")			// Add the X Axis
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);
			
		var newWidth=width-margin.right;
		// Add the Y Axis
		svg.append("g")			// Add the Y Axis
			.attr("class", "y axis")
			.attr('transform','translate('+width+',0)')
			.call(yAxis);
		svg.append('line').attr('class','horizontalLineMapOfBarChart').attr('x1',0).attr('y1',0).attr('x1',0).attr('y2',0);	
		//write text for price map
		svg.append('text')
		   .attr('class','priceForBarChart')
		   .style('font-size',20)
		   .attr('fill','white')
		   .style('display','none');
		   
		drawLineGraph(false);   
		
		//	
		
		$('.y').find('path').hide();
	}
	
	function drawLineGraph(isUpdate){
		if(!isUpdate){
			var min=d3.min(data.map(function (d) {
					return d.close;
				}));
			var max= d3.max(data.map(function (d) {
					return d.close;
				}));	
			lineYScale = d3.scale.linear().domain([min,max]).range([height, 0]);
			// Define the line
			var	valueline = d3.svg.line()
			.x(function(d) {
				return xScale(d.timeIndex); 
			})
			.y(function(d) { 
				return lineYScale(d.close); 
			}).interpolate('cardinal');
			
			g=svg.selectAll('path.lineGraph').data(data,function(d){ return d.timeIndex;}).enter().append("path")		// Add the valueline path.
			.attr("class", "lineGraph")
			.attr('fill','#000080')
			.attr('stroke-width',4)
			.transition()
			.duration(500)
			.attr("d", valueline(data));
			
			
		}
		else{
			var min=d3.min(data.map(function (d) {
                return d.close;
            }));
			var max= d3.max(data.map(function (d) {
                return d.close;
            }));
			lineYScale = d3.scale.linear().domain([min,max]).range([height, 0]);
			// Define the line
			var	valueline = d3.svg.line()
			.x(function(d) {
				return xScale(d.timeIndex); 
			})
			.y(function(d) { 
				return lineYScale(d.close); 
			})
			.interpolate('cardinal');
			g=svg.selectAll('path.lineGraph').transition().duration(500).attr("d", valueline(data));
		
			
		}
		
	}
	
	function redrawGraph(){
		if(data.length<=numBars-1){
			//console.log("data length "+data.length);
			 firstTime=true;
			//for(var i=0;i<50;i++){
				var ds=new Date();
				var hours=ds.getHours();
				var datevalue=ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+"T"+hours+":"+ds.getMinutes()+":"+ds.getSeconds()+"."+ds.getMilliseconds()+"Z";
				//newElementValue=Math.floor((Math.random()*200)+1);
				newElementValue=$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].last;
				if(data.length == 0){
					newElementClass='green';
				}
				else{
					var previousElementValue=data[data.length-1].close;
					if(newElementValue>=previousElementValue){
						newElementClass='green';
					}
					else{
						newElementClass='red';
					}
				}
				
				
				data.push({timeIndex:datevalue,
					close:$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].last,
					className:newElementClass
				});
			//}
		}
		
		else{
			var ds=new Date();
			var hours=ds.getHours();
			var datevalue=ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+"T"+hours+":"+ds.getMinutes()+":"+ds.getSeconds()+"."+ds.getMilliseconds()+"Z";
			newElementValue=Math.floor((Math.random()*200)+1);
			//console.log("data length "+data.length);
			newElementValue=$scope.$parent.logoChartJSONData[$scope.$parent.defaultSymbol].last;
			
			var previousElementValue=data[data.length-1].close;
			data.shift();
			if(newElementValue>=previousElementValue){
				newElementClass='green';
			}
			else{
				newElementClass='red';
			}
			data.push({close:newElementValue,timeIndex:datevalue,className:newElementClass});
		}
		
		data[data.length-1].timeIndex=parseDate.parse(data[data.length-1].timeIndex);
		////console.log("data lebgth "+data.length);
		minDate = d3.min(data, function(d) {

			return d.timeIndex;
		});
		maxDate = d3.max(data, function(d) {
			return d.timeIndex;
		});
		
		// Set the ranges
		//console.log("min timeInndex "+minDate + "max date "+maxDate);
		var minYScale=d3.min(data.map(function (d) {
					return d.close;
				}));
		xScale = d3.time.scale().domain([minDate,maxDate]).range([0, width]);
		yScale = d3.scale.linear().domain([d3.min(data.map(function (d) {
					return d.close;
				})),d3.max(data.map(function (d) {
					return d.close;
				}))]).range([height, 0]);
				
		//MARKING TICKS 6 FOR SPACING AMONG THEM
		yAxis = d3.svg.axis().scale(yScale)
			.orient("right").ticks(2).tickFormat(function(d) { return "-"+ d;});
		
		xAxis = d3.svg

		.axis()
		.scale(xScale)
			.orient("bottom").ticks(3).tickFormat(formatDate);
			
		svg.selectAll('.y').call(yAxis)	
		svg.selectAll('.x')
		.call(xAxis);	
		// Using time as a key, join the new data to the old nodes.
		var rect = svg.selectAll(".rectBarChart")
			.data(data, function(d) { return d.timeIndex; });
		
		// Enter…
		rect.enter().insert("rect", ".x")
			.attr("x", function(d, i) { //console.log(xScale(d.timeIndex)+": i "+i); 
				return xScale(d.timeIndex)-.5;
			})
		   //.attr('width',5)
		   .attr('class',function(d,i){return "rectBarChart "+d.className +"  new"})
			 .attr('height',function(d){
				return 0; 
			})  
			.attr('y',function(d){
				return yScale(minYScale); 
			})
			.attr("transform", "translate(" + 0 + "," + -50 + ")")
			//.style({ 'stroke': 'red', 'stroke-width': '3px'})
			.on("mouseover",function(d){
				d3.select('.horizontalLineMapOfBarChart').style('display','block');
				d3.selectAll('.priceForBarChart').style('display','block');
				// //console.log("xscale max "+xScale(maxDate) +" xScale current "+xScale(d.timeIndex));
				drawHorizontalPriceMapLine(d,maxDate) ;
				drawTextForPriceMap(d,maxDate,minDate);
				d3.selectAll('rect.rectBarChart').style('opacity','.2');
				$(this).css('opacity','1');
				lastWidth=d3.select(this).attr('width');
				d3.select(this)
				.transition()
				.duration(600)
				.attr('width','15');
			})
			.on('mouseout',function(d){
				d3.selectAll('rect.rectBarChart')
				.transition()
				.duration(300)
				.attr('width',lastWidth)
				.style('opacity',1);
					d3.selectAll('.priceForBarChart').text('');
					d3.selectAll('.priceForBarChart').style('display','none');
					d3.select('.horizontalLineMapOfBarChart').style('display','none');
			}) 
			.transition()
		   .duration(1000)
		   .attr('height',function(d){
				return Math.abs(yScale(d.close) - yScale(minYScale)); 
			});
		
		var lastWidth='';
	   // Update…
	   rect.transition()
		   .duration(700)
		   .attr("x", function(d, i) { return xScale(d.timeIndex)-.5; });
		
		d3.selectAll('.rectBarChart')
			.attr('width',10);
			
		
	   rect.transition()
		   .duration(700)
		   .delay(function(d,i){
				
				return 700;
			})
			.attr("y",function(d){
				return yScale(Math.max(minYScale, d.close));
			})
			.attr('height',function(d){
				return Math.abs(yScale(d.close) - yScale(minYScale)); 
			});
		drawLineGraph(true);
		   
		if(data.length==numBars){
		// Exit…
		rect.exit()
		.remove();
	   }
		
	}
 
 });