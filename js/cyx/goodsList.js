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
