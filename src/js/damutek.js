//= partials/jquery.min.js
//= partials/jquery.easing.min.js
//= partials/popper.min.js
//= partials/bootstrap.js
//= partials/slick.min.js
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/rating.js
//= partials/jquery.formstyler.js
//= partials/step-form.js


$(function () {
    /*Подробнее курс всплывашка*/
    $('.js-course-btn').on("click",function () {
        $(this).prev(".course__anons").slideToggle();
    });

    $('.js-active').on('click', function () {
        $(this).toggleClass('active');
    });

    if ($('.js-accardion').length) {
        $('.js-accardion').on('click', function () {
            $(this).toggleClass('active');
        });
    }

    $('.popap_box').click(function() {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#000'
                }
            }
        });
    });

    if ($('.js-reviews').length) {
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
    }

    /*Рейтинг*/
    $('.js-star').rating();

    $('input[type=checkbox],input[type=file], select').styler({
        fileBrowse: 'Прикрепить изображение'
    });


    if ($('.js-select').length) {
        $('.js-select').on('click', function (e) {
            e.preventDefault();
            $('.basket__item').each(function() {
                if ( $('.basket__check').attr('checked')) {
                    $('.basket__check').attr('checked', false).trigger('refresh');
                } else {
                    $('.basket__check').attr('checked', 'checked').trigger('refresh');
                }
            });
        });
    }


    if ($('.js-delet-all').length) {
        $('.js-delet-all').on('click',function (e) {
            e.preventDefault();
            $('.select-all').attr('checked', false).trigger('refresh');
            $('.basket__item').each(function() {
                $('.basket__check').attr('checked', false).trigger('refresh');
            });
        });
    }

    if ($('.js-filter-btn').length) {
        $('.js-filter-btn').on('click', function () {
            $('.filter__panel').slideToggle();
            $(this).toggleClass('active');
        });
    }

    $('.js-transcript').tooltip();

    $(".collapse").collapse({
        parent: false,
        toggle: false
    });

    $('.js-trans').on('click', function () {
        $('.form-base--trans').toggle();
    });
    $('.js-delete').on('click', function () {
        $('.form-base--delete').toggle();
    });
    $('.js-close').on('click', function () {
        $('.form-base').hide();
    });
});

