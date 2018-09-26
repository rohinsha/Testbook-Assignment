$(document).ready(function(){
	//$(".nav-overlay").hide();
 	$(".main-sidebar-list li").on('click',function(e){
 		e.preventDefault();
 		$(".main-sidebar-list li.active").removeClass('active');
 		$(this).addClass('active');
	});



/*$(document.body).click(function(event) {
		// console.log(event.target);
	    if ($(event.target).closest('.main-sidebar,.customHamburger').length === 0) {
	    	$('.main-sidebar').hide();
	        $(".nav-overlay").hide();
	        $(".sidebar").removeClass('bar');
	        $('body').removeClass("fixedPosition");
	    }
	    else
	    	$(".main-sidebar").show();
	});*/
	    	
});

	$(document).on('click', '.customHamburger', function() {
		console.log("djfdf");
		$(".main-sidebar").toggleClass('bar');
		//$(".sub-sidebar-container").toggleClass('menuInner');
		
  		/*if($(".main-sidebar").hasClass('bar')){
  			$('body').addClass("fixedPosition");
  			$(".nav-overlay").show();
  		}else{
  			$(".nav-overlay").hide();
  			$('body').removeClass("fixedPosition");
	   }*/
	});