$(function () {
    //计数器初始化
    $('.counter').countUp({
        'delay': 1,
        'time': 100
    });
    //显示二维码
    $("#index-footer-merchant").hover(
        function () {
            $("#index-tip-merchant").css('visibility','visible');
            $("#index-footer-merchant").css('color','#d91015');

        },
        function () {
            $("#index-tip-merchant").css('visibility','hidden');
            $("#index-footer-merchant").css('color','');
        }
    );
    $("#index-footer-supply").hover(
        function () {
            $("#index-tip-supply").css('visibility','visible');
            $("#index-footer-supply").css('color','#d91015');

        },
        function () {
            $("#index-tip-supply").css('visibility','hidden');
            $("#index-footer-supply").css('color','');
        }
    );
    $("#zihong-statement").hover(
        function () {
            $("#index-tip-online").css('visibility','visible');
        },
        function () {
            $("#index-tip-online").css('visibility','hidden');
        }
    );



    // //图一动画
    // $("#first-index-div").hover(
    //     function () {
    //         $("#first-index-img").addClass('bounceIn');
    //         $("#first-index-text").addClass('animated bounceIn');
    //
    //     },
    //     function () {
    //         $("#first-index-img").removeClass('bounceIn');
    //         $("#first-index-text").removeClass('animated bounceIn');
    //     }
    // );

//图二动画
    $("#second-index-div").hover(
        function () {
            $("#second-index-img").addClass('animated fadeInLeft');
        },
        function () {
            $("#second-index-img").removeClass('animated fadeInLeft');
        }
    );

    //图三字体颜

    $("#third-col-first").hover(
        function () {
            $(".third-img-first").addClass('animated pulse');
            $("#third-div-first").css('border','solid 2px #fb7519');
            $("#third-span-first").css('color','#fb7519');
        },
        function () {
            $(".third-img-first").removeClass('animated pulse');
            $("#third-div-first").css('border','solid 2px #7d7d7d');
            $("#third-span-first").css('color','#7d7d7d');
        }
    );

    $("#third-col-second").hover(
        function () {
            $(".third-img-second").addClass('animated pulse');
            $("#third-div-second").css('border','solid 2px #fb7519');
            $("#third-span-second").css('color','#fb7519');
        },
        function () {
            $(".third-img-second").removeClass('animated pulse');
            $("#third-div-second").css('border','solid 2px #7d7d7d');
            $("#third-span-second").css('color','#7d7d7d');
        }
    );
    $("#third-col-third").hover(
        function () {
            $(".third-img-third").addClass('animated pulse');
            $("#third-div-third").css('border','solid 2px #fb7519');
            $("#third-span-third").css('color','#fb7519');
        },
        function () {
            $(".third-img-third").removeClass('animated pulse');
            $("#third-div-third").css('border','solid 2px #7d7d7d');
            $("#third-span-third").css('color','#7d7d7d');
        }
    );

    //图四动画
    $("#fourth-index-div").hover(
        function () {
            $("#fourth-index-img").addClass('animated fadeInLeft');
        },
        function () {
            $("#fourth-index-img").removeClass('animated fadeInLeft');
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

function toDownAppUrl() {
    $(location).attr('href', 'https://www.zihongkeji.com/app/app_download/app_download.html');
}

$("#first-index-btn").hover(
    function () {
        $("#first-index-btn").css(hoverBlueCss);
    },
    function () {
        $("#first-index-btn").css(oldBlueCss);
    }
);
$("#second-index-btn").hover(
    function () {
        $("#second-index-btn").css(hoverBlueCss);
    },
    function () {
        $("#second-index-btn").css(oldBlueCss);
    }
);
$("#third-index-btn").hover(
    function () {
        $("#third-index-btn").css(hoverBlueCss);
    },
    function () {
        $("#third-index-btn").css(oldBlueCss);
    }
);

var hoverBlueCss = {
    border: "solid 1px #01bcf8",
    "background-color": "#01bcf8",
    color: "#ffffff"
};

var oldBlueCss = {
    'border': 'solid 1px #313131',
    'background-color': 'transparent',
    'color': '#7d7d7d'
};


//information
$("#first-information-btn").hover(
    function () {
        $("#first-information-btn").css(hoverCss);
    },
    function () {
        $("#first-information-btn").css(oldCss);
    }
);
var hoverCss = {
    border: "0px solid #ffffff",
    "background-image": "linear-gradient(60deg,#d91512 0%,#fb7719 100%)",
    color: "#f7fbfe"
};
var oldCss = {
    'border': '1px solid #d91015',
    'background-image': 'none',
    'color': '#d70b15'
};









