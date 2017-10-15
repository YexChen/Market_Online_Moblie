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
	// 这里添加链接
	addLink();
	// 绑定购物车图标点击事件，临时加一个延迟事件
	setTimeout(function(){
		bindAddToChart();
	},200)
}

//当拉到页面90%地方的时候，执行懒加载
//定义一个信号变量
//lock,防止懒加载太多 true为锁开，false为锁死
let mLock = true

window.onscroll = function(e){
	let scrollHeight = $(document).scrollTop()+$(window).height();
	let totalHeight = $(document).height();
	let rate = scrollHeight/totalHeight;
	if(rate > 0.93&&mLock){
		mLock = false;
		setTimeout(function(){
			mLock = true;
		},500);
		RequestGoods(oCatId,currentPage++);
		// 绑定购物车图标点击事件，临时加一个延迟事件
		setTimeout(function(){
			bindAddToChart();
		},200);
	}
}


//动态添加跳转效果
//定义信号变量
function addLink(){
	let mp = document.querySelector("#mp");
	let gwc = document.querySelector("#gwc");
	let wd  = document.querySelector("#wd");
	let bk = document.querySelector("#bk");
	let psearch = document.querySelector("#search");

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
}


//在点击添加至购物车按钮时触发goodsViewAjax里面的函数，添加至购物车
//以下是绑定点击事件的函数
function bindAddToChart(){
	let allChartIcons = document.querySelectorAll(".charts");
	for(let i = 0;i<allChartIcons.length;i++){
		console.log(allChartIcons);
		allChartIcons[i].onclick = function(){
			\pp
		}
	}
}

//以下是视觉特效（函数）？
