/**
* description:js tools
* author:slienXu-xuxiaobei
**/

function $(param){
	if(typeof param == "function"){
		window.onload = param;
	}else{
		var firstChar = param.charAt(0);
		switch(firstChar){
			case '#':
				return document.getElementById(param.substring(1));
			case ".":
				return getByClass(document,param.substring(1));
			default:
				return document.getElementsByTagName(param);
		};
	}
};


//getStyle of dom
function getStyle(obj,attr){
	//IE：dom.currentStyle。
	//chrome、FF:getComputedStyle
	return obj.currentStyle?parseInt(obj.currentStyle[attr]): getComputedStyle(obj,false)[attr];
	//return dom.currentStyle?parseInt(dom.currentStyle[attr]):parseInt(getComputedStyle(dom,false)[attr]);
};

//getElements by className
//versition : 0.1
function getByClass(pObj,classStr){
	var ary = [];

	if(document.getElementsByClassName){
		//IE 6\7\8
		return document.getElementsByClassName(classStr);
	}

	//Chrome\FF
	var aElements = pObj.getElementsByTagName("*");

	for(var i = 0 ; i < aElements.length ; i++){
		if(aElements[i].className == classStr){
			ary[ary.length] = aElements[i];
		}
	};

	return ary;
};

//get a random Integar between min and max
function getRnd(min,max){
	return Math.floor(Math.random()*(max - min + 1) + min);
};

//addd "0"
function addZero(num){
	return num < 10 ? "0" + num : "" + num;
};
