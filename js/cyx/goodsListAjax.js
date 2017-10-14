//第一步，获取商品分类，动态渲染类名dom
//所以需要一个函数getGoodsTypes
{
	let mSlide = document.querySelector(".sidebar").querySelector("ul");
	const OLINK = "./goodsList.html";
	window.shop.api.fetchGoodsTypes(function(response){
		let data = response.data;
		for(let i = 0;i<data.length;i++){
			let m_template = `<li><a href = ${OLINK}?cat_id=${data[i].cat_id}>${data[i].cat_name}</a></li>`;
			mSlide.innerHTML += m_template;
		}
		//初始化侧边栏效果
		InitialSlideAni();
		//重置翻页后侧边栏效果
		resetSlidebar();
	});
}

//第二步，获取url中的cat_id,并重置article中goods-items-group中的内容
{
	let catId = getUrl()?getUrl():45;
	let goodsGroup = document.querySelector(".goods-items-group");
	shop.api.fetchGoodClass(catId,6,function(response){
		let data = response.data;
		console.log(data);
		for(let i=0;i<data.length;i++){
			let oTemplate = `
				<div class="goods-items">
	              <a href="./../goods.html?goods_id=${data[i].goods_id}">
	                <img src="${data[i].goods_thumb}">
	                <p>${data[i].goods_name}</p>
	              </a>
	            </div>`;
	        goodsGroup.innerHTML += oTemplate;
        }
        goodsGroup.innerHTML += `<div class = "m-more"><a href="./goodsView?cat_id=${catId}" >更多商品</a></div>`;
        //这里再添加一个按钮
	});
}

// 获取url的正则
function getUrl(){
	let url = window.location.search.substring(1);
	let reg  = new RegExp(/(^|&)cat_id=([^&]*)/);
	let result = url.match(reg);
	return result?result[2]:null;
}
