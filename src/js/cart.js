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
		$(".product_list").on("click",".del",function(){
			// 当前待删除商品的编号，在数组中的索引
		let _id = $(this).data("pid"),
			_index = exist(_id, _products);
			console.log(_id)
			console.log(this)
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
		
		//商品数量的修改
		$(".product_list").on("click",".add,.minus",function(){
			// 获取修改数量的商品id
		let _id = $(this).data("pid");
		// 获取数组中的元素下标
		let _index = exist(_id, _products);
		/*console.log(_id,_products)
		console.log(_index)
		console.log(_products[_index].amount)*/
		// 数量加/减
		if ($(this).is(".add"))
			_products[_index].amount++;
		else{
			if (_products[_index].amount <= 1)
				return;
			_products[_index].amount--;
		}
		//覆盖保存cookie
		$.cookie("products",_products,{expires:7, path:"/"})
		//显示修改的结果
		$(this).siblings(".amount").val(_products[_index].amount)
		//显示小计
		let xiaoji = _products[_index].amount * _products[_index].price;
		/*console.log(xiaoji)*/
		$(this).parent().siblings(".sub").text(xiaoji.toFixed(2));
		
		})
	//手动修改商品数量
		$(".product_list").on("blur",".amount",function(){
			//获取修改商品数量的id
			let _id = $(this).data("pid");
			console.log(_id)
			//获取数组中的元素下标
			let _index = exist(_id,_products);
			// 判断输入数据的地格式
			if (!/^[1-9]\d*$/.test($(this).val())){
				$(this).val(_products[_index].amount);
				return;
			}
			//修改cookie 中的数量
			_products[_index].amount = $(this).val();
			// 覆盖保存cookie
		$.cookie("products", _products, {expires:7, path:"/"});
		//显示小计
		let xiaoji = _products[_index].amount * _products[_index].price;
		/*console.log(xiaoji)*/
		$(this).parent().siblings(".sub").text(xiaoji.toFixed(2));
		})
		
		
		//全选
		$(".ck_prod_all,.ck_all").on("click", function(){
		// 获取当前全选框的选中状态
		let _status = $(this).prop("checked");
		// 设置所有商品行前复选框选中状态
		$(".ck_prod").prop("checked", _status);
		// 计算合计
		
	});
		//当商品的选择框有取消 则 取消选择状态
		
		$(".ck_prod").on("click", function(){
		let _status = $(".ck_prod:checked").length === _products.length;
		$(".ck_all,.ck_prod_all").prop("checked", _status);
		// 计算合计
		calcTotal();
	});
		
		//计算合计
		function calcTotal() {
			let sum = 0;
			$(".ck_prod:checked").each(function(index, element){
				sum += parseFloat($(this).parents(".content").find(".sub").text());
				console.log(sum)
			});
			
			$(".total_mon").text(sum.toFixed(2));
		}
		//共选择几种商品
		
		
		// 找出 id 对应商品在 prodcuts 中下标
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
	});
});