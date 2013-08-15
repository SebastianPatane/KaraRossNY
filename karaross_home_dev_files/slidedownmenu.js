// JavaScript Document
//$('.navmain>li>img').hide();

function lisize(){
	var $navmainhli = $('.navmain-h>li');
	 
	var winww 		= $(window).width();
	var ulleng 		= $navmainhli.length;
	var marg 		= ulleng*4;
	var liw 		= Math.floor((winww-marg-20)/ulleng); 
	var liwAll	 	= ulleng*liw;
	var totalliw 	= marg + liwAll +6;/*windowwidth??*/
	
	var halftiw 	= Math.ceil(totalliw/2)*(-1)+4;

	$navmainhli.css('width',''+liw+'px');
	$('#homenav').css('width',''+totalliw+'px').css('position','absolute').css('left','50%').css('margin-left',''+halftiw+'px');
	}
	

$(document).ready(function(){
	lisize();
	
	//$('#homenav').css('width',''+totalliw+'').css('left','50%').css('margin','0 auto;');
	
	/*$('#homenav').css('text-align','center');*/
});

$(window).resize(function(){
	
	lisize();
	
});


$('.navmain-h> li').bind('mouseenter',function(){
	
					var $elem 		= $(this);
					var linksheight	= $elem.find('.sdt_links').height();
					var imageheight = $elem.find('.sdt_links>.menuimg').height();
					var ulheight 	= $elem.find('.sdt_links>ul').height();
					var h3height 	= $elem.find('.sdt_links>h3').height();
					var heightofbox =  imageheight+ulheight+h3height+70;
					if (ulheight == null||h3height==null||imageheight==null){heightofbox=300}
					//$('.sdt_links').height(); //+ $($elem>'.sdt_wrap'>sdt_links).height()+80;
					console.log('links: ' + linksheight + ', image: ' + imageheight +', ul: ' + ulheight + ', h3: ' + h3height);
					 //$elem.width()*1.2;//$(window).height()*.3;
					 
					 $(this).css('z-index','200');
					$elem
					
					/*.find('.sdt_wrap')
						 .stop(true)
						 .animate({
							'height':'170px',
							'top':'-30px'
						 }, {duration:400, easing:'easeOutBack', queue:false})
						 */
						 /*.animate({'height':'300px'},500,'easeOutBack')*/
						 
						.find('.div').css('z-index','200').end()
						.find('.sectionheader').addClass('sectionheadhidden')
						.stop(true)
						 .andSelf()
						 .find('.sdt_wrap')
					     .stop(true)
						 .animate({'height':heightofbox},{duration:500, easing:'easeOutBack', queue:false})
						 .animate({'marginTop':'-150px'},{duration:500, easing:'easeOutBack', queue:false})
						 .andSelf()
						  .find('.couture')
					     .stop(true)
						 .animate({'height':heightofbox},{duration:500, easing:'easeOutBack', queue:false})
						 .animate({'marginTop':'-150px'},{duration:500, easing:'easeOutBack', queue:false})
						 .andSelf()
						 .find('img')
					     .stop(true)
						 
						
				}).bind('mouseleave',function(){
					
				
					$(this).css('z-index','100');
					var $elem = $(this);
					
					
					
					$elem
					
					
					.find('.div').css('z-index','100').end()
					.find('.sdt_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf()
						
						
						 .find('.sectionheader').stop(true)
						.delay(200).queue(function(next){
    $(this).removeClass("sectionheadhidden")})
						 .andSelf()
						 
						 .find('.sdt_wrap')
					     .stop(true)
						  
						 .animate({'height':'0px'},{duration:500, easing:'easeOutBack', queue: false})
						.animate({'marginTop':'0px'},{duration:500, easing:'easeOutBack', queue: false})
						 .andSelf()
						 
						 
						.find('.couture')
					     .stop(true)
						 .animate({'height':'0px'},{duration:500, easing:'easeOutBack', queue: false})
						.animate({'marginTop':'0px'},{duration:500, easing:'easeOutBack', queue: false})
						
						
						 
				});
				
				
				
			$('.sdt_links>ul>li>a').click(function(){
				$('.navmain-h> li').unbind('mouseleave').unbind('mouseenter');
			});
				
				
          
		  
		  