$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY>500){
			$(".fix").addClass("affiche");
		}
		else{
			$(".fix").removeClass("affiche");
		}
	})

	$('.fix').click(function(){
		$('html').animate({scrollTop: 0});
	})

	// typed fonction
	var typed = new Typed(".dev", {
		strings: ["intégrateur", "développeur", "freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
		});
})	