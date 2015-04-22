angular.module("chartApp").controller("pieChartCtlr", function ($scope,$rootScope){
	var data=[];
	var vis;
	var arc;
	var pie;
	var arcs;
	var arcElements;
	var textLabelElements;
	var barData;
	generateDynamicData();
	initialsePieChart();
	setInterval(function(){
	convertDataintoPieBarChartDataFormat();
		//generateDynamicData();
		//updatePieChart();
	},2000);
	function initialsePieChart(){
		var w = 50,                        //width
		h = 50,                            //height
		r = 24,                            //radius
		color = d3.scale.category20c();     //builtin range of colors
	 
		/*data = [{"label":"one", "value":20}, 
				{"label":"two", "value":50}, 
				{"label":"three", "value":30}];
		*/
		vis = d3.select("#pieChartDiv")
			.append("svg:svg")              //create the SVG element inside the <body>
			.attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
			.attr("height", h)
			.append("svg:g")                //make a group to hold our pie chart
				.attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius
	 
		arc = d3.svg.arc()              //this will create <path> elements for us using arc data
			.outerRadius(r);
			
		
		pie = d3.layout.pie()           //this will create arc data for us given a list of values
			.value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array
	 
		arcs = vis.selectAll("path")     //this selects all <g> elements with class slice (there aren't any yet)
			.data(pie(data.filter(function(data){
					return (parseInt(data.value) != 0);
					})
			));
			arcs.enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
			.append("svg:path");	
			                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
			
			arcs.transition()
				.duration(500)
				.attr("fill", function(d, i) { return data[i].color; } ) //set the color for each slice to be chosen from the color function defined above
				.attr("d", arc)                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function
				.each(function(d) { this._current = d; });
	 
		
	 
		textLabelElements=vis.selectAll("text").data(data).enter().append("svg:text")                                     //add a label to each slice
			.attr("transform", function(d) {                    //set the label's origin to the center of the arc
				//we have to make sure to set these before calling arc.centroidd
				d.innerRadius = 0;
				d.outerRadius = r;
				return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
			})
			.attr("text-anchor", "middle")                          //center the text on it's origin
			.attr("dy", ".35em")
			.text(function(d, i) { return parseFloat(data[i].value).toFixed(2); }).style('display','none');        //get the label from our original data array
			
		drawPieBarChart();		
	}
	
	function drawPieBarChart(){
		var d=[10,20,40];
			//draw bars
		var pieBarData=convertDataintoPieBarChartDataFormat();	
		d3.selectAll('#PieBarChartOuterDiv')
			.selectAll('div')
			.data(pieBarData)
			.enter()
			.append('div')
			.attr('class',function(d,i){
				return 'bullet pieBartChart'+i;
			})
			.style('width',function(d){
				return "0px";
			})
			.transition()
			.duration(500)
			.style('width',function(d){
				return d.value*2+"px";
			})
			.style('height','16px')
			.style('background',function(d){
				return d.color;
			})
			.text(function(d){
				return d.value;
			});
			
	
	}
	function updatePieChart(){
		//console.log('update pie Chart');
		
		
		
		
		arcs.data(pie(data.filter(function(data){
					return (parseInt(data.value) != 0);
					})
			)); 
		arcs.transition().duration(750).attrTween("d", arcTween);
		textLabelElements.data(data).text(function(d,i){return parseFloat(d.value).toFixed(2);});
		
		var pieBarData=convertDataintoPieBarChartDataFormat();
		
		
		d3.selectAll('.bullet')
		.data(pieBarData)
		.transition()
		.duration(500)
		.style('width',function(d){
			
			return d.value*2+"px";
		})
		.style('background',function(d){
			return d.color;
		})
		.text(function(d){
			return parseFloat(d.value).toFixed(2)+" %";
		});
		
		
		
	}
	function convertDataintoPieBarChartDataFormat(){
		var pieBarData=[];
		var positive=0;
		var negative=0;
		var neutral=0;
		var total=0;
		for(var key in $scope.$parent.logoChartJSONData){
			if($scope.$parent.logoChartJSONData[key].containerClass == 'positive'){
				positive++;
			}
			else if($scope.$parent.logoChartJSONData[key].containerClass == 'negative'){
				negative++
			}
			else{
				neutral++;
			}
			total++;
		}
		
		var positivePer=((positive)/total)*100;
		var negativePer=((negative)/total)*100;
		var neutralPer=((neutral)/total)*100;
		
		console.log(positivePer +'  '+negativePer+' '+neutralPer);
		
		pieBarData.push({'value':positivePer,'color':'green'},{'value':negativePer,'color':'red'},{'value':neutralPer,'color':'white'});
		//alert("pie bar "+pieBarData[0].value + " length "+globalScope.logoChartJSONData);
		return 	pieBarData;
	}
	// Store the displayed angles in _current.
	// Then, interpolate from _current to the new angles.
	// During the transition, _current is updated in-place by d3.interpolate.
	function arcTween(a) {
	  var i = d3.interpolate(this._current, a);
	  this._current = i(0);
	  return function(t) {
		return arc(i(t));
	  };
	}
	function generateDynamicData(){
		var neutalElemnts=0;
		var positiveElements=0;
		var negativeElements=0;
		
		var positivePer;
		var negativePer;
		var neutralPer;
		data=[];
		for(var i=0;i<50;i++){
			var num = Math.floor(Math.random()*99) + 1; // this will get a number between 1 and 99;
			num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
			if(num == 0){
				neutalElemnts=neutalElemnts+1;
			}
			else if(num >0){
				positiveElements=positiveElements+1;
			}
			else{
				negativeElements=negativeElements+1;
			}
		}
		positivePer=((positiveElements)/50)*100;
		negativePer=((negativeElements)/50)*100;
		neutralPer=((neutalElemnts)/50)*100;
		//console.log('postitve per '+positivePer +" negative per "+negativePer +" neutral per "+neutralPer);
		data.push({'value':positivePer,'color':'green'},{'value':negativePer,'color':'red'},{'value':neutralPer,'color':'white'});
		
	}
});