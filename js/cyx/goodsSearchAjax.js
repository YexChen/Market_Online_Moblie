//搜索页面
//需要做什么呢？
//搜索功能（废话） 从api中获取东西
//预搜索功能：在搜索框内容改变时提示搜索内容 PreSearchGoods
//保存搜索记录 localStorage.searchHistory (数组)

//发送预搜索请求
// 在这里定义一些信号变量
// 为了不让预搜索太频繁所以写一个lock true为开锁，false为锁死
let aLock = true
let mSearch = document.querySelector("label");
let searchedGoods = localStorage.searchedGoods?localStorage.searchedGoods.split(","):[]

mInput.oninput = function(){
	//这里调用一个goodsSearch.js里面的函数
	showCover();
	shop.api.PreSearchGoods(this.value,function(response){
		if(response.code==1||!aLock) return;
		aLock = false;
		setTimeout(function(){
			aLock = true;
		},50);
		let data = response.data;
		let aUrl = "./../goods.html?goods_id="
		//先清空cover里面内容
		oCover.innerHTML = "";
		for(let i = 0;i<data.length;i++){
			oCover.innerHTML += `
			<div class="searchResult">
		      <a href="${aUrl}${data[i].goods_id}">${data[i].goods_name}</a>
		    </div>
			`
		}
	});
}


//既然预搜索做完了，那么接下来做真·搜索
//首先要有样式
//那么，要做什么呢？
//第一步，清空section,article的内容
//第二步，请求ajax然后加载到dom（article里面）,然后关cover
//第三步，把搜索记录放到localSrorage里面去
mSearch.onclick = function(){
	//清空section,article内容
	oSection.innerHTML = "";
	oArticle.innerHTML = "";
	//清空padding
	removePadding();
	//请求ajax，加载到dom
	let myInputValue  = mInput.value;
	shop.api.PreSearchGoods(myInputValue,function(response){
		// 这里应该写个提示的，但是时间有限，先return吧
		if(response.code != 0) return;
		let data = response.data;
		console.log(response);
		//这里加载dom元素
		//先清空
		oArticle.innerHTML = "";
		//关cover
		closeCover();
		for(let i = 0;i<data.length;i++){
			oArticle.innerHTML += `
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
		//还需要搞个超链接
		let mGoodsCell = document.querySelectorAll(".goods-cell");
		for(let i = 0;i<data.length;i++){
			mGoodsCell[i].onclick = function(){
				location.href = "./../goods.html?goods_id=${data[i].goods_id}"
			}
		}
		//添加到搜索记录
		for(let i = 0;i<searchedGoods.length;i++){
			if(myInputValue == searchedGoods[i])
				searchedGoods.splice(i,1);
		}
		searchedGoods.push(myInputValue);
		if(localStorage.getItem("searchedGoods")){
			localStorage.removeItem("searchedGoods");
		}
		localStorage.setItem("searchedGoods",searchedGoods);
	})
}


//接下来做懒加载，但是先保存一下
