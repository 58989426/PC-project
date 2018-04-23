require(["config"], function(){
	require(["jquery","template","boots" ,"loadHF","zoom"], function($,template){
	
	/*商品放大镜*/
	$("img").elevateZoom();
	
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
	
	
	
	});
});