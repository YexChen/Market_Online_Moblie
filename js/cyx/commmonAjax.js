//实现ajax的所有功能都在这里

//这里写需求
// 一
// 	1.根据url来获取商品类名，如果没有的话则获取家居(默认值)
// 	2.根据点击事件触发的函数来更新dom
// 	3.总结一下，就是写个 fetchGoodClass + flashPage(写在独立js里面吧)

window.shop = {
	config : {
		API_PREFIX : "http://h6.duchengjiu.top/shop/"
	},
	base : {

	},
	api : {
		fetchGoodClass : function(goodsId,pageSize,callback){
			$.get(shop.config.API_PREFIX+`api_goods.php?cat_id=${goodsId}&page=1&pagesize=${pageSize}`,{},callback);
		},
		fetchGoodsTypes : function(callback){
			$.get(shop.config.API_PREFIX+'api_cat.php', {} ,
				callback)
		},
		fetchGoodsByTypes : function(catId,mPage,callback){
			$.get(shop.config.API_PREFIX+`api_goods.php?cat_id=${catId}&page=${mPage}&pageSize=10`,{},callback);
		},
		PreSearchGoods : function(goodsDesc,callback){
			$.get(shop.config.API_PREFIX+`api_goods.php?search_text=${goodsDesc}`,{},callback);
		},
		addToChart : function(goodsId,number,token,callback){
			$.post(shop.config.API_PREFIX+`api_cart.php?token=${token}`,{goods_id:goodsId,number : number}, callback);
		}
	}
}

//获取商品种类
