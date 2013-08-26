$(document).ready(function () {

$('ul.subcateg').hide();//slidedown menu
$('ul.submenu').hide();//slidedown menu
$('ul.subsubmenu').hide();//slidedown menu

var touchdevice = is_touch_device();

function is_touch_device() {
  return !!('ontouchstart' in window) ? 1 : 0;
}

if(touchdevice === 1) {
  $('ul.navmain > li').click( function () {
    event.stopPropagation();
    
    var selectedElement = $(this);
    
      if(selectedElement.has("ul.submenu")){
        //$(this).find("ul.submenu").addClass("move-left").show();
        //$(this).addClass("move-top");
        //$("ul.navmain").addClass("move-left");
        //$("#res-go-back").show();
        //$(".filterbar").hide();
        selectedElement.find(".submenu").addClass("move-left").show();
        selectedElement.addClass("move-top");
        $("ul.navmain").addClass("move-left");
        $("#res-go-back").show();
        //alert('3');
      }
  });

  $('ul.navmain > li li').click( function (event)  {
    event.stopPropagation();
    var selectedElement = $(this);
    if(selectedElement.has("ul.subsubmenu")){
      
          
     //alert('li li');
       //selectedLi.css('border', '10px solid red');
       selectedElement.find(".subsubmenu").addClass("move-left").show();
       $("ul.navmain > li").addClass("move-left");
       selectedElement.addClass("move-top");
     }
  });
  
}

$("#res-go-back img").click( function() {
  $("ul.navmain").removeClass("move-left");
  $("ul.submenu").removeClass("move-left").hide();	
  $('ul.navmain > li').removeClass("move-top");
  $("#res-go-back").hide();
});

$("#res-expand-drop img").click(function() {

  if($("ul.navmain").hasClass("hide")) {
    $(".navmayfix").show();
    $("video").hide();
    $("ul.navmain").removeClass("hide");
  } else {
    $(".navmayfix").hide();
    $("video").show();
    $("ul.navmain").addClass("hide");
    $("ul.navmain").removeClass("move-left");
    $("ul.submenu").removeClass("move-left").hide();	
    $('ul.navmain > li').removeClass("move-top");
    $("#res-go-back").hide();
    $(".filterbar").show();
  }

});	

});