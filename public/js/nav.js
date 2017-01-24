$(document).ready(function() {
    var $nav_toggle = $('.menu-button');
    var $nav_circle = $('#nav-circle');
    var $nav = $('.menu-inner');
    var $nav_list_items = $nav.find('li');
    var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
    TweenMax.set($nav_list_items, {
        transformOrigin: 'top right',
    });

    $('.menu-button, .nav-link').click(function() {
        if($(this).hasClass('active')) {
            // NAV CLOSES
            TweenMax.to($nav_circle, 0.5, {
                width: '0',
                height: '0',
                ease: Power4.easeOut,
                display: 'none',
            });
            TweenMax.set($nav, {
                pointerEvents: 'none',
            });
            TweenMax.to($nav_list_items, 0.5, {
                opacity: '0',
                // x: '-100px',
            });
            TweenMax.set($nav_list_items, {
                x: '-100px',
                delay: 0.5,
            });
        } else {
            // NAV OPENS
            TweenMax.to($nav_circle, 0.4, {
                width: diameterValue,
                height: diameterValue,
                ease: Power4.easeIn,
                display: 'block'
            });
            TweenMax.set($nav, {
                pointerEvents: 'auto',
            });
            TweenMax.staggerTo($nav_list_items, 0.5, {
                opacity: '100',
                x: 0,
                ease: Power4.easeOut,
            }, 0.15);
        }
        $('.menu-button, .nav-link, body, .menu-inner').toggleClass('active');
    });
});
/*
$(document).ready(function() {
    $(".nav-toggle, .nav-menu a").click(function() {
        $(".nav-toggle, .nav-overlay, .nav-menu").toggleClass("open");
    });

    $(window).resize(resizeNav);

    resizeNav();

});

function resizeNav() {
    // Set the nav height to fill the window
    $(".nav-menu").css({"height": window.innerHeight});

    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $(".nav-overlay").width(diameter);
    $(".nav-overlay").height(diameter);
    $(".nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
}
*/
