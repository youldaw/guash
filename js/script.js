$(document).ready(function () {

    $(function (){
        $('input[name=phone]').mask('+7 (999) 999-99-99');
    });
    

    $('.main-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-prev-arrow.png" alt="">','<img src="images/slide-next-arrow.png" alt="">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            },
            1200:{
                items:1,
            }
        }
    });


    $('.client-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:30,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:3,
        navText: ['<img src="images/slide-prev-arrow.png" alt="">','<img src="images/slide-next-arrow.png" alt="">'],
        responsive:{
            0:{
                items:1.3,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    });


    $('.watched-slider').owlCarousel({
        loop:true,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:30,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-prev-arrow.png" alt="">','<img src="images/slide-next-arrow.png" alt="">'],
        responsive:{
            0:{
                items:1.2,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    $('.cl-slider').owlCarousel({
        loop:false,
        // autoplay : true,
        // autoplayTimeout : 8000,
        margin:20,
        nav:false,
        dots:false,
        center: false,
        smartSpeed:900,
        items:5,
        // navText: ['<img src="images/slide-prev-arrow.png" alt="">','<img src="images/slide-next-arrow.png" alt="">'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });


    $('.region-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.region-drop').toggleClass('active');
    });

    $('.menu-title').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".region-drop, .ftr-menu, .menu-title"); // тут указываем class элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });
    
    $('.cat-drop-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.cat-one').toggleClass('active');
    });

    $('.cat-drop-design').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.cat-two').toggleClass('active');
    });

    
    
    $('.menu-opener, .mob-close').on('click',function(e){
        e.preventDefault();
        $('.menu-info').toggleClass('active');
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
             $('.menu-con').addClass('sticky');
         }
         else {
             $('.menu-con').removeClass('sticky');
         }
    });


});





