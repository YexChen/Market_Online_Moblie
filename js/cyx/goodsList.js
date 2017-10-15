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

function InitialSlideAni(){
	let oMyLists = oMyListsFather.querySelector("ul").querySelectorAll("li");
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
			//这里创造一个cyx_pages,用来记录跳转前的选定页
			if(localStorage.getItem("cyx_pages")){
				localStorage.removeItem("cyx_pages");
			}
			localStorage.setItem("cyx_pages",i);
		}
	}
}

//设置侧边栏滚动效果
//设置信号变量
let startY,moveY;
let oUl = oMyListsFather.querySelector("ul");
let oldValue=0;

oMyListsFather.addEventListener("touchstart",function(e){
	e.stopPropagation();
	startY = e.targetTouches[0].clientY-oMyListsFather.offsetTop;
	// console.log("statY:"+startY);
})

oMyListsFather.addEventListener("touchmove",function(e){
	e.stopPropagation();
	moveY = e.targetTouches[0].clientY-oMyListsFather.offsetTop-startY;
	oMyListsFather.style.transform = "translate(0px,"+ (oldValue+moveY) +"px)";
	console.log(moveY);
})

oMyListsFather.addEventListener("touchend",function(e){
	oldValue = e.changedTouches[0].clientY-oMyListsFather.offsetTop-startY + oldValue;
	//这里要加东西
	// console.log(oldValue);
})


//设置当网页加载时侧边栏的选中效果
function resetSlidebar(){
	let oCurrentPage = localStorage.getItem("cyx_pages");
	let oMyLists = oMyListsFather.querySelector("ul").querySelectorAll("li");
	$(oMyLists[oCurrentPage]).addClass('li-active');
}

//当页面中cyx_pages不存在时，为它设一个初始值
{
	if(!localStorage.getItem("cyx_pages")){
		localStorage.setItem("cyx_pages",0);
	}
}

//动态添加跳转效果
//定义信号变量
	let mp = document.querySelector("#mp");
	let gwc = document.querySelector("#gwc");
	let wd  = document.querySelector("#wd");
	let bk = document.querySelector("#bk");
	let psearch = document.querySelector("#search");
	console.log(12345);

	psearch.onclick = function(){
		location.href = "./goodsSearch.html";
	}
	bk.onclick = function(){
		history.back();
	}

	mp.onclick = function(){
		location.href = "./../../index.html";
	}


	gwc.onclick = function(){
		location.href = "./../cart.html";
	}

	wd.onclick = function(){
		location.href = "./../userpage.html";
	}
