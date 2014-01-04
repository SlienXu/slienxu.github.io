(function(){
	window.onload = function(){
		var ary = [];
		var aRadio = document.getElementsByTagName("input");
		for(var i = 0 ; i < aRadio.length ; i++){
			if(aRadio[i].type == "radio" && aRadio[i].getAttribute("_myradio") == "myradio" && !findSame(ary,aRadio[i].name)){
				createSpan(aRadio[i].name);
				ary.push(aRadio[i].name);
			}
		};	
	};
	
	function createSpan(radioName){
		var radios = document.getElementsByName(radioName);
		var aSpans = [];

		for(var j = 0 ; j < radios.length ; j++){
			var oSpan = document.createElement("span");
			oSpan.className = "radio_off";
			radios[j].parentNode.insertBefore(oSpan,radios[j]);
			radios[j].style.display = "none";
			aSpans.push(oSpan);

			(function(index){
				oSpan.onclick = function(){
					for(var i = 0 ; i < radios.length ; i++){
						aSpans[i].className = "radio_off";
					};
					this.className = "radio_on";
					radios[index].checked = true;
				}
			})(j);
		};
	};

	function findSame(ary,ele){
		for(var i = 0 ; i < ary.length ; i++){
			if(ary[i] == ele){
				return true;
			}
		};

		return false;
	};
})()









