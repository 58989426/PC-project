require(["config"], function(){
	require(["jquery","template","boots" , "loadHF"], function($,template){

		/*//出现购物车
		$(".hot-img").hover(function(){
			$(".join_car").css({ "top": "180px", "display": "block" });;
		},function(){
			$(".join_car").css({ "top": "230px", "display": "none" })
		})*/
			
		/*点击图片查看商品详情*/	
	  //事件委派
	  
	  
	   $.getJSON("/mock/djjx.json",function(data){
	  		$("good_rx").delegate("a","click",function(){
	  		
	  		
	  })
	  })
	  
	  
	  //异步加载热销商品
	  $.getJSON("/mock/djjx.json",function(data){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp",{products : data.res_body.products});
	  	console.log(data)
	  	//显示
	  	$("#recommendDiv").prepend(html);
	  })
	  
	  //异步加载产品列表
	  $.getJSON("/mock/lb1.json",function(data){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp1",{products : data.res_body.products});
	  	//显示
	  	$(".prod_list1").prepend(html);
	  })
	  
	  
	  $.getJSON("/mock/lb2.json",function(data1){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp2",{products : data1.res_body.products});
	  	//显示
	  	$(".prod_list2").prepend(html);
	  })
	  
	  
	  $.getJSON("/mock/lb3.json",function(data1){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp3",{products : data1.res_body.products});
	  	//显示
	  	$(".prod_list3").prepend(html);
	  })
	  
	  $.getJSON("/mock/lb4.json",function(data1){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp4",{products : data1.res_body.products});
	  	//显示
	  	$(".prod_list4").prepend(html);
	  })
	});
});