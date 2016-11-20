(function ($) {
    "use strict";

    // common variable
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headTag = $('head'),
        body = $('body'),
        mainNavbar = $('.onepage .header_area.navbar'),
        isMobile = windowWidth < 768;

   
    // Video Slider js
    $('.video_slider').tubular({
        videoId: 'wAcc0K04__s'
    });

    // mobile Menu area
    $('nav.mobile_menu').meanmenu({
        meanScreenWidth: '767'
    });
    $('nav.mean-nav li > a:first-child').on('click', function () {
        $('a.meanmenu-reveal').click();
    });

    //Demo Color Box
    var borderadius = $('.radius_style'),
        colorTrigger = $('.colorDemo ul li'),
        colorBox = $('.colorDemo');
    colorTrigger.on('click', function () {
        var CCcolor = $(this).data('color'),
            colorList = colorTrigger.map(function () {
                return $(this).data('color');
            }).get();
        colorList = colorList.join(' ');
        body.removeClass(colorList).addClass(CCcolor);
        colorTrigger.removeClass('active');
        $(this).addClass('active');
    });
    $('.colorDemo > i.icon-tools-2').on('click', function () {
        colorBox.toggleClass('open');
    });

    borderadius.on('click', function () {
        body.toggleClass('border_radius');
    }); 

    /*====== camera slider ======*/
    isMobile ? windowHeight = 580 : null;
    var camWraper = $('.camera_wraper');
    if (camWraper.length) {
        camWraper.camera({
            height: windowHeight + 'px',
            pagination: false,
            autoAdvance: false,
            thumbnails: false,
            loader: false,
            playPause: false,
            fx: 'random'
        });
    }

    /*====== CounterUp ======*/
    // Jquery counterUp
    $('.counter').counterUp({
        time: 3000
    });

    // Owl Carousel for about us
    var about_slid = $('.overview_slider');
    about_slid.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
            // 600: {
            //     items: 2
            // },
            // 992: {
            //     items: 3
            // }
        }
    });

    // Owl Carousel for Speaker Slider us
    var speaker_slider = $('.speaker_slider');
    speaker_slider.owlCarousel({
        autoplay: true,
        autoplaySpeed:2000,
        autoplayHoverPause:true,
        autoplayTimeout:3000,
        loop: true,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Owl Carousel for Speaker Slider us
    var testimonial_slider = $('.testimonial_slider');
    testimonial_slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // --------- Gallery Slider ----------  //
    var gallery_sliders = $('.gallery_sliders');
    gallery_sliders.owlCarousel({
        margin: 30,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    var gallery_slider = $('.gallery_slider');
    gallery_slider.owlCarousel({
        smartSpeed: 1500,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout:3000,
        dots: false,
        autoplaySpeed:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.gallery_nav .testi_next').on('click', function () {
        gallery_slider.trigger('next.owl.carousel');
    });

    $('.gallery_nav .testi_prev').on('click', function () {
        gallery_slider.trigger('prev.owl.carousel');
    });

    var twitter_feed = $('.twitter_feed');
    twitter_feed.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // --------- 1. COUNTDOWN TIMER ----------  //
    var nextevent = $('#nextEventCountDown');
    if (nextevent.length) {
        nextevent.countDown({
            targetDate: {
                'day': 3,
                'month': 12,
                'year': 2016,
                'hour': 0,
                'min': 0,
                'sec': 0
            },
            omitWeeks: true
        });
    }

    // --------- 1. jQuery Venobox ----------  //
    // $('http://themeebit.com/demos/html/starevent/js/a.veno').venobox({
    //     numeratio: true,
    //     infinigall: true
    // });

    // --------- Program Price select ----------  //
    var $pricebox = $('.price div');

    $pricebox.on('click', function (event) {
        $pricebox.removeClass('active');
        $(this).addClass('active');

        $('.registration input[name="program"]').val($(this).find('h4').text() + ' ' + $(this).find('.amount').text());
    });

    isMobile ? $('.registration input[name="program"]').attr('placeholder', 'Select your program on the top') : null;


    //setTimeout function
    setTimeout(function () {

        // Jquery Scroll Spay
        body.scrollspy({
            target: '.navbar-collapse',
            offset: 81
        });

        // Jquery Smooth Scroll
        $('.smoth-scroll a, .go-down').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 80 + 'px'
            }, 1500, 'easeInOutCubic');
            event.preventDefault();
        });

        /*jquery nice scroll js*/
        $('html').niceScroll({
            cursorcolor: "#ff3a1e",
            cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
            cursorborder: "1px solid #ff3a1e", // css definition for cursor border
            cursorborderradius: "5px", // border radius in pixel for cursor
            scrollspeed: 100, // scrolling speed
            mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
            touchbehavior: false,
            cursorminheight: 20,
            horizrailenabled: false,
        });

        //Affix
        mainNavbar.affix({
            offset: {
                top: 80
            }
        });

    }, 500);

    // Jquery Parallax
    $(window).load(function () {
        $('.subscribe_area').parallax('50%', 0.2);
        $('.testimonial_area').parallax('50%', 0.2);
        $('.parallax_area').parallax('50%', 0.2);
        $('.pealoader_area').fadeOut(1000);

        //ColorBox Time Out
        setTimeout(function () {
            colorBox.toggleClass('open');
        }, 2000);
    });

    $(window).scroll(function () {
        //affix
        if ($(window).scrollTop() >= windowHeight - 81) {
            mainNavbar.addClass('sticky');
        } else {
            mainNavbar.removeClass('sticky');
        }
    });

    $('.back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 4000);
        return false;
    });

})(jQuery);

// Add animation/ Initialize Wow
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});
