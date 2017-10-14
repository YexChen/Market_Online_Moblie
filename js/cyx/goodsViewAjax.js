//这里需要干什么呢？
//根据url请求某分类的商品，并且列出来
//在goodsView.js配合写懒加载
//函数fetchGoodsByTypes

//得到一些信号变量
//得到mainpage
//ps : 还需要加一些错误处理函数，如没有数据等，现在为了赶工暂时推后
let oMainPage = document.querySelector(".main-page");

function RequestGoods(catId,mPage){
	window.shop.api.fetchGoodsByTypes(catId,mPage,function(response){
		let data = response.data;
		console.log(response);
		//添加到dom
		for(let i = 0;i<data.length;i++){
			oMainPage.innerHTML += `
				<div class="goods-cell">
	    			<div class="item-img">
	    				<img src="${data[i].goods_thumb}">
	    			</div>
	    			<div class="item-desc">
	    				<p class = "p1"><span>自营</span>${data[i].goods_name}</p>
	    				<p class = "p2"><em >￥${data[i].price}</em>&nbsp;&nbsp;<span>限时特惠</span></p>
	    				<p class = "p3">好评${Math.trunc(Math.random()*100)}%&nbsp;&nbsp;评价${data[i].goods_id}条</p>
	    				<em class = "chart"></em>
	    			</div>
	    		</div>
			`
		}
	})
}

//这是一个截取url的函数
function getUrl(){
	let url = window.location.search.substring(1);
	let reg  = new RegExp(/(^|&)cat_id=([^&]*)/);
	let result = url.match(reg);
	return result?result[2]:null;
}
