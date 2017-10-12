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