(function ($) {
	var selectedElement;
	var selectedElementId
	
	  var axisLabelController={
		  //appendLabel:function(labelName,labelPos,svgElement,width,height){
	   appendLabel:function(labelName,labelXPos,labelYPos,rotateDeg,targetElem,labelColorArg,fontWeightArg){
		
		
		var labelColor="black",fontWeight=300;
		
		if(!isNaN(labelColorArg) || !(labelColorArg === undefined)){
			labelColor=labelColorArg;
		}
		
		if(!isNaN(fontWeightArg) || !(fontWeightArg === undefined)){
			fontWeight=fontWeightArg;
		}
		
	//	alert(targetElem);
		
		var textElem=targetElem
					.append("text");
		
		textElem.text(labelName)
		.attr("transform","translate("+labelXPos+","+labelYPos+") rotate("+rotateDeg+")")
		//.style("font-family","italic","important")
		.style("fill",labelColor,"important")
		.style("font-weight",500,"important")
		//.style("font-size",14,"important");
		
		
	   }
  }
	
	var toolTipManager = {
		
		
		appendToolTip:function(){
			var tootTipTemplate ='<div id="tooltipChart" style="z-index:999999;float:none;display:none; margin:0px; padding:0px; position:absolute; width:150px;">'+
			'<div id="textContainer" style="width:150px; background-color:rgba(197,198,197,0.7); border-radius:5px; font-family:calibri; float:left; font-size:11px; padding:10px;">'+
			'	<div class="xVal" style="text-align:center; font-size:13px;border-bottom:solid 1px #7b7b7b;background:url(http://stocinn.github.io/stocweb/img/tooltip-heading-bg.jpg) repeat-x;'+
			'border-top-left-radius:5px; margin-top:-10px; margin-left:-10px;  margin-right:-10px;border-top-right-radius:7px; padding:5px 10px;">14 jan</div>'+
			'<div id="y-label" class="y-label label1" style="width:60%;display:none; font-weight:bold; float:left; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'<div  class="yVal label1" style="width:40%; float:right;display:none; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label2" style="width:60%; float:left;display:none;font-weight:bold; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label2" style="width:40%;display:none; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label3" style="width:60%; float:left;font-weight:bold; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label3" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label4" style="width:60%; float:left;font-weight:bold; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label4" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label5" style="width:60%; float:left;font-weight:bold; text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label5" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'		<div class="y-label label6" style="width:60%; float:left; font-weight:bold;text-align:left; padding:3px 0;">Auto Loans</div>'+
			'		<div class="yVal label6" style="width:40%; float:right; text-align:right;  padding:3px 0;">$ 400</div>'+
			'	</div>'+
			'	<div id="rightHandIcon" style="position: relative; bottom:1px; height:31px; width:52px;'+
			'	 background:url(http://stocinn.github.io/stocweb/img/toolTips-arrow.png) no-repeat;opacity:0.7; clear:both; float:right; bottom:0px; right:8px;">'+
			'	 </div>'+
			'	<div id="leftHandIcon" style="position: relative; bottom:1px; height:31px; width:52px;'+
			'	 background:url(http://grafitome.github.io/img/toolTips-arrow-left.png) no-repeat;opacity:0.7; clear:both; float:left; bottom:0px; left:8px;">'+
			'	 </div>'+
			'</div>';
			
			$('body').append(tootTipTemplate);
			
		},
		appendToolTipOld: function () {
			var tootTipTemplate = "<div id='tooltipChart' style='display:none;position:absolute;background:rgba(0, 0, 0, 0.8); width:120px;  min-height: 40px; z-index:99999999 !important;box-shadow: inset 0 0 40px #222221;float:left; border-radius:5px; font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;  color:white; text-shadow: 1px 0 1px #000;    '>" +
			"<div class='arrow' style='position: absolute;margin-left: -8px;font-size: 24px;color:#272726; text-shadow:none; top: 7px;'><i class='fa fa-caret-left'></i></div>" +
			
			"<div id='textContainer'>" +
			"<div   style='clear:both;width:100%;padding:2px 5px '><div style='width:50%;float:left;' class='xVal'></div></div>" +
			"<div  class='yContainer1 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label'  style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal' style='width:45%;margin-left:5%;float:left;'></div></div>" +
			
			"</div>" +
			"</div>" +
			"</div>";
			$('body').append(tootTipTemplate);
			
		},
		showToolTip: function (e, yValArg, xValArg, hideXVal, yHeadingMap,pageY) {
			
			var x = e.pageX;
			var y; 
			if(isNaN(pageY)){
				y=e.pageY;
				}else{
				y=pageY;
			}
			var yVal;
			yVal = yValArg;
			var timeVal
			timeVal = xValArg;
			var toolTipContainer = $('#tooltipChart')
			$(toolTipContainer).find('.xVal').html("");
			$(toolTipContainer).find('.xVal').html(timeVal);
			
			//blank yLabel	
			$(toolTipContainer).find('.y-label').html("");
			
			//blank yVal
			$(toolTipContainer).find('.yVal').html("");
			
			//hide all  yLabel and yVal
			$(toolTipContainer).find('.yVal').hide();
			$(toolTipContainer).find('.y-label').hide();
			
			//get YHeadingNames width Values and iterate to update yLabel and YVal 
			for(var i=0;i<yHeadingMap.length;i++){
				var headingObj=yHeadingMap[i];
				var counter=i+1;
				var yLabelClass=".y-label.label"+counter;
				var yValClass=".yVal.label"+counter;
				$(toolTipContainer).find(yLabelClass).html(headingObj.headingName);
				$(toolTipContainer).find(yValClass).html(headingObj.headingVal);
				
				$(toolTipContainer).find(yValClass).show();
				$(toolTipContainer).find(yLabelClass).show();
			}
			
			var marginLeft = x;
			if ($(".ps-scrollbar-x-rail")) {
				try {
					marginLeft += parseInt($(".ps-scrollbar-x-rail").css('left').replace("px", ''));
                    } catch (err) {
					
				}
			}
			
            
			var tooTipElem = $('body').find("#tooltipChart");
			var toolTipTextContainer = $(tooTipElem).find("#textContainer");
			
			var marginTop = y - ($(tooTipElem).height()*0.98);
			
			var leftMarginOfContainer = $('#'+selectedElementId).offset().left;
			var containerWidth = $('#'+selectedElementId).width()*.5;
			
			if(marginLeft >= (leftMarginOfContainer + containerWidth)){
				$(tooTipElem).find("#rightHandIcon").show();
				$(tooTipElem).find("#leftHandIcon").hide();
				marginLeft=marginLeft-($(tooTipElem).width());
				}else{
				
				$(tooTipElem).find("#rightHandIcon").hide();
				$(tooTipElem).find("#leftHandIcon").show();
			}
			
			
			
			$(tooTipElem).css("left", marginLeft);
			$(tooTipElem).css("top", marginTop);
			//console.log("sss");
			$(tooTipElem).show();
			
		},
		hideTooTip: function () {
			$('#tooltipChart').find('.yVal').html("");
			d3.select("#tooltipChart").style('display', 'none');
		},
		showToolTipForBarWithMultipleLine: function (e, yHeadingAndValueJson, xValArg, hideXVal, cx, isDraggerRequired) {
			
			var x = e.pageX;
			var y = e.pageY - $(selectorElement).find('svg').offset().top - 10;
			
			
			var timeVal;
			
			timeVal = xValArg;
			
			if (hideXVal) {
				$('#draggLineToolTip').find('.xVal').html("");
                } else {
				$('#draggLineToolTip').find('.xVal').html(timeVal);
			}
			if (isDraggerRequired) $('#draggLineToolTip').find('#tooltip-dragger').show();
			else $('#draggLineToolTip').find('#tooltip-dragger').hide();
			d3.select("#draggLineToolTip").selectAll(".yDiv").style("display", "none");
			
			var j = 1;
			for (key in yHeadingAndValueJson) {
				var element = $(".yContainer" + (j)).show();
				d3.select("#y-label" + (j)).html(key + " ");
				d3.select("#yVal" + (j)).html(" " + yHeadingAndValueJson[key]);
				j++;
			}
			
			
			
			
			
			var marginLeft = x + margin.left;
			if ($(".ps-scrollbar-x-rail")) {
				try {
					marginLeft += parseInt($(".ps-scrollbar-x-rail").css('left').replace("px", ''));
                    } catch (err) {
					
				}
			}
			
			var tooTipElem = $('body').find("#draggLineToolTip");
			var toolTipTextContainer = $(tooTipElem).find("#textContainer");
			
			if (($(window).width() - marginLeft) < $('body').find("#draggLineToolTip").width()) {
				marginLeft = marginLeft - $(tooTipElem).width();
				
				$(tooTipElem).css('-ms-transform', 'rotate(-180deg) translate(15px)');
				$(tooTipElem).css('-webkit-transform', 'rotate(-180deg) translate(15px)');
				$(tooTipElem).css('transform', 'rotate(-180deg) translate(15px)');
				
				
				$(toolTipTextContainer).css('-ms-transform', ' translateY(10px) rotate(180deg)');
				$(toolTipTextContainer).css('-webkit-transform', 'translateY(10px)  rotate(180deg)');
				$(toolTipTextContainer).css('transform', 'translateY(10px) rotate(180deg)');
				
                } else {
				
				$(tooTipElem).css('-ms-transform', '');
				$(tooTipElem).css('-webkit-transform', '');
				$(tooTipElem).css('transform', '');
				
				
				$(toolTipTextContainer).css('-ms-transform', '');
				$(toolTipTextContainer).css('-webkit-transform', '');
				$(toolTipTextContainer).css('transform', '');
				
			}
			
			var marginTop = e.pageY - ($(selectorElement).find("#draggLineToolTip").height() / 2);
			if (cx != null) {
				//$('body').find("#draggLineToolTip").css("left", parseFloat(cx) + 100);
				$('body').find("#draggLineToolTip").css("left", marginLeft);
                } else {
				$('body').find("#draggLineToolTip").css("left", marginLeft - 5);
			}
			
			$('body').find("#draggLineToolTip").css("top", marginTop - 20);
			$('body').find("#draggLineToolTip").show();
			
		},
		hideMulitpleLineBarToolTip: function () {
			d3.select('#draggLineToolTip').style('display', 'none');
		},
		appendToolTipForBarWithMultipleLine: function () {
			var tootTipTemplate = "<div id='draggLineToolTip' style='display:none;position:absolute;background:rgba(0, 0, 0, 0.8); width:120px;  min-height: 40px; z-index:99999999 !important;box-shadow: inset 0 0 40px #222221;float:left; border-radius:5px; font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;  color:white; text-shadow: 1px 0 1px #000;    '>" +
			"<div  id='tooltip-dragger' style='position: absolute;margin-left: -8px; border-left:solid 1px #000; min-height:250px; top:-100px;'></div>" +
			
			"<div class='arrow' style='position: absolute;margin-left: -8px;font-size: 24px;color:#272726; text-shadow:none; top: 7px;'><i class='fa fa-caret-left'></i></div>" +
			
			
			"<div id='textContainer'>" +
			"<div   style='clear:both;width:100%;padding:2px 5px '><div style='width:50%;float:left;' class='xVal'></div></div>" +
			"<div  class='yContainer1 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label1'  style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal1' style='width:42%;float:left;margin-left:8%;'></div></div>" +
			"<div  class='yContainer2 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label2' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal2' style='width:42%;float:left;margin-left:8%;'></div></div>" +
			"<div  class='yContainer3 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label3' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal3' style='width:42%;float:left;margin-left:8%;'></div></div>" +
			"<div  class='yContainer4 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label4' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal4' style='width:42%;float:left;margin-left:8%;'></div></div>" +
			"<div  class='yContainer5 yDiv' style='clear:both;width:100%;padding:5px'><label id='y-label5' style='width:50%;float:left;'>Value</label><div class='yVal' id='yVal5' style='width:42%;float:left;margin-left:8%;'></div></div>" +
			"</div>" +
			"</div>" +
			"</div>";
			$('body').append(tootTipTemplate);
		}
	}
	
	
	
	$.fn.stocMaps = function(){
		var mainChart = true;
		selectorElement = $(this);
		selectedElementId=$(selectorElement).attr("id");
		
		toolTipManager.appendToolTip();
		
		$.fn.indiaStates = function(divId,data,style,mode){
			
			var shiftedLeft =0;
			var shiftedUp 	=0;
			
			
			
			
			var width =parseInt(d3.select("#"+divId).style("width"));
			var height=parseInt(d3.select("#"+divId).style("height"));
			
			
			
			
			//console.log(width + "	:	"  +height );
			
			//var title = "INDIA STATES WITH POPULATION DENSITY";
			//var leftIndicator = (width/2) - ((title.length*7)/2);
			//axisLabelController.appendLabel(title,leftIndicator,15,0,"$('#"+divId+"')","white",800);
			
			var legend_labels = [];
			//var color = style.color;
			
			
			
			var maxSize  = Math.min(width,height);
			
			var svgXMax = "";
			var svgXMin = "";
			var svgYMin = "";
			var svgYMax = "";		
			
			
			
			
			var svg = d3.select("#"+divId).append("svg")
			.attr("width", width)
			.attr("height", height);
				
			var pixcelPerChar =7;
			var title = "INDIA POPULATION DENSITY";
			var leftIndicator = (width/2) - ((title.length*pixcelPerChar)/2)
			axisLabelController.appendLabel(title,leftIndicator,20,0,svg,"white",800);
				
			var hidden = {};
			var labelId = [0];
			
			var labelDomain = style.labelDomain;
			var colorRange = style.colorRange;
			var scaleDomain =[];
			
			for(i=1;i<labelDomain.length;i++)
			{
				scaleDomain.push(labelDomain[i]);
			}
			
			var color = d3.scale.threshold()
			.domain(scaleDomain)
			.range(colorRange); 
			
			
			
			for(i=0;i<legend_labels.length;i++)
			{
				var id  = color(labelDomain[i]).substring(1);	
				hidden[id] = true; 
			}
			
			var g = svg.append("g")
			.attr("class","states");
			
			
			
			var legend = svg.selectAll("g.legend")
			.data(labelDomain)
			.enter()
			.append("g")
			.attr("class", "legend");
			
			
			var ls_w = width/25, ls_h = height/25;
			var maxRectSize = Math.min(ls_w,ls_h);
			
			legend.append("rect")
			.attr("x", maxRectSize)
			.attr("y", function(d, i){ return height - (1.5*i*maxRectSize) - 2*maxRectSize;})
			.attr("width", maxRectSize)
			.attr("height", maxRectSize)
			.style("fill", function(d, i) { return color(d); })
			.style("opacity", 0.8)
			.attr("id",function(d){
				var id = color(d).substring(1);
				return id;
			})
			.on("click",function(d,i){	
				
				var id = d3.select(this).attr('id');
				
				
				if(hidden[id] == true)
				{
					d3.selectAll(".class"+id).style('display',"none");
					d3.select(this).style("stroke","black");		
				}
				else{
					d3.selectAll(".class"+id).style('display',"inline");		
					d3.select(this).style("stroke","none");		
				}	
				hidden[id] = !hidden[id]; 
			});
			
			var fontSize = 12;
			var leftShiftFactor = 10;	
			if(height > 500){
				fontSize = 14;
			}	
			else if(height >250){
				fontSize = 12;
			}
			else{
				fontSize = 10;
			}
			
			
			legend
			.append("text")
			.style("font-size",fontSize+"px")
			.attr("x",2*maxRectSize + maxRectSize/2)
			.attr("y",function(d, i){  return height - (1.5*i*maxRectSize) - 2*maxRectSize + fontSize;})
			.text(function(d, i){ 
				
				if(i == 0)
				{
					legend_labels.push("<"+labelDomain[i+1]);  
					return legend_labels[i];
				}
				else{
					legend_labels.push(labelDomain[i] + "+");  
					return legend_labels[i];
				}		
			});
			
			var max =0;
			
			for(i=0;i<colorRange.length;i++)
			{
				var value = legend_labels[i].length*7;
				//console.log(value);
				if(max < value)
				{
					max = value;
				}
			}
			
			width = width;
			height = height;
			
			var widthCx = width/2;
			var widthCy = height/2;
			
			widthCx = widthCx + max;
			
			
			if(width >=500 ){
				
				leftShiftFactor = 30;
				
			}
			else if(width >= 200){
				
				leftShiftFactor = 15;
			}	
			else{
				
				leftShiftFactor = 10;
				
			}
			
			
			var scale = Math.min(width,height);
			//console.log(scale);
			
			var projection = d3.geo.equirectangular().scale(scale*1.5);
			
			var trans = projection.translate();
			
			
			var path = d3.geo.path()
			.projection(projection);
			var value = [];
			d3.json("./data/indiaStates.json", function(error, indiaStates) {
				g.selectAll("path")
				.data(indiaStates.features)
				.enter()
				.append("path")
				.attr("d", path)
				.attr("class",function(d,i){ 
					
					var bounds = path.bounds(d);
					
					var dxMin = bounds[0][0];
					var dxMax = bounds[1][0];
					var dyMin = bounds[0][1];
					var dyMax = bounds[1][1];
					
					if( i == 0){
						svgXMin =  dxMin;
						svgXMax =  dxMax;
						svgYMin =  dyMin;	
						svgYMax =  dyMax;	
					}
					else{
						svgXMin = Math.min(dxMin,svgXMin);
						svgXMax = Math.max(dxMax,svgXMax);
						svgYMin = Math.min(dyMin,svgYMin);
						svgYMax = Math.max(dyMax,svgYMax);
					}
					//	console.log("svgXMin :" +  svgXMin +"	svgXMax:" + svgXMax + "		svgYMin:" + svgYMin + "		svgYMax:" + svgYMax );
					
					return "feature";
				})
				.style("fill",function(d){
					
					//	console.log(d.id+ "id "+data[d.id]);
					var population = data[d.id];
					//console.log(population);
					
					var p =  population["population"];
					
					var fill  = color(p);
					//console.log(p);
					return fill;
					
				})
				.attr("class",function(d,i){
					
					var classId = color(data[d.id]["population"]);
					
					var id = classId.substring(1);		
					//console.log("class :" + id);
					
					/*				calculateCentroid(d,d3.select(this),function(position){
						var id = d.id;
						var coord = position;
						var object = {"id":id,"x":coord[0],"y":coord[1]};
						value.push(object);
						});
					*/		
					return "class"+id;
					
				})
				.on("click",function(d){
					
				})
				.on("mousemove",function(d)
				{
					var x = d3.event.pageX;
					var y = d3.event.pageY;
					//	x=x-(leftMarginOfSvg+compareAnalChart.left);
					//	x = Math.round(xScale.invert(x));
					
					var heading = d.id;
					var attribute = style.toolTipLabel;
					var attributeValue = data[d.id][attribute];
					var yHeadingValueMap=[{"headingName":attribute,"headingVal":attributeValue}];
					
					toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90); 
					
				})
				.on("mouseleave",function(){
					toolTipManager.hideTooTip();
				})
				.call(function(d){
					shiftSvg(d);	
				})
				
			});
			
			function shiftSvg(){
				//console.log(value);	
				
				x = (svgXMax + svgXMin)/2;
				y = (svgYMin + svgYMax)/2;
				
				bounds = [[svgXMin,svgYMin],[svgXMax,svgYMax]];
				//console.log( "x:" + x + "	y:" + y);
				
				//console.log(bounds);
				var scale  = 1 / Math.max((bounds[1][0] - bounds[0][0]) / width,(bounds[1][1] - bounds[0][1]) / height);
				
				trans = [x,y];
				
				projection.scale(scale).translate([widthCx-trans[0],widthCy-trans[1]]);
				shiftedLeft = widthCx-trans[0]-((width)/leftShiftFactor);
				shiftedUp   = widthCy-trans[1];
				
				g.attr("transform", "translate("+[widthCx-trans[0]-((width)/leftShiftFactor),widthCy-trans[1]]+")");
				
				for(var i=0;i<value.length;i++){
					value[i]["x"] = value[i]["x"] + shiftedLeft;
					value[i]["y"] = value[i]["y"] + shiftedUp;
				}						
			};
		},
		
	$.fn.zoomableIndiaStates = function(divId,colorRange){
				
  var width =parseInt(d3.select("#"+divId).style("width"));
   var height=parseInt(d3.select("#"+divId).style("height"));
  console.log(width);
  console.log(height);
  
  var active = d3.select(null);
	
  var zoom = d3.behavior.zoom()
		.translate([0, 0])
		.scale(1)
		.scaleExtent([1, 8])
		.on("zoom", zoomed);
		
		var svg = d3.select("#" + divId).append("svg")
								   .attr("width", width)
									.attr("height", height)
									.on("click", stopped, true);
  
  
  svg.append("rect")
		.attr("class", "background")
		.attr("width", width)
		.attr("height", height)
		.on("click", reset);
		
		var g = svg.append("g");
		
		svg
		.call(zoom) // delete this line to disable free zooming
		.call(zoom.event);
		
  d3.json("data/indiaStates.json", function(json){
      // create a first guess for the projection
      var center = d3.geo.centroid(json)
      var scale  = 150;
      var offset = [width/2, height/2];
      var projection = d3.geo.mercator().scale(scale).center(center)
          .translate(offset);

      // create the path
      var path = d3.geo.path().projection(projection);

      // using the path determine the bounds of the current map and use 
      // these to determine better values for the scale and translation
      var bounds  = path.bounds(json);
      var hscale  = scale*width*.9  / (bounds[1][0] - bounds[0][0]);
      var vscale  = scale*height*.9 / (bounds[1][1] - bounds[0][1]);
      var scale   = (hscale < vscale) ? hscale : vscale;
      var offset  = [width - (bounds[0][0] + bounds[1][0])/2 -50 ,
                        height - (bounds[0][1] + bounds[1][1])/2 ];

      // new projection
      projection = d3.geo.mercator().center(center)
        .scale(scale).translate(offset);
     
	 path = path.projection(projection);

      // add a rectangle to see the bound of the svg

      g.selectAll("path").data(json.features).enter().append("path")
        .attr("d", path)
        .style("fill",function(d,i){
				
				var fill = colorRange[(i%18)];
				return	fill;
			})
			.on("click", clicked)
        .style("stroke-width", "1")
        .style("stroke", "black")
    		
	                                                      
	function clicked(d){
	
			if (active.node() === this) return reset();
			active.classed("active", false);
			active = d3.select(this).classed("active", true);
			
			var bounds = path.bounds(d),
			
			
			dx = bounds[1][0] - bounds[0][0],
			dy = bounds[1][1] - bounds[0][1],
			x = (bounds[0][0] + bounds[1][0]) / 2,
			y = (bounds[0][1] + bounds[1][1]) / 2,
			scale = .9 / Math.max(dx / width, dy / height),
			translate = [width / 2 - scale * x, height / 2 - scale * y];
			
			console.log(bounds);
			
			console.log("scale	:" + scale   +  "translate	:" + translate);	
			
			svg.transition()
			.duration(750)
			.call(zoom.translate(translate).scale(scale).event);
		}
  });	
		
		function reset() {
			active.classed("active", false);
			active = d3.select(null);
			
			svg.transition()
			.duration(750)
			.call(zoom.translate([0, 0]).scale(1).event);
		}
		
		function zoomed(d) {
			g.style("stroke-width", 1.5 / d3.event.scale + "px");
			g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		}

		function stopped() {
			if (d3.event.defaultPrevented) d3.event.stopPropagation();
		}	
			
			
			
	},
		
		
		$.fn.advanceIndiaStates = function(divId,style,index){
			
			$('#indiaMapWithChartInnerLeft').empty();
			$('#indiaMapWithChartInnerRight').empty();
			var centroid;
			var shiftedLeft =0;
			var shiftedUp 	=0;
			var colorIndex =0;
			var width =parseInt(d3.select("#"+divId).style("width"));
			var height=parseInt(d3.select("#"+divId).style("height"));
			
			var legend_labels = [];
			
			var maxSize  = Math.min(width,height);
			
			var svgXMax = "";
			var svgXMin = "";
			var svgYMin = "";
			var svgYMax = "";		

			var svg = d3.select("#"+divId).append("svg")
										  .attr("width", width)
										  .attr("height", height);
	
		
			
			var colorRange = style.colorRange;
			
				
			var g = svg.append("g")
			.attr("class","states");
			
			var leftShiftFactor = 10;	
			if(height > 500){
				fontSize = 14;
			}	
			else if(height >250){
				fontSize = 12;
			}
			else{
				fontSize = 10;
			}
			
			
			
			width = width;
			height = height;
			
			var widthCx = width/2;
			var widthCy = height/2;
			
			widthCx = widthCx;
			
			
			if(width >=500 ){
				
				leftShiftFactor = 30;
				
			}
			else if(width >= 200){
				
				leftShiftFactor = 15;
			}	
			else{
				
				leftShiftFactor = 10;
				
			}
			
			
			var scale = Math.min(width,height);
			//console.log(scale);
			
			if(index == 100){
				var projection = d3.geo.equirectangular().scale(scale*1.5);	
			}
			else{
				var projection = d3.geo.equirectangular().scale(scale*5);
			}
			
			
			var trans = projection.translate();
			
			
			var path = d3.geo.path().projection(projection);
			var value = [];
			var centroid = [];
			
			d3.json("./data/indiaStates.json", function(error, indiaStates) {
				
				
				g.selectAll("path")
				.data(function(){
					if(index == 100){
						var array = indiaStates.features; 
						return  array;
					}
					else
					{
						var array = [];
						array.push(indiaStates.features[index]);
						return  array;
					}	
				})
				.enter()
				.append("path")
				.attr("d", path)
				
				.attr("class",function(d,i){ 
					
					var bounds = path.bounds(d);
					
					var dxMin = bounds[0][0];
					var dxMax = bounds[1][0];
					var dyMin = bounds[0][1];
					var dyMax = bounds[1][1];
					
					//centroid =  [dxMin + (dxMax - dxMin)/2, dyMin + (dyMax - dyMin)/2];
					
					if( i == 0){
						svgXMin =  dxMin;
						svgXMax =  dxMax;
						svgYMin =  dyMin;	
						svgYMax =  dyMax;	
					}
					else{
						svgXMin = Math.min(dxMin,svgXMin);
						svgXMax = Math.max(dxMax,svgXMax);
						svgYMin = Math.min(dyMin,svgYMin);
						svgYMax = Math.max(dyMax,svgYMax);
					}
					//	console.log("svgXMin :" +  svgXMin +"	svgXMax:" + svgXMax + "		svgYMin:" + svgYMin + "		svgYMax:" + svgYMax );
					
					return "feature";
				})
				.style("fill",function(d,i){					
					
					fill = colorRange[(i%18)];
					
					return fill;
					
				})
				.attr("class",function(d,i){
					
				})
				.on("click",function(d,i){
					var id = d.id;
					
					var style = {
						 "colorRange" :[colorRange[(i%18)]],
						 "toolTipLabel" : "total seats"
					};
					
					//var stocMap1 = $("#indiaMapWithChartInnerLeft").stocMaps();
					  //stocMap1.advanceIndiaStates("indiaMapWithChartInnerLeft",style);
					$.fn.advanceIndiaStates("indiaMapWithChartInnerLeft",style,d.properties);
					$('#stateName').text(d.id);
					/*s
					var data = {
						title :  "",
						xAxisLabel :"Potitical Parties",
						yAxisLabel :"No of Seat's",
						xAxisData : ["BJP","INC","SAD","AAP","Total Seat's"],
						key: [
							{
								name: 'Punjab',
								data: [2, 3, 4, 4, 13],
								color : "#EBD6CC"
							}						
						]
						
					}  
					var axisData = [];
					data.xAxisData=[];
					var z=0;
					for(var key in statePartyData["seats"])
					{
						if(key==id)
						{
							for(var key1 in statePartyData["seats"][key])
							{
								data.xAxisData[z]= key1;
								
								axisData[z] =statePartyData["seats"][key][key1];
								z++;
							}
						}
					}
					
					data.key[0].data = axisData;
					data.key[0].name = id;
					data.key[0].color = colorRange[colorIndex++];
					if(colorIndex==colorRange.length-1)
					colorIndex=0;
					//	alert(data);
					$("#indiaMapWithChartInnerRight").empty();
					var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"#a7a7a7","yLabelColor":"#a7a7a7","chartTitleColor":"#a7a7a7","titleFontSize":16,"gridLineColor":"#353b37"};
					var stocChart55=$("#indiaMapWithChartInnerRight").stocCharts(textStyleConfg);
					stocChart55.multiGroupedBarChartAnalysis(data);
					*/
						var textStyleConfg={"font-family":" 'Maven Pro',sans-serif","font-size":12,"background":"none","font-color":"#a7a7a7","tick-font-color":"#a7a7a7","legendTextColor":"white","font-weight":400,"xLabelColor":"white","yLabelColor":"white","chartTitleColor":"white","titleFontSize":16,"gridLineColor":"#353b37"};
						var data = statePartyData[id];
						//console.log(data);
						 var stocChart43=$("#indiaMapWithChartInnerRight").stocCharts(textStyleConfg);
						 stocChart43.roundedThreeDBarAnalysis(data);
					
				})
				.on("mousemove",function(d)
				{
					var x = d3.event.pageX;
					var y = d3.event.pageY;
					
					var heading = d.id;
					var attribute = style.toolTipLabel;
					//	var attributeValue = data[d.id][attribute];
					var attributeValue = statePartyData["seats"][d.id]["Total Seat's"];
					var yHeadingValueMap=[{"headingName":attribute,"headingVal":attributeValue}];
					
					toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90); 
					
				})
				.on("mouseleave",function(){
					toolTipManager.hideTooTip();
				})	
				.style("stroke-width", "1")
				.style("stroke", "black")
				.call(function(d){
					shiftSvg(d);	
				});
			});
			
			function shiftSvg(){
				//console.log(value);	
				
				x = (svgXMax + svgXMin)/2;
				y = (svgYMin + svgYMax)/2;
				
				bounds = [[svgXMin,svgYMin],[svgXMax,svgYMax]];
				//console.log( "x:" + x + "	y:" + y);
				
				//console.log(bounds);
				var scale  = 1 / Math.max((bounds[1][0] - bounds[0][0]) / width,(bounds[1][1] - bounds[0][1]) / height);
				
				trans = [x,y];
				
				projection.scale(scale).translate([widthCx-trans[0],widthCy-trans[1]]);
				shiftedLeft = widthCx-trans[0]-((width)/leftShiftFactor);
				shiftedUp   = widthCy-trans[1];
				
				g.attr("transform", "translate("+[widthCx-trans[0]-((width)/leftShiftFactor),widthCy-trans[1]]+")");
				
				for(var i=0;i<value.length;i++){
					value[i]["x"] = value[i]["x"] + shiftedLeft;
					value[i]["y"] = value[i]["y"] + shiftedUp;
				}						
			};
		},
		
		$.fn.usaAgriculture = function(divId,data,style){
			
			var width =parseInt(d3.select("#"+divId).style("width"));
			var height=parseInt(d3.select("#"+divId).style("height"));
			
			//console.log(width + "	:	"  +height );
			
			var legend_labels = [];
			//var color = style.color;
			
			
			
			var maxSize  = Math.min(width,height);
			
			var svgXMax = "";
			var svgXMin = "";
			var svgYMin = "";
			var svgYMax = "";		
			
			
			
			
			var svg = d3.select("#"+divId).append("svg")
			.attr("width", width)
			.attr("height", height);
			
			var pixcelPerChar =7;
			var title = "USA Free Farms";
			var leftIndicator = (width/2) - ((title.length*pixcelPerChar)/2)
			axisLabelController.appendLabel(title,leftIndicator,20,0,svg,"white",800);
			
			var hidden = {};
			var labelId = [0];
			
			
			var labelDomain = style.labelDomain;
			var colorRange = style.colorRange;
			var scaleDomain =[];
			
			for(i=1;i<labelDomain.length;i++)
			{
				scaleDomain.push(labelDomain[i]);
			}
			
			var color = d3.scale.threshold()
			.domain(scaleDomain)
			.range(colorRange); 
			
			
			
			for(i=0;i<legend_labels.length;i++)
			{
				var id  = color(labelDomain[i]).substring(1);	
				hidden[id] = true; 
			}
			
			var g = svg.append("g")
			.attr("class","states");
			
			
			//.attr("transform",'translate(250,250)');
			
			
			
			var legend = svg.selectAll("g.legend")
			.data(labelDomain)
			.enter()
			.append("g")
			.attr("class", "legend");
			
			
			var ls_w = width/35, ls_h = height/35;
			var maxRectSize = Math.min(ls_w,ls_h);
			
			legend.append("rect")
			.attr("x", maxRectSize)
			.attr("y", function(d, i){ return height - (1.5*i*maxRectSize) - 2*maxRectSize;})
			.attr("width", maxRectSize)
			.attr("height", maxRectSize)
			.style("fill", function(d, i) { return color(d); })
			.style("opacity", 0.8)
			.attr("id",function(d){
				var id = color(d).substring(1);
				return id;
			})
			.on("click",function(d,i){	
				
				var id = d3.select(this).attr('id');
				//console.log(i);
				
				//console.log(id);
				
				
				if(hidden[id] == true)
				{
					d3.selectAll(".class"+id).style('display',"none");
					d3.select(this).style("stroke","white");		
				}
				else{
					d3.selectAll(".class"+id).style('display',"inline");		
					d3.select(this).style("stroke","none");		
				}	
				hidden[id] = !hidden[id]; 
			});
			
			var fontSize = 12;
			var leftShiftFactor = 10;	
			if(height > 500){
				fontSize = 14;
			}	
			else if(height >250){
				fontSize = 12;
			}
			else{
				fontSize = 10;
			}
			
			
			legend
			.append("text")
			.style("font-size",fontSize+"px")
			.attr("x",2*maxRectSize + maxRectSize/2)
			.attr("y",function(d, i){  return height - (1.5*i*maxRectSize) - 2*maxRectSize + fontSize;})
			.text(function(d, i){ 
				
				if(i == labelDomain.length-1)
				{
					legend_labels.push( ">" +  labelDomain[i] );  
					return legend_labels[i];
				}
				else{
					legend_labels.push( labelDomain[i]  + " - "+  labelDomain[i+1]);  
					return legend_labels[i];
				}		
			});
			
			var max =0;
			// label text shifting 
			for(i=0;i<colorRange.length;i++)
			{
				var value = legend_labels[i].length*7;
				//console.log(value);
				if(max < value)
				{
					max = value;
				}
			}
			
			width = width;
			height = height;
			
			var widthCx = width/2;
			var widthCy = height/2;
			
			widthCx = widthCx + max;
			
			
			if(width >=500 ){
				
				leftShiftFactor = 30;
				
			}
			else if(width >= 200){
				
				leftShiftFactor = 15;
			}	
			else{
				
				leftShiftFactor = 10;
				
			}
			
			var scale = Math.min(width,height);
			console.log(scale);
			
			var projection = d3.geo.albersUsa().scale(scale*1.9);
			
			var path = d3.geo.path().projection(projection);
			
			//alert(projection.scale());
			//.projection(projection);
			
			d3.json("./data/us.json", function(error, usStates) {
				g.selectAll("path")
				.data(topojson.feature(usStates, usStates.objects.counties).features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill",function(d){
					
					//	console.log(d.id+ "id "+data[d.id]);
					if(d.id === undefined){
						console.log("undefinded d.id");
					}
					else{
						var agriculture = data[d.id];
						//alert(agriculture["rate"]);
						if(agriculture === undefined){
							//console.log(d.id);
							//alert("white")
							return "#dcdcdc";
						}
						else{
							//console.log("esle :" + agriculture);
							
							var rate =  agriculture["rate"];
							if(rate === undefined){
								rate = 1;	
							}
							var fill  = color(rate).toString();
							//console.log(fill);
							//alert(fill);
							return fill; 
						}
					}
				})
				.style("opacity",0.8)
				.attr("stroke",'white')
				.attr("class",function(d,i){
					
					var bounds = path.bounds(d);
					
					var dxMin = bounds[0][0];
					var dxMax = bounds[1][0];
					var dyMin = bounds[0][1];
					var dyMax = bounds[1][1];
					
					if( i == 0){
						svgXMin =  dxMin;
						svgXMax =  dxMax;
						svgYMin =  dyMin;	
						svgYMax =  dyMax;	
					}
					else{
						svgXMin = Math.min(dxMin,svgXMin);
						svgXMax = Math.max(dxMax,svgXMax);
						svgYMin = Math.min(dyMin,svgYMin);
						svgYMax = Math.max(dyMax,svgYMax);
					}
					var agriculture = data[d.id];
					if(agriculture === undefined){
						
					}
					else{
						var rate = agriculture["rate"];
						if(rate === undefined){
							rate = 0;	
						}
						var classId = color(rate);
						
						var id = classId.substring(1);		
						
						return "class"+id;
						
					}
				})
				.on("mousemove",function(d){
					var x = d3.event.pageX;
					var y = d3.event.pageY;
					//	x=x-(leftMarginOfSvg+compareAnalChart.left);
					//	x = Math.round(xScale.invert(x));
					if(data[d.id] ===   undefined){
						
					}
					else{
						var heading = data[d.id]["name"];
						var attribute = style.toolTipLabel;
						var attributeValue = data[d.id]["rate"];
						var yHeadingValueMap=[{"headingName":attribute,"headingVal":attributeValue}];
						
						toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90); 
					}
				})
				.on("mouseleave",function(){
					toolTipManager.hideTooTip();
				})
				.call(shiftSvg);
				
			});
			
			function shiftSvg(){
				
				x = (svgXMax + svgXMin)/2;
				y = (svgYMin + svgYMax)/2;
				
				bounds = [[svgXMin,svgYMin],[svgXMax,svgYMax]];
				console.log( "x:" + x + "	y:" + y);
				console.log(bounds);
				//var scale  = 1 / Math.max((bounds[1][0] - bounds[0][0]) / width,(bounds[1][1] - bounds[0][1]) / height);
				//console.log(scale);
				trans = [x,y];
				
				//projection.scale(scale).translate([widthCx-trans[0],widthCy-trans[1]]);
				console.log(trans);	
				g.attr("transform", "translate("+[widthCx-trans[0]-((width)/leftShiftFactor),widthCy-trans[1]]+")");
				//g.selectAll('text').attr("transform", "translate("+[widthCx-trans[0]-((width)/leftShiftFactor),widthCy-trans[1]]+")");
			};	
			
		
		},
		
		
		$.fn.usaUnemployement = function(divId,data,style){
			
			var width =parseInt(d3.select("#"+divId).style("width"));
			var height=parseInt(d3.select("#"+divId).style("height"));
			
			//console.log(width + "	:	"  +height );
			
			var legend_labels = [];
			//var color = style.color;
			
			
			
			var maxSize  = Math.min(width,height);
			
			var svgXMax = "";
			var svgXMin = "";
			var svgYMin = "";
			var svgYMax = "";		
			
			
			
			
			var svg = d3.select("#"+divId).append("svg")
			.attr("width", width)
			.attr("height", height);
			
			var pixcelPerChar =7;
			var title = "USA UNEMPLOYEMENT RATE";
			var leftIndicator = (width/2) - ((title.length*pixcelPerChar)/2)
			axisLabelController.appendLabel(title,leftIndicator,20,0,svg,"white",800);
			
			var hidden = {};
			var labelId = [0];
			
			
			var labelDomain = style.labelDomain;
			var colorRange = style.colorRange;
			var scaleDomain =[];
			
			for(i=1;i<labelDomain.length;i++)
			{
				scaleDomain.push(labelDomain[i]);
			}
			
			var color = d3.scale.threshold()
			.domain(scaleDomain)
			.range(colorRange); 
			
			
			
			for(i=0;i<legend_labels.length;i++)
			{
				var id  = color(labelDomain[i]).substring(1);	
				hidden[id] = true; 
			}
			
			var g = svg.append("g")
			.attr("class","states");
			
			
			//.attr("transform",'translate(250,250)');
			
			
			
			var legend = svg.selectAll("g.legend")
			.data(labelDomain)
			.enter()
			.append("g")
			.attr("class", "legend");
			
			
			var ls_w = width/35, ls_h = height/35;
			var maxRectSize = Math.min(ls_w,ls_h);
			
			legend.append("rect")
			.attr("x", maxRectSize)
			.attr("y", function(d, i){ return height - (1.5*i*maxRectSize) - 2*maxRectSize;})
			.attr("width", maxRectSize)
			.attr("height", maxRectSize)
			.style("fill", function(d, i) { return color(d); })
			.style("opacity", 0.8)
			.attr("id",function(d){
				var id = color(d).substring(1);
				return id;
			})
			.on("click",function(d,i){	
				
				var id = d3.select(this).attr('id');
				//console.log(i);
				
				//console.log(id);
				
				
				if(hidden[id] == true)
				{
					d3.selectAll(".class"+id).style('display',"none");
					d3.select(this).style("stroke","white");		
				}
				else{
					d3.selectAll(".class"+id).style('display',"inline");		
					d3.select(this).style("stroke","none");		
				}	
				hidden[id] = !hidden[id]; 
			});
			
			var fontSize = 12;
			var leftShiftFactor = 10;	
			if(height > 500){
				fontSize = 14;
			}	
			else if(height >250){
				fontSize = 12;
			}
			else{
				fontSize = 10;
			}
			
			
			legend
			.append("text")
			.style("font-size",fontSize+"px")
			.attr("x",2*maxRectSize + maxRectSize/2)
			.attr("y",function(d, i){  return height - (1.5*i*maxRectSize) - 2*maxRectSize + fontSize;})
			.text(function(d, i){ 
				
				if(i == 0)
				{
					legend_labels.push("<"+labelDomain[i+1]);  
					return legend_labels[i];
				}
				else{
					legend_labels.push(labelDomain[i] + "+");  
					return legend_labels[i];
				}		
			});
			
			var max =0;
			// label text shifting 
			for(i=0;i<colorRange.length;i++)
			{
				var value = legend_labels[i].length*7;
				//console.log(value);
				if(max < value)
				{
					max = value;
				}
			}
			
			width = width;
			height = height;
			
			var widthCx = width/2;
			var widthCy = height/2;
			
			widthCx = widthCx + max;
			
			
			if(width >=500 ){
				
				leftShiftFactor = 10;
				
			}
			else if(width >= 200){
				
				leftShiftFactor = 50;
				
			}		
			else{
				
				leftShiftFactor = 10;
				
			}
			
			var scale = Math.min(width,height);
			console.log(scale);
			
			var projection = d3.geo.albersUsa().scale(scale*1.9);
			
			var path = d3.geo.path().projection(projection);
			
			//alert(projection.scale());
			//.projection(projection);
			
			d3.json("./data/us.json", function(error, usStates) {
				g.selectAll("path")
				.data(topojson.feature(usStates, usStates.objects.counties).features)
				.enter()
				.append("path")
				.attr("d", path)
				.style("fill",function(d){
					
					//	console.log(d.id+ "id "+data[d.id]);
					if(d.id === undefined){
						console.log("undefinded d.id");
					}
					else{
						var agriculture = data[d.id];
						//alert(agriculture["rate"]);
						if(agriculture === undefined){
							//console.log(d.id);
							//alert("white")
							return "#dcdcdc";
						}
						else{
							//console.log("esle :" + agriculture);
							
							var rate =  agriculture["rate"];
							if(rate === undefined){
								rate = 1;	
							}
							var fill  = color(rate).toString();
							//console.log(fill);
							//alert(fill);
							return fill; 
						}
					}
				})
				.style("opacity",0.8)
				.attr("stroke",'white')
				.attr("class",function(d,i){
					
					var bounds = path.bounds(d);
					
					var dxMin = bounds[0][0];
					var dxMax = bounds[1][0];
					var dyMin = bounds[0][1];
					var dyMax = bounds[1][1];
					
					if( i == 0){
						svgXMin =  dxMin;
						svgXMax =  dxMax;
						svgYMin =  dyMin;	
						svgYMax =  dyMax;	
					}
					else{
						svgXMin = Math.min(dxMin,svgXMin);
						svgXMax = Math.max(dxMax,svgXMax);
						svgYMin = Math.min(dyMin,svgYMin);
						svgYMax = Math.max(dyMax,svgYMax);
					}
					var agriculture = data[d.id];
					if(agriculture === undefined){
						
					}
					else{
						var rate = agriculture["rate"];
						if(rate === undefined){
							rate = 0;	
						}
						var classId = color(rate);
						
						var id = classId.substring(1);		
						
						return "class"+id;
						
					}
				})
				.on("mousemove",function(d){
					var x = d3.event.pageX;
					var y = d3.event.pageY;
					//	x=x-(leftMarginOfSvg+compareAnalChart.left);
					//	x = Math.round(xScale.invert(x));
					if(data[d.id] ===   undefined){
						
					}
					else{
						var heading = data[d.id]["name"];
						var attribute = style.toolTipLabel;
						var attributeValue = data[d.id]["rate"];
						var yHeadingValueMap=[{"headingName":attribute,"headingVal":attributeValue}];
						
						toolTipManager.showToolTip(d3.event,"",(heading), false,yHeadingValueMap,d3.event.pageY*.90); 
					}
				})
				.on("mouseleave",function(){
					toolTipManager.hideTooTip();
				})
				.call(shiftSvg);
				
			});
			
			function shiftSvg(){
				
				x = (svgXMax + svgXMin)/2 ;
				y = (svgYMin + svgYMax)/2 ;
				
				bounds = [[svgXMin,svgYMin],[svgXMax,svgYMax]];
				console.log( "x:" + x + "	y:" + y);
				console.log(bounds);
				//var scale  = 1 / Math.max((bounds[1][0] - bounds[0][0]) / width,(bounds[1][1] - bounds[0][1]) / height);
				//console.log(scale);
				trans = [x,y];
				//projection.scale(scale).translate([widthCx-trans[0],widthCy-trans[1]]);
				console.log(trans);	
				g.attr("transform", "translate("+[widthCx-trans[0]-((width)/leftShiftFactor),widthCy-trans[1]]+")");
			};	
			
		}
		return this;
	};
})(jQuery);