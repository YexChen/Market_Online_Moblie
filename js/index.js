window.onload = function () {
	//搜索框颜色变化
	search();
	//轮播图
	banner();
	//商品区域轮播图
	proBanner();
	//倒计时
	downTime();
//	swipe();
	//区域横向滚动
	iscrollLeft();
	//广告新闻
	fontMove();
	//获取商品分类类名
	getcats();
	//获取热门商品前十作为秒杀区域产品
	skgoods();
	//获取热门商品为品牌热卖商品
	hotgoods();
	//验证登陆
	validateLogin()
}

/*搜索框颜色变化*/
var search = function () {
	var search = document.querySelector('.fn_search');
	var banner = document.querySelector('.fn_banner');
	var height = banner.offsetHeight;
	window.onscroll = function () {
		var top = document.body.scrollTop;
		var opacity = 0;
		if (top > height) {
			opacity = .85;
		} else {
			opacity = .85 * (top / height);
		}
		search.style.background = 'rgba(215, 6, 59,'+ opacity +')';
	}
}
/*轮播图*/
var banner = function () {
	var banner = document.querySelector('.fn_banner');
	var width = banner.offsetWidth;
	var imageBox = banner.querySelector('ul:first-child');
	var pointBox = banner.querySelector('ul:last-child');
	var points = pointBox.querySelectorAll('li');
	var addTransition = function () {
		imageBox.style.transition = 'all .2s';
		imageBox.style.webkitTransition = 'all .2s';
	}
	var removeTransition = function () {
		imageBox.style.transition = 'none';
		imageBox.style.webkitTransition = 'none';
	}
	var setTranslateX = function (translateX) {
		imageBox.style.transform = 'translateX('+ translateX +'px)';
		imageBox.style.webkitTransform = 'translateX('+ translateX +'px)';
	}

	var index = 1;
	var timer = setInterval(function () {
		index ++;
		addTransition();
		setTranslateX(-index * width);
	},3000);
	imageBox.addEventListener('transitionend', function () {
		if (index >= 9) {
			index = 1;
			removeTransition();
			setTranslateX(-index * width);
		} else if (index <= 0) {
			index = 8;
			removeTransition();
			setTranslateX(-index * width);
		}
		setPoint();
	});
	var setPoint = function () {
		for (var i = 0; i < points.length; i++) {
			points[i].classList.remove('now');
		}
		points[index - 1].classList.add('now');
	}
	var startX = 0;
	var distanceX = 0;
	var isMove = false;
	imageBox.addEventListener('touchstart', function (e) {
		clearInterval(timer);
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener('touchmove', function (e) {
		var moveX = e.touches[0].clientX;
		distanceX = moveX - startX;
		var translateX = -index * width + distanceX;
		removeTransition();
		setTranslateX(translateX);
		isMove = true;
	});
	imageBox.addEventListener('touchend', function (e) {
		if (isMove) {
			if (Math.abs(distanceX) < width/3) {
				addTransition();
				setTranslateX(-index * width);
			} else{
				if (distanceX > 0) {
					index --;
				} else{
					index ++;
				}
				addTransition();
				setTranslateX(-index * width);
			}
		}
		clearInterval(timer);
		timer = setInterval(function (){
			index ++;
			addTransition();
			setTranslateX(-index * width);
		},3000);
		startX = 0;
		distanceX = false;
		isMove = false;
	});
}
/*主题馆上方轮播图*/
var proBanner = function () {
	var banner = document.querySelector('.proBox_banner');
	var width = banner.offsetWidth;
	var imageBox = banner.querySelector('ul:first-child');
	var pointBox = banner.querySelector('ul:last-child');
	var points = pointBox.querySelectorAll('li');
	var addTransition = function () {
		imageBox.style.transition = 'all .2s';
		imageBox.style.webkitTransition = 'all .2s';
	}
	var removeTransition = function () {
		imageBox.style.transition = 'none';
		imageBox.style.webkitTransition = 'none';
	}
	var setTranslateX = function (translateX) {
		imageBox.style.transform = 'translateX('+ translateX +'px)';
		imageBox.style.webkitTransform = 'translateX('+ translateX +'px)';
	}

	var index = 1;
	var timer = setInterval(function () {
		index ++;
		addTransition();
		setTranslateX(-index * width);
	},3000);
	imageBox.addEventListener('transitionend', function () {
		if (index >= 6) {
			index = 1;
			removeTransition();
			setTranslateX(-index * width);
		} else if (index <= 0) {
			index = 5;
			removeTransition();
			setTranslateX(-index * width);
		}
		setPoint();
	});
	var setPoint = function () {
		for (var i = 0; i < points.length; i++) {
			points[i].classList.remove('now');
		}
		points[index - 1].classList.add('now');
	}
	var startX = 0;
	var distanceX = 0;
	var isMove = false;
	imageBox.addEventListener('touchstart', function (e) {
		clearInterval(timer);
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener('touchmove', function (e) {
		var moveX = e.touches[0].clientX;
		distanceX = moveX - startX;
		var translateX = -index * width + distanceX;
		removeTransition();
		setTranslateX(translateX);
		isMove = true;
	});
	imageBox.addEventListener('touchend', function (e) {
		if (isMove) {
			if (Math.abs(distanceX) < width/3) {
				addTransition();
				setTranslateX(-index * width);
			} else{
				if (distanceX > 0) {
					index --;
				} else{
					index ++;
				}
				addTransition();
				setTranslateX(-index * width);
			}
		}
		clearInterval(timer);
		timer = setInterval(function (){
			index ++;
			addTransition();
			setTranslateX(-index * width);
		},3000);
		startX = 0;
		distanceX = false;
		isMove = false;
	});
}
//倒计时
var downTime = function () {
	var time = 60 * 60 *2;
	var skTime = document.querySelector('.sk_time');
	var spans = skTime.querySelectorAll('span');
	var timer = setInterval(function () {
		time --;
		//格式化时间
		var h = Math.floor(time / 3600);
		var m = Math.floor(time % 3600 /60);
		var s = time % 60;
		//设置时间
		spans[0].innerHTML = Math.floor(h / 10);
		spans[1].innerHTML = h%10;

		spans[3].innerHTML = Math.floor(m / 10);
		spans[4].innerHTML = m%10;

		spans[6].innerHTML = Math.floor(s / 10);
		spans[7].innerHTML = s%10;
		if (time <= 0) {
			clearInterval(timer);
		}
	},1000);
}
/*区域横向滑动*/
var swipe = function () {
	/*左右的滑动(touch事件, 位移)*/
	var parentBox = document.querySelector('.pro_con');
	var childBox = parentBox.querySelector('ul');
	var startX = 0;
	var distanceX = 0;
	//滑动的核心点(信号量),记录当前的位置,相当于轮播图index
	var currentX = 0;
	childBox.addEventListener('touchstart', function (e) {
		startX = e.touches[0].clientX;
	});
	childBox.addEventListener('touchmove', function (e) {
		var moveX = e.touches[0].clientX;
		distanceX = moveX - startX;
		/*将要去做定位的位置*/
		var translateX = currentX + distanceX;
		childBox.style.transform = 'translateX('+ translateX +'px)';
		childBox.style.webkitTransform = 'translateX('+ translateX +'px)';
	});
	childBox.addEventListener('touchend', function (e) {
		/*滑动完成后记录位置*/
		currentX = currentX + distanceX;
	});
}
var iscrollLeft = function () {
	//默认上下滚动,需要设置参数
	new IScroll(document.querySelector('.pro_con'), {
		scrollX : true,
		scrollY : false
	});
}
/*新闻轮播*/
var fontMove = function () {
	var moveBox = document.querySelector('.font-move');
	var ul = moveBox.querySelector('ul');
	var lis = ul.querySelectorAll('li');
	var length = lis.length;
	ul.appendChild(lis[0].cloneNode(true));
	var index = 0;
	function move () {
		index++;
		animate(ul, {'top':-37 * index}, 400, function() {
			if (index > length - 1) {
				index = 0;
				this.style.top = '0px';
			}
		});
	}
	setInterval(move, 2000);
}

/*获取商品分类类名*/
var getcats = function () {
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function (json) {
		var data = json.data;
		for (i = 0;i < data.length; i++) {
			$(".fn_nav ul li a p")[i].innerText = data[i].cat_name;
		}
	});
}
/*秒杀商品*/
var skgoods = function () {
	var pagesize = 10;
	$.get('http://h6.duchengjiu.top/shop/api_goods.php', {pagesize: pagesize}, function (json) {
		var data = json.data;
		var str = '';
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			str +=
			`<li><a href='html/goods.html?goods_id=${obj.goods_id}' title='${obj.goods_desc}'>
				<img src='${obj.goods_thumb}'/></a>
				<p>${obj.goods_name}</p>
				<p class='now_price'>¥<span>${obj.price}</span></p>
				<p class='old_price'>¥5000</p>
			</li>`;
		}
		$('.sk_product').html(str + '<span><a href="#">查看更多</a></span>');
	});
}
/*品牌热卖*/
var hotgoods = function () {
	var page = 1;
	var pagesize = 20;
	function getContent (page) {
		$.get('http://h6.duchengjiu.top/shop/api_goods.php', {page, pagesize}, function (json){
			var template = `<li class='w_p50'>
					<a href="html/goods.html?goods_id=<%= goods_id %>" title=<%= goods_desc %> >
						<img src=<%= goods_thumb %> />
					</a>
					<p class='goodsname'><%= goods_name %></p>
					<div>
						<p class='now_price'>¥<span><%=price %></span></p>
						<p class='old_price'>¥5000</p>
						<a href="html/cart.html?goods_id=<%= goods_id %>" class="cart"><img src="images/mycart.png"/></a>
					</div>
				</li>`;
			var compile = _.template(template);
			for (var i = 0; i < json.data.length; i++) {
				var data = json.data[i];
				$('#hotgoods').html($('#hotgoods').html() + compile(data));
			}
//			$('#hotgoods').html($('#hotgoods').html() + `<div id='loading'>正在加载...</div>`);
			lock = true;
			if (page>=5) {
				$('#hotgoods').html($('#hotgoods').html() + `<div class='load'>
					<p class='line01'></p><img src='images/niuniu.png' />
					<p class='line02'></p><span>暂时没有更多了!</span></div>`);
				lock = false;
			}
//			$('#loading').remove();
		});
	}
	getContent();
	//懒加载
	var lock = true;
	$(window).scroll(function () {
		if (!lock) return;
		var	rate = $(document).scrollTop() / $(document).height();
		if (rate > .7 && page < 5) {
			lock = false;
			$('.backTop').css('display','block');
			$('.backTop').on('click', function () {
				$(this).css('display', 'none');
			});
			getContent(++page);
			setTimeout(function (){
				lock=true;
			},2000);
		}
	});
}


//搜索栏滚动？？？
{
	let oEms = document.querySelector(".em-group").querySelectorAll("em");
	for(let ctemp = 0;ctemp<oEms.length;ctemp++){
		oEms[ctemp].style.top = 30*ctemp + 10 + "px" ;
	}
}

let moveTop = 0;
function moveEms(){
	let eGgroups = document.querySelector(".em-group");
	if(moveTop<-150){
		moveTop = 0
		$(eGgroups).css("top","0px");
	}
	$(eGgroups).animate({"top" : `${moveTop}px`},"slow");
	moveTop -=30;
	console.log($(eGgroups).css("top"));
}
setInterval(function(){
	moveEms();
},2000)


//做登陆之后把登陆换成图片
//哎，还要做跳转的变化，真麻烦
//我还没刷副本呢
function validateLogin(){
	if(!localStorage.token)
		return;
	else {
		$(".login").html("");
		$(".login").addClass('glyphicon glyphicon-user');
		$(".login").attr("href","html/userpage.html");
	}
}
