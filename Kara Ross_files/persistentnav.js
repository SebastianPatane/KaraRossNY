$(document).ready(function() {
		
		// ANUJ -- adding responsive restraint for hover
		
		if($(window).width() > 1200) {
		//menu code  
		$('.navmain li').hover(
			
			function () {
			$(this).find('div').css('z-index','10006').end().find('ul.submenu').css('z-index','10006').end();
			$(this).css('z-index','10006');
				$('ul.submenu', this).stop(true, true).slideDown(200);
			},
			
			function () {
				$(this).find('div').css('z-index','10003').end().find('ul.submenu').css('z-index','10003').end();
					$(this).css('z-index','10003');
				$('ul.submenu', this).stop(true, true).slideUp(200);  
				         
		});
		};
 });