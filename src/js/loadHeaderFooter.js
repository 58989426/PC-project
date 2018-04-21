/* 加载头部尾部模块 */
define(["jquery"], function($){
	$(function(){
		$.ajax("/html/include/header.html").done(function(data){
			$(".header").html(data);
		})

		$(".footer").load("/html/include/footer.html");
	});
});