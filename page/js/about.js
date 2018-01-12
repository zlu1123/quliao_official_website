$(function(){

    //替换二维码
    // $("#contact-us-first").hover(
    //     function(){
    //         $("#contact-us-first-img").attr('src','img/about/about-hover-code.png');
    //     },
    //     function(){
    //         $("#contact-us-first-img").attr('src','img/about/about-normal-code.png');
    //     }
    // );

//替换二维码
//     $("#contact-us-second").hover(
//         function(){
//             $("#contact-us-second-img").attr('src','img/about/about-hover-code.png');
//         },
//         function(){
//             $("#contact-us-second-img").attr('src','img/about/about-normal-code.png');
//         }
//     );
//替换二维码
//     $("#contact-us-third").hover(
//         function(){
//             $("#contact-us-third-img").attr('src','img/about/about-hover-code.png');
//         },
//         function(){
//             $("#contact-us-third-img").attr('src','img/about/about-normal-code.png');
//         }
//     );

    $("#culture-first").hover(
        function(){
            $("#culture-first-title").addClass('about-culture-title-hover');
            $("#culture-first-img").addClass('about-culture-img-hover');
            $("#culture-first-text-first").addClass('about-culture-text-hover');
            $("#culture-first-text-second").addClass('about-culture-text-hover');
            $("#culture-first-text-second").css('display','block');

        },
        function(){
            $("#culture-first-title").removeClass('about-culture-title-hover');
            $("#culture-first-img").removeClass('about-culture-img-hover');
            $("#culture-first-text-first").removeClass('about-culture-text-hover');
            $("#culture-first-text-second").removeClass('about-culture-text-hover');
            $("#culture-first-text-second").css('display','');
        }
    );

    $("#culture-second").hover(
        function(){
            $("#culture-second-title").addClass('about-culture-title-hover');
            $("#culture-second-img").addClass('about-culture-img-hover');
            $("#culture-second-text").addClass('about-culture-text-hover');
            $("#culture-second").css('padding-bottom','58px');

        },
        function(){
            $("#culture-second-title").removeClass('about-culture-title-hover');
            $("#culture-second-img").removeClass('about-culture-img-hover');
            $("#culture-second-text").removeClass('about-culture-text-hover');
            $("#culture-second").css('padding-bottom','0');
        }
    );
    $("#culture-third").hover(
        function(){
            $("#culture-third-title").addClass('about-culture-title-hover');
            $("#culture-third-img").addClass('about-culture-img-hover');
            $("#culture-third-text").addClass('about-culture-text-hover');
            $("#culture-third").css('padding-bottom','58px');
        },
        function(){
            $("#culture-third-title").removeClass('about-culture-title-hover');
            $("#culture-third-img").removeClass('about-culture-img-hover');
            $("#culture-third-text").removeClass('about-culture-text-hover');
            $("#culture-third").css('padding-bottom','0');
        }
    );

    $("#culture-fourth").hover(
        function(){
            $("#culture-fourth-title").addClass('about-culture-title-hover');
            $("#culture-fourth-img").addClass('about-culture-img-hover');
            $("#culture-fourth-text-first").addClass('about-culture-text-hover');
            $("#culture-fourth-text-second").addClass('about-culture-text-hover');
            $("#culture-fourth-text-second").css('display','block');

        },
        function(){
            $("#culture-fourth-title").removeClass('about-culture-title-hover');
            $("#culture-fourth-img").removeClass('about-culture-img-hover');
            $("#culture-fourth-text-first").removeClass('about-culture-text-hover');
            $("#culture-fourth-text-second").removeClass('about-culture-text-hover');
            $("#culture-fourth-text-second").css('display','');
        }
    );
});








