function myFunction() {
		var width1 = 400;
		var height1 =400;


// placeHolder6
	/*	var data1=[{},{"population":200,'year':"Coal"},{"population":50,'year':"Natural Gas"},{"population":300,'year':"Fuel"},{population:100,'year':"Nuclear"},{"population":60,'year':"Biomass"}];
		var data2=[{"population":400,'year':"Net Flow"},{},{},{},{},{}];
		
		var colorArray=["orange","cyan"];
		var xFieldName="population";
		var yFieldName="year";
		var axisColor="grey";
		
		var cnfg6={"data1":data1,"data2":data2,"colorArray":colorArray,"xFieldName":xFieldName,"yFieldName":yFieldName,"axisColor":axisColor};
	*/
	
	
// placeHolder5
/*	var dataSet= {
						key :["EDUCATION","HEALTH","WELFARE","TRANSPORT","PENSIONS","PROTECTION"],
						value : [30,22,10,15,12,11],
						label : 'CosT',
						color : ["#7cb5ec","#434348","#90ed7d","orange","green","cyan"]
					};
					
*/					
	//Map projection
	var projection = d3.geo.albersUsa()
					.scale(400)
					.translate([width1/2,height1/2]) //translate to center the map in view

//Generate paths based on projection
var path = d3.geo.path()
				 .projection(projection);

var div = d3.select("#placeHolder1").append("div")   
									.attr("class", "tooltip")               
									.style("opacity", 0);	
	
//Create an SVG
var svg = d3.select("#placeHolder1").append("svg")
									.attr("width", width1)
									.attr("height", height1);

//Group for the map features
var features = svg.append("g")
				  .attr("class","features");

/*
var data4= {
			key :['American Indians/Alaskan Natives','non-Hispanic blacks','Hispanics','Asian Americans','non-Hispanic whites'],
			value : [35,25,25,9,6],
			label : 'employee',
			textAndLegendColor : 'black',
			color : ['red','green','blue','cyan','purple']
		};
var subDataArray = {
					key :['A','B','C','D','E'],
					color :["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd"],
					"AmericanIndians Alaskan Natives" :[45,67,32,56,34],
					"non-Hispanic blacks":[34,54,42,24,45],
					"Hispanics":[23,34,45,40,23],
					"Asian Americans": [82,62,54,199,78],
					"non-Hispanic whites": [45,34,23,32,44]
			};   
	var cnfg={"data":data4,"divId":"placeHolder4","subDataArray":subDataArray};	
*/

		
	
//placeHolder2												
var colorArray=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd"];
var data=[20, 15, 11, 13, 24];
var labelArray=["<5yrs","5-18","18-35","35-60",">60"];
var config={"data":data,"colorArray":colorArray,"labels":labelArray,"unit":"%"};
  
//placeHolder3
		var textStyleConfg={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":"9","background":"none","font-color":"black","font-weight":300};

var heightOfBarOne = [15, 80, 120];
		var heightOfBarTwo = [60, 20, 70];
		
		var threeDStackedBarsData = [{
				'key': '<20yrs',
				'data': [15, 80, 12]
			}, {
				'key': '20-50yrs',
				'data': [60, 20, 30]
			}, {
				'key': '>50yrs',
				'data': [40, 28, 79]
			}];

		
		
		var colorArray=["#39ec6e","#ff9811","#63deff","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"];
		var cfg3DBarChart = {
		
			topMargin: 5,
			rightMargin: 0,
			bottomMargin: 40,
			leftMargin: 40,
			toolTipLabelForYAxis: "Sales(in Crores)",
			colorArray: ["#39ec6e","#ff9811","#63deff","#59bde5","#16c54a","#e7969c", "#e7cb94", "#7f7f7f", "#bcbd22"],
			xLabel:"Year",
			axisTextColor:'purple',
			legendTextColor:'purple'
		}
		var gridLineColor = "#4d4d4d";
		var textColor = "Grey";
		var textStyleConfg3={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":"12","background":"none","font-color":"green","font-weight":300,"axisTextColor":"white","legendTextColor":"grey"};
var xAxisArray = ['1994', '1995', '1996'];

//placeHolder4
var data4= {
		key :['American','non_Hispanic','Hispanics','Asian'],
			value : [35,25,25,9],
			label : 'employee',
			textAndLegendColor : 'black',
			color : ['red','green','blue','cyan']
   };

var subDataArray = {
					key :['Businessman','Job Holders','Agriculture','Un-employed'],
					color :["#1f77b4","#ff7f0e","#2ca02c","#d62728"],
					"American":[45,67,32,5],
					"non_Hispanic":[34,54,42,2],
					"Hispanics":[23,34,45,4],
					"Asian": [82,62,54,19]	
			};		
var legendTextColor="purple";	
var textStyleConfg4={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":"12","background":"none","font-color":"white","font-weight":300,"axisTextColor":"white","legendTextColor":"white"};
var cnfg4={"data":data4,"divId":"placeHolder4","subDataArray":subDataArray};

//placeHolder5
var textStyleConfg5={"font-family":"Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif","font-size":"12","background":"none","font-color":"green","font-weight":300,"axisTextColor":"grey","legendTextColor":"white"};
var dataSet5= {
						key :["EDUCATION","HEALTH","WELFARE","TRANSPORT","PENSIONS","PROTECTION"],
						value : [30,22,10,15,12,11],
						label : 'CosT',
						color : ["#7cb5ec","red","#90ed7d","orange","green","cyan"]
					};
	
//placeHolder6		

var textStyleConfg6={"font-family":"calibri","font-size":"11","background":"none","font-color":"black","font-weight":300,"text-shadow":"none"};


var data6 = [{
    "population": 100,
    'year': 2014
}, {
    "population": 50,
    'year': 2015
}, {
    "population": 150,
    'year': 2016
}, {
    "population": 100,
    'year': 2017
}, {
    "population": 200,
    'year': 2018
}, {
    "population": 150,
    'year': 2019
}, {
    "population": 250,
    'year': 2020
}, {
    "population": 300,
    'year': 2021
}];
var data7 = [{
    "population": 200,
    'year': 2014
}, {
    "population": 50,
    'year': 2015
}, {
    "population": 150,
    'year': 2016
}, {
    "population": 100,
    'year': 2017
}, {
    "population": 200,
    'year': 2018
}, {
    "population": 150,
    'year': 2019
}, {
    "population": 400,
    'year': 2020
}, {
    "population": 700,
    'year': 2021
}];

var colorArray6 = ["orange", "cyan"];
var xFieldName6 = "population";
var yFieldName6 = "year";
var axisColor6 = "white";

var cnfg6 = {
    "data1": data6,
    "data2": data7,
    "colorArray": colorArray6,
    "xFieldName": xFieldName6,
    "yFieldName": yFieldName6,
    "axisColor": axisColor6
};

//		
d3.json("us-states.geojson",function(error,geodata) {
  if (error) return console.log(error); //unknown error, check the console
	
	var stocChart21=$("#placeHolder2").stocCharts();
												stocChart21.draw3DPyramidSliceChart(config);

											
											var stocChart27=$("#placeHolder3").stocCharts(textStyleConfg3);
	 
												stocChart27.drawThreeDStackedBarChart("#placeHolder3", heightOfBarOne, heightOfBarTwo, threeDStackedBarsData, cfg3DBarChart, colorArray, gridLineColor, textColor, xAxisArray); 
												
											var stocChart23=$("#placeHolder4").stocCharts(textStyleConfg4);
												stocChart23.drawDountWithBarChart(cnfg4);	
												
												
											var stocChart5=$("#placeHolder5").stocCharts(textStyleConfg5);
																stocChart5.drawPieChartWithTransition(dataSet5);
														
											var stocChart24=$("#placeHolder6").stocCharts(textStyleConfg6);
														stocChart24.bulletBar(cnfg6);
	
	
  //Create a path for each map feature in the data
  features.selectAll("path")
		  .data(geodata.features)
		  .enter()
		  .append("path")
		  .attr("d",path)	
		  .on("click",clicked)
		  .on("mouseover", function(d) {      
					
					$("#placeHolder2 svg").remove();			
					$("#placeHolder3 svg").remove();	
					$("#placeHolder4 svg").remove();	
					$("#placeHolder5 svg").remove();	
					$("#placeHolder6 svg").remove();	
						
					switch(d.properties.NAME){
						case "Alabama" :{ 
											
											var stocChart21=$("#placeHolder2").stocCharts();
												stocChart21.draw3DPyramidSliceChart(config);

											
											var stocChart27=$("#placeHolder3").stocCharts(textStyleConfg3);
	 
												stocChart27.drawThreeDStackedBarChart("#placeHolder3", heightOfBarOne, heightOfBarTwo, threeDStackedBarsData, cfg3DBarChart, colorArray, gridLineColor, textColor, xAxisArray); 
												
											var stocChart23=$("#placeHolder4").stocCharts(textStyleConfg4);
												stocChart23.drawDountWithBarChart(cnfg4);	
												
												
											var stocChart5=$("#placeHolder5").stocCharts(textStyleConfg5);
																stocChart5.drawPieChartWithTransition(dataSet5);
														
											var stocChart24=$("#placeHolder6").stocCharts(textStyleConfg6);
														stocChart24.bulletBar(cnfg6);
													break;		
										
										};
									  
							default :	{
											var stocChart21=$("#placeHolder2").stocCharts();
												stocChart21.draw3DPyramidSliceChart(config);

											
												var stocChart27=$("#placeHolder3").stocCharts(textStyleConfg3);
	 
												stocChart27.drawThreeDStackedBarChart("#placeHolder3", heightOfBarOne, heightOfBarTwo, threeDStackedBarsData, cfg3DBarChart, colorArray, gridLineColor, textColor, xAxisArray); 
												
												
												var stocChart23=$("#placeHolder4").stocCharts(textStyleConfg4);
													stocChart23.drawDountWithBarChart(cnfg4);
													
												   var stocChart5=$("#placeHolder5").stocCharts(textStyleConfg5);
														stocChart5.drawPieChartWithTransition(dataSet5);
														
												var stocChart24=$("#placeHolder6").stocCharts(textStyleConfg6);
														stocChart24.bulletBar(cnfg6);
													break;		
										};
					}
			div.transition()        
                .duration(2000)      
                .style("opacity", .9);      
			
			div.html("<span>"+d.properties.NAME+"</span><br/>");  
            	
		})
			/* var colorArray=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"];
  var data=[20, 15, 10, 10, 20, 20, 5];
  var confg={"data":data,"colorArray":colorArray};
  
  var stocChart21=$("#line21").stocCharts();
  stocChart21.draw3DPyramidSliceChart(confg);
 });*/
	.on("mouseout",function(d){
				div.transition()        
                .duration(200)      
                .style("opacity",0);
									
	});			
});

// Add optional onClick events for features here
// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
function clicked(d,i) {

}

/*
//Update map on zoom/pan
function zoomed() {
  features.attr("transform", "translate(" + zoom.translate() + ")scale(" + zoom.scale() + ")")
      .selectAll("path").style("stroke-width", 1 / zoom.scale() + "px" );
}
*/
}
