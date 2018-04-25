require(["config"], function(){
	require(["jquery"], function($){
		$(".dl").on("click",function(e){
				e.preventDefault();
				var url2 = $(".login_form").attr("action"),
					data2 = $(".login_form").serialize();
				$.ajax({
					type:"post",
					url:url2,
					datatype:"json",
					data :data2,
					success : function(data){
						data = JSON.parse(data);
						console.log(data)
						if (data.res_code === 0) 
							alert("登录成功")
						else
							alert("登录失败")
					}
				});	
				
			
		})
	
	});
});