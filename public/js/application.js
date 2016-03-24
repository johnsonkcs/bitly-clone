$(document).ready(function() {
	$('#headimg').mouseenter(function() {
       $(this).animate({
       	height: '+=20%',
       	width: '+=0.05%',
       });
    });
    $('#headimg').mouseleave(function() {
    	$(this).animate({
    	height: '-=20%',
    	width: '-=0.05%',
    	});
    });

     $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });

});


confirm("|| WELCOME TO THE AVENGERS INITIATIVE!||")