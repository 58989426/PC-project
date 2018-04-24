require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","cookie"], function($,template){
		//从cookiez中读取购物车数据
		$.cookie.json = true;
		// 读取所有cookie中保存的购物车数据
		let _products = $.cookie("products") || [];
		
		if (_products.length === 0) { // 没有购物车数据
			$(".cart_empty").show()
							.next(".cart_table").hide();
			return;
		}
		// 显示读取到的 cookie 购物车数据
		let html = template("prod_list_temp", {products: _products});
		$(".cart_empty").hide()
						.next(".cart_table").show()
						.find(".product_list").html(html);
		//商品的删除
		$(".del").on("click",function(){
			// 当前待删除商品的编号，在数组中的索引
		let _id = $(this).data("id"),
			_index = exist(_id, _products);
		// 从数组中删除 _index 索引处的元素
		_products.splice(_index, 1);
		// 从cookie中移除部分数据：覆盖保存 _products 数组中的值
		$.cookie("products", _products, {expires:7, path:"/"});
		// 从dom树中删除节点
		$(this).parents(".content").remove();

		if (_products.length === 0) { // 没有购物车数据
			$(".cart_empty").show()
							.next(".cart_table").hide();
		}
		})
		
		// 找出 id 对应商品在 prodcuts 中下标
		function exist(id, products) {
			var existIndex = -1;
			$.each(products, function(index, prod){
				if(prod.pid == id) {
					existIndex = index;
					return false;
				}
			});
			return existIndex;
		}
	});
});