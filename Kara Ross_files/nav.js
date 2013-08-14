// SEBASTIAN - changed detection from browser size to touch screen to trigger
// responsive menu on touch devices

$(document).ready(function () { 

	$('ul.subcateg').hide();//slidedown menu
	$('ul.submenu').hide();//slidedown menu
	
	 var touchdevice = is_touch_device();

  function is_touch_device() {
    return !!('ontouchstart' in window) ? 1 : 0;
  }

	$('ul.navmain > li').click( function () {
		
		if(touchdevice === 1) {
			
			if($(this).has("ul.submenu")){
				$(this).find("ul.submenu").addClass("move-left").show();
				$(this).addClass("move-top");
				$("ul.navmain").addClass("move-left");
				$("#res-go-back").show();
				$(".filterbar").hide();
			}
			
		}
		
	});
	

	$("#res-go-back img").click( function() {
		$("ul.navmain").removeClass("move-left");
		$("ul.submenu").removeClass("move-left").hide();	
		$('ul.navmain > li').removeClass("move-top");
		$("#res-go-back").hide();
	});
	
	$("#res-expand-drop img").click(function() {
		
		if($("ul.navmain").hasClass("hide")) {
			$("ul.navmain").removeClass("hide");
		} else {
			$("ul.navmain").addClass("hide");
			$("ul.navmain").removeClass("move-left");
			$("ul.submenu").removeClass("move-left").hide();	
			$('ul.navmain > li').removeClass("move-top");
			$("#res-go-back").hide();
			$(".filterbar").show();
		}
			
	});	
		
});
	
