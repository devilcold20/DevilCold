$(document).ready(function() {
    var speed=100;
	$('.banner_1 div').mouseover(function () {
		$(this).stop().animate(
            {
                width:'30%',	
            },speed)
            .siblings('img').stop().animate({
                width:'23%',
            },speed)
		
    })
     // trở về như cũ
    .mouseout(function(){
        $(this).animate({
            width:"23%"
        },speed)
    })

    
})