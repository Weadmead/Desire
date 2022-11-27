$(function () {

    $('.hero__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });



    $('.blog__article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-right"></button>',
    });

    $('.contact__slider-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,      
        responsive: [
            {
                breakpoint: 1790,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 10,
                }
            },
            {
                breakpoint: 1566,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 10
                }
            },
            {
                breakpoint: 1404,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 10
                }
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 10
                }
            },
            {
                breakpoint: 1066,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 12
                }
            },
            {
                breakpoint: 888,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 15
                }
            },
            {
                breakpoint: 714,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 20,
                    
                }
            },
            {
                breakpoint: 546,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 20,
                    
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 25,
                    
                }
            },

        ]
    });

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });





});