(function(){
	window.slienCreateDate = function(inputId){	
		var oTex=document.getElementById(inputId);
		
		//相应的ID都删除了
		var s='<ul class="name"><li><span></span><a href="javascript:;" class="pre">上月</a><a href="javascript:;" class="next">下月</a></li></ul><ul class="week"><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li style="color:#f00;">六</li><li style="color:#f00;">日</li></ul><ul class="dateUl"></ul>';
		var oDateDiv=document.createElement('div');
		oDateDiv.innerHTML=s;
		oDateDiv.className='znsandydate '+inputId;
		oDateDiv.style.top=getPos(oTex).top+oTex.offsetHeight+'px';
		oDateDiv.style.left=getPos(oTex).left+'px';
		//oDateDiv.style.display='none';
		document.body.appendChild(oDateDiv);

		var oDateUl = oDateDiv.children[2];
		var nextBtn = oDateDiv.children[0].getElementsByTagName('a')[1];
		var preBtn = oDateDiv.children[0].getElementsByTagName('a')[0];
		var oSpan = oDateDiv.children[0].getElementsByTagName('span')[0];
		var nowDate = new Date();
		var iNow = 0 ;

		dateFn(nowDate);

		addEvent(document,"click",function(){
			oDateDiv.style.display = "none";
		});


		oDateDiv.onclick = function(e){
			var e = e || window.event;
			e.cancelBubble = true;
		};

		oTex.onclick = function(e){
			var e = e || window.event;
			e.cancelBubble = true;
			oDateDiv.style.display = "block";
		};

		function dateFn(nowDate){
			oSpan.innerHTML = nowDate.getFullYear() + "年" + (nowDate.getMonth() + 1) + "月";
			
			var monthDays = getDaysFromMonth(nowDate);
			var firstWeek = getFirstDayWeek(nowDate);

			oDateUl.innerHTML = "";

			if(firstWeek == 0) firstWeek = 7;
			//firstWeek == 0 && firstWeek = 7;
			firstWeek -- ;//1号前的日期补空的li

			for(var i = 0 ; i < firstWeek ; i++){
				var li = document.createElement("li");
				oDateUl.appendChild(li);
			};


			//循环生成当前月li
			for(var i = 1 ; i <= monthDays ; i++){
				var li = document.createElement("li");
				li.innerHTML = i;
				oDateUl.appendChild(li);	
			};

			//判断每天，添加相应的背景色
			addLiStyle(oDateUl,iNow,oTex);

			//添加点击日期事件
			var allLi = oDateUl.children;
			for(var i = 0 ; i < allLi.length ; i++){
				
				allLi[i].onclick = function(){
					if(iNow > 0 || iNow == 0 && this.innerHTML >= (new Date()).getDate()){
						oTex.value = oSpan.innerHTML + this.innerHTML + "日";						
					}else{
						alert("日期已过!");
					};
					oDateDiv.style.display = "none";
				};
			};
		};

		
		//previous month
		preBtn.onclick = function(){
			iNow --;
			nowDate.setMonth(nowDate.getMonth() - 1);
			dateFn(nowDate);
		};

		//next month
		nextBtn.onclick = function(){
			iNow ++;
			nowDate.setMonth(nowDate.getMonth() + 1);
			dateFn(nowDate);
		};


	};

	
	function addLiStyle(oDateUl,iNow){
		//判断每天，添加相应的背景色
		var allLi = oDateUl.children;
		for(var i = 0 ; i < allLi.length ; i++){
			var date = new Date();
			var text = allLi[i].innerHTML;

			if(iNow < 0 || iNow == 0 && text < date.getDate()){
				allLi[i].className = "ccc";
			}else if(iNow == 0 && text == date.getDate()){
				allLi[i].className = "red";				
			}else{
				if(i%7==5 || i%7==6){
					allLi[i].className = "sun";
				};			
			};	
		};
	};


	//get numbers from this month;
	function getDaysFromMonth(dateObj){
		console.log("----",dateObj.getMonth() + 1,dateObj.getDate())
		dateObj.setMonth(dateObj.getMonth() + 1);//设置到下个月
		dateObj.setDate(0);
		//设为设为下个月一号，此时date是上个月最后一天，也就是本月的天数

		return dateObj.getDate();
	};


	function getFirstDayWeek(dateObj){
		dateObj.setDate(1);

		return dateObj.getDay();
	};

	function getPos(obj){
		var t=0;
		var l=0;
		while(obj)
		{
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;	 
		}

		return {left:l,top:t}
	};

	var oLink = document.createElement("link");
	oLink.type = "text/css";
	oLink.rel = "stylesheet";
	oLink.href = "css/style.css";
	document.getElementsByTagName("head")[0].appendChild(oLink);
})();