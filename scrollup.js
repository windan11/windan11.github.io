var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight(); 

$(window).scroll(function(){
	didScroll = true;
});

setInterval(function(){
	if(didScroll){
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled(){
	var st = $(this).scrollTop();
	
	if(Math.abs(lastScrollTop - st) <= delta){
		return;
	}
	
	if(st > lastScrollTop && st > navbarHeight){
		//scroll down
		$('header').removeClass('nav-down').addClass('nav-up');
	} else {
		//scroll up
		if (st + $(window).height() < $(document).height()){
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	
	lastScrollTop = st;
}