$(document).ready(function() {
    $('.wq-all-imgs-mobile').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.wq-ui-imgs-carrousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});