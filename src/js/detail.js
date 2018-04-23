require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","zoom"], function($,template){
	
	/*商品放大镜*/
	$("img").elevateZoom();
	
	/*点击加载数据*/
	/* $.getJSON("/mock/djjx.json",function(data){
	  	//使用arttemplate渲染
	  	let html = template("xqprod_temp",{products : data.res_body.products});
	  	console.log(data)
	  	//显示
	  	$(".prod_xq").prepend(html);
	  })*/
	 
	/* $.cookie.json = true;
	 
	 let _products = $.cookie("products") || [];*/
	 
	/*商品数量的加减*/
	
	$(".prod-count").on("click",".btn_add,.btn_mius",function(){
		let amount = $("#count-num").val();
		
		if($(this).is(".btn_add")){
			amount++;
		}else{
			if(amount<=1)
			return;
			amount--;
		}
		
		$("#count-num").val(amount);
	})
	
	/** */
	
	});
});