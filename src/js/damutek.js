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

    $('.popap_box').on('click',function() {
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

    $('input[type=checkbox],input[type=radio], select').styler({
        fileBrowse: 'Прикрепить изображение'
    });

    $('.js-form-request-file').styler({
        fileBrowse: 'Прикрепить',
        filePlaceholder: 'Вы можете прикрепить скринtшот вашей проблемы'
    });
    $('.js-discouont-active').on('click', function () {
        $('.form-disable').removeClass(' disable');
    });
    $('.js-discouont-disable').on('click', function () {
        $('.form-disable').addClass(' disable');
    });
    $('.js-promo').on('click', function () {
       $('.modal-content').hide();
       $('.modal-content__2').show();
    });



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

    if ($('.collapse').length) {
        $(".collapse").collapse({
            parent: false,
            toggle: false
        });
    }

    $('.js-trans').on('click', function () {
        $('.form-base--trans').toggle();
    });
    $('.js-delete').on('click', function () {
        $('.form-base--delete').toggle();
    });
    $('.js-close').on('click', function () {
        $('.form-base').hide();
    });

    $('.js-vacancy-info').on('click', function () {
        $(this).parents('.vacancy__item').find('.vacancy__contant').toggle();
    });

    $('.js-vacancy-btn').on('click', function () {
        $(this).parents('.vacancy__contant').find('.vacancy__form').toggle();
    });

});

