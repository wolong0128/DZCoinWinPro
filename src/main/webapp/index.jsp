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
                <img src="image/name.png"/>
            </div>
            <div class="left">
                <h1>GrayKam</h1>
                <p>90<span>/150</span></p>
            </div>
        </div>
        <div class="r left">
            <a href="">
                <img src="image/detailed.png"/>
            </a>
        </div>
    </div>
    <div class="rull" id="rull">
        <ul id = "toRank" style="width:1120px;">
        </ul>
    </div>
    <!--<img src="image/transaction3.png"/>-->
    <!--切换-->
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
                            <img src="image/up.png"/>
                        </i>
                        <i style="display: none;">
                            <img src="image/down.png"/>
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
                            <img src="image/up.png"/>
                        </i>
                        <i style="display: ;">
                            <img src="image/down.png"/>
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
                            <img src="image/up.png"/>
                        </i>
                        <i style="display: none;">
                            <img src="image/down.png"/>
                        </i>
                    </div>
                </li>
            </ul>
        </div>
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
                        <img src="image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="image/k2.png"/>
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
                        <img src="image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="image/k2.png"/>
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
                        <img src="image/k1.png"/>
                    </div>
                    <div class="m shon">
                        <img src="image/k2.png"/>
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
                    <img src="image/btn1.png"/>
                </a>
            </div>
            <div class="r">
                <a href="">
                    <img src="image/btn2.png"/>
                </a>
            </div>
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
