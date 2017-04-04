$(function() {
    $("#navHome").click(function() {
        // remove classes from all
        $("li").removeClass("active");
    });

    $(".navOption").click(function() {
        // remove classes from all
        $(".navOption").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
  
});


/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}