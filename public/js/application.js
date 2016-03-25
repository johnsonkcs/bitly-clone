$(document).ready(function() {
	$('#headimg').mouseenter(function() {
       $(this).animate({
       	height: '+=40%',
       	width: '+=0.05%',
       });
       $('#midfade').fadeOut('slow');
    });
    $('#headimg').mouseleave(function() {
    	$(this).animate({
    	height: '-=40%',
    	width: '-=0.05%',
    	});
    	$('#midfade').fadeIn('slow');
    });

     $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });

});


confirm("|| WELCOME TO THE AVENGERS INITIATIVE!||")