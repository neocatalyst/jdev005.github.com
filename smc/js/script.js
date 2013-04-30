$(document).ready(function(){
    var i18n = $.i18n();

    var localRepository = {
    base : 'fonts/',
    fonts : {
           "Meera" : {
            ttf : "Meera.ttf",
            version : "0.1"
        },
        },
    languages : {   ml : [ 'Meera']    }
    };
$('body').webfonts({ repository : localRepository });

    function loadpage() {
        var obj = $(this),
            language = $(this).data("language") || "en";
        i18n.locale = language;
        $("#homepage").html(_.template($('#template-homepage').html()));
   		$( 'input,textarea' ).ime();
    }
    loadpage();
    $('.language').on('click', loadpage);
} );
