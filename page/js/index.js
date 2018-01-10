$(function () {
    //计数器初始化
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    $('#company').popover();
    $('#merchant').popover();
    $('#supply').popover();
    $('#vpn').popover();
    $('#advice').popover();

    //显示二维码
    $('#btn-index-contact').popover({
        placement: 'top'
    });

    //图一动画
    $("#first-index-div").hover(
        function () {
            $("#first-index-img").addClass('bounceIn');
            $("#first-index-text").addClass('animated bounceIn');

        },
        function () {
            $("#first-index-img").removeClass('bounceIn');
            $("#first-index-text").removeClass('animated bounceIn');
        }
    );

//图二动画
    $("#second-index-div").hover(
        function () {
            $("#second-index-img-first").addClass('rollIn');
            $("#second-index-img-second").addClass('rollIn');
            $("#second-index-text").addClass('animated bounceIn');
            // $("#first-index-text").addClass('animated bounceIn');

        },
        function () {
            $("#second-index-img-first").removeClass('rollIn');
            $("#second-index-img-second").removeClass('rollIn');
            $("#second-index-text").removeClass('animated bounceIn');
            // $("#first-index-text").removeClass('animated bounceIn');
        }
    );

    // 图三字体颜色
    $("#third-index-div").hover(
        function () {
            $("#third-div-first").css('border','solid 2px #fb7519');
            $("#third-span-first").css('color','#fb7519');
            $("#third-div-second").css('border','solid 2px #fb7519');
            $("#third-span-second").css('color','#fb7519');
            $("#third-div-third").css('border','solid 2px #fb7519');
            $("#third-span-third").css('color','#fb7519');
        },
        function () {
            $("#third-div-first").css('border','solid 2px #7d7d7d');
            $("#third-span-first").css('color','#7d7d7d');
            $("#third-div-second").css('border','solid 2px #7d7d7d');
            $("#third-span-second").css('color','#7d7d7d');
            $("#third-div-third").css('border','solid 2px #7d7d7d');
            $("#third-span-third").css('color','#7d7d7d');
        }
    );

    // 图五动画
    $("#fifth-div-first").hover(
        function () {
            $("#fifth-img-first").addClass('animated pulse');
            $("#fifth-span-first").css('color','#fb7519');
        },
        function () {
            $("#fifth-img-first").removeClass('animated pulse');
            $("#fifth-span-first").css('color','#7d7d7d');
        }
    );

    $("#fifth-div-second").hover(
        function () {
            $("#fifth-img-second").addClass('animated pulse');
            $("#fifth-span-second").css('color','#fb7519');
        },
        function () {
            $("#fifth-img-second").removeClass('animated pulse');
            $("#fifth-span-second").css('color','#7d7d7d');
        }
    );
    $("#fifth-div-third").hover(
        function () {
            $("#fifth-img-third").addClass('animated pulse');
            $("#fifth-span-third").css('color','#fb7519');
        },
        function () {
            $("#fifth-img-third").removeClass('animated pulse');
            $("#fifth-span-third").css('color','#7d7d7d');
        }
    );
    $("#fifth-div-fourth").hover(
        function () {
            $("#fifth-img-fourth").addClass('animated pulse');
            $("#fifth-span-fourth").css('color','#fb7519');
        },
        function () {
            $("#fifth-img-fourth").removeClass('animated pulse');
            $("#fifth-span-fourth").css('color','#7d7d7d');
        }
    );
    $("#fifth-div-fifth").hover(
        function () {
            $("#fifth-img-fifth").addClass('animated pulse');
            $("#fifth-span-fifth").css('color','#fb7519');
        },
        function () {
            $("#fifth-img-fifth").removeClass('animated pulse');
            $("#fifth-span-fifth").css('color','#7d7d7d');
        }
    );

//二维码显示，隐藏联系方式
    $('#btn-index-contact').on('shown.bs.popover', function () {
        $("#zihong-contact-info").css("visibility", "hidden");
    });
//二维码隐藏，显示联系方式
    $('#btn-index-contact').on('hidden.bs.popover', function () {
        $("#zihong-contact-info").css("visibility", "visible");
    });

//了解更多
    $('.know-more').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover-background').slideDown(200);
    });
    $('#index-close-pop').click(function () {
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover-background').slideUp(200);
    });
});

$('#btn-index-close').click(function () {
    $('.theme-popover-mask').fadeOut(100);
    $('.theme-popover-background').slideUp(200);
});









