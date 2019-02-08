;(function($) {
$(document).ready(function(){
    /*sticky menu when scroll*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".main-menu-section").addClass("sticky_menu");
        } else {
            $(".main-menu-section").removeClass("sticky_menu");
        }
    });
    /*hero slider*/
    $('#hero-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        nav:true,
        dots:false,
        mouseDrag:false,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:1,
                nav:true,
                loop:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    /*slider animation*/
    $('#hero-slider').on('translate.owl.carousel',function () {
        $('.slide-content h2, .motiraj-btn').removeClass('animated fadeInDown').css('opacity','0');
        $('.slide-content h3').removeClass('animated slideInLeft').css('opacity','0');
        $('.slide-content h4').removeClass('animated slideInRight').css('opacity','0');
    });
    $('#hero-slider').on('translated.owl.carousel',function () {
        $('.slide-content h2, .motiraj-btn').addClass('animated fadeInDown').css('opacity','1');
        $('.slide-content h3').addClass('animated slideInLeft').css('opacity','1');
        $('.slide-content h4').addClass('animated slideInRight').css('opacity','1');
    });

/*feedback carousel*/
    $('#feedback-slider').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:1,
                nav:true,
                loop:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    /*back to top show when scroll*/
    $(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

});

    /*gallery area*/
    $('#gallery_filter').mixItUp();

    /*magnific popup*/
    $('.single-image').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
    });
})( jQuery );