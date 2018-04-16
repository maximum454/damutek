//= partials/jquery.min.js
//= partials/slick.min.js

$(function () {
    $('.js-like').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.js-reviews').slick({
        dots: false,
        arrows: true,
        infinite: true,
        mobileFirst: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            },
            {
                breakpoint: 425,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

