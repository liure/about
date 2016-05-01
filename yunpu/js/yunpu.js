

$(function(){
	$('.headerR li').click(function(e) {
		$(this).addClass('first').siblings().removeClass('first')
	});

	$('.navIn li').hover(function(e) {
		$(this).addClass('first').siblings().removeClass('first')
	});


	var wow = new WOW(
	  {
	    boxClass:     'wow',      
	    animateClass: 'animated', 
	    offset:       100,        
	    mobile:       true,       
	    live:         true,      
	  }
	);
	wow.init();

})