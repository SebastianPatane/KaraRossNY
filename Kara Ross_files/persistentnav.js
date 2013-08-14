$(document).ready(function() {
		
		// ANUJ -- adding responsive restraint for hover
		// SEBASTIAN -- edited so that it only triggers on touch devices

  var touchdevice = is_touch_device();

  function is_touch_device() {
    return !!('ontouchstart' in window) ? 1 : 0;
  }
  
  
		if(touchdevice === 1) {
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