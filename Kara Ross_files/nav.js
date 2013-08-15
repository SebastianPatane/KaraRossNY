// SEBASTIAN - changed detection from browser size to touch screen to trigger
// responsive menu on touch devices

$(document).ready(function () { 

	$('ul.subcateg').hide();//slidedown menu
	$('ul.submenu').hide();//slidedown menu
	
	
	// adding touch detection.
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
	  
		// SEBASTIAN: this hides the video on the homepage
		if($('video').hasClass("hide")) {
		  $('video').removeClass("hide");
		  $('.footer').removeClass("hide");
		  //$('.home-logo').css('margin-bottom', '400px');
    } else {
		  $('video').addClass('hide');
		  $('.footer').addClass("hide");
		}
		
		/// SEBASTIAN: this controls interaction with the submenus on Site
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
	
