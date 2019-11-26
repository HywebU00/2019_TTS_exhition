// 自行加入的JS請寫在這裡
$(function() {
    // 判斷ex_btn個數
    if($('.ex_btn').length>0){
        var _btnLength = $('.ex_btn ul li').length;
        if(_btnLength ==1){
            $('.ex_btn').addClass('has_1');
        }else if(_btnLength ==2){
            $('.ex_btn').addClass('has_2');
        }else if(_btnLength ==3){
            $('.ex_btn').addClass('has_3');
        }else if(_btnLength ==4){
            $('.ex_btn').addClass('has_4');
        }
    }
    // fixed_sidebar
    if ($('.fixed_bar').length > 0) {
        $('footer').addClass('has_bottom');
        $('.scrollToTop').addClass('padding-bottom');
        $('.scrollToTop').addClass('has_bottom');
    }
    // 會員登入後
    if ($('.login_menu').length > 0) {
        $('.scrollToTop').addClass('has_bottom');
        $('footer').addClass('has_bottom');
        $('.sp .login_menu').clone().appendTo('.wrapper').addClass('m_loginmenu');
        $('.sp .login_menu>ul').clone().appendTo('.wrapper').addClass('bottom_menu');
        $('.bottom_menu').append("<div class='open_m_function'><a href='#'>more</a></div>");
        var _m_loginmenu = $('.m_loginmenu'),
            _bottom_menu = $('.bottom_menu');
        _m_loginmenu.hide();
        $(window).on("load resize", function(e) {
            _W_Height = $(this).height();
            _m_loginmenu.css('top', _W_Height);
            _open_m_function = $('.open_m_function a');
            _m_loginmenu.stop(true, true).animate({ 'top': _W_Height + 300 }, 400, 'easeOutQuint');
            $('body').removeClass('noscroll');
            _open_m_function.html('more');
            _m_menustatus = false;
        });
        var _m_menustatus = false;
        _bottom_menu.find('.open_m_function a').off().click(function(e) {
            if (!_m_menustatus) {
                _m_loginmenu.show().stop(true, true).animate({ 'top': 0 }, 400, 'easeOutQuint');
                $('body').addClass('noscroll');
                _open_m_function.html('close');
                _m_menustatus = true;
            } else {
                _m_loginmenu.stop(true, true).animate({ 'top': _W_Height + 300 }, 400, 'easeOutQuint');
                $('body').removeClass('noscroll');
                _open_m_function.html('more');
                _m_menustatus = false;
            }
            e.preventDefault();
        });
    }
    // lazyload
    // $("img.lazy").show().lazyload({
    //     placeholder: 'images/basic/placeholder.gif',
    //     effect: "fadeIn",
    //     fadeTime: 600,
    //     threshold: 200
    // });
    var lazyLoadInstance = new LazyLoad({
        elements_selector: "img.lazy",
        placeholder: '/images/basic/placeholder.gif',
        effect: "fadeIn",
        fadeTime: 600,
        threshold: 0
    });
    // 修正parallax 點不到
    if ($('.parallax').length > 0) {
        $('.parallax').parents('section').addClass('parallax_sec');
    }
    //
    $('.choose_date').find('li a').each(function(index, el) {
        $(this).off().click(function(event) {
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
        });
    });
    // 左側選單
    var left_stutus = false;
    if ($('.leftmenu').length > 0) {
        $('.leftmenu').append('<a href="#" class="toggle_btn"></a><div class="mask"></div>');
        $('.toggle_btn').removeClass('fixed');
        $('.leftmenu').siblings('.lp').addClass('padding-left');
        $('.leftmenu').siblings('.cp').addClass('padding-left');
        $(window).bind("load resize", function(e) {
            left_W = $('.leftmenu').outerWidth();
            ww = $(window).outerWidth();
            // console.log(ww);
            if ($('.product_search').length > 0 && ww <= 768) {
                $('.product_search').prependTo('.leftmenu');
            }
            if ($('.product_search').length > 0 && ww > 768) {
                $('.product_search').prependTo('.lp').show().removeAttr('style');
            }
            if (ww >= 768) {
                $('.toggle_btn').removeClass('open');
                $('.toggle_btn').siblings().show();
                $('.toggle_btn').parents('.leftmenu').removeClass('hidden').siblings('.lp').removeClass('width100');
                $('.toggle_btn').parents('.leftmenu').removeClass('hidden').siblings('.cp').removeClass('width100');
                $('.leftmenu').removeAttr('style');
                left_stutus = false;
            } else {
                $('.toggle_btn').removeClass('open');
                $('.toggle_btn').siblings().hide();
                $('.mask').show();
                left_stutus = true;
            }
            $('.toggle_btn').off().click(function(e) {
                if (ww >= 768) {
                    if (!left_stutus) {
                        $(this).siblings().hide();
                        $(this).parents('.leftmenu').addClass('hidden').siblings('.lp').addClass('width100');
                        $(this).parents('.leftmenu').addClass('hidden').siblings('.cp').addClass('width100');
                        $('.leftmenu').css('margin-left', left_W * -1);
                        left_stutus = true;
                    } else {
                        $(this).removeClass('open');
                        $(this).siblings().show();
                        $(this).parents('.leftmenu').removeClass('hidden').siblings('.lp').removeClass('width100');
                        $(this).parents('.leftmenu').removeClass('hidden').siblings('.cp').removeClass('width100');
                        $('.leftmenu').removeAttr('style');
                        left_stutus = false;
                    }
                } else {
                    if (!left_stutus) {
                        $(this).removeClass('open');
                        $(this).siblings().slideUp();
                        $('.mask').show();
                        left_stutus = true;
                    } else {
                        $(this).addClass('open');
                        $(this).siblings().slideDown();
                        $('.mask').hide();
                        left_stutus = false;
                    }
                }
                e.preventDefault();
            });
        });
    }
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
    $(window).on("load resize", function(e) {
        var WindowWidth = $(window).outerWidth(),
            cellDiv1 = $(".col-6-6").find('.col'),
            cellDiv2 = $(".topic .item").children('div'),
            cellDiv3 = $(".topic .award").children('div'),
            loactionH = $('.loaction .pic').height();
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
            $('.loaction_intro').height(loactionH);
        } else {
            $(cellDiv1, this).removeAttr('style');
            $(cellDiv2, this).removeAttr('style');
            $(cellDiv3, this).removeAttr('style');
            $('.loaction_intro').removeAttr('style');
        }
    });
    //////////////////////////////////////////////////////////////////
    // -------------------------------------------KV區塊
    if ($('.mp_slider').length > 0) {
        $('.mp_slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            arrow: false,
            pauseOnHover: false,
            cssEase: 'ease'
        });
    }
    // -------------------------------------------創新設計獎
    if ($('.award').length > 0) {
        $('.award .slider>ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            arrow: false,
            pauseOnHover: false,
            cssEase: 'ease'
        });
    }
    // -------------------------------------------跑馬燈
    if ($('.marquee').length > 0) {
        $('.marquee ul').slick({
            lazyLoad: 'ondemand',
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
            focusOnSelect: true
        });
    }
    // -------------------------------------------ad_slider
    if ($('.ad .slider').length > 0) {
        $('.col-12 .ad .slider ul,.col-12-full .ad .slider ul').slick({
            lazyLoad: 'ondemand',
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
        $('.col-6-6 .col .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-8-4 .col:nth-child(2n) .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-8-4 .col:nth-child(2n+1) .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-4-8 .col:nth-child(2n+1) .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-4-8 .col:nth-child(2n) .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-4-4-4 .col .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
        $('.col-3-3-3-3 .col .ad .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true
                }
            }]
        });
    }
    // -------------------------------------------photo_slider
    if ($('.photo .slider').length > 0) {
        $('.col-12  .photo .slider ul,.col-12-full  .photo .slider ul').slick({
            lazyLoad: 'ondemand',
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
        $('.col-6-6  .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }]
        });
        $('.col-8-4 .col:nth-child(2n+1) .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }]
        });
        $('.col-8-4 .col:nth-child(2n) .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n) .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }]
        });
        $('.col-4-8 .col:nth-child(2n+1) .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-4-4 .col .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-3-3-3-3 .col .photo .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
    }
    // -------------------------------------------video_slider
    if ($('.video .slider').length > 0) {
        $('.col-12 .video .slider ul,.col-12-full .video .slider ul').slick({
            lazyLoad: 'ondemand',
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
        $('.col-6-6 .col .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-8-4 .col:nth-child(2n) .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-8-4 .col:nth-child(2n+1) .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n+1) .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n) .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-4-4 .col .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-3-3-3-3 .col .video .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
    }
    // -------------------------------------------feature_slider
    if ($('.feature .slider').length > 0) {
        $('.col-12 .feature .slider ul,.col-12-full .feature .slider ul').slick({
            lazyLoad: 'ondemand',
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }]
        });
        $('.col-6-6 .col .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-8-4 .col:nth-child(2n) .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-8-4 .col:nth-child(2n+1) .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n+1) .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n)  .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-4-4-4 .col .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        $('.col-3-3-3-3 .col .feature .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrow: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
    }
    // -------------------------------------------product_slider
    if ($('.product .slider').length > 0) {
        $('.col-12 .product .slider ul,.col-12-full .product .slider ul').slick({
            lazyLoad: 'ondemand',
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
        $('.col-6-6 .col .product .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
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
        $('.col-8-4 .col:nth-child(2n) .product .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
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
        $('.col-8-4 .col:nth-child(2n+1) .product .slider ul').slick({
            lazyLoad: 'ondemand',
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
                    slidesToShow: 1,
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
        $('.col-4-8 .col:nth-child(2n+1) .product .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
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
        $('.col-4-8 .col:nth-child(2n) .product .slider ul').slick({
            lazyLoad: 'ondemand',
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
                    slidesToShow: 1,
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
        $('.col-4-4-4 .col .product .slider ul').slick({
            lazyLoad: 'ondemand',
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
                    slidesToShow: 1,
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
        $('.col-3-3-3-3 .col .product .slider ul').slick({
            lazyLoad: 'ondemand',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
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
    }
});
