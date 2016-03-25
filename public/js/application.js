$(document).ready(function() {
	$('#headimg').mouseenter(function() {
       $(this).animate({
       	height: '+=20%',
       	width: '+=0.05%',
       });
       $('#midfade').fadeOut('slow');
    });
    $('#headimg').mouseleave(function() {
    	$(this).animate({
    	height: '-=20%',
    	width: '-=0.05%',
    	});
    	$('#midfade').fadeIn('slow');
    });

     $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });


    $("#url_form").submit(function(event){
    	event.preventDefault();
	    $.ajax({

	          method: "POST",  
	          url: '/urls',
	          dataType: "json",
	          data: $(this).serialize(),
	          success: function(data){
	       		
	            $("#t01").append("<tr>" +
	                "<td><li><em>"+  "<a href= "+  data['longurl'] + "  >"  + data['longurl'] + "</a></em></li></td>" +
	                "<td><p class='center'>"+  "<a href= " + data['shorturl'] +   " >"  + data['shorturl']+ "</a></p></td>" +
	                "<td><p class='center'> Visits: "+  data['click_count']  + " </p></td>" + 
	              "</tr>");
	            	// console.log("begin");
	            	// debugger;
	            	// console.log("end");
	            // $("#short_url").append("<a href= /" + data.shorturl +   " >"  + data.shorturl + "</a>");
	          },


	          error:function(data){ 
              // show default error page

              confirm("||                       PLEASE ENTER A VALID URL!                       ||")

             

              }


	          // error: function() {
           //     // $('#info').html('<p>An error has occurred</p>');
           //    window.location.href = "http://stackoverflow.com";

	          // }

	          // error: function(request, errorType, errorMessage) {
           //    alert('Error: ' + errorType + ' with message: ' + errorMessage)}
	    });
	    return false
    });

});


// confirm("|| WELCOME TO THE AVENGERS INITIATIVE!||")


// $.ajax({
//         type: "PUT",
//         url: "/games/" + gameId,
//         data: {"game_id": gameId, "player_num": player, "loser_index": loserIndex},
//         success: function(response) {
//           window.location = "/games/" + gameId;
//           },
//         error: function(request, errorType, errorMessage) {
//           alert('Error: ' + errorType + ' with message: ' + errorMessage)}


 // $("#url_form").submit(function(event){
 //    event.preventDefault();
 //    $.ajax({
 //          method: 'POST',  
 //          url: '/create',
 //          dataType: 'JSON',
 //          data: $(this).serialize(),
 //          success: function(data){
 //            $("#display_table").append("<tr>" +
 //              "<td>"+  data.id  + "</td> " +
 //                "<td>"+  "<a href= "+  data.long_url_text + "  >"  + data.long_url_text + "</a></td>" +
 //                "<td>"+  "<a href= /" + data.short_url_text +   " >"  + data.short_url_text + "</a></td>" +
 //                "<td>"+  data.click_count  + "</td>" + 
 //              "</tr>");

 //            $("#short_url").append("<a href= /" + data.short_url_text +   " >"  + data.short_url_text + "</a>");
 //          }
 //    });
 //  });


  //  $("#url_form").submit(function(event){
  //   event.preventDefault();
  //   $.ajax({
  //         method: 'post',  
  //         url: '/urls',
  //         dataType: 'JSON',
  //         data: $(this).serialize(),
  //         success: function(data){
  //           $("#t01").append("<tr>" +
  //               "<td>"+  "<a href= "+  data.longurl + "  >"  + data.longurl + "</a></td>" +
  //               "<td>"+  "<a href= /" + data.shorturl +   " >"  + data.shorturl + "</a></td>" +
  //               "<td>"+  data.click_count  + "</td>" + 
  //             "</tr>");

  //           // $("#short_url").append("<a href= /" + data.shorturl +   " >"  + data.shorturl + "</a>");
  //         }
  //   });
  // });