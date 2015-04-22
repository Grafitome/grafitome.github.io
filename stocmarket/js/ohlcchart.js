      var width = 1350;
      var height = 600;
	  var noOfDays=1500;
	  var currentShape='';
       String.prototype.format = function() {
        var formatted = this;
        for (var i = 0; i < arguments.length; i++) {
          var regexp = new RegExp('\\{'+i+'\\}', 'gi');
          formatted = formatted.replace(regexp, arguments[i]);
 }
 return formatted;
      };


      var dateFormat = d3.time.format("%Y-%m-%d");
      var end = new Date();
      var start = new Date(end.getTime() - noOfDays * 60 * 60 * 24 * 60);
      var data = [];

      function min(a, b){ return a < b ? a : b ; }
                
      function max(a, b){ return a > b ? a : b; }    

      function buildChart(data){        
         
          var margin = 50;     
     var x = d3.scale.linear()
    .domain([d3.min(data.map(function(d){return dateFormat.parse(d.Date).getTime();})),
        d3.max(data.map(function(d){return dateFormat.parse(d.Date).getTime();}))])
    .range([margin,width-margin]);
	
	
	
	
	
	
   var chart = d3.select("#ohlc-container")
    .append("svg:svg")
    .attr("class", "chart")
	.attr('id','ohlcSvg')
    .attr("width", width)
    .attr("height", height);
   var y = d3.scale.linear()
    .domain([d3.min(data.map(function(x) {return x["Low"];})), d3.max(data.map(function(x){return x["High"];}))])
    .range([height-margin, margin]);
  

          chart.selectAll("line.x")
           .data(x.ticks(1))
           .enter().append("svg:line")
           .attr("class", "x")
           .attr("x1", x)
           .attr("x2", x)
           .attr("y1", margin)
           .attr("y2", height - margin)
           .attr("stroke", "black");

          chart.selectAll("line.y")
           .data(y.ticks(1))
           .enter().append("svg:line")
           .attr("class", "y")
           .attr("x1", margin)
           .attr("x2", width - margin)
           .attr("y1", y)
           .attr("y2", y)
           .attr("stroke", "black");

          chart.selectAll("text.xrule")
           .data(x.ticks(10))
           .enter().append("svg:text")
           .attr("class", "xrule")
           .attr("x", x)
           .attr("y", height - margin)
           .attr("dy", 20)
           .attr("text-anchor", "middle")
		  .style('color','#FFFFFF')
		   .style('font-style','italic')
		  .style("font-size","14px")
		  .attr('fill','#FFFFFF')
           .text(function(d){ 
 
     var date = new Date(d);// * 1000); 
     return (date.getMonth() + 1)+"/"+date.getDate();
     });
 
         chart.selectAll("text.yrule")
          .data(y.ticks(10))
          .enter().append("svg:text")
          .attr("class", "yrule")
          .attr("x", width - margin)
          .attr("y", y)
          .attr("dy", 0)
          .attr("dx", 20)   
          .attr("text-anchor", "middle")
		  .style('color','#FFFFFF')
		  .style("font-size","14px")
		  .attr('fill','#FFFFFF')
          .text(String);
		  
		  
	

var rect= chart.selectAll("rect")
   .data(data)
   .enter().append("svg:rect")
   .attr("x", function(d) { return x(dateFormat.parse(d.Date).getTime()); })
   .attr("y", function(d) {return y(max(d.Open, d.Close));})  
 
   .attr("width", function(d) { return 0.5 * (width - 2*margin)/data.length; });
   
   rect
   .on('mouseover',function(d){
    var xPos=d3.select(this).attr('x');
	var yPos=d3.select(this).attr('y');
	d3.select('.x').transition().duration(300).attr('x1',xPos).attr('x2',xPos);
    d3.select('.y').transition().duration(300).attr('y1',yPos).attr('y2',yPos);
	for(key in d){
	
	$('.Value'+key).html(d[key]);
	}
	
   })
   .attr("fill",function(d) { return d.Open > d.Close ? "red" : "green" ;})
     .attr("height",0)
   .transition().duration(500)
   .attr("height", function(d) { return y(min(d.Open, d.Close))-y(max(d.Open, d.Close));}) ;
/*
   var arc = d3.svg.arc()
    .outerRadius(height / 10)
    .startAngle(0)
    .endAngle(function(d, i) { return i ? -Math.PI : Math.PI;
	});
		 	

			var brush = d3.svg.brush()
    .x(x)
    .extent([.3, .5])
    .on("brushstart", brushstart)
    .on("brush", brushmove)
    .on("brushend", brushend);
 
   
  
		  
		  var brushg = chart.append("g")
			.attr("class", "brush")
			.call(brush);

			brushg.selectAll(".resize").append("path")
				.attr("transform", "translate(0," +  height / 2 + ")")
				.attr("d", arc);

			brushg.selectAll("rect")
				.attr("height", height);

			brushstart();
			brushmove();

			function brushstart() {
			console.log("hurrrrr");
			  chart.classed("selecting", true);
			}
            var startingDate='';
			var endingDate='';
			
			function brushmove() {
			  var s = brush.extent();
			  console.log("selected"+x.invert(s[0])+"::"+s[0]+":::"+s[1]);
			  startingDate=new Date(s[0]);
				endingDate==new Date(s[1]);
			  rect.classed("selected", function(d) { return s[0] <= d && d <= s[1]; });
			}

			function brushend() {
				alert(startingDate+":::"+endingDate);
			  chart.classed("selecting", !d3.event.target.empty());
			  
			//  alert($(d3.event.target).attr('left'));
			}
			
			d3.select('.brush').style('display','none');
			*/
		
	var line;
	var position = [200,200];
	  var drag = d3.behavior.drag()
    .on("drag", function(d,i) {
	    //alert("dragStart");
        position[0] += d3.event.dx;
        position[1] += d3.event.dy;
        d3.select(this)
        .attr("transform", function(d,i){
            return "translate(" + position + ")"
        })
    });
	
	//chart
	var selectedArea=chart;//d3.select('.extent');
	selectedArea
    .on("mousedown", mousedown)
    .on("mouseup", mouseup);

	 var initialX=0;
  var initialY=0;
     var path='';
function mousedown() {
	d3.selectAll('.brush').style('display','block');
    var m = d3.mouse(this);
	initialX=m[0];
		initialY=m[1];
	//alert("dfjjfd");
    /*
    line = selectedArea.append("line")
    .attr('class','baseLine')
        .attr("x1", m[0])
        .attr("y1", m[1])
        .attr("x2", m[0]-20)
        .attr("y2", m[0]-20)
		   .attr("x3", m[0])
        .attr("y3", m[1]);;
		//.on('drag',onDrag);
		var line2 = selectedArea.append("line")
    .attr('class','baseLine')
        .attr("x1", m[0])
        .attr("y1", m[1])
        .attr("x2", m[0]-200)
        .attr("y2", m[0]-200)
		   .attr("x3", m[0]+200)
        .attr("y3", m[1]+200);
		*/
    //line.call(drag);
    selectedArea.on("mousemove", mousemove);
}


function mousemove() {
 var m = d3.mouse(this);
	
   createShapes(currentShape,m);
    // createShapes('rangeline',m);
}

function mouseup() {
	
    selectedArea.on("mousemove", null);
	d3.selectAll('.brush').style('display','none');
}
	var spell="";	
	var counter=1;
	
	$('body').keypress(function(e){
			if(currentShape=='text'){
			  var chrCode=e.which || e.keyCode;
			  var key=String.fromCharCode(chrCode);
			  console.log(chrCode +"::"+e.keyCode);
			  if(chrCode==13){
			    spell="";
				counter++;
			     initialY+=14;
			  }
			  else if(chrCode==8){
			   spell=spell.substring(0,spell.length-1);
			  }
			  else{
			  spell=spell.concat(key);
			  }
			  selectedArea.select('#workingID'+counter).remove();
			  d3.select("#ohlc-container svg")
			 //  selectedArea
			  .append('text')
			  .attr('fill','white')
			  .attr('x',initialX)
			  .attr('y',initialY)
			  .attr('id','workingID'+counter)
			  .text(spell)
			  .style("fill","#FFFFFF")
			  .style("color","#FFFFFF")
			  .style("font-size","12px")
			  .style("stroke-width","1px");
	       }
	});
	
	
	$('body').keydown(function(e){
		if(currentShape=='text'){
	          if(e.which==8){
			   spell=spell.substring(0,spell.length-1);
			   selectedArea.select('#workingID'+counter).remove();
			   d3.select("#ohlc-container svg")
			 //  selectedArea
			  .append('text')
			  .attr('fill','white')
			  .attr('x',initialX)
			  .attr('y',initialY)
			  .attr('id','workingID'+counter)
			  .text(spell)
			  .style("fill","#FFFFFF")
			  .style("color","#FFFFFF")
			  .style("font-size","12px")
			  .style("stroke-width","1px");
			  }
	  }
	});
	/*
	d3.select('body')
	.on('keydown',function(){
	

	  
	});
	*/
	function createShapes(shape,currentPos){
    switch(shape){
	  case "eclipse":
	         createEclipse(currentPos);
			 break;
	  case "line":
	         createLine(currentPos);
			 break;		 
	  case "straight":
	        createStraightLine(currentPos);
			break;
	  case "skew":
			createLine(currentPos);
			break;
	      
			
	  case "range":
	      // alert(range);
	        createRangeLine(currentPos);
			break;
	
	
	
	}


}


function createEclipse(m){
	selectedArea.selectAll('path').remove();
    
	var middleX=(m[0]+initialX)/2;
	var middleY=(m[1]+((m[0]-initialX)*.20));
	
	var middleX1=(m[0]+initialX)/2;
	var middleY1=(m[1]-((m[0]-initialX)*.20));
	var pathArray=[[initialX-30,initialY-30],[middleX,middleY],[m[0],m[1]],[middleX1,middleY1]];
	//alert('mouseUp');
     path = selectedArea.append('path')
    .data([pathArray])
    .attr('d', d3.svg.line().interpolate('basis-closed'))
    .attr('stroke-weight', '4px')
	.attr('stroke', 'cyan')
    .attr('fill', 'none');

}


function createRangeLine(m){
 line = selectedArea.append("line")
    .attr('class','baseLine')
        .attr("x1", initialX)
        .attr("y1", initialY)
        .attr("x2", m[0])
        .attr("y2", m[1])
		.style("stroke","cyan")
		.style("stroke-width","1px");
		//.on('drag',onDrag);
		
		var lineFunction = d3.svg.line()
           .x(function(d) { return d.x; })
           .y(function(d) { return d.y; })
          .interpolate("linear");


}


function createLine(m){
d3.selectAll('.baseLine').remove();
 line = selectedArea.append("line")
    .attr('class','baseLine')
        .attr("x1", initialX)
        .attr("y1", initialY)
        .attr("x2", m[0])
        .attr("y2", m[1])
		.style("stroke","cyan")
		.style("stroke-width","1px");
		//.on('drag',onDrag);
		
		var lineFunction = d3.svg.line()
           .x(function(d) { return d.x; })
           .y(function(d) { return d.y; })
          .interpolate("linear");


}


function createStraightLine(m){
d3.selectAll('.baseLine').remove();
 line = selectedArea.append("line")
    .attr('class','baseLine')
        .attr("x1", initialX)
        .attr("y1", initialY)
        .attr("x2", m[0])
        .attr("y2", initialY);
		//.on('drag',onDrag);
		
		var lineFunction = d3.svg.line()
           .x(function(d) { return d.x; })
           .y(function(d) { return d.y; })
          .interpolate("linear");


}
























	
   chart.selectAll("line.stem")
          .data(data)
          .enter().append("svg:line")
          .attr("class", "stem")
          .attr("x1", function(d) { return x(dateFormat.parse(d.Date).getTime()) + 0.25 * (width - 2 * margin)/ data.length;})
          .attr("x2", function(d) { return x(dateFormat.parse(d.Date).getTime()) + 0.25 * (width - 2 * margin)/ data.length;})      
          .attr("y1", function(d) { return y(d.High);})
          .attr("y2", function(d) { return y(d.Low); })
          .attr("stroke", function(d){ return d.Open > d.Close ? "red" : "green"; })

      }    


      function appendToData(x){
 if(data.length > 0){
// alert("building NOT chart");
     return;
        }
        data = x.query.results.quote;
        for(var i=0;i<data.length;i++){
          data[i].timestamp = (new Date(data[i].date).getTime() / 1000);
        }    
        data = data.sort(function(x, y){ return dateFormat.parse(x.Date).getTime() - dateFormat.parse(y.Date).getTime(); });   
		
        buildChart(data);    
      }

      function buildQuery(symbol){
     //   var symbol = window.location.hash;
        if(symbol === ""){
           symbol = "GOOG";
        }
        symbol = symbol.replace("#", "");    
        var base = "select * from yahoo.finance.historicaldata where symbol = \"{0}\" and startDate = \"{1}\" and endDate = \"{2}\"";
        var getDateString = d3.time.format("%Y-%m-%d");
        var query = base.format(symbol, getDateString(start), getDateString(end));
        query = encodeURIComponent(query);      
        var url = "http://query.yahooapis.com/v1/public/yql?q={0}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=appendToData".format(query);
        return url;
      }
      function fetchData(symbol){    
        url = buildQuery(symbol);    
        scriptElement = document.createElement("SCRIPT");
        scriptElement.type = "text/javascript";
        // i add to the url the call back function
        scriptElement.src = url;//+"?v="+Math.random();
        var scriptEle=document.getElementsByTagName("HEAD")[0].appendChild(scriptElement);
		$(scriptEle).attr('id','scriptElement');
      }
	  
	 

      function selectDivion(){
	  noOfDays=parseInt($('#sub-divison-filter-selection :selected').val());
	  $('#scriptElement').remove();
	  $('#ohlc-container svg').remove();
	  data=[];
	  start = new Date(end.getTime() - noOfDays * 60 * 60 * 24 * 60);
	  fetchData($('#yahooSymbol').val());

      }	  
	  $(document).ready(function(){
	  
	  
			  $('#yahooSymbol').change(function(){
			     var symbol=$(this).val().toUpperCase();
				 $('#scriptElement').remove();
				$('#ohlc-container svg').remove();
				data=[];
				$(this).val(symbol);
				fetchData(symbol);
			  
			  });
			  
			  $('.chartSettingIcon li').click(function(){
			     currentShape=$(this).attr('id');
			  
			  });
			  
			  $('.downloadAsImage').click(function(){
							var svg_xml = (new XMLSerializer()).serializeToString(document.getElementById('ohlcSvg'));
							var imageData = "data:image/png;base64," + btoa(svg_xml);
							var rawImageData=imageData.replace("image/png", "image/octet-stream");
							//document.location.href=(rawImageData);
							
							copyChartToCanvas('ohlc-container','canvas2');
							//canvasToImage('black','canvas2');
			  
			  });
	  });
	  