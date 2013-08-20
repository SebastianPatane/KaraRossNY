
	$(document).ready(function () { 

$('ul.subcateg').hide();//slidedown menu
	$('ul.submenu').hide();//slidedown menu
	
	
  $('#header-menu>ul>li').hover( //slidedown menu
	
        function () {
			
           $(this).find($('ul.submenu')).stop(true, true).slideDown(200);
		  
		   			
		   
        },
        function () {
			
			 $(this).find($('ul.submenu')).slideUp(200); 
			
                     
        });
	
	$('ul.submenu>li').hover( //slidedown menu
							
        			function () {  
					
					/*$(this).find($('ul.subcateg')).slideDown(200);*/
					$('ul.submenu').css('overflow','visible');
					$(this).find($('ul.subcateg')).show();
					
					},  
					function () { 
					
					 /*$(this).find($('ul.subcateg')).slideUp(200); */
					 $(this).find($('ul.subcateg')).hide();
					
					});		
	


	
});
	
