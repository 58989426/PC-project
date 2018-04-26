require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","zoom","cookie","fly"], function($,template){

	/** 
	 读取id值 更具id 值去读取相应的商品详情
	 * */
	 
	var purl = String(location.href);    var start = purl.indexOf("?")+1;
	var pid = Number(purl.slice(start));
	var jsonurl = "/mock/spxq"+pid+".json";
	console.log(pid)
	$.getJSON(jsonurl,function(data){
	  	//使用arttemplate渲染
	  	let html = template("xqprod_temp",{products : data.res_body.products});
	  	/*console.log(data)*/
	  	//显示
	  	$(".prod_xq").prepend(html);
	  	
	  	/*加入购物车*/
		$(".prod_xq").delegate("#cartBtn","click",function(e){
			let that = $(this).parent().parent().parent().parent();
			//console.log(that)
			//将当前选购到的商品信息获取到
			let prod = {
				prodid : $(that).find(".p_id").text(),
				title : $(that).find("#cmd-title").text(),
				price : $(that).find("#sale-price").text().slice(1),
				img : $(that).find("img").attr("src"),
				amount : $(that).find("#count-num").val()
			}
			//console.log(prod)
			//配置cookie插件
			$.cookie.json = true;
			//获取 cookie 中保存的 购物车
			let products = $.cookie("products") || [];
			// 判断原购物车中是否已存在选购商品
			let index = exist(prod.prodid, products);
			if (index === -1) // 不存在
				// 将当前选购商品添加到数组中保存
				products.push(prod);
			else // 存在
				// 修改数量
				products[index].amount++;
			// 将购物车再保存回 cookie 中
			$.cookie("products", products, {expires:7, path:"/"});
			
			
			// 加载购物车成功：抛物线
				let end = $("#cartNum").offset(),
					flyer = $(`<img src="${prod.img}">`);
					 
				console.log(end,flyer)			
				flyer.fly({
					start : {
						left : e.pageX,
						top : e.pageY
					},
					end : {
						left : end.left,
						top : end.top,
						width: 0,
						height:0
					}
				});
		
			
			function exist(id, products) {
				var existIndex = -1;
				$.each(products, function(index, prod){
					if(prod.prodid == id) {
						existIndex = index;
						return false;
					}
				});
				return existIndex;
			}
	})
		}).done(function(){   //渲染模板后
	  		/*商品放大镜*/
			$("#pic_img").elevateZoom();
			 
			/*商品数量的加减*/
			
			$(".prod-count").on("click",".btn_add,.btn_mius",function(){
				let amount = $("#count-num").val();
				console.log(amount)
				if($(this).is(".btn_add")){
					amount++;
				}else{
					if(amount<=1)
					return;
					amount--;
				}
				
				$("#count-num").val(amount);
			})
			
			
			
	  })
	
	});
});