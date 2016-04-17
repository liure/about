// JavaScript Document
$(function(){	

	var num=0;
	var timer=null;

	$('.screen1').removeClass('no')

	$('.gps li').click(function(e) {
		var index=$(this).index();
		$(this).addClass('current').siblings().removeClass()
		$('.doc').stop().animate({ top:-100*index+'%' });
		num=index;
		$('.doc>div').eq(index).removeClass('no').siblings().addClass('no')
    });

	$(document).mousewheel(function(e,d){	
		clearTimeout(timer)
		timer=setTimeout(function(){	
			num-=d
			if( num>6 ){ num=6 }
			if( num<0 ){ num=0 }
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass();
			$('.doc').animate({ top:-100*num+'%' })
			//删除对应的类no它滚到哪一屏就删除哪一屏身上的.no类。
			$('.doc>div').eq(num).removeClass('no').siblings().addClass('no')
		},300)
	})
	
   var isPlaying = false; function play() { var player = document.querySelector('#test'); if (isPlaying) { player.pause(); player.src = ''; } else { player.src = 'audio/test.mp3'; player.play(); } }






	$('.screen4 .con .all li').hover(function(){
		$(this).stop().animate({opacity:1},300).siblings().animate({opacity:0.8},100)
	},function(){
		$(this).stop().animate({opacity:1},300).siblings().animate({opacity:1},100)
	})


	//screen5
	$('.screen5 ul span').hover(function(){
		$(this).stop().animate({opacity:1},1000)
	},function(){
		$(this).stop().animate({opacity:0},300)
	})


//照片动效
	var exits = ['fadeOut', 'fadeOutDown', 'fadeOutUpBig', 'bounceOut', 'bounceOutDown', 'hinge',
				'bounceOutUp', 'bounceOutLeft', 'rotateOut', 'rotateOutUpLeft', 'lightSpeedOut', 'rollOut'];

	var entrances = ['fadeIn', 'fadeInDown', 'fadeInRight', 'bounceIn', 'bounceInRight', 'rotateIn',
					 'rotateInDownLeft', 'lightSpeedIn', 'rollIn', 'bounceInDown' ]; 
	
	var photos = $('#photos'),
		ignoreClicks = false;

	$('.arrow').click(function(e, simulated){
		if(ignoreClicks){
			
			// If clicks on the arrows should be ignored,
			// stop the event from triggering the rest 
			// of the handlers
			
			e.stopImmediatePropagation();
			return false;
		}
		
		// Otherwise allo this click to proceed,
		// but raise the ignoreClicks flag
		
		ignoreClicks = true;
		
		if(!simulated){
			// Once the user clicks on the arrows,
			// stop the automatic slideshow
			clearInterval(slideshow);
		}
	});

	// Listen for clicks on the next arrow
	$('.arrow.next').click(function(e){
		
		e.preventDefault();
		
		// The topmost element
		var elem = $('#photos li:last');
		
		// Apply a random exit animation
		elem.addClass('animated')
			.addClass( exits[Math.floor(exits.length*Math.random())] );
		
		setTimeout(function(){
			
			// Reset the classes
			elem.attr('class','').prependTo(photos);
			
			// The animation is complate!
			// Allow clicks again:
			ignoreClicks = false;
			
		},1000);
	});

	// Listen for clicks on the previous arrow
	$('.arrow.previous').click(function(e){
		
		e.preventDefault();
		
		// The bottom-most element
		var elem = $('#photos li:first');
		
		// Move the photo to the top, and 
		// apply a random entrance animation
		
		elem.appendTo(photos)
			.addClass('animated')
			.addClass( entrances[Math.floor(entrances.length*Math.random())] );
		
		setTimeout(function(){
			
			// Remove the classess
			elem.attr('class','');
			
			// The animation is complate!
			// Allow clicks again:
			ignoreClicks = false;
			
		},1000);
	});


	// Start an automatic slideshow
	var slideshow = setInterval(function(){
		
		// Simulate a click every 1.5 seconds
		$('.arrow.next').trigger('click',[true]);
		
	}, 1500)




})

