require(["config"], function(){
	require(["jquery"], function($){
	 
	 //判断输入的手机号
	 $("#phone").on("focus",function(){
		if ($(this).val() === "请输入手机号码")
			$(this).val("");
	})

	 $("#phone").on("blur",function(){
	 	let val_phone = $("#phone").val();
	 		if (!(/^[1][0-9]{1,10}$/.test(val_phone))) {
	 			$("#phone").parents(".reg_form").siblings(".error_text").text("输入手机格式有误").css("display","block");
	 			if($(this).val()==="")	{
	 				$("#phone").parents(".reg_form").siblings(".error_text").css("display","none");
	 			}
	 		}else{
	 		$("#phone").parents(".reg_form").siblings(".error_text").css("display","none");
	 	}
	 	
		if ($(this).val() === "")
			$(this).val("请输入手机号码");
	 })
	
	//判断输入的第一次密码
	 $("#r_mima").on("focus",function(){
		if ($(this).val() === "请输入密码")
			$(this).val("");
	})
	
	$("#r_mima").on("blur",function(){
		let mima1 = $("#r_mima").val();
		if (!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/.test(mima1))) {
	 			$("#r_mima").parents(".reg_form").siblings(".error_text").text("密码格式有误").css("display","block");
	 			if($(this).val()==="")	{
	 				$("#r_mima").parents(".reg_form").siblings(".error_text").css("display","none");
	 			}
	 		}else{
	 		$("#r_mima").parents(".reg_form").siblings(".error_text").css("display","none");
	 	}
		if ($(this).val() === "")
			$(this).val("请输入密码");
	 })
	
	//判断输入的第二次密码
	$("#r_mima2").on("focus",function(){
		if ($(this).val() === "请再次输入密码")
			$(this).val("");
	})
	$("#r_mima2").on("blur",function(){
	 let mima2 = $("#r_mima2").val(),
	 	 mima1 = $("#r_mima").val();
	 	if (mima1 !==mima2) {
	 		$("#r_mima2").parents(".reg_form").siblings(".error_text").text("两次输入的密码不一致").css("display","block");
	 			if($(this).val()==="")	{
	 				$("#r_mima").parents(".reg_form").siblings(".error_text").css("display","none");
	 			}
	 	}else{
	 		$("#r_mima2").parents(".reg_form").siblings(".error_text").css("display","none");
	 	}
	 
		if ($(this).val() === "")
			$(this).val("请再次输入密码");

	 })
	
	
	/******** 验证码*********/
	//随机生成验证码
	function random(lower, upper) {
			return Math.floor(Math.random() * (upper - lower)) + lower;
		}
	function generateValidateCode(len) {
		// 未传递 len 参数，则默认值为4
		if (typeof len === "undefined")
			len = 4;
		// 保存生成的验证码
		var validateCode = "";
		// 循环生成验证码
		do {
			// 在48~122之间产生随机数字
			var rand = random(48, 123);
			// 判断生成的随机数字是否在合理范围
			if (rand >= 48 && rand <= 57 // 数字
				|| rand >= 65 && rand <= 90 // 大写字母
				|| rand >= 97 && rand <= 122) { // 小写字母
				validateCode += String.fromCharCode(rand);
			}
		} while (validateCode.length < len);
		return validateCode;
	}
	
	
	//点击获取，切换验证码
	$(".fs").on("click",function(){
		$(".fs").text(generateValidateCode(5))
	})
	
	$("#r_yzm").on("focus",function(){
		if ($(this).val() === "请输入验证码")
			$(this).val("");
	})

	//获取文本框中的验证码
	$("#r_yzm").on("blur",function(){
	 	let yzm1 = $("#r_yzm").val(),
	 		yzm2 = $("#r_yzm").siblings(".fs").text();
	 	
	 	if (yzm1 !== yzm2) {
	 		$("#r_yzm").parents(".reg_form").siblings(".error_text").text("输入验证码有误").css("display","block");
	 			if($(this).val()==="")	{
	 				$("#r_yzm").parents(".reg_form").siblings(".error_text").css("display","none");
	 			}
	 			
	 	}else{
	 		$("#r_yzm").parents(".reg_form").siblings(".error_text").css("display","none");
	 	}
	 	
	 	if ($(this).val() === "")
			$(this).val("请输入验证码")
	 })
	
	//点击登录时判断复选框的选中状态
	
		$(".zc").on("click",function(e){
			e.preventDefault();
			if (($("#r_checkbox").is(":checked"))&&($(".error_text").css("display")==="none")) {	
				var urll = $(".reg_form").attr("action"),
					data1 = $(".reg_form").serialize();
					//console.log(data)
				/*$.post(urll, data, function(data){
					console.log(data);
					data = JSON.parse(data);
					console.log(data)
					if(data.res_code === 0)
					alert("注册成功")
				else
					alert("注册失败")
				},"json");*/
				$.ajax({
					url:urll,
					type:"post",
					datatype:"json",
					data : data1,
					success :function(data){	
						data = JSON.parse(data);
						console.log(data)
						if(data.res_code === 0)
								alert("注册成功")
							else
								alert("注册失败")
					
						}
				})
				}else{
				$(".zc").parents(".reg_form").siblings(".error_text").text("输入信息有误").css("display","block");
			}
		})
	});
});




























































































































