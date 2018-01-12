$(function () {
    var first = $('#supply-first');
    var second = $('#supply-second');
    var third = $('#supply-third');
    var fourth = $('#supply-fourth');
    var fifth = $('#supply-fifth');
    var sixth = $('#supply-sixth');

    first.hover(
        function () {
            $('.supply-first-class').css('color', '#fa7518');
            $('#supply-first-img').attr('src', 'img/supply/supply-5-1-2.png');
        },
        function () {
            $('.supply-first-class').css('color', '#7d7d7d');
            $('#supply-first-img').attr('src', 'img/supply/supply-5-1-1.png');
        }
    );
    second.hover(
        function () {
            $('.supply-second-class').css('color', '#fa7518');
            $('#supply-second-img').attr('src', 'img/supply/supply-5-2-2.png');
        },
        function () {
            $('.supply-second-class').css('color', '#7d7d7d');
            $('#supply-second-img').attr('src', 'img/supply/supply-5-2-1.png');
        }
    );
    third.hover(
        function () {
            $('.supply-third-class').css('color', '#fa7518');
            $('#supply-third-img').attr('src', 'img/supply/supply-5-3-2.png');
        },
        function () {
            $('.supply-third-class').css('color', '#7d7d7d');
            $('#supply-third-img').attr('src', 'img/supply/supply-5-3-1.png');
        }
    );
    fourth.hover(
        function () {
            $('.supply-fourth-class').css('color', '#fa7518');
            $('#supply-fourth-img').attr('src', 'img/supply/supply-5-4-2.png');
        },
        function () {
            $('.supply-fourth-class').css('color', '#7d7d7d');
            $('#supply-fourth-img').attr('src', 'img/supply/supply-5-4-1.png');
        }
    );
    fifth.hover(
        function () {
            $('.supply-fifth-class').css('color', '#fa7518');
            $('#supply-fifth-img').attr('src', 'img/supply/supply-5-5-2.png');
        },
        function () {
            $('.supply-fifth-class').css('color', '#7d7d7d');
            $('#supply-fifth-img').attr('src', 'img/supply/supply-5-5-1.png');
        }
    );
    sixth.hover(
        function () {
            $('.supply-sixth-class').css('color', '#fa7518');
            $('#supply-sixth-img').attr('src', 'img/supply/supply-5-6-2.png');
        },
        function () {
            $('.supply-sixth-class').css('color', '#7d7d7d');
            $('#supply-sixth-img').attr('src', 'img/supply/supply-5-6-1.png');
        }
    );



    $('.supply-know-more').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover-background').slideDown(200);
    });

})