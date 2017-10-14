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


//这里写一些关于Ajax的内容
//这里是一些信号变量
//页面
let currentPage = 1;
//页面初始化时得到catId
let oCatId = getUrl()?getUrl():45;
//这里在页面初始化时加载一次Ajax数据
{
	RequestGoods(oCatId,currentPage);
}

//当拉到页面90%地方的时候，执行懒加载
//定义一个信号变量
//lock,防止懒加载太多 true为锁开，false为锁死
let mLock = true

window.onscroll = function(e){
	let scrollHeight = $(document).scrollTop()+$(window).height();
	let totalHeight = $(document).height();
	let rate = scrollHeight/totalHeight;
	console.log(rate);
	if(rate > 0.93&&mLock){
		mLock = false;
		setTimeout(function(){
			mLock = true;
		},500);
		RequestGoods(oCatId,currentPage++);
	}
}