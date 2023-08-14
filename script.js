$(document).ready(function(){
    $('.carousel__images').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        appendDots: $('#dots'),
    });
});

// $(document).ready(function(){
//     $('.expert').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         draggable: false,
//         autoplay: false,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         pauseOnDotsHover: true,
//         appendDots: $('#dots'),
//     });
// });
