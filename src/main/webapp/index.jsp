<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>交易系统</title>
    <meta http-equiv="Content-Type" content="applicationnd.wap.xhtml+xml;charset= UTF-8"/>
    <meta name="viewport" content="width=device-width; initial-scale=1.3; minimum-scale=1.0; maximum-scale=2.0"/>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="styles/index/index.css"/>
    <script src="scripts/lib/require.js"></script>
    <script src="scripts/main.js"></script>
    <script>
        (function (win, doc) {
            win.onload = win.onresize = function () {
                doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 20 / 375 + 'px';
            };
        })(window, document);
    </script>
</head>
<body>
<div class="box">
    <div class="name clearfix">
        <div class="l left clearfix">
            <div class="left">
                <img src="styles/index/image/name.png"/>
            </div>
            <div class="left">
                <h1>GrayKam</h1>
                <p>90<span>/150</span></p>
            </div>
        </div>
        <div class="r left">
            <a href="">
                <img src="styles/index/image/detailed.png"/>
            </a>
        </div>
    </div>
    <div class="rull" id="rull">

        <ul id = "toRank" style="width:1120px;">
        </ul>
    </div>
    <!--<img src="styles/index/image/transaction3.png"/>-->
    <!--切换股票-->
    <div class="quotation">
        <div class="varieties">
            <ul>
                <li class="active">
                    <div class="var">
                        <p>西瑞烃</p>
                    </div>
                    <div class="value">
                        <span>42721</span>
                        <i style="display: ;">
                            <img src="styles/index/image/up.png"/>
                        </i>
                        <i style="display: none;">
                            <img src="styles/index/image/down.png"/>
                        </i>
                    </div>
                </li>
                <li>
                    <div class="var">
                        <p>硅品</p>
                    </div>
                    <div class="value">
                        <span>42721</span>
                        <i style="display: none;">
                            <img src="styles/index/image/up.png"/>
                        </i>
                        <i style="display: ;">
                            <img src="styles/index/image/down.png"/>
                        </i>
                    </div>
                </li>
                <li>
                    <div class="var">
                        <p>螺纹钢</p>
                    </div>
                    <div class="value">
                        <span>42721</span>
                        <i style="display: ;">
                            <img src="styles/index/image/up.png"/>
                        </i>
                        <i style="display: none;">
                            <img src="styles/index/image/down.png"/>
                        </i>
                    </div>
                </li>
            </ul>
        </div>
        <!--k线切换-->
        <div class="back">
            <div class="kk">
                <div class="k_line">
                    <ul>
                        <li class="active">
                            <p>分时</p>
                        </li>
                        <li class="">
                            <p>K线</p>
                        </li>
                        <li class="">
                            <p>分笔</p>
                        </li>
                    </ul>
                </div>
                <div class="pic">
                    <div class="l show">
                        <img src="styles/index/image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="styles/index/image/k2.png"/>
                    </div>
                    <div class="r">
                        <!--<div >-->
                        <ul class="top">
                            <li>
                                <p>时间</p>
                            </li>
                            <li style="margin-right:0.425rem;">
                                <p>价位</p>
                            </li>
                            <li>
                                <p>时间</p>
                            </li>
                            <li>
                                <p>价位</p>
                            </li>
                        </ul>
                        <!--</div>-->
                        <ul class="down">
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                            <li class="line">

                            </li>
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="kk">
                <div class="k_line shon">
                    <ul>
                        <li class="active">
                            <p>分时</p>
                        </li>
                        <li class="">
                            <p>K线</p>
                        </li>
                        <li class="">
                            <p>分笔</p>
                        </li>
                    </ul>
                </div>
                <div class="pic">
                    <div class="l show">
                        <img src="styles/index/image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="styles/index/image/k2.png"/>
                    </div>
                    <div class="r">
                        <!--<div >-->
                        <ul class="top">
                            <li>
                                <p>时间</p>
                            </li>
                            <li style="margin-right:0.425rem;">
                                <p>价位</p>
                            </li>
                            <li>
                                <p>时间</p>
                            </li>
                            <li>
                                <p>价位</p>
                            </li>
                        </ul>
                        <!--</div>-->
                        <ul class="down">
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                            <li class="line">

                            </li>
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="kk">
                <div class="k_line shon">
                    <ul>
                        <li class="active">
                            <p>分时</p>
                        </li>
                        <li class="">
                            <p>K线</p>
                        </li>
                        <li class="">
                            <p>分笔</p>
                        </li>
                    </ul>
                </div>
                <div class="pic">
                    <div class="l show">
                        <img src="styles/index/image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="styles/index/image/k2.png"/>
                    </div>
                    <div class="r">
                        <!--<div >-->
                        <ul class="top">
                            <li>
                                <p>时间</p>
                            </li>
                            <li style="margin-right:0.425rem;">
                                <p>价位</p>
                            </li>
                            <li>
                                <p>时间</p>
                            </li>
                            <li>
                                <p>价位</p>
                            </li>
                        </ul>
                        <!--</div>-->
                        <ul class="down">
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                            <li class="line">

                            </li>
                            <li class="one">
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                                <p>09:32:59</p>
                            </li>
                            <li class="two">
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                                <p>279.23</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </div>
    <!--筹码效果-->
    <div class="chip" id="chip">
        <div class="l">
            <ul>
                <li class="active">
                    <div class="one">
                        +51
                    </div>
                </li>
                <li>
                    <div class="two">
                        -34
                    </div>
                </li>
                <li>
                    <div class="thr">
                        +27
                    </div>
                </li>
                <li>
                    <div class="four">
                        +16
                    </div>
                </li>
                <li>
                    <div class="five">
                        -6
                    </div>
                </li>
                <li>
                    <div class="six">
                        +36
                    </div>
                </li>
            </ul>
        </div>

        <div class="r">
            <ul>
                <li class="active">
                    <div class="one">
                        +51
                    </div>
                </li>
                <li>
                    <div class="two">
                        -34
                    </div>
                </li>
                <li>
                    <div class="thr">
                        +27
                    </div>
                </li>
                <li>
                    <div class="four">
                        +16
                    </div>
                </li>
                <li>
                    <div class="five">
                        -6
                    </div>
                </li>
                <li>
                    <div class="six">
                        +36
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="fotter">
        <div class="center">
            <div class="l">
                <a href="">
                    <img src="styles/index/image/btn1.png"/>
                </a>
                <!--灰色状态-->
                <!--<a href="">
                    <img src="styles/index/image/btn3.png"/>
                </a>-->
            </div>
            <div class="r">
                <a href="javascript:$('.down').show()">
                    <img src="styles/index/image/btn2.png"/>
                </a>
                <!--灰色状态-->
                <!--<a href="">
                    <img src="styles/index/image/btn3.png"/>
                </a>-->
            </div>
        </div>
    </div>
</div>
<!--成功赚豆竞猜成功弹窗-->
<div class="make" style="display: none;">
    <div class="make_back"></div>
    <div class="make_bt">
        <a href="">
            <img src="styles/index/image/make_bt.png"/>
        </a>
    </div>
    <div class="content">
        <div class="top">
            <h1>+359</h1>
            <p>恭喜，竞猜成功！</p>
        </div>
        <div class="bottom">
            <div class="l">
                <img src="styles/index/image/make_fall.png"/>
            </div>
            <ul>
                <li>
                    <div class="r">
                        <p>42151</p>
                        <span>建仓</span>
                    </div>
                </li>
                <li>
                    <div class="r">
                        <p>42151</p>
                        <span>平仓</span>
                    </div>
                </li>
                <li>
                    <div class="r">
                        <p>300*5</p>
                        <span>本金</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<!--成功赚豆-->
<div class="guessing" style="display: none;">
    <div class="guessing_back"></div>
    <div class="guessing_bt">
        <a href="">
            <img src="styles/index/image/make_bt.png"/>
        </a>
    </div>
    <div class="content">
        <div class="top">
            <h1>+359</h1>
            <p>您有一笔竞猜成功</p>
        </div>
        <div class="btn">
            <a href="">
                <img src="styles/index/image/make_bt1.png"/>
            </a>
        </div>
    </div>
</div>
<!--持仓已达上限-->
<div class="limit" style="display: none;">
    <div class="limit_back"></div>
    <div class="limit_bt">
        <a href="">
            <img src="styles/index/image/make_bt.png"/>
        </a>
    </div>
    <div class="content">
        <div class="write">
            <p>您有<span>2条竞猜未开奖</span>，开奖后再试吧！</p>
        </div>
    </div>
</div>
<!--当前竞猜-->
<div class="competition" style="display: none;">
    <div class="competition_back"></div>
    <div class="competition_bt">
        <a href="">
            <img src="styles/index/image/make_bt.png"/>
        </a>
    </div>
    <div class="content">
        <div class="title">
            <p>银饰品 | 当前竞猜</p>
        </div>
        <div class="list">
            <!--<ul>-->
            <div class="back">
                <div class="once">
                    <div class="top">
                        <div class="l">
                            <p>猜涨</p>
                        </div>
                        <!--<div class="l_t">
                            <p>猜跌</p>
                        </div>-->
                        <div class="r">
                            <p>竞猜时间：2017-5-23  12:45:12</p>
                        </div>
                    </div>
                    <div class="bottom">

                        <ul>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>初始点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>当前点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p class="one">-5/7</p>
                                    <!--<p class="two">-5/7</p>-->
                                    <span>竞猜点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>下注金豆</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="once">
                    <div class="top">
                        <!--<div class="l">
                            <p>猜涨</p>
                        </div>-->
                        <div class="l_t">
                            <p>猜跌</p>
                        </div>
                        <div class="r">
                            <p>竞猜时间：2017-5-23  12:45:12</p>
                        </div>
                    </div>
                    <div class="bottom">

                        <ul>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>初始点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>当前点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <!--<p class="one">-5/7</p>-->
                                    <p class="two">5/7</p>
                                    <span>竞猜点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>下注金豆</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="once">
                    <div class="top">
                        <div class="l">
                            <p>猜涨</p>
                        </div>
                        <div class="r">
                            <p>竞猜时间：2017-5-23  12:45:12</p>
                        </div>
                    </div>
                    <div class="bottom">

                        <ul>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>初始点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>当前点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p class="one">-5/7</p>
                                    <!--<p class="two">-5/7</p>-->
                                    <span>竞猜点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>下注金豆</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="once">
                    <div class="top">
                        <!--<div class="l">
                            <p>猜涨</p>
                        </div>-->
                        <div class="l_t">
                            <p>猜跌</p>
                        </div>
                        <div class="r">
                            <p>竞猜时间：2017-5-23  12:45:12</p>
                        </div>
                    </div>
                    <div class="bottom">

                        <ul>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>初始点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>当前点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <!--<p class="one">-5/7</p>-->
                                    <p class="two">5/7</p>
                                    <span>竞猜点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>下注金豆</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="once">
                    <div class="top">
                        <div class="l">
                            <p>猜涨</p>
                        </div>
                        <div class="r">
                            <p>竞猜时间：2017-5-23  12:45:12</p>
                        </div>
                    </div>
                    <div class="bottom">

                        <ul>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>初始点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>当前点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p class="one">-5/7</p>
                                    <!--<p class="two">-5/7</p>-->
                                    <span>竞猜点位</span>
                                </div>
                            </li>
                            <li>
                                <div class="line">

                                </div>
                            </li>
                            <li>
                                <div class="write">
                                    <p>42151</p>
                                    <span>下注金豆</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <!--</ul>-->
        </div>
    </div>
</div>
<!--买跌弹窗-->
<div class="down" style="display: none;">
    <div class="down_back"></div>
    <div class="down_bt">
        <a href="javascript:$('.down').hide()">
            <img src="styles/index/image/make_bt.png"/>
        </a>
    </div>
    <div class="content">
        <div class="gold">
            <ul>
                <li>
                    <div class="title">
                        <p>金豆下注</p>
                    </div>
                </li>
                <li>
                    <div class="one">
                        <div class="l">
                            <p>100</p>
                        </div>
                        <div class="r">
                            <img src="styles/index/image/gold.png"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>500</p>
                        </div>
                        <div class="r">
                            <img src="styles/index/image/gold.png"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>1000</p>
                        </div>
                        <div class="r">
                            <img src="styles/index/image/gold.png"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>3000</p>
                        </div>
                        <div class="r">
                            <img src="styles/index/image/gold.png"/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="double">
            <ul>
                <li>
                    <div class="title">
                        <p>下注翻倍</p>
                    </div>
                </li>
                <li>
                    <div class="one">
                        <div class="l">
                            <p>不翻倍</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>5倍</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>10倍</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="thr">
                        <div class="l">
                            <p>其他<span>倍</span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="guess">
            <div class="l">
                <p>猜中即赚<span> 85</span></p>
            </div>
            <div class="r">
                <img src="styles/index/image/gold.png"/>
            </div>
        </div>
        <div class="point">
            <ul>
                <li>
                    <div class="title">
                        <p>竞猜点位</p>
                        <img src="styles/index/image/buy1.png"/>
                    </div>
                </li>
                <li>
                    <div class="one">
                        <div class="l">
                            <p>4</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>7</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="two">
                        <div class="l">
                            <p>10</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="line"></div>
        <div class="payment">
            <div class="one">
                <p>支付金豆</p>
            </div>
            <div class="two">
                <p>100</p>
            </div>
            <div class="thr">
                <p>（金额  350）</p>
            </div>
            <div class="four">
                <a href="">金豆不足，马上充值>></a>
            </div>
        </div>
        <div class="button">
            <div class="l">
                <a href="">
                    <img src="styles/index/image/btn4.png"/>
                </a>
            </div>
            <div class="r">
                <a href="">
                    <img src="styles/index/image/btn5.png"/>
                </a>
            </div>
        </div>
        <div class="fotter_b">
            <p>未结算订单将在结算时自动结算，合约定金全额返还</p>
        </div>
    </div>
</div>
</body>
<script src="scripts/lib/jquery-3.2.0.min.js"></script>
<script src="scripts/lib/Marquee.js"></script>

<script src="scripts/model/core_data.js"></script>
<script src="scripts/manage/market_manage.js"></script>
<script src="scripts/manage/coin_manage.js"></script>

<script src="scripts/components/broadcast.js"></script>
<script>
    (function (w, d) {

        $(document).ready(function () {
            $(".varieties li").click(function () {
                $(".varieties li").eq($(this).index()).addClass("active").siblings().removeClass("active");
            });
            $(".k_line.show li").click(function () {
                $(".k_line.show li").eq($(this).index()).addClass("active").siblings().removeClass("active");
                $(".pic div").hide().eq($(this).index()).show();
            });
            $(".k_line li").click(function () {
                $(".k_line li").eq($(this).index()).addClass("active").siblings().removeClass("active");
                $(".pic div").hide().eq($(this).index()).show();
            });
            var indexCount = 40;
            $(".chip .l li").click(function () {
                indexCount += 10;
                $(this).find('div').css('zIndex', indexCount)
            });
            var indexCount = 40;
            $(".chip .r li").click(function () {
                indexCount += 10;
                $(this).find('div').css('zIndex', indexCount)
            });
        });
        //模拟数据
        var host = 'http://localhost:8080/DZCoinWinPro/';
        var products = JSON.parse('[{"name":"西瑞烃","lNum":"63","lCode":"FGLGDK","eNum":"17000","eCode":"FGLGDK","unit":"瓶","S":0,"N":0,"H":0,"L":0,"O":0,"Y":0,"online":1},{"name":"硅品","lNum":"27","lCode":"000001","eNum":"17000","eCode":"000001","unit":"份","S":0,"N":0,"H":0,"L":0,"O":0,"Y":0,"online":0},{"name":"螺纹钢","lNum":"58","lCode":"SIMFOBCNY3","eNum":"17000","eCode":"SIMFOBCNY3","unit":"份","S":0,"N":0,"H":0,"L":0,"O":0,"Y":0,"online":0},{"name":"螺纹钢","lNum":"58","lCode":"SIMFOBUSD3","eNum":"17000","eCode":"SIMFOBUSD3","unit":"份","S":0,"N":0,"H":0,"L":0,"O":0,"Y":0,"online":0}]');

        Core.getInstance().host = host;
        Core.tools.setProInfo(products);

        require(['touch','config','Utils22'],function (touch,config,Utils) {
            w.Utils=Utils;
            if(config.userMockData){
                require(['mock-api'],function (mockApi) {
                    start();
                });
            }else {
                start();
            }
        });
        var start = function () {
            Broadcast.init();
        }

    })(window, document)
</script>

</html>
