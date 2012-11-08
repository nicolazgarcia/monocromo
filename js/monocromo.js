$(document).ready(function() {
  var $filterType = $('#filter li a.active').attr('data-filter');
  var $holder = $('#portfolio');
  var $data = $holder.clone();
	$('#filter li a').click(function(e) {
		$('#filter li a').removeClass('active');
		var $filterType = $(this).attr('data-filter');
		$(this).addClass('active');
		
		if ($filterType == 'all') {
			var $filteredData = $data.find('article');
		} 
		else {
			var $filteredData = $data.find('article[data-type=' + $filterType + ']');
		}
		
		// call quicksand and assign transition parameters
		$holder.quicksand($filteredData, {
			duration: 800
		});
		return false;
	});
    $('.slideshow').each(function() {
    	var $this = $(this);
    	$this.cycle({
		    containerResize: false,
          	slideResize: false,
			speed:    1000,
			timeout:  0,
			fx:       'fade',
			next:     '.next',
			prev: 	  '.prev'
	    });
	});
	$('.about_slideshow').cycle({
		containerResize: false,
        slideResize: false,
		fx: 	 'fade',
		speed:   1000,
		timeout: 3000,
		next:    'section.about'
	});
	/*
	var size = function() {
       var newHeight = $(window).height();
        $('article.project').height(newHeight);
     }
	$(window).on('resize', size);
    size();
	*/
	$(window).scroll(function() {		
	    var winHeight = $(window).height();
        var scrolled = $(window).scrollTop() > winHeight;

        if (scrolled) {
          $('.nav_projects').css({'display' : 'block', 'bottom' : '-50px', 'position' : 'fixed'}).animate({bottom: '50'},300);
        } else {
          $('.nav_projects').fadeOut();
        }
      });
	
	var next;
	$('.nextproject').click(function() {
    	if ( next === undefined ) {
        next = $('.project').next();
    	} else {
         next = next.next(); 
   	 }
    $('html,body').scrollTo(next , 1000, {margin:true} );
	return false;
	});
	/*
	$('.prev, .next').click(function () {
		var $parent = $(this).parents('.project');					
		$.scrollTo($parent, 1000);
		
	});
	*/


   /* 
   $('.slideshow').cycle({  
        fx: 'fade',
		speed:  500,
        timeout: 0,
        next: '#next',  
        prev: '#prev'  
    });
	*/
});