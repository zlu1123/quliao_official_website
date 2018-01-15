$(function () {
    $('.merchant-know-more').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover-background').slideDown(200);
    });

    var firstNewHtml = '<div style="padding-left: 100px;position: relative">\n' +
        '                    <div style="float: left;position: relative;top: 7px; ;width: 13px;height: 13px;background-image: linear-gradient(0deg, #d60a15 0%,#f37622 100%);border-radius: 13px"></div>\n' +
        '                    <div style="font-size: 18px;color: #585858;margin-right: 60px;">\n' +
        '                        一码搞定·快速便捷\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 40px;height: 50px;text-align: center">\n' +
        '                    <img src="img/merchant/merchant-2-4-1.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 34px;height: 152px;background-color: #d8eaf8;">\n' +
        '                    <div style="padding-top: 47px;font-size: 14px;color: #6a7d8c;">\n' +
        '                        <div>支持微信/支付宝/蚂蚁花呗/银联钱包</div>\n' +
        '                        <div>云闪付等付款方式</div>\n' +
        '                        <div>彻底告别个人收款码</div>\n' +
        '                    </div>\n' +
        '                </div>';

    var firstOldHtml = '<div style="height: 125px;">\n' +
        '                    <img src="img/merchant/merchant-2-3-1.png" class="img-responsive" style="display: inline" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 31px">\n' +
        '                    <div style="font-size: 22px;color: #585858;">\n' +
        '                        一码搞定·无手续费\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 11px">\n' +
        '                    <div style="font-size: 16px;color: #929292;">\n' +
        '                        彻底告别个人收款码\n' +
        '                    </div>\n' +
        '                </div>';

    var secondNewHtml = '<div style="padding-left: 100px;position: relative">\n' +
        '                    <div style="float: left;position: relative;top: 7px; ;width: 13px;height: 13px;background-image: linear-gradient(0deg, #d60a15 0%,#f37622 100%);border-radius: 13px"></div>\n' +
        '                    <div style="font-size: 18px;color: #585858;margin-right: 60px;">\n' +
        '                        银行清分·安全靠谱\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 40px;height: 50px;text-align: center">\n' +
        '                    <img src="img/merchant/merchant-2-4-2.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 34px;height: 152px;background-color: #d8eaf8;">\n' +
        '                    <div style="padding-top: 47px;font-size: 14px;color: #6a7d8c;">\n' +
        '                        <div>携手中国银联、招商银行、建设银行</div>\n' +
        '                        <div>浦发银行等多家官方机构</div>\n' +
        '                        <div>为您资金安全保驾护航</div>\n' +
        '                    </div>\n' +
        '                </div>';

    var secondOldHtml = '<div style="height: 125px">\n' +
        '                    <img src="img/merchant/merchant-2-3-2.png" class="img-responsive" style="display: inline" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 31px">\n' +
        '                    <div style="font-size: 22px;color: #585858;">\n' +
        '                        银行清分·安全靠谱\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 11px">\n' +
        '                    <div style="font-size: 16px;color: #929292;">\n' +
        '                        多家官方机构为您保驾护航\n' +
        '                    </div>\n' +
        '                </div>';

    var thirdNewHtml = '<div style="padding-left: 140px;position: relative">\n' +
        '                    <div style="float: left;position: relative;top: 7px; ;width: 13px;height: 13px;background-image: linear-gradient(0deg, #d60a15 0%,#f37622 100%);border-radius: 13px"></div>\n' +
        '                    <div style="font-size: 18px;color: #585858;margin-right: 120px;">\n' +
        '                        语音播报\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 40px;height: 50px;text-align: center">\n' +
        '                    <img src="img/merchant/merchant-2-4-3.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 34px;height: 152px;background-color: #d8eaf8;">\n' +
        '                    <div style="padding-top: 47px;font-size: 14px;color: #6a7d8c;">\n' +
        '                        <div>趣撩掌柜APP特色功能</div>\n' +
        '                        <div>及时语音通知商家每笔收款金额</div>\n' +
        '                        <div>解放商户眼睛，拒绝虚假支付</div>\n' +
        '                    </div>\n' +
        '                </div>';

    var thirdOldHtml = '<div style="height: 125px">\n' +
        '                    <img src="img/merchant/merchant-2-3-3.png" class="img-responsive" style="display: inline" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 31px">\n' +
        '                    <div style="font-size: 22px;color: #585858;">\n' +
        '                        语音播报\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 11px">\n' +
        '                    <div style="font-size: 16px;color: #929292;">\n' +
        '                        解放眼睛，拒绝虚假支付\n' +
        '                    </div>\n' +
        '                </div>';

    var fisrtAccountNewHtml = '<div style="margin-top: 121px">\n' +
        '                    <div style="margin-left: auto;margin-right: auto;width: 148px;height: 35px;background-image: linear-gradient(0deg, #d8151a 0%, #f37927 100%);border-radius: 15px;">\n' +
        '                        <div style="font-size: 25px;color: #ffffff;">\n' +
        '                            单单立减\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 44px;font-size: 20px;color: #929292;">\n' +
        '                    <div>店主自定义消费门槛</div>\n' +
        '                    <div>消费者满足后立享减免优惠</div>\n' +
        '                    <div>提升消费者客单价和消费频次</div>\n' +
        '                </div>';
    var fisrtAccountOldHtml = '<div style="margin-top: 101px; height: 110px">\n' +
        '                    <img src="img/merchant/merchant-3-1.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 38px">\n' +
        '                    <div style="font-size: 25px;color: #929292;">单单立减</div>\n' +
        '                    <div style="padding-top: 12px;font-size: 20px;color: #929292;">提升客户单价</div>\n' +
        '                </div>';

    var secondAccountNewHtml = '<div style="margin-top: 121px">\n' +
        '                    <div style="margin-left: auto;margin-right: auto;width: 148px;height: 35px;background-image: linear-gradient(0deg, #d8151a 0%, #f37927 100%);border-radius: 15px;">\n' +
        '                        <div style="font-size: 25px;color: #ffffff;">\n' +
        '                            客户挽回\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 44px;font-size: 20px;color: #929292;">\n' +
        '                    <div>根据店铺会员消费频次区分</div>\n' +
        '                    <div>店主可对不同客群发送到店红包</div>\n' +
        '                    <div>通过红包激活消费，唤醒沉睡消费者</div>\n' +
        '                </div>';

    var secondAccountOldHtml = '<div style="margin-top: 101px; height: 110px">\n' +
        '                    <img src="img/merchant/merchant-3-2.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 38px">\n' +
        '                    <div style="font-size: 25px;color: #929292;">客户挽回</div>\n' +
        '                    <div style="padding-top: 12px;font-size: 20px;color: #929292;"> 唤醒沉睡客户</div>\n' +
        '                </div>';

    var thirdAccountNewHtml = '<div style="margin-top: 121px">\n' +
        '                    <div style="margin-left: auto;margin-right: auto;width: 148px;height: 35px;background-image: linear-gradient(0deg, #d8151a 0%, #f37927 100%);border-radius: 15px;">\n' +
        '                        <div style="font-size: 25px;color: #ffffff;">\n' +
        '                            消费送\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div style="margin-top: 44px;font-size: 20px;color: #929292;">\n' +
        '                    <div>店主自定义活动内容</div>\n' +
        '                    <div>顾客每笔消费均得到店红包</div>\n' +
        '                    <div>连续红包刺激，增加店铺复购率</div>\n' +
        '                </div>';

    var thirdAccountOldHtml = '<div style="margin-top: 101px; height: 110px">\n' +
        '                    <img src="img/merchant/merchant-3-3.png" alt="">\n' +
        '                </div>\n' +
        '                <div style="margin-top: 38px">\n' +
        '                    <div style="font-size: 25px;color: #929292;">消费送</div>\n' +
        '                    <div style="padding-top: 12px;font-size: 20px;color: #929292;"> 提高复购率</div>\n' +
        '                </div>';
    var pay = $('#merchant-pay-first');

    pay.hover(
        function () {
            pay.css('padding', '85px 0px 0px 0px');
            pay.empty();
            pay.append(firstNewHtml);

        },
        function () {
            pay.css('padding', '94px 15px 72px 15px');
            pay.empty();
            pay.append(firstOldHtml);
        }
    );
    var bank = $('#merchant-bank-second');
    bank.hover(
        function () {
            bank.css('padding', '85px 0px 0px 0px');
            bank.empty();
            bank.append(secondNewHtml);

        },
        function () {
            bank.css('padding', '94px 15px 72px 15px');
            bank.empty();
            bank.append(secondOldHtml);
        }
    );
    var voice = $('#merchant-voice-third');
    voice.hover(
        function () {
            voice.css('padding', '85px 0px 0px 0px');
            voice.empty();
            voice.append(thirdNewHtml);
        },
        function () {
            voice.css('padding', '94px 15px 72px 15px');
            voice.empty();
            voice.append(thirdOldHtml);
        }
    );

    var accountFirst = $('#merchant-account-first');
    accountFirst.hover(
        function () {
            accountFirst.css('padding-bottom', '97px');
            accountFirst.html('');
            accountFirst.html(fisrtAccountNewHtml);

        },
        function () {
            accountFirst.css('padding-bottom', '57px');
            accountFirst.html('');
            accountFirst.html(fisrtAccountOldHtml);
        }
    );

    var accountSecond = $('#merchant-account-second');
    accountSecond.hover(
        function () {
            accountSecond.css('padding-bottom', '97px');
            accountSecond.html('');
            accountSecond.html(secondAccountNewHtml);

        },
        function () {
            accountSecond.css('padding-bottom', '57px');
            accountSecond.html('');
            accountSecond.html(secondAccountOldHtml);
        }
    );

    var accountThird = $('#merchant-account-third');
    accountThird.hover(
        function () {
            accountThird.css('padding-bottom', '97px');
            accountThird.html('');
            accountThird.html(thirdAccountNewHtml);

        },
        function () {
            accountThird.css('padding-bottom', '57px');
            accountThird.html('');
            accountThird.html(thirdAccountOldHtml);
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



