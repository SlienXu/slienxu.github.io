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
function getStyle(dom,attr){
	//IE：dom.currentStyle。
	//chrome、FF:getComputedStyle
	return obj.currentStyle?parseInt(obj.currentStyle[attr]): getComputedStyle(obj,false)[attr];
	//return dom.currentStyle?parseInt(dom.currentStyle[attr]):parseInt(getComputedStyle(dom,false)[attr]);
};

//getElements by className
//versition : 0.2
function getByClass(pObj,classStr){
	var ary = [];

	if(document.getElementsByClassName){
		//IE 6\7\8
		return document.getElementsByClassName(classStr);
	}

	//Chrome\FF
	var aElements = pObj.getElementsByTagName("*");

	for(var i = 0 ; i < aElements.length ; i++){
		var classAry = aElements.className.split(" ");
		for(var j = 0 ; j < classAry.length ; j++){
			if(aElements[i].className == classAry[j]){
				ary.push(aElements[i]);
			}
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
 

//get absolute TOP/LEft
function getAbsolute(obj){
	var top = 0;
	var left = 0;

	//obj最后是body,而body的offsetParent为空while循环结束
	while(obj){
		top += obj.offsetTop;
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}

	return {"top":top,"left":left};
};

//bind event to obj not only
function addEvent(obj,eventName,eventFn){
	if(obj.attachEvent){
		//兼容IE
		obj.attachEvent("on" + eventName,eventFn);
	}else{
		//兼容非IE
		obj.addEventListener(eventName,eventFn,false);
	};
};

//unbind event from obj
function removeEvent(obj,eventName,eventFnName){
	if(obj.detachEvent){
		obj.detachEvent("on" + eventName,eventFnName);
	}else{
		obj.removeEventListener(eventName,eventFnName);
	}
};
