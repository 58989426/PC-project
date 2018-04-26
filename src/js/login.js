require(["config"], function(){
	require(["jquery","cookie"], function($){
		
		//判断是否有cookie值
		$.cookie.json = true;
		//读取cookie
		let data1= $.cookie("data") || [];
		if(data1){
			var _phone = data1.phone;
			//console.log(_phone)
			$("#in1").val(_phone)
		}
		
		$(".dl").on("click",function(e){
			var log_phone = $("#in1").val(),
				log_password = $("#in2").val();
			if (log_phone!== "" && log_password!== "") {
				var url2 = $(".login_form").attr("action"),
					data2 = $(".login_form").serialize();
					//console.log($(".login_form").serialize())
				$.ajax({
					type:"post",
					url:url2,
					dataType:"json",
					data :data2,
					success : function(data){
//						data = JSON.parse(data);
					let phone1 = data.res_body.user.phone,
						password1 = data.res_body.user.password;
						/*console.log(password1)
						console.log(phone1)
						console.log(data)*/
						if (data.res_code === 0) 
							{
								alert("登录成功")
								location="/";
							//当选中记住密码登录成功时保存cookie
							$.cookie.json = true;
								var uesr_mes = $.cookie("data",data.res_body.user, {expires:7, path:"/"})
							}
						else{
							alert("用户名或者密码错误")
						}
							
					}
				});
			}else{
				alert("请输入登录信息")
			}

		})
	
	});
});