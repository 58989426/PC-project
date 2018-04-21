require(["config"], function(){
	require(["jquery","template","boots" , "loadHF"], function($,template){

		/*//出现购物车
		$(".hot-img").hover(function(){
			$(".join_car").css({ "top": "180px", "display": "block" });;
		},function(){
			$(".join_car").css({ "top": "230px", "display": "none" })
		})*/
			
	  //异步加载热销商品
	  $.getJSON("/mock/djjx.json",function(data){
	  	//使用arttemplate渲染
	  	let html = template("prod_temp",{products : data.res_body.products});
	  	//显示
	  	$("#recommendDiv").prepend(html);
	  })
	});
});