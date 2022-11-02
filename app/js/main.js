$(function () {

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