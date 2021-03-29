$(document).ready(function () {
    let $slider = $(".slider__list");
    $slider.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        // on: {
        //     ready: function () {
        //         let dotted = $('.flickity-page-dots');
        //         let paging = $('.paging .paging__dots');
        //         dotted.appendTo(paging);
        //     },
        //     change: function (index) {
        //         let number = $('.paging .paging__number');
        //         let indexPage = index + 1;
        //         number.text(indexPage.toString().padStart(2, 0));
        //     }
        // }
    })
    $(".--btnprevslider").on('click', function () {
        $slider.flickity('previous');
    })
    $(".--btnnextslider").on('click', function () {
        $slider.flickity('next');
    })


    let $carousel1 = $(".--item1");
    $carousel1.flickity({
        contain: true,
        pageDots: false,
        groupCells: true,
        prevNextButtons: false,
    })
    $(".--btnitem1 .--btnprev").on('click', function () {
        $carousel1.flickity('previous');
    })
    $(".--btnitem1 .--btnnext").on('click', function () {
        $carousel1.flickity('next');
    })

    let $carousel2 = $(".--item2");
    $carousel2.flickity({
        contain: true,
        pageDots: false,
        groupCells: true,
        prevNextButtons: false,
    })
    $(".--btnitem2 .--btnprev").on('click', function () {
        $carousel2.flickity('previous');
    })
    $(".--btnitem2 .--btnnext").on('click', function () {
        $carousel2.flickity('next');
    })

    let $carousel3 = $(".--item3");
    $carousel3.flickity({
        contain: true,
        pageDots: false,
        groupCells: true,
        prevNextButtons: false,
    })
    $(".--btnitem3 .--btnprev").on('click', function () {
        $carousel3.flickity('previous');
    })
    $(".--btnitem3 .--btnnext").on('click', function () {
        $carousel3.flickity('next');
    })

    let $carousel4 = $(".--item4");
    $carousel4.flickity({
        contain: true,
        pageDots: false,
        groupCells: true,
        prevNextButtons: false,
    })
    $(".--btnitem4 .--btnprev").on('click', function () {
        $carousel4.flickity('previous');
    })
    $(".--btnitem4 .--btnnext").on('click', function () {
        $carousel4.flickity('next');
    })

    let $carousel5 = $(".--item5");
    $carousel5.flickity({
        contain: true,
        pageDots: false,
        groupCells: true,
        prevNextButtons: false,
    })
    $(".--btnitem5 .--btnprev").on('click', function () {
        $carousel5.flickity('previous');
    })
    $(".--btnitem5 .--btnnext").on('click', function () {
        $carousel5.flickity('next');
    })


    //handle menu burger btn
    $('.menuburger').click(function () {
        $('.menu-fullscreen').addClass('active');
    })
    $('.close').click(function () {
        $('.menu-fullscreen').removeClass('active');
    })
    $('.menu-mobile__hamburger').click(function () {
        $('.menu-fullscreen').addClass('active-mobile');
    })
    $('.close').click(function () {
        $('.menu-fullscreen').removeClass('active-mobile');
    })

    $('.modal').click(function () {
        $('.menu-fullscreen').removeClass('active');
    })

    //project dropdown list toggle
    $('.categorybtn__default').click(function () {
        $('.dropdown__list').toggleClass('active');
        $('.categorybtn__default i').toggleClass('active');
    })

    $('.backtotop').click(function () {
        console.log('click');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            scrollBehavior: 'smooth'
        })
    })

    $('.btn-white, .btn-black').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        })
    });
    $('.btn-white, .btn-black').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        })
    });

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 400) {
            $('.menu-fixed').addClass('active');
        } else {
            $('.menu-fixed').removeClass('active');
        }
    })
})

//Loading page
$(window).on('load', function () {
    setTimeout(() => {
        $('.loader').fadeOut(1000)
    }, 500)
})
