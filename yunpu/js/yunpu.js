/*
* @Author: liurq
* @Date:   2016-03-28 20:28:01
* @Last Modified by:   liurq
* @Last Modified time: 2016-03-29 23:39:09
*/

'use strict';
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