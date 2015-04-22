var tempBlock='<div class="blocks"><div class="company">AAPL </div><div class="rate"> 5 rec/sec </div></div>';
var pin1='';
var lastUpdatedSymbols=[];
 var ranksJson={'1':{'top':'100px','left':'10px'},'2':{'top':'10px','left':'140px'},'3':{'top':'40px','left':'140px'},'4':{'top':'70px','left':'140px'},
 '5':{'top':'100px','left':'140px'}};

 function getPositionMap(){
  
   return ranksJson;
}

function getRankers(){
     var totalRankElements= globalScope.sortLogoChartJSONDataByRank('msgCount',false);
	 $('.top-blocks').removeClass('top-blocks');
	 
     for(var i=0;i<totalRankElements.length;i++)
	 {
			var jsonObj=totalRankElements[i];
			
			var newElement=$(tempBlock);
			 $(newElement).attr('id',jsonObj.symbol+'Com');
			 $('.moving').append(newElement);
			 
		
			
			 
			 
			 $(newElement).find('.company').html(jsonObj.symbol);
			 $(newElement).find('.rate').html(jsonObj.msgCount);
			 
			 
			  $(newElement).css({'top':ranksJson[jsonObj.rank].top,'left':ranksJson[jsonObj.rank].left});
			   if(jsonObj.rank==1){
  				   $(newElement).addClass('top-blocks');}
			  lastUpdatedSymbols.push(jsonObj.symbol);
			
	 }
	 
}

function updateRankers(){
	$('.top-blocks').removeClass('top-blocks');
     var totalRankElements= globalScope.sortLogoChartJSONDataByRank('msgCount',false);
	 var newElementsArray=[];
     for(var i=0;i<totalRankElements.length;i++)
	 {
			var jsonObj=totalRankElements[i];
			 var newElement=$('#'+jsonObj.symbol+'Com');
			 newElementsArray.push(jsonObj.symbol);
			 if(lastUpdatedSymbols.indexOf(jsonObj.symbol)==-1)
			 {
				 newElement=$(tempBlock);
				 $(newElement).attr('id',jsonObj.symbol+'Com');
				 $('.moving').append(newElement);
				 $(newElement).find('.company').html(jsonObj.symbol);
				 
			 
			 }
			 else{
			 
				$(newElement).css('z-index','0');
			 }
			 
			   if(jsonObj.rank==1){
  				   $(newElement).addClass('top-blocks');
				   $('.symImg').css('background',"url('icon/icon-"+jsonObj.symbol.toLowerCase()+".png') no-repeat");
				   $('.symImg').css('background-size','100% 100%');}
		//	console.error(newElement);
			// $(newElement).find('.company').html(jsonObj.symbol);
        $(newElement).find('.rate').html(jsonObj.msgCount);

/*
			var ele=$(newElement).find('.rate');
			var lastnumber=window.parseInt($(newElement).find('.rate').html());
			d3.selectAll(ele)
			  .transition()
			  .duration(1000)
			  .delay(10)
			  .tween("text", function() {
			   var last = 0;
			   var i = d3.interpolateRound(lastnumber,jsonObj.msgCount );
			   return function(t){
				this.textContent = ""+i(t);
			   };
			  });
*/
			 
			 //REmoving the elemets which are out of contention
			 			 $(newElement).css({'top':ranksJson[jsonObj.rank].top,'left':ranksJson[jsonObj.rank].left});
			 

			
	 }
	 getDifferenceAndDestructElement(lastUpdatedSymbols,newElementsArray);
	 lastUpdatedSymbols=newElementsArray;
	 
}

function getDifferenceAndDestructElement(olderElements,newerElements){
    var elementsTobeDeleted=[];
	var i=0;
	jQuery.grep(olderElements, function(el) {
		if (jQuery.inArray(el, newerElements) == -1) elementsTobeDeleted.push(el);
		i++;
	});
	
	for(var j=0;j<elementsTobeDeleted.length;j++){
	   $('#'+elementsTobeDeleted[j]+'Com').remove();
	}

}


function updatePositions(){
    var data=getPositionMap();
 var obj=data['5'];
 data['5']=data['4'];
 
 data['4']=data['3'];
 data['3']=data['2'];
 data['2']=data['1'];
 data['1']=obj;
 
 
 for(key in data){
   var newElement=$('#'+key);
    $(newElement).css({'top':data[key].top,'left':data[key].left});
    if(key=='1'){
  $(newElement).css('-webkit-transform','scale('+ 1.3 + ','+ 1.3 + ')');
    }
    else{
  $(newElement).css('-webkit-transform','scale('+ 1 + ','+ 1 + ')');
    }
    //$(newElement).css('-webkit-transform','translate('+ data[key].left + ','+ data[key].top + ')');
   }


}

   
function initiateProcess(){
var data=getPositionMap();
 for(key in data){
 var newElement=$('#'+key);
    $(newElement).css({'top':data[key].top,'left':data[key].left});
    //$(newElement).css('-webkit-transform','translate('+ data[key].left + ','+ data[key].top + ')');
  
   }
     clearInterval(pin1);
   }
   
 function rankInitiater(){
	//var data=getPositionMap();
  // for(key in data){
   //var newElement=$(tempBlock);
  // $(newElement).attr('id',key);
     // $('.moving').append(newElement);
   // $(newElement).css({'top':data[key].top,'left':data[key].left});
   //}
  // initiateProcess();
  // pin1 = setInterval(initiateProcess,1000);
 
   setTimeout(getRankers,4000);
   setInterval(updateRankers,4000);
   setTimeout(initiateTheGainers,900);
      setInterval(updateLadder,1000);
   
  // initiateTheGainers();
 }  
/* 
$(document).ready(function(){
var data=getPositionMap();
   for(key in data){
   var newElement=$(tempBlock);
   $(newElement).attr('id',key);
      $('.moving').append(newElement);
   // $(newElement).css({'top':data[key].top,'left':data[key].left});
   }
  // initiateProcess();
   pin1 = setInterval(initiateProcess,1000);
 
   setInterval(updatePositions,5000);

});*/