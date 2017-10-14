//关于预搜索
let mInput = document.querySelector("input");
let oCover = document.querySelector(".cover");
let oSection = document.querySelector("section");
let oArticle = document.querySelector("article");


function showCover(){
	$(oCover).addClass('covershow');
}

function closeCover(){
	$(oCover).removeClass('covershow');
}
function removePadding(){
	$(oSection).removeClass('section-padding');
	$(oArticle).removeClass("section-padding");
}


//当页面加载的时候，加入历史记录
(function(){
		if(!localStorage.searchedGoods) return;
		let arr = localStorage.searchedGoods.split(",");
		for(let i = 0;i<arr.length;i++){
			oArticle.innerHTML += `
				<a>${arr[i]}</a>
			`
		}

	}
)()


//点击返回
let bk = document.querySelector("#bk");

bk.onclick = function(){
	history.back();
}
