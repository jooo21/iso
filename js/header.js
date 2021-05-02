$(document).ready(function(){

    $("#header").stop().animate({width: "100%"}, 500, function(){
        $(this).addClass("on");

        setTimeout(function(){
            $("#header").css({overflow: "visible"});
        },500);
    });

    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();

        if(scroll > 60 ){
            $("#header").addClass("small");
        }else {
            $("#header").removeClass("small");
        }
    });

        $(".subMenu").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("on");
            $("aside").toggleClass("on");

        })
 
});