//when user scrolls down certain height 900px, show button
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	document.getElementById("scroll-up").style.display = "block";
	}else{
		document.getElementById("scroll-up").style.display ="none";
	}	
} 
