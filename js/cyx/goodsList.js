//设置下拉按钮的功能
let oSlide = document.querySelector(".slideDown").querySelector("span");
let oToSlide = document.querySelector(".slideBy");
let oNav = $(document.querySelector(".myNavbar"));
oSlide.onclick = function(){
	$(oToSlide).slideToggle(500);
	if(oNav.hasClass('tempBorder')){
		oNav.removeClass('tempBorder');
	}
	else{
		setTimeout(function(){
			oNav.addClass('tempBorder');
		},500);
	}	
}

//设置侧边栏排他效果
let oMyListsFather = document.querySelector(".sidebar");
let oMyLists = oMyListsFather.querySelector("ul").querySelectorAll("li");

{
	for(let i = 0;i<oMyLists.length;i++){
		oMyLists[i].onclick = function(){
			for(let j = 0;j<oMyLists.length;j++){
				if(j!=i&&$(oMyLists[j]).hasClass("li-active")){
					$(oMyLists[j]).removeClass("li-active");
				}
			}
			if(!$(oMyLists[i]).hasClass("li-active")){
				$(oMyLists[i]).addClass("li-active");
			}
		}
	}
}

//设置侧边栏滚动效果
//设置信号变量
let startY,moveY;
let oUl = oMyListsFather.querySelector("ul");
let oldValue=0;

oMyListsFather.addEventListener("touchstart",function(e){
	startY = e.targetTouches[0].clientY-oMyListsFather.offsetTop;
})

oMyListsFather.addEventListener("touchmove",function(e){
	moveY = e.targetTouches[0].clientY-oMyListsFather.offsetTop-startY;
	oUl.style.transform = "translate(0px,"+ (oldValue+moveY) +"px)";
	// console.log("translate(0px,"+ (oldValue+moveY) +"px)");

})

oMyListsFather.addEventListener("touchend",function(e){
	oldValue = e.changedTouches[0].clientY-oMyListsFather.offsetTop-startY;
})