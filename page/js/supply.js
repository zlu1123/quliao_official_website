$(function () {
    $('.supply-know-more').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover-background').slideDown(200);
    });
});

var first = $('#supply-first'),
    second = $('#supply-second'),
    third = $('#supply-third'),
    fourth = $('#supply-fourth'),
    fifth = $('#supply-fifth'),
    sixth = $('#supply-sixth');

var firstClass = $('.supply-first-class'),
    firstImgOld = $('#supply-first-img-old'),
    firstImgNew = $('#supply-first-img-new'),
    secondClass = $('.supply-second-class'),
    secondImgOld = $('#supply-second-img-old'),
    secondImgNew = $('#supply-second-img-new'),
    thirdClass = $('.supply-third-class'),
    thirdImgOld = $('#supply-third-img-old'),
    thirdImgNew = $('#supply-third-img-new'),
    fourthClass = $('.supply-fourth-class'),
    fourthImgOld = $('#supply-fourth-img-old'),
    fourthImgNew = $('#supply-fourth-img-new'),
    fifthClass = $('.supply-fifth-class'),
    fifthImgOld = $('#supply-fifth-img-old'),
    fifthImgNew = $('#supply-fifth-img-new'),
    sixthClass = $('.supply-sixth-class'),
    sixthImgOld = $('#supply-sixth-img-old'),
    sixthImgNew = $('#supply-sixth-img-new');


first.hover(
    function () {
        firstClass.css('color', '#fa7518');
        firstImgNew.css('display', 'block');
        firstImgOld.css('display', 'none');
    },
    function () {
        firstClass.css('color', '#7d7d7d');
        firstImgNew.css('display', 'none');
        firstImgOld.css('display', 'block');
    }
);
second.hover(
    function () {
        secondClass.css('color', '#fa7518');
        secondImgNew.css('display', 'block');
        secondImgOld.css('display', 'none');
    },
    function () {
        secondClass.css('color', '#7d7d7d');
        secondImgNew.css('display', 'none');
        secondImgOld.css('display', 'block');
    }
);
third.hover(
    function () {
        thirdClass.css('color', '#fa7518');
        thirdImgNew.css('display', 'block');
        thirdImgOld.css('display', 'none');
    },
    function () {
        thirdClass.css('color', '#7d7d7d');
        thirdImgNew.css('display', 'none');
        thirdImgOld.css('display', 'block')
    }
);
fourth.hover(
    function () {
        fourthClass.css('color', '#fa7518');
        fourthImgNew.css('display', 'block');
        fourthImgOld.css('display', 'none');
    },
    function () {
        fourthClass.css('color', '#7d7d7d');
        fourthImgNew.css('display', 'none');
        fourthImgOld.css('display', 'block');
    }
);
fifth.hover(
    function () {
        fifthClass.css('color', '#fa7518');
        fifthImgNew.css('display', 'block');
        fifthImgOld.css('display', 'none');
    },
    function () {
        fifthClass.css('color', '#7d7d7d');
        fifthImgNew.css('display', 'none');
        fifthImgOld.css('display', 'block');
    }
);
sixth.hover(
    function () {
        sixthClass.css('color', '#fa7518');
        sixthImgNew.css('display', 'block');
        sixthImgOld.css('display', 'none');
    },
    function () {
        sixthClass.css('color', '#7d7d7d');
        sixthImgNew.css('display', 'none');
        sixthImgOld.css('display', 'block');
    }
);

$('.supply-know-more').click(function () {
    $('.theme-popover-mask').fadeIn(100);
    $('.theme-popover-background').slideDown(200);
});


$("#first-supply-btn").hover(
    function () {
        $("#first-supply-btn").css(hoverCss);
    },
    function () {
        $("#first-supply-btn").css(oldCss);
    }
);
$("#second-supply-btn").hover(
    function () {
        $("#second-supply-btn").css(hoverCss);
    },
    function () {
        $("#second-supply-btn").css(oldCss);
    }
);
$("#third-supply-btn").hover(
    function () {
        $("#third-supply-btn").css(hoverCss);
    },
    function () {
        $("#third-supply-btn").css(oldCss);
    }
);

var hoverCss = {
    border: "solid 1px #01bcf8",
    "background-color": "#01bcf8",
    color: "#ffffff"
};

var oldCss = {
    'border': 'solid 1px #313131',
    'background-color': 'transparent',
    'color': '#7d7d7d'
};