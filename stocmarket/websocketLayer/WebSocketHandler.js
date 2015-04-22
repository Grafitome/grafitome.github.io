   var DataHandler={
            dummyInterval:'',
			id:0,
			client:'',
		//	baseValue:0,
		    baseValuesReceived:1,
			serverURL:"http://199.96.250.198/mobile/",
			init:function(symbolList){
			globalScope.$broadcast('stopChart');
			this.createWebSocketViaStomp(symbolList);
	
			},
			fetchSnapDataViaAjaxCallForSymbolListForPortFolio:function(symbolList){
			var perCount=symbolList.split(',').length;
			$.ajax({
			type: "POST",
			headers: {
			"ENVIRONMENT":"HTML",
			"DEVICE":"DESKTOP",
			"VERSION":"0.1"
			 }, 
			url:this.serverURL+"snapQuote.jsp?ticker="+symbolList+"&source=DOWJONES",
			dataType:'json',
			crossDomain: true,
			async: false,
			success: function(data,status){
			var i=1;
				
				for(key in data){
						var symbolData=data[key];
						var sym=symbolData.ticker;
						//console.log("symbol "+ sym);
						var absCh=window.parseFloat(i*10).toFixed(2);
						var perCh=window.parseFloat(i*.1).toFixed(2);
						absCh=parseFloat(absCh);
						perCh=parseFloat(perCh);
						var ds=new Date();
						var hours=ds.getHours();
						var datevalue=ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+"T"+hours+":"+ds.getMinutes()+":"+ds.getSeconds()+"."+ds.getMilliseconds()+"Z";
						
						symbolData.last=parseFloat(window.parseFloat(symbolData.last).toFixed(2));
						symbolData.chg=parseFloat(window.parseFloat(symbolData.chg).toFixed(2));
						globalScope.logoChartData.push({ symbol:sym ,
								  perChange:perCh,
									  absChange:absCh,
							
									  image:globalScope.symbolsWithImages.indexOf(sym)>-1?'./icon/icon-'+sym.toLowerCase()+'.png': '',
									  'last':symbolData.last,
									  'change':symbolData.chg,
									  timeIndex:datevalue,
									  className:'green',
									  
						 });
						i++;
						//$scope.logoChartJSONData[symbols[i]]={'perChange':window.parseFloat(perCh).toFixed(2),'absChange':window.parseFloat(absCh).toFixed(2)};
						var containerClass;
						var change=parseFloat(symbolData.chg);
						if(change>0){
							containerClass='positive';
						}
						else if(change == 0){
							containerClass='neutral';
						}
						else{
							containerClass='negative';
						}
						
						globalScope.logoChartJSONData[sym]={'symbol':sym,'perChange':perCh,'absChange':absCh,'last':symbolData.last, 'change':symbolData.chg,
						'baseValue':symbolData.last,'share':500,timeIndex:datevalue,className:'green',msgCount:0,'containerClass':containerClass};
						
						}
					
						
						setTimeout(function(){
						DataHandler.dummyInterval= setInterval(DataHandler.startDummyPlotting,2000);
						},1000);
						setInterval(DataHandler.updateBulletChart,2000);
			
			 }
		});



		},
			createWebSocketViaStomp:function (symbolList) {

			//var url = "ws://india.paxcel.net:61614/stomp";
			var url="ws://199.96.250.210:61614/stomp";

			var un = "system";
			var pw = "manager";

			var onconnect = function(){
			
				//id = client.subscribe("/topic/"+"SPY", callback); 
				//id = client.subscribe("/topic/"+"AAPL", callback);
				//id = client.subscribe("/topic/"+"GOOG", callback);
							DataHandler.subscribeSymbols(symbolList);
				
				};
						
			var onerror = function(e){
			   //alert("STOMP error while connecting : " + e.data);
			};
			
			this.client = Stomp.client(url);
			this.client.connect(un,pw,onconnect,onerror);
			
			this.client.debug = function(str) {
			
			};
		},
		subscribeSymbols:function(symbolList){
			var array = symbolList.split(',');
			for(var i=0;i<array.length;i++){
			 this.client.subscribe("/topic/E:"+array[i], DataHandler.callback);
			 }
		
		},
		
		unsubscribe:function (){
			this.client.unsubscribe(this.id);
		},
		
		
		callback:function(message) {
				// called when the client receives a STOMP message from the server
				if (message.body) {
					var received_msg = JSON.parse(message.body);
					
					//console.log("Ticker:"+received_msg.T + " last price is:" + received_msg.L + ",change is:"+received_msg.C+" and volume is:"+received_msg.VOL);
					
					if(received_msg.T.toString().length>0){

						try{
						
						//	alert(typeof   this.baseValuesReceived);
						var ds=new Date();
						var hours=ds.getHours();
						var datevalue=ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+"T"+hours+":"+ds.getMinutes()+":"+ds.getSeconds()+"."+ds.getMilliseconds()+"Z";
						
						var containerClass;
						var change;
						if(received_msg.L!=null){
						change=(received_msg.L.toFixed(2)-globalScope.logoChartJSONData[received_msg.T ].last);
						}
						if(change>0){
							containerClass='positive';
						}
						else if(change == 0){
							containerClass='neutral';
						}
						else{
							containerClass='negative';
						}
						globalScope.logoChartJSONData[received_msg.T ].containerClass=containerClass;
						
						if(DataHandler.baseValuesReceived==1)
						{	if(received_msg.L!=null){
							globalScope.logoChartJSONData[received_msg.T ].perChange=DataHandler.getPercentageProfit(received_msg.L.toFixed(2),globalScope.logoChartJSONData[received_msg.T ].baseValue);
							globalScope.logoChartJSONData[received_msg.T ].absChange=DataHandler.getAbsoluteProfit(received_msg.L.toFixed(2),globalScope.logoChartJSONData[received_msg.T ].baseValue,globalScope.logoChartJSONData[received_msg.T ].share);
							globalScope.logoChartJSONData[received_msg.T ].last=received_msg.L.toFixed(2);
							globalScope.logoChartJSONData[received_msg.T ].timeIndex=datevalue;
							globalScope.logoChartJSONData[received_msg.T ].msgCount=globalScope.logoChartJSONData[received_msg.T ].msgCount+1;
							}
							if(received_msg.C!=null){
							globalScope.logoChartJSONData[received_msg.T ].change=received_msg.C.toFixed(2);
							}
							DataHandler.baseValuesReceived++;
							globalScope.$broadcast('initialisedChart');	
							
							//setInterval(DataHandler.updateBulletChart,3000);
							
								
								
						}
						else{
						
									setTimeout(function(){
									//clearInterval(DataHandler.dummyInterval)
									},4000);
							if(received_msg.L!=null){
								globalScope.logoChartJSONData[received_msg.T].perChange=DataHandler.getPercentageProfit(received_msg.L.toFixed(2),globalScope.logoChartJSONData[received_msg.T ].baseValue);
								globalScope.logoChartJSONData[received_msg.T].absChange=parseFloat(DataHandler.getAbsoluteProfit(received_msg.L.toFixed(2),globalScope.logoChartJSONData[received_msg.T ].baseValue,globalScope.logoChartJSONData[received_msg.T ].share));
								globalScope.logoChartJSONData[received_msg.T].last=received_msg.L.toFixed(2);
								globalScope.logoChartJSONData[received_msg.T ].timeIndex=datevalue;
								globalScope.logoChartJSONData[received_msg.T ].msgCount=globalScope.logoChartJSONData[received_msg.T ].msgCount+1;
								//globalScope.$broadcast('startChart');
							}
									if(received_msg.C=null){
								globalScope.logoChartJSONData[received_msg.T ].change=received_msg.C.toFixed(2);
								}
								
							    //if(received_msg.T == globalScope.defaultSymbol)
								//globalScope.$broadcast('startChart1');
								
								
						
								
						}
						}
						catch(error){
							console.log("ERROR while binding streamer data::"+error);

						}


				}
	
	
				} else {
				  alert("got empty message");
				}
			},
			
			getAbsoluteProfit:function(current,base,numShare){
			
			return window.parseFloat((current-base)*numShare).toFixed(2);
			
			},
			
				getPercentageProfit:function(current,base){
			
			return window.parseFloat(((current-base)/base)*100).toFixed(2);
			
			},
			startDummyPlotting:function(){
						var containerClass;
						var change;
						if(DataHandler.baseValuesReceived==1){
								globalScope.$broadcast('initialisedChart');	
								DataHandler.baseValuesReceived++;
						}
						else{
							globalScope.$broadcast('startChart');
						}
						//globalScope.$broadcast('startChart');
						for(key in globalScope.logoChartJSONData){
						    var dataObject=globalScope.logoChartJSONData[key];
							for(key2 in dataObject){
									
										dataObject[key2]=window.parseFloat(Math.random()*65+1).toFixed(2);
										if(key2=='absChange'){
										    dataObject[key2]=window.parseFloat(Math.random()*200+1).toFixed(2);
										}
										if(key2=='msgCount'){
										    dataObject[key2]=Math.round(Math.random()*753+1);
										}
										if(key2=='containerClass'){
											change=window.parseFloat(Math.random()*65+1).toFixed(2)-globalScope.logoChartJSONData[key].change;
											
											if(change>0){
												containerClass='positive';
											}
											else if(change == 0){
												containerClass='neutral';
											}
											else{
												containerClass='negative';
											}
											 dataObject[key2]=containerClass;
										}
										
										
										
										
										
							}
						}
			
			
			
			},
			
			
			updateBulletChart:function(){
			var totalelement=0;
			var greenPer=0;
			var redPer=0;
			var whitePer=0;
			   for(key in globalScope.logoChartJSONData){
					totalelement++;
					if(globalScope.logoChartJSONData[key].containerClass=="positive"){
					  greenPer++;
					  }
					else if(globalScope.logoChartJSONData[key].containerClass=="negative"){
					  redPer++;
					  }
					else{
					  whitePer++;
					  }
			   }
			   greenPer=(greenPer/totalelement)*100;
			   redPer=(redPer/totalelement)*100;
			   whitePer=(whitePer/totalelement)*100;
			   $('.indicator-strip-red').width(redPer);
				$('.indicator-strip-green').width(greenPer);
				$('.indicator-strip-white').width(whitePer);
			}
			
			
			
			

   
   
   
   
   
   
   }