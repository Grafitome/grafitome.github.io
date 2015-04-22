
var lastX, lastY;
var ctx;
var pencilcolor="red";
var penStrokeWidth=3;

//Returns contents of a canvas as a png based data url, with the specified
//background color
function canvasToImage(backgroundColor,canvasId)
{	
	var canvas=document.getElementById(canvasId);
	var context=canvas.getContext("2d");
	var compositeOperation;
	//cache height and width		
	var w = canvas.width;
	var h = canvas.height;

	var data;		

	if(backgroundColor)
	{
		//get the current ImageData for the canvas.
		data = context.getImageData(0, 0, w, h);
		
		//store the current globalCompositeOperation
		compositeOperation = context.globalCompositeOperation;

		//set to draw behind current content
		context.globalCompositeOperation = "destination-over";

		//set background color
		context.fillStyle = backgroundColor;

		//draw background / rect on entire canvas
		context.fillRect(0,0,w,h);
	}
	

	
	//get the image data from the canvas
	var imageData = canvas.toDataURL("image/png");
	/*
	if(backgroundColor)
	{
		//clear the canvas
		context.clearRect (0,0,w,h);

		//restore it with original / cached ImageData
		context.putImageData(data, 0,0);		

		//reset the globalCompositeOperation to what it was
		context.globalCompositeOperation = compositeOperation;
	}
	*/
	//return the Base64 encoded data url string
	
	//for download image automatically
	var rawImageData=imageData.replace("image/png", "image/octet-stream");
    document.location.href=rawImageData;
	
	return imageData;
	
}



/*
	working:it will copy svg on canvas
	requiiredInput: 1. container Id which have enclosed Svgs 
					2. target canvas Id
	
	Other Requirement: Each svg under the encolsed container should have ID
*/
function copyChartToCanvas(chartContainerId,canvasId){
				
					
					var $container = $('#'+chartContainerId)
					,
					canvas=document.getElementById(canvasId),
					content = $container.html().trim();
					
					var ctx = canvas.getContext('2d');
					
					
					document.getElementById(canvasId).getContext("2d").clearRect ( 0 , 0 , $("#"+canvasId).width(), $("#"+canvasId).height() );
					
					var svgArray=$($container).find("svg");
					var currentImageYPos=0;
					
					/*
					for(var i=0;i<svgArray.length;i++){
						var svgId=	$(svgArray[i]).attr("id");
						
						(function(svgId){   //this is a closure which we use to ensure each iteration has the right version of the variable 'svg_xml'
							var svg_xml = (new XMLSerializer()).serializeToString(document.getElementById(svgId));
						
							console.log("id "+svgId);
							var img = new Image();
							img.src = "data:image/svg+xml;base64," + btoa(svg_xml);
							
							if(i == 0){
								currentImageYPos=0;
							}else{
								var previousSvgId=$(svgArray[i-1]).attr("id");
								var previousSvgHeight=$("#"+previousSvgId).height();
								
								currentImageYPos+=previousSvgHeight;
								
							}
							
							console.log("start po s "+currentImageYPos +" svg Id "+svgId);
							img.onload = function() {
								// after this, Canvas’ origin-clean is DIRTY
								ctx.drawImage(img, 0,currentImageYPos);
							}	
						})(svgId);          //on each iteration, pass in the current file to the closure so that it can be used within

					}
					*/
					(function (ondone) {
						var index = 0;
						nextStep();

						function nextStep() {
							if (index >(svgArray.length-1)) {
								//if (ondone){
									ondone();
									return;
								//}
							}else{
								var svgId=$(svgArray[index]).attr("id");
								var svg_xml = (new XMLSerializer()).serializeToString(document.getElementById(svgId));
							
								console.log("id "+svgId);
								var img = new Image();
								img.src = "data:image/svg+xml;base64," + btoa(svg_xml);
								
								if(index == 0){
									currentImageYPos=0;
								}else{
									var previousSvgId=$(svgArray[index-1]).attr("id");
									var previousSvgHeight=$("#"+previousSvgId).height();
									
									currentImageYPos+=previousSvgHeight;
									
								}
								
								console.log("start po s "+currentImageYPos +" svg Id "+svgId);
								index++;
								img.onload = function() {
									// after this, Canvas’ origin-clean is DIRTY
									ctx.drawImage(img, 0,currentImageYPos);
									nextStep();
								}	
							}
						}
					})(function () { canvasToImage("black",canvasId);console.log("image drawing to canvas done"); });
					
					/*
					var svg_xml = (new XMLSerializer()).serializeToString(document.getElementById("hlcChart"));
					var svg_xml1 = (new XMLSerializer()).serializeToString(document.getElementById("cmfChart"));
					var svg_xml2 = (new XMLSerializer()).serializeToString(document.getElementById("power-gauage"));
					var svg_xml3 = (new XMLSerializer()).serializeToString(document.getElementById("time-axis"));
					
					
					var ctx = canvas.getContext('2d');
					
					var img = new Image();
					var img1 = new Image();
					var img2 = new Image();
					var img3 = new Image();
					
					img.src = "data:image/svg+xml;base64," + btoa(svg_xml);
					img1.src = "data:image/svg+xml;base64," + btoa(svg_xml1);
					img2.src = "data:image/svg+xml;base64," + btoa(svg_xml2);
					img3.src = "data:image/svg+xml;base64," + btoa(svg_xml3);
					
					img.onload = function() {
						// after this, Canvas’ origin-clean is DIRTY
						ctx.drawImage(img, 0, 0);
					}
					
					var heights=$("#hlcChart").height();
					img1.onload = function() {
						// after this, Canvas’ origin-clean is DIRTY
						ctx.drawImage(img1,0,heights);
					}
					
					img2.onload = function() {
						// after this, Canvas’ origin-clean is DIRTY
						var h=$("#cmfChart").height()+$("#hlcChart").height();
						ctx.drawImage(img2,0,h);
					}
					
					img3.onload = function() {
						// after this, Canvas’ origin-clean is DIRTY
						var h=$("#cmfChart").height()+$("#hlcChart").height()+$("#power-gauage").height();
						ctx.drawImage(img3,0,h);
					}
					
					function drawCanvas1(yPos,svgXml,ctx){
						var img = new Image();
						img.src = "data:image/svg+xml;base64," + btoa(svgXml);
						img.onload = function() {
							// after this, Canvas’ origin-clean is DIRTY
							ctx.drawImage(img,0,yPos,800,800);
						}	
					}
					
					*/
				}
$(document).ready(function(){
				
					function oAuthConfig() {
 
					  var oAuthConfig = UrlFetchApp.addOAuthService("twitter");
					  oAuthConfig.setAccessTokenUrl("http://api.twitter.com/oauth/access_token");
					  oAuthConfig.setRequestTokenUrl("http://api.twitter.com/oauth/request_token");
					  oAuthConfig.setAuthorizationUrl("http://api.twitter.com/oauth/authorize");
					 
					  oAuthConfig.setConsumerKey("key");
					  oAuthConfig.setConsumerSecret("secret");
					 
					}
					 
					function postImage() {
						/*
						OAuth.initialize('EgT5UoXUAmzw5RLFYuqTnDkQd');
						
						
						var oauth = OAuth({
						consumer: {
							public: 'EgT5UoXUAmzw5RLFYuqTnDkQd',
							secret: 'gqw7xvDjmz4cXLXn8vYE9zkwUrLQcCyGBiNCIMTzqPTmusksue'
						},
						signature_method: 'HMAC-SHA1'
						});
						*/
						var oauth = new OAuth({
							consumer: {
								public: 'EgT5UoXUAmzw5RLFYuqTnDkQd',
								secret: 'gqw7xvDjmz4cXLXn8vYE9zkwUrLQcCyGBiNCIMTzqPTmusksue'
							},
							signature_method: 'HMAC-SHA1'
						});
						
						var request_data = {
							url: 'https://upload.twitter.com/1.1/media/upload.json',
							method: 'POST',
							data: {
								media:document.getElementById("canvas2").toDataURL("image/png").toString("base64").substring(22)//fs.readFileSync(filePath).toString("base64")
							}
						};
						
						var token = {
							public: '3029966236-mlYaCy8iGlwsqlD1Renz9G2CpEpF3MVl5Mgbu12',
							secret: 'VmNGWIKqAFl7W0f5wc1Jvij4QxjMs8zusIeg6v5EBecrW'
						};
						
						
						$.ajax({
							url: request_data.url,
							type: request_data.method,
							//data: oauth.authorize(request_data, token)
							headers: oauth.toHeader(oauth.authorize(request_data, token))
						}).done(function(data) {
							//process your data here
							
							try{
								data = JSON.parse(data);
							}catch (e){
								console.error("Error Json : " + e);
							}
							console.log(data.media_id);
						});
						
					}
	
				
				$("#twitterImg").click(function(){
					postImage();
				})
				
				
				 var mousePressed=false;	
				 function InitThis() {
						//  ctx = document.getElementById('myCanvas').getContext("2d");
						var canvasid='#canvas2';
						ctx = document.getElementById('canvas2').getContext("2d");
						$(canvasid).mousedown(function (e) {
							mousePressed = true;
							Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
						});

						$(canvasid).mousemove(function (e) {
							if (mousePressed) {
								Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
							}
						});

						$(canvasid).mouseup(function (e) {
							mousePressed = false;
						});
						
						$(canvasid).mouseleave(function (e) {
							mousePressed = false;
						});
				}

				function Draw(x, y, isDown) {
						if (isDown) {
							ctx.beginPath();
							ctx.strokeStyle =pencilcolor;// $('#selColor').val();
							ctx.lineWidth =penStrokeWidth;// $('#selWidth').val();
							ctx.lineJoin = "round";
							ctx.moveTo(lastX, lastY);
							ctx.lineTo(x, y);
							ctx.closePath();
							ctx.stroke();
						}
						lastX = x; lastY = y;
				}
					
				function clearArea() {
					// Use the identity matrix while clearing the canvas
					ctx.setTransform(1, 0, 0, 1, 0, 0);
					ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				}
				
				
				
				
				//$('#canvas2').attr("width",width);
				//$('#canvas2').attr("height",height);
				
				InitThis();
				var container = document.getElementById('historicalDataChart');
				   // init(container, 500, 400, 'black');
					
					
					
				


			$('#isEditableArena').click(function() {
				var $this = $(this);
				// $this will contain a reference to the checkbox   
				if ($this.is(':checked')) {
					
					var width=$("#historicalDataChart").width()+50;
					var height=$("#historicalDataChart").outerHeight();
					
					var canvasObj=document.getElementById("canvas2");
					canvasObj.width=width;
					canvasObj.height=height;	
					
					$('#canvas2').show();
					
					$("#historicalDataChart").css("display","none");
					//$('#canvas2').css("visibility","visible");
					//copy  chart to  canvas
					copyChartToCanvas('testHistoric','canvas2');
					
					
					
					
				} else {
						//$('#canvas2').css("visibility","hidden");
						
						//$("canvas").remove();
						
						$('#canvas2').hide();
						
						$("#historicalDataChart").css("display","block");
						
						//$('#canvas2').hide(function(){
							//$(".chartLink[name='historicalDataChart']").trigger("click");
							//$("#historicalDataChart").css("display","block");
						//});
						
				}
			});
			
			
			$("#saveImageBtn").click(function(){
				var img=document.getElementById("canvasImg");
				var url=img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
				window.open(url);
				
			});
			
			$('#penstrokewidth').change(function() {
			//alert($('select option:selected').val());
				penStrokeWidth=$('select option:selected').val();
			
			});
			
			$('#pencolor').click(function(e){
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
						$('.fa-pencil-color').css('color',cCode);
						pencilcolor=cCode;
					
					});
			  
			});
			
			$('.clear-editing').click(function(){
				clearArea();
			
			});
			
			















});