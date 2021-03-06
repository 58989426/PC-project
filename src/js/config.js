require.config({
	baseUrl : "/",
	paths : {
		jquery : "lib/jquery/jquery-1.12.4.min",
		template : "lib/art-template/template-web",
		cookie : "lib/jquery-plugins/jquery.cookie",
		zoom : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
		loadHF : "js/loadHeaderFooter",
		boots :"lib/bootstr/bootstrap.min",
		fly : "lib/jquery-plugins/jquery.fly.min"
	},
	shim : {
		zoom : {
			deps : ["jquery"]
			
		},
		boots : {
			deps : ["jquery"]
		},
		fly : {
			deps : ["jquery"]
		}
	}
});