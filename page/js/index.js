$(function(){
    //计数器初始化
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });
    //显示二维码
    $('#btn-index-contact').popover({
        placement: 'top'
    });

    //图一动画
    $("#first-index-div").hover(
        function(){
            $("#first-index-img").addClass('bounceIn');
            $("#first-index-text").addClass('animated bounceIn');

        },
        function(){
            $("#first-index-img").removeClass('bounceIn');
            $("#first-index-text").removeClass('animated bounceIn');
        }
    );
});

//二维码显示，隐藏联系方式
$('#btn-index-contact').on('shown.bs.popover', function () {
    $("#zihong-contact-info").css("visibility","hidden");
});
//二维码隐藏，显示联系方式
$('#btn-index-contact').on('hidden.bs.popover', function () {
    $("#zihong-contact-info").css("visibility","visible");
});







