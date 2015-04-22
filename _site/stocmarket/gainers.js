var rowHTML='<div class="number"><div class="company-name"></div><div class="number-list"><ul><li id="last">555</li><li id="chg">555</li>'+
'<li id="gain">555</li></ul></div></div>';
 var ladderRanksJson=
 {'1':{'top':'10px','left':'0px'},'2':{'top':'43px','left':'00px'},'3':{'top':'76px','left':'00px'},'4':{'top':'109px','left':'0px'},'5':{'top':'142px','left':'0px'}};

 var lastLadderBoard=[];
function initiateTheGainers(){
	var totalLadderElements= globalScope.sortLogoChartJSONDataByRank('absProfit',false);
	  for(var i=0;i<totalLadderElements.length;i++)
	 {
		 var rowHTMLFinal=rowHTML;
		 if(i%2==0)
		 rowHTMLFinal=rowHTML.replace('number','numberalt');
		 
		var newEle=$(rowHTMLFinal);
		var jsonObj=totalLadderElements[i];
		newEle.find('.company-name').html(jsonObj.symbol);
		newEle.find('#last').html(jsonObj.last);
		newEle.find('#chg').html(jsonObj.change);
		newEle.find('#gain').html(jsonObj.absProfit);
		//alert(jsonObj.symbol+"   "+jsonObj.change);
		newEle.attr('id',jsonObj.symbol+'lad');
		$('.chartDiv3').append(newEle);
		lastLadderBoard.push(jsonObj.symbol);
		 $(newEle).css({'top':ladderRanksJson[jsonObj.rank].top,'left':ladderRanksJson[jsonObj.rank].left});
	}

}


function updateLadder(){
    var totalLadderElements= globalScope.sortLogoChartJSONDataByRank('absProfit',false);
	 var newLadderElementsArray=[];
	  for(var i=0;i<totalLadderElements.length;i++)
	 {
	 var jsonObj=totalLadderElements[i];
		var newEle=$('#'+jsonObj.symbol+'lad');
			 if(lastLadderBoard.indexOf(jsonObj.symbol)==-1)
			 {
				 newEle=$(rowHTML);
				 $(newEle).attr('id',jsonObj.symbol+'lad');
					$('.chartDiv3').append(newEle);
				 //$(newElement).find('.company').html(jsonObj.symbol);
				 
			 
			 }
			 else{
			 
				$(newEle).css('z-index','0');
			 }
		newEle.find('.company-name').html(jsonObj.symbol);
		newEle.find('#last').html(jsonObj.last);
		newEle.find('#chg').html(jsonObj.change);
		newEle.find('#gain').html(jsonObj.absProfit);
		//$('.chartDiv3').append(newEle);
		newLadderElementsArray.push(jsonObj.symbol);
		 $(newEle).css({'top':ladderRanksJson[jsonObj.rank].top,'left':ladderRanksJson[jsonObj.rank].left});
	}
	 getDifferenceAndDestructadderElement(lastLadderBoard,newLadderElementsArray);
	 lastLadderBoard=newLadderElementsArray;
	 
}






function getDifferenceAndDestructadderElement(olderElements,newerElements){
    var elementsTobeDeleted=[];
	var i=0;
	jQuery.grep(olderElements, function(el) {
		if (jQuery.inArray(el, newerElements) == -1) elementsTobeDeleted.push(el);
		i++;
	});
	
	for(var j=0;j<elementsTobeDeleted.length;j++){
	   $('#'+elementsTobeDeleted[j]+'lad').remove();
	}

}
