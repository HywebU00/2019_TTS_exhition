// 自行加入的JS請寫在這裡
$(function() {
    // lazyload  
    //可以指定你想要的元素做lazyload
    $(".img-container img").lazyload({
        effect: "fadeIn"
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
    });
    // 
    $('.mp_slider ul').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        arrow: false,
        pauseOnHover: false,
        cssEase: 'ease'
    });
    $('.award .slider>ul').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        arrow: false,
        pauseOnHover: false,
        cssEase: 'ease'
    });
    // 跑馬燈
    $('.marquee ul').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        autoplaySpeed: 1500,
        speed: 1000,
        // centerMode: true,
        focusOnSelect: true,
        //      responsive: [{
        //          breakpoint: 990,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2
        //          }
        //      }, {
        //          breakpoint: 600,
        //          settings: {
        //              slidesToShow: 2,
        //              slidesToScroll: 2,
        //              vertical: false,
        //              verticalSwiping: false
        //          }
        //      }, {
        //          breakpoint: 480,
        //          settings: {
        //              slidesToShow: 1,
        //              slidesToScroll: 1,
        //              vertical: false,
        //              verticalSwiping: false
        //          }
        //      }]
    });
    // ad_slider
    $('.ad .slider ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.photo .slider ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.video .slider ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // feature_slider
    $('.feature .slider ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // feature_slider
    $('.product .slider ul').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 
    $(window).on("load resize", function(e) {
        var WindowWidth = $(window).outerWidth();
        var cellDiv1 = $(".col-6-6").find('.col');
        var cellDiv2 = $(".topic .item").children('div');
        var cellDiv3 = $(".topic .award").children('div');
        var loactionH = $('.loaction .pic').height();
        console.log(loactionH);
        if (WindowWidth >= 768) {
            $('.loaction_intro').height(loactionH);
            $(".col-6-6 .container").each(function() {
                var highestBox = 0;
                $(cellDiv1, this).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();
                    }
                });
                $(cellDiv1, this).height(highestBox);
            });
            $(".topic .item").children('div').each(function() {
                var highestBox = 0;
                $(cellDiv2, this).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();
                    }
                });
                $(cellDiv2, this).height(highestBox);
            });
             $(".award .item").children('div').each(function() {
                var highestBox = 0;
                $(cellDiv3, this).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();
                    }
                });
                $(cellDiv3, this).height(highestBox);
            });
        } else {
            $(cellDiv1, this).removeAttr('style');
            $(cellDiv2, this).removeAttr('style');
            $('.loaction_intro').removeAttr('style');
        }
    });
});