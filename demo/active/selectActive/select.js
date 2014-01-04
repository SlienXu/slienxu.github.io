(function(){
 	window.createMySelfSelect = function(spanId,dataAry){
 		var oSpan = document.getElementById(spanId);
 		var oUl = document.createElement("ul");

 		oSpan.innerHTML = dataAry[0];
 		oUl.className = "slienSelfUl";
 		oUl.style.left = getPos(oSpan).left + "px";
 		oUl.style.top = getPos(oSpan).top + oSpan.offsetHeight + "px";
 		document.body.appendChild(oUl);

 		for(var i = 0 ; i < dataAry.length ; i++){
 			var li = document.createElement("li");
 			li.innerHTML = dataAry[i];
 			oUl.appendChild(li);

 			li.onmouseover = function(){
	          this.style.background = "#BBB";
	        };
	        li.onmouseout = function(){
	          this.style.background = "#EEE";
	        };
	        li.onmousedown = function(){
	          oSpan.innerHTML = this.innerHTML;
	          oUl.style.display = "none";
	        };
 		};

		oSpan.onblur = function(){
			oUl.style.display = "none";
		};

		oSpan.onclick = function(e){
			var e = e || window.event;
			e.cancelBubble = true;
			oUl.style.display = "block";
		};

		addEvent(document,"click",function(){
			oUl.style.display = "none";
		},false);
 	};
 	
 	function getPos(obj){
 		var top = 0 ;
 		var left = 0;

 		while(obj){
 			top += obj.offsetTop;
 			left += obj.offsetLeft;
 			obj = obj.offsetParent;
 		};

 		return {"top":top,"left":left};
 	};

 	function addEvent(obj,eventName,eventFn){
 		if(obj.attachEvent){
 			obj.attachEvent("on" + eventName,eventFn);
 		}else{
 			obj.addEventListener(eventName,eventFn,false);
 		};
 	};

 	var oLink = document.createElement("link");
 	oLink.rel = "stylesheet";
 	oLink.type = "text/css";
 	oLink.href = "style.css";
 	document.getElementsByTagName("head")[0].appendChild(oLink);
 })();