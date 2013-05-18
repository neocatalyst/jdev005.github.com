$(document).ready(function(){



	$("body").css("display", "none");
 
    $("body").fadeIn(2000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1500, redirectPage);     
    });
         
    if(window.outerWidth<1330){
        $('.span5').hide();
    }


    function redirectPage() {
        window.location = linkLocation;
    }
	$('#nav').on("click",function(){
		$('#navigation').toggle("slow");
        $('#picbox').toggle("slow");
        $('.span5').toggle("slow");
        $('#buffer').toggle("slow");
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

setTimeout(function(){
$('#up').addClass('move-up');
},3000)

});

$(window).load(function() { // makes sure the whole site is loaded
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        })