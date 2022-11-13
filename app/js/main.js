$(function () {

    $('.blog__article-slider__box').slick({        
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-right"></button>' ,     
    }); 

    $('.contact__slider-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
    });

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });    
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });    

    var mixer = mixitup('.gallery__inner', {
        load : {
            filter: '.living'
        }
    });

    $('.hero__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    }); 


    
});