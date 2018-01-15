$(function () {
    $('.merchant-know-more').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover-background').slideDown(200);
    });


    var pay = $('#merchant-pay-first');

    pay.hover(
        function () {
            pay.css('padding', '77px 0px 0px 0px');
            $('#merchant-pay-first-old').css('display','none');
            $('#merchant-pay-first-new').css('display','block');
        },
        function () {
            pay.css('padding', '94px 15px 72px 15px');
            $('#merchant-pay-first-old').css('display','block');
            $('#merchant-pay-first-new').css('display','none');
        }
    );
    var bank = $('#merchant-bank-second');
    bank.hover(
        function () {
            bank.css('padding', '77px 0px 0px 0px');
            $('#merchant-bank-second-old').css('display','none');
            $('#merchant-bank-second-new').css('display','block');

        },
        function () {
            bank.css('padding', '94px 15px 72px 15px');
            $('#merchant-bank-second-old').css('display','block');
            $('#merchant-bank-second-new').css('display','none');
        }
    );
    var voice = $('#merchant-voice-third');
    voice.hover(
        function () {
            voice.css('padding', '77px 0px 0px 0px');
            $('#merchant-voice-third-old').css('display','none');
            $('#merchant-voice-third-new').css('display','block');
        },
        function () {
            voice.css('padding', '94px 15px 72px 15px');
            $('#merchant-voice-third-new').css('display','none');
            $('#merchant-voice-third-old').css('display','block');
        }
    );

    var accountFirst = $('#merchant-account-first');
    accountFirst.hover(
        function () {
            accountFirst.css('padding-bottom', '97px');
            $('#merchant-account-first-old').css('display','none');
            $('#merchant-account-first-new').css('display','block');

        },
        function () {
            accountFirst.css('padding-bottom', '67px');
            $('#merchant-account-first-new').css('display','none');
            $('#merchant-account-first-old').css('display','block');
        }
    );

    var accountSecond = $('#merchant-account-second');
    accountSecond.hover(
        function () {
            accountSecond.css('padding-bottom', '97px');
            $('#merchant-account-second-old').css('display','none');
            $('#merchant-account-second-new').css('display','block');

        },
        function () {
            accountSecond.css('padding-bottom', '67px');
            $('#merchant-account-second-new').css('display','none');
            $('#merchant-account-second-old').css('display','block');
        }
    );

    var accountThird = $('#merchant-account-third');
    accountThird.hover(
        function () {
            accountThird.css('padding-bottom', '97px');
            $('#merchant-account-third-old').css('display','none');
            $('#merchant-account-third-new').css('display','block');

        },
        function () {
            accountThird.css('padding-bottom', '67px');
            $('#merchant-account-third-new').css('display','none');
            $('#merchant-account-third-old').css('display','block');
        }
    );
});

$("#first-merchant-btn").hover(
    function () {
        $("#first-merchant-btn").css(hoverCss);
    },
    function () {
        $("#first-merchant-btn").css(oldCss);
    }
);
$("#second-merchant-btn").hover(
    function () {
        $("#second-merchant-btn").css(hoverCss);
    },
    function () {
        $("#second-merchant-btn").css(oldCss);
    }
);
$("#third-merchant-btn").hover(
    function () {
        $("#third-merchant-btn").css(hoverCss);
    },
    function () {
        $("#third-merchant-btn").css(oldCss);
    }
);

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



