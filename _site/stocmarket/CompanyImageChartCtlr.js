angular.module("chartApp").controller("CompanyImageChartCtlr", function ($scope,$rootScope){
	var setinterval;
	var updateChart;
	console.log(""+d3.select('#chart'));
    var symbols=['K','AA','GOOG','AACC','G','FB','PEP','ACN','KO','YHOO','AAPL','GALE',"MSFT","NKE","SPY"];
	var symbolHaveNoImage=['NKE','SPY','MSFT'];
    var marketData=[];
	var height=$(window).height()*.84;
	var width=$(window).width()*.57;
	var  canvas;
	var maxChangeAbs;
	var minChngePercentage;
	var maxChangePercentage;
	var minChngeAbs;
	var xScale;
	var yScale;
	var xAxisHorizon ;		//MARKING TICKS 6 FOR SPACING AMONG THEM
	var yAxis ;
	
	
	
	var symbolDontHaveImageArray=[];
		
		var leftYAxis;
		var bubbles;
		var xAxisTickData=[];
		//initialseChart();
		
	$(window).resize(function () {
		console.log('window resize ');
		height=$(window).height()*.84;
		width=$(window).width()*.76-150;
		redrawChart();
		//$('#chart').empty();
		//initialseChart();
	});	
	function initialseChart(){
		console.error("initialse chart ");
		$('#chartLoader').show();
		canvas=d3.select('#chart')
			  .append('svg')
			  .attr('width',width)
			  .attr('height',height);
		minChngePercentage=d3.min($scope.$parent.logoChartData.map(function(d){return d.absChange;}));
		maxChangePercentage=d3.max($scope.$parent.logoChartData.map(function(d){return d.absChange;}));
		minChngeAbs=d3.min($scope.$parent.logoChartData.map(function(d){return d.absChange}));
		maxChangeAbs=d3.max($scope.$parent.logoChartData.map(function(d){//console.log((parseFloat(d.absChange)+parseFloat(20.00)).toFixed(2)+" d.absChange "+d.absChange);
			return d.absChange;}));
		
		minChngePercentage=window.parseFloat(minChngePercentage*2).toFixed(2);
		maxChangePercentage=window.parseFloat(maxChangePercentage*2).toFixed(2);
		minChngeAbs=window.parseFloat(minChngeAbs-20).toFixed(2);
		maxChangeAbs=window.parseFloat(maxChangeAbs+20).toFixed(2);
	
		xScale = d3.scale.linear().domain([minChngePercentage,maxChangePercentage]).range([40, width-40]);
		yScale = d3.scale.linear().domain([minChngeAbs,maxChangeAbs]).range([height-40, 25]);
		
		xAxisHorizon = d3.svg.axis().scale(xScale)
		.orient("bottom").ticks(2);
		//MARKING TICKS 6 FOR SPACING AMONG THEM
		yAxis = d3.svg.axis().scale(yScale)
		.orient("right").ticks(6).tickFormat(function(d) { return "-"+ d;});
		
		leftYAxis=d3.svg.axis().scale(yScale)
		.orient("left").ticks(6).tickFormat(function(d) { return "-"+ d;});
	
			
			for(var i=0;i<globalScope.AllSymbolArray.length;i++){
			if(symbols.indexOf(globalScope.AllSymbolArray[i])==-1)
			try{
			    symbolDontHaveImageArray.push(globalScope.logoChartJSONData[globalScope.AllSymbolArray[i]]);
				//console.log("symbol "+globalScope.AllSymbolArray[i]);
				//console.log("perchange "+globalScope.logoChartJSONData[globalScope.AllSymbolArray[i]].perChange +"abs "+globalScope.logoChartJSONData[globalScope.AllSymbolArray[i]].absChange);
			}
			catch(err){
			  console.log("Error while checking :"+ err);
			}
		}
		console.error("not have image "+symbolDontHaveImageArray.length);
		try{
		drawCircle();
		}catch(e){
		console.log("error while drawing circle::"+e);
		}
		drawImages();
					
			
					//.attr("transform", function(d) {
					//	return "translate(" + (xScale(d.timeIndex)+2) + "," + (yScale(d.close) + 10) + ")";
					//});	
				
					
					// Add the X Axis
	canvas.append("g")			// Add the X Axis
		.attr("class", "xhorizon axis")
		.attr("transform", "translate(0," + (height-20) + ")")
		.call(xAxisHorizon);
		canvas.append("g")			// Add the X Axis
		.attr("class", "yright axis") 
		.attr('transform','translate('+(width-50)+',0)')
		.call(yAxis);
		
		
		canvas.append("g")			// Add the X Axis
		.attr("class", "yleft axis")
		.attr('transform','translate(50,0)')
		.call(leftYAxis);
		
		
		canvas.append('line').attr('class','verticalLineMap').attr('x1',0).attr('y1',0).attr('x1',0).attr('y2',0);
		canvas.append('line').attr('class','horizontalLineMap').attr('x1',0).attr('y1',0).attr('x1',0).attr('y2',0);
		//draw axis tick for company images chart
		
		xAxisTickData.push(minChngePercentage);
		xAxisTickData.push(maxChangePercentage);
		xAxisTickOfCompanyImageChart(xAxisTickData);
		$('#chartLoader').hide();
	
	}
	
	function drawCircle(){
		var circleGroup=canvas.selectAll('circle')
						.data(symbolDontHaveImageArray)
					.enter()
					.append('circle')
					.attr('class','companyImages')
					.attr('id',function(d){
						
						return d.symbol;
					})
					.attr('r',function(d){
						return getDimension(d);
					})
					
					.attr('cx',function(d){
						
						return  xScale(d.perChange);
					})
					.attr('cy',function(d){
						return  yScale(d.absChange)+7;;
					})
					.attr('fill',function(d){
						return  getColorForCircle(d.perChange);
					})
					.on('click',function(d){
						drawBarForSymbol(d.symbol);
					})
					.on("mouseover",function(d){
						lastStateFill=$(this).attr('fill');
					   
						 var leftPosition=(d3.event.pageX-370)+"px";
						 var topPosition=(d3.event.pageY-140)+'px';
						 $('#cName').html(d.symbol);
						 $('#cPer').html(window.parseFloat(d.perChange).toFixed(2));
						 $('#cAbs').html(window.parseFloat(d.absChange).toFixed(2));
						
						d3.select('#toolTip')
						.style('width',0)
						.style('display','block')
						.transition()
						.duration(1000)
						.style("left", leftPosition)
						.style("top", topPosition)
						.style('width','180px');
						
						
						
						//console.log("d   "+d.perChange);
						var perChange=d.perChange;
						var absChange=d.absChange;
						d3.select('.verticalLineMap').style('display','block');
						d3.select('.horizontalLineMap').style('display','block');
						
						var verticalLineMap=d3.selectAll('.verticalLineMap');
						
						
						var lineColor=getRandomColor();
						
						verticalLineMap
						.attr('y1',function(){ return yScale(absChange)+30;})
						.attr('x1',function(){ //console.log(xScale(perChange) +" d per change "+perChange);
							return xScale(perChange)+20;})
						.attr('x2',function(){ return xScale(perChange)+20;})
						.attr('y2',function(){ return yScale(absChange);})
						.attr('stroke',lineColor).style("stroke-dasharray", ("1, 1"));
						
						var verticalTransition=verticalLineMap.transition()
						.duration(1000);
						
						verticalTransition.attr('y2',function(){ return yScale(minChngeAbs);});
						
						var horizontalLineMap=d3.selectAll('.horizontalLineMap');
						
						horizontalLineMap
						.attr('x1',function(){ console.log(xScale(perChange) +" d per change "+perChange);return xScale(perChange)+25;})
						.attr('y1',function(){ return yScale(absChange)+30;})
						.attr('x2',function(){ return xScale(perChange);})
						.attr('y2',function(){ return yScale(absChange)+30;}).attr('stroke',lineColor).style("stroke-dasharray", ("1, 1"));
						var horizontalMapTransition=horizontalLineMap.transition()
						.duration(1000);
						
						//horizontalMapTransition.attr('x2',function(){ return (xScale(minChngePercentage)+60);});
						horizontalMapTransition.attr('x2',function(){ return (perChange>150?(xScale(minChngePercentage))+15:(xScale(maxChangePercentage))-15);});
						d3.selectAll('.price').style('display','block');
						drawTextForPriceMap(d,maxChangePercentage,minChngePercentage,perChange);
						
					})
					.on("mouseout",function(d){
					     $(this).attr('fill',lastStateFill);
						 d3.select('#toolTip')
							
						.style('display','none');
						
						 d3.select(this)
						 .transition()
						 .duration(400)
						//.style(" -webkit-box-shadow", '3px 5px 5px #b0962d')
						//.style(" z-index", 99)
						//.style("opacity", '1')
						.transition()
						.duration(800)
						.delay(200)
						.attr('stroke','none')
						.attr("width",function(d){
								return getDimension(d);
							})
							.attr("height",function(d){
					            return getDimension(d);
							});
							
						d3.select('.verticalLineMap').style('display','none');
						d3.select('.horizontalLineMap').style('display','none');
						d3.selectAll('.price').text('');
						d3.selectAll('.price').style('display','none')
					});
					
		circleGroup.transition()
					.duration(1000)
					.delay(function(d){return 700;});
			
		
	}
	function drawImages(){
		bubbles=canvas.selectAll('image')
					.data($scope.$parent.logoChartData.filter(function(d){ return d.image.length>1;}))
					.enter() 
					.append('image')
					.attr('class','companyImages')
						.attr('id',function(d){
						return d.symbol;
					
					})
					.attr("xlink:href", function(d){ 
						//console.log("image "+d.image);
					return d.image
					})
					.attr('x',function(d){
				//console.log("x : "+ d.perChange + " "+xScale(d.perChange));
						return xScale(d.perChange);
					})
					.attr('y',function(d){
						return yScale(d.absChange)+7;
					})
					.attr("width", function(d){
					
					    return getDimension(d);	
					
					
					})
					.attr("height", function(d){
						
					   return getDimension(d);	
					
					
					})
					.on("mouseover",function(d){
						lastStateFill=$(this).attr('fill');
					   //  $(this).attr('fill','yellow');
						// console.log('**********  '+$(this).pageX+ ' '+d3.event.pageY);
						// var elementPosition=event.target.getBoundingClientRect();
						 var leftPosition=(d3.event.pageX-70)+"px";
						 var topPosition=(d3.event.pageY-140)+'px';
						 $('#cName').html(d.symbol);
						 $('#cPer').html(window.parseFloat(d.perChange).toFixed(2));
						 $('#cAbs').html(window.parseFloat(d.absChange).toFixed(2));
						 /*
						 d3.select(this)
						.style(" -webkit-box-shadow", '0px 0px 5px #b0962d')
						.style(" z-index", 99999999)
						.style("opacity", 0.4)
						.transition()
						.duration(800)
						.attr('stroke-width','2')
						.attr('fill','transparent')
						.attr('stroke','white')
						.attr('width',70)
						.attr('height',70)
						.attr('stroke','cyan')
						.attr('fill',lastStateFill);
								*/
						d3.select('#toolTip')
						.style('width',0)
						.style('display','block')
						.transition()
						.duration(1000)
						.style("left", leftPosition)
						.style("top", topPosition)
						.style('width','180px');
						
						
						
						console.log("d   "+d.perChange);
						var perChange=d.perChange;
						var absChange=d.absChange;
						d3.select('.verticalLineMap').style('display','block');
						d3.select('.horizontalLineMap').style('display','block');
						
						var verticalLineMap=d3.selectAll('.verticalLineMap');
						
						
						var lineColor=getRandomColor();
						
						verticalLineMap
						.attr('y1',function(){ return yScale(absChange)+30;})
						.attr('x1',function(){ console.log(xScale(perChange) +" d per change "+perChange);return xScale(perChange)+20;})
						.attr('x2',function(){ return xScale(perChange)+20;})
						.attr('y2',function(){ return yScale(absChange);})
						.attr('stroke',lineColor).style("stroke-dasharray", ("1, 1"));
						
						var verticalTransition=verticalLineMap.transition()
						.duration(1000);
						
						verticalTransition.attr('y2',function(){ return yScale(minChngeAbs);});
						
						var horizontalLineMap=d3.selectAll('.horizontalLineMap');
						
						horizontalLineMap
						.attr('x1',function(){ console.log(xScale(perChange) +" d per change "+perChange);return xScale(perChange)+25;})
						.attr('y1',function(){ return yScale(absChange)+30;})
						.attr('x2',function(){ return xScale(perChange);})
						.attr('y2',function(){ return yScale(absChange)+30;}).attr('stroke',lineColor).style("stroke-dasharray", ("1, 1"));
						var horizontalMapTransition=horizontalLineMap.transition()
						.duration(1000);
						
						//horizontalMapTransition.attr('x2',function(){ return (xScale(minChngePercentage)+60);});
						horizontalMapTransition.attr('x2',function(){ return (perChange>150?(xScale(minChngePercentage))+15:(xScale(maxChangePercentage))-15);});
						d3.selectAll('.price').style('display','block');
						drawTextForPriceMap(d,maxChangePercentage,minChngePercentage,perChange);
						
						
						
					})
					.on("mouseout",function(d){
					     $(this).attr('fill',lastStateFill);
						  	d3.select('#toolTip')
							
						.style('display','none');
						
						 d3.select(this)
						 .transition()
						 .duration(400)
						//.style(" -webkit-box-shadow", '3px 5px 5px #b0962d')
						//.style(" z-index", 99)
						//.style("opacity", '1')
						.transition()
						.duration(800)
						.delay(200)
						.attr('stroke','none')
						.attr("width",function(d){
								return getDimension(d);
							})
							.attr("height",function(d){
					            return getDimension(d);
							});
							
						d3.select('.verticalLineMap').style('display','none');
						d3.select('.horizontalLineMap').style('display','none');
						d3.selectAll('.price').text('');
						d3.selectAll('.price').style('display','none')
					})
					.on('click',function(d){
						drawBarForSymbol(d.symbol);
					});
	}
	
//	console.log(minChngePercentage+" "+maxChangePercentage +" abs min "+minChngeAbs +" max change abs "+maxChangeAbs);
		
		// Define the axes
			  
		
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.round(Math.random() * 15)];
		}
		return color;
	}
	
	
	
	
	
	/*
	function generateData(){
		   for(var i=0;i<symbols.length;i++){
				   marketData.push({symbol:symbols[i],
					perChange:(Math.random()*10)+2*i,
					absChange:(Math.random()*100)+20*i,
					image:'./icon/icon-'+symbols[i].toLowerCase()+'.png'
					});
				}
	};
	*/	
	function updateMarketData(){
		 for(var i=0;i<$scope.$parent.logoChartData.length;i++){
			
			var absCh=(Math.random()*100)+20*i;
			//	var perCh=(Math.random()*10)+9*i;
			var perCh=(Math.random()*10)+9*i;
			absCh=window.parseFloat(absCh).toFixed(2);
			perCh=window.parseFloat(perCh).toFixed(2);
			
			absCh=parseFloat(absCh);
			perCh=parseFloat(perCh);
			$scope.$parent.logoChartData[i].perChange=perCh;
			$scope.$parent.logoChartData[i].absChange=absCh;
			//$scope.$parent.logoChartJSONData[$scope.$parent.logoChartData[i].symbol]={'perChange':window.parseFloat(perCh).toFixed(2),'absChange':window.parseFloat(absCh).toFixed(2)};
			$scope.$parent.logoChartJSONData[$scope.$parent.logoChartData[i].symbol]={'perChange':perCh,'absChange':absCh};
		 }
		 

		 $scope.$parent.$apply();
	}
		
	//generateData();
	
	function convertInto2DecimalPlaces(value){
	
	   return window.parseFloat(value).toFixed(2);
	}
	
	
	//console.log((maxChangeAbs-40.00).toFixed(2));
	/*var max=parseFloat($scope.$parent.logoChartData[0].absChange);
	for(var i=1;i<$scope.$parent.logoChartData.length;i++){
		
		if(parseFloat($scope.$parent.logoChartData[i].absChange) > max){
			//console.log("large val "+$scope.$parent.logoChartData[i].absChange +"max "+max);
			max=parseFloat($scope.$parent.logoChartData[i].absChange);
		}
	}
	for(var i=0;i<$scope.$parent.logoChartData.length;i++){
		
		console.log("inn "+$scope.$parent.logoChartData[i].absChange);
	}
	console.log("calculated max abs change"+max);*/
	
		function xAxisTickOfCompanyImageChart(xAxisTickData){
			var xAxisTick=d3.select('.xHorizon').append('g').attr('transform','translate('+58+',15)').append('text')
			.attr('class','xAxisCompanyImagesChart')
			
			.text("<-- BUYISH")
			.attr('fill','black')
			.style('margin-left',function(){
				return 58;
			});
			
			var lt=xScale(maxChangePercentage)-100;
			var xAxisTick=d3.select('.xHorizon').append('g').attr('transform','translate('+lt+',15)').append('text')
			.attr('class','xAxisCompanyImagesChart sellLabel')
			
			.text("SELLISH -->")
			.attr('fill','black')
			.style('margin-left',function(){
				return Math.round( xScale(maxChangePercentage)-230);
			});
			
			
		}
		
						function drawTextForPriceMap(d,maxChangePercentage,minChngePercentage,perChange){
				var xValue=(perChange>150?(xScale(minChngePercentage))+15:(xScale(maxChangePercentage))-15);
					
				 d3.selectAll('.price').transition().duration(200).attr("transform", "translate(" + xValue + "," + yScale(0) + ")").text('');
				 
				 d3.selectAll('.price')
					.transition()
					.duration(1000)
					.delay(400)
					.attr("transform", "translate(" + xValue + "," + yScale(perChange) + ")")
					.tween("text", function() {
				   var last = 0;
				   var i = d3.interpolateRound(last,perChange );
				   return function(t){
					this.textContent = ""+i(t);
				   };
				  });  
				}
				/*
				canvas.append('text')
					.attr('class','price')
					.style('font-size',20)
					.attr('fill','white')
					.style('display','none');
					
		*/
		updateChart=function updateHorizon(){
				
			updateMarketData();
			redrawChart();			
		}
		
		subscribeDataPooling();
		function updateImages(){
			bubbles=canvas.selectAll('image.companyImages')
					.data($scope.$parent.logoChartData.filter(function(d){ return d.image.length>1;}),function(d){
						//console.log("reddddd "+d.image);
					   return d.perChange;
					});
					/*
					bubbles.transition().duration(1000)
					       .attr('cx',function(d){ return xScale(d.perChange)});
					
					bubbles.transition().duration(1000).attr('fill',function(d){
						return d.perChange>14?"green":"pink";
					});
					*/
					bubbles.transition()
					.duration(1000)
					.attr("xlink:href", function(d){ return d.image;})
				.attr('x',function(d){
					
					return xScale(d.perChange);
				})
				.attr('y',function(d){
					//console.log('absChange '+d.absChange +" yScale value "+(yScale(d.absChange)));
					return yScale(d.absChange)+7;
				})
				.attr("width", function(d){
						return getDimension(d);	
					     //return Math.abs(d.absChange/2);
					
					
					})
					.attr("height", function(d){
					
					     return getDimension(d);	
					
					
					});/*.on('click',function(d){
						drawBarForSymbol();
					});*/
		
				
					
					bubbles.transition()
					.duration(1000)
					.delay(function(d){return 700;});

		}
		function updateCircles(){
		
				
			var circleGroup=canvas.selectAll('circle')
				.data(symbolDontHaveImageArray,function(d){
				//console.log("reddddd "+d.image);
				
			   return d.perChange;
			});
			circleGroup.transition()
			.duration(1000)
			.attr('r',function(d){
				return getDimension(d)/1.5;
			})
			.attr('cx',function(d){
				return  xScale(d.perChange);
			})
			.attr('cy',function(d){
				return  yScale(d.absChange)+7;;
			}).attr('fill',function(d){
				return getColorForCircle(d.perChange);
			});
			/*
			.on('click',function(d){
				drawBarForSymbol();
			});
			*/
			
			circleGroup.transition()
			.duration(1000)
			.delay(function(d){return 700;});
		}
		
		function getColorForCircle(perChange){
		//console.log("MEDIUM  "+"  "+perChange +"  "+minChngePercentage +"   "+(minChngePercentage+maxChangePercentage)/2<perChange);
			var totalArena = minChngePercentage+maxChangePercentage;
			if(totalArena*(.75)<perChange){
				return "#07D545";
			}
			else if((totalArena *.5) <perChange && (totalArena *.75) >= perChange){
				return "#2CA550";
			}
			else if((totalArena *.25) <perChange && (totalArena *.5) >= perChange){
				return  "#C54451";
			}
			else{
				return "red";
			}
		}
		function redrawChart(){
				
				d3.select('#chart').select('svg').attr('width',width)
					  .attr('height',height);	
				minChngePercentage=d3.min($scope.$parent.logoChartData.map(function(d){return d.perChange;}));
		        maxChangePercentage=d3.max($scope.$parent.logoChartData.map(function(d){return d.perChange;}));
				//console.log("min change per "+minChngePercentage +"max Change per "+maxChangePercentage);
		        minChngeAbs=d3.min($scope.$parent.logoChartData.map(function(d){ //console.log(d.absChange);
					return d.absChange}));
		        maxChangeAbs=d3.max($scope.$parent.logoChartData.map(function(d){return d.absChange;}));
				
				minChngePercentage=(minChngePercentage*2).toFixed(2);
				maxChangePercentage=(maxChangePercentage*2).toFixed(2);
				minChngeAbs=(minChngeAbs-20).toFixed(2);
				maxChangeAbs=(maxChangeAbs+20).toFixed(2);
				
				minChngePercentage=parseFloat(minChngePercentage);
				maxChangePercentage=parseFloat(maxChangePercentage);
				minChngeAbs=parseFloat(minChngeAbs);
				maxChangeAbs=parseFloat(maxChangeAbs);
				
				
				//console.log('min abs change  '+minChngeAbs +" maxChange absolute "+maxChangeAbs);
	            xScale = d3.scale.linear().domain([minChngePercentage,maxChangePercentage]).range([40, width-40]);
				
	            yScale = d3.scale.linear().domain([minChngeAbs,maxChangeAbs]).range([height-40,25]);
				
				xAxisHorizon = d3.svg.axis().scale(xScale)
									.orient("bottom").ticks(2);
				//MARKING TICKS 6 FOR SPACING AMONG THEM
				yAxis = d3.svg.axis().scale(yScale)
				.orient("right").ticks(6).tickFormat(function(d) { return "-"+ d;});
		
				leftYAxis=d3.svg.axis().scale(yScale)
				.orient("left").ticks(6).tickFormat(function(d) { return "-"+ d;});
				
				d3.select('.xhorizon').attr("transform", "translate(0," + (height-40) + ")").call(xAxisHorizon);
				d3.select('.yright').call(yAxis);
				d3.select('.yleft').call(leftYAxis);
				/*var bubbles=canvas.selectAll('circle')
					.data(marketData,function(d){
					   return d.perChange;
					})
					.enter()
					.append('circle')
					.attr("r",function(d){
					     return Math.abs(d.absChange/10);
					})
					.attr('fill',function(d){
						return d.perChange>14?"green":"pink";
					})
					.attr('cx',function(d){
						return xScale(d.perChange);
					})
					.attr('cy',function(d){
						return yScale(d.absChange);
					});*/
					
					//.attr("transform", function(d) {
					//	return "translate(" + (xScale(d.timeIndex)+2) + "," + (yScale(d.close) + 10) + ")";
					//});	
				    try{
					updateCircles();
					}
					catch(err){
					
					}
					updateImages();
										//bubbles.exit().remove();
					/*
					
					d3.selectAll('circle')
					.data(marketData,function(d){
						return d.perChange;
					})
					.transition()
					.duration(1000)
					.delay(500)
					.attr("r",function(d){
					     return Math.abs(d.absChange/10);
					})
					.transition()
					.duration(1000)
					.delay(500)
					.attr('fill',function(d){
						return d.perChange>14?"green":"pink";
					})
					.transition()
					.duration(1000)
					.delay(500)
					.attr('cx',function(d){
						return xScale(d.perChange);
					})
					.transition()
					.duration(1000)
					.delay(500)
					.attr('cy',function(d){
						return yScale(d.absChange);
					});
					*/
					/*
					companayImages=canvas.append('defs')
					.attr('class','companyImages')
					
					companayImages.selectAll('pattern').
					data(marketData)
					.enter()
					.append('pattern')
					.attr('patternUnits', 'userSpaceOnUse')
					 .attr('width', '7')
					 .attr('height', '9')
					 .append('svg:image')
					 .attr('xlink:href', 'logo-apple.png')
					 .attr('x',function(d){
						return xScale(d.perChange);})
					 .attr('y', function(d){
						return yScale(d.absChange);})
					 .attr('width', 20)
					 .attr('height', 19);
					 */
					 
		}	
		
		function getDimension(d){
			var  min=35;
			var  max=70;
			if(Math.abs(d.absChange/2)>=max){
				return  max;
			}
			else if(Math.abs(d.absChange/2)<=min){
				return min;
			}
			else{
				return Math.abs(d.absChange/2) ;
			}
		}
		function subscribeDataPooling(){
		//	setinterval=setInterval(updateChart,3000);
		}
		
		function stopChart(){
			clearInterval(setinterval);
		}
		
		$scope.$on('stopChart', function(e) { 
			console.log("stop chart broadcast event ");
			stopChart();
		});
		
		function convertJsonIntoArray(){
			for(var i=0;i<$scope.$parent.logoChartData.length;i++){
				
				//alert(typeof absChnge+"symbol "+$scope.$parent.logoChartData[i].symbol);
				$scope.$parent.logoChartData[i].perChange=$scope.$parent.logoChartJSONData[$scope.$parent.logoChartData[i].symbol].perChange;;
				$scope.$parent.logoChartData[i].absChange=$scope.$parent.logoChartJSONData[$scope.$parent.logoChartData[i].symbol].absChange;
				//console.log("symbol "+$scope.$parent.logoChartData[i].symbol +" perChange "+$scope.$parent.logoChartData[i].perChange);
				//$scope.$parent.logoChartJSONData[$scope.$parent.logoChartData[i].symbol]={'perChange':window.parseFloat(perCh).toFixed(2),'absChange':window.parseFloat(absCh).toFixed(2)};
				$scope.$parent.logoChartData[i].perChange=parseFloat(window.parseFloat($scope.$parent.logoChartData[i].perChange).toFixed(2));
				$scope.$parent.logoChartData[i].absChange=parseFloat(window.parseFloat($scope.$parent.logoChartData[i].absChange).toFixed(2));
				
				
			//	console.log(typeof $scope.$parent.logoChartData[i].perChange+"after add decimal symbol "+$scope.$parent.logoChartData[i].symbol +" perChange "+$scope.$parent.logoChartData[i].perChange);
			}
			for(var i=0;i<symbolDontHaveImageArray.length;i++){
			
			try{
			    symbolDontHaveImageArray[i].perChange=$scope.$parent.logoChartJSONData[symbolDontHaveImageArray[i].symbol].perChange;
				symbolDontHaveImageArray[i].absChange=$scope.$parent.logoChartJSONData[symbolDontHaveImageArray[i].symbol].absChange;
				symbolDontHaveImageArray[i].perChange=parseFloat(window.parseFloat(symbolDontHaveImageArray[i].perChange).toFixed(2));
				symbolDontHaveImageArray[i].absChange=parseFloat(window.parseFloat(symbolDontHaveImageArray[i].absChange).toFixed(2));
				//console.log("symbol "+globalScope.AllSymbolArray[i]);
				//console.log("perchange "+globalScope.logoChartJSONData[globalScope.AllSymbolArray[i]].perChange +"abs "+globalScope.logoChartJSONData[globalScope.AllSymbolArray[i]].absChange);
			}
			catch(err){
			  //console.log("Error while checking :"+ err);
			}
		}
			
			$scope.$parent.$apply();
		}
		$scope.$on('startChart', function(e) { 
			
			//console.log("data length "+$scope.$parent.logoChartData.length);
			convertJsonIntoArray();
			
			redrawChart();
			
			subscribeDataPooling();
			$('.change').attr('readonly', true);
		});
		
		function drawBarForSymbol(symbol){
			$('#currentSymbol').val(symbol);
			$rootScope.$emit("drawBarForSymbol", {
				symbol:symbol 
			});
		}
		
		
		
		$scope.$on('initialisedChart', function(e) { 
			initialseChart();
		});
		//	WSHandler.init();
		//createPortfolioHorizon();
	
});