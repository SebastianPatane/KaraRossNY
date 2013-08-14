
$(document).ready(function () { 

	$('ul.subcateg').hide();//slidedown menu
	$('ul.submenu').hide();//slidedown menu
	
	
	$('ul.navmain > li').click( function () {
		
		if($(window).width() < 810) {
			
			if($(this).has("ul.submenu")){
				$(this).find("ul.submenu").addClass("move-left").show();
				$(this).addClass("move-top");
				$("ul.navmain").addClass("move-left");
				$("#res-go-back").show();
				$(".filterbar").hide();
			}
			
		}
		
	});
	
	if($(window).width() < 810) {
		$("body").addClass("touch");
	};
	
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
	
