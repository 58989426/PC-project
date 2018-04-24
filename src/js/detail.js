require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","zoom","cookie"], function($,template){

	
	/** 
	 读取id值 更具id 值去读取相应的商品详情
	 * */
	 
	var purl = String(location.href);    var start = purl.indexOf("?")+1;
	var pid = Number(purl.slice(start));
	var jsonurl = "/mock/spxq"+pid+".json";
	
	$.getJSON(jsonurl,function(data){
	  	//使用arttemplate渲染
	  	let html = template("xqprod_temp",{products : data.res_body.products});
	  	/*console.log(data)*/
	  	//显示
	  	$(".prod_xq").prepend(html);
	  	
	  	/*加入购物车*/
		$(".prod_xq").delegate("#cartBtn","click",function(e){
			console.log("dfjkk")
			console.log(html)
			console.log(this)
			//将当前选购到的商品信息获取到
			let prod = {
				pid : $(this).find(".id").text(),
				title : $(this).find("#cmd-title").text(),
				price : $(this).find("#sale-price").text(),
				img : $(this).find("img").attr("src"),
				amount : $(this).find("#count-num").val()
			}
			console.log(prod)
			//配置cookie插件
			$.cookie.json = true;
			//
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