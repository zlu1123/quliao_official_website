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
        },
        function () {
            $('.supply-first-class').css('color', '#7d7d7d');
        }
    );
    second.hover(
        function () {
            $('.supply-second-class').css('color', '#fa7518');
        },
        function () {
            $('.supply-second-class').css('color', '#7d7d7d');
        }
    );
    third.hover(
        function () {
            $('.supply-third-class').css('color', '#fa7518');
        },
        function () {
            $('.supply-third-class').css('color', '#7d7d7d');
        }
    );
    fourth.hover(
        function () {
            $('.supply-fourth-class').css('color', '#fa7518');
        },
        function () {
            $('.supply-fourth-class').css('color', '#7d7d7d');
        }
    );
    fifth.hover(
        function () {
            $('.supply-fifth-class').css('color', '#fa7518');
        },
        function () {
            $('.supply-fifth-class').css('color', '#7d7d7d');
        }
    );
    sixth.hover(
        function () {
            $('.supply-sixth-class').css('color', '#fa7518');
        },
        function () {
            $('.supply-sixth-class').css('color', '#7d7d7d');
        }
    );
})