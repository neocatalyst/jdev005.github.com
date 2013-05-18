$(document).ready(function(){

    $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

    
	$("body").css("display", "none");
 
    $("body").fadeIn(2000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1500, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
	$('#nav').on("click",function(){
		$('#navigation').toggle("slow");
        $('#picbox').toggle("slow");
        $('.span5').toggle("slow")
        $('.content').toggleClass('width700');
	});

    $('.img-float').mouseover(function(){
        $(this).addClass('rotateit');
       

    });
    $('.img-float').mouseleave(function(){
        $(this).removeClass('rotateit');
        $(this).find('.front').removeClass('front').addClass('temp');
        $(this).find('.back').removeClass('back').addClass('front');
        $(this).find('.temp').removeClass('temp').addClass('back');

    });

$('#up').addClass('move-up');

});