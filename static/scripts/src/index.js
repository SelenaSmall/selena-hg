$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").css('visibility','visible').fadeIn();
            $("nav > div.nav-toggle").css('visibility','visible').fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").css('visibility','hidden').fadeOut();
            $("nav > div.nav-toggle").css('visibility','hidden').fadeOut();
        }
    });

    // Full screen nav open on click
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(this).find("img").toggle();
    });

    // Full screen nav close on click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // Highlight.js initialization
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});