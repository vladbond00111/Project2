$(document).ready(function () {
    let options = {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    let clientSlider = $('.client_slider');
    clientSlider.slick(options);
});