require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","zoom"], function($,template){
	
	
	
	/** 
	 读取id值 更具id 值去读取相应的商品详情
	 * */
	 
	var purl = String(location.href);    var start = purl.indexOf("?")+1;
	var pid = Number(purl.slice(start));
	console.log(pid)
	var jsonurl = "/mock/spxq"+pid+".json";
	
	$.getJSON(jsonurl,function(data){
	  	//使用arttemplate渲染
	  	let html = template("xqprod_temp",{products : data.res_body.products});
	  	console.log(data)
	  	//显示
	  	$(".prod_xq").prepend(html);
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
	/*console.log(jsonurl)
	console.log(typeof(pid))
	console.log(pid)
	console.log(start)*/
	
	
	
	});
});