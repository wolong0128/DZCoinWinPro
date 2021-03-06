<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>交易系统</title>
    <meta http-equiv="Content-Type" content="applicationnd.wap.xhtml+xml;charset= UTF-8" />
    <meta name="viewport" content="width=device-width; initial-scale=1.3; minimum-scale=1.0; maximum-scale=2.0"/>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="index.css"/>
    <script>
        (function(win,doc){
            win.onload=win.onresize=function(){
                doc.documentElement.style.fontSize=doc.documentElement.clientWidth*20/375+'px';
            };
        })(window,document);
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
        <ul style="width:1120px;">
            <li class="clearfix">
                <div class="left">
                    <p><span>xxxxx</span>成功猜涨西瑞烃，金豆<span>+356</span></p>
                </div>
                <div class="left">
                    <i>
                        <a href="">
                            <img src="image/btn.png"/>
                        </a>
                    </i>
                </div>
            </li>
            <li class="clearfix">
                <div class="left">
                    <p><span>xxxxx</span>成功猜涨西瑞烃，金豆<span>+300</span></p>
                </div>
                <div class="left">
                    <i>
                        <a href="">
                            <img src="image/btn.png"/>
                        </a>
                    </i>
                </div>
            </li>
            <li class="clearfix">
                <div class="left">
                    <p><span>xxxxx</span>成功猜涨西瑞烃，金豆<span>+356</span></p>
                </div>
                <div class="left">
                    <i>
                        <a href="">
                            <img src="image/btn.png"/>
                        </a>
                    </i>
                </div>
            </li>
            <li class="clearfix">
                <div class="left">
                    <p><span>xxxxx</span>成功猜涨西瑞烃，金豆<span>+300</span></p>
                </div>
                <div class="left">
                    <i>
                        <a href="">
                            <img src="image/btn.png"/>
                        </a>
                    </i>
                </div>
            </li>
        </ul>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/Marquee.js"></script>
    <script type="text/javascript">
        $(function(){
            $('#rull').kxbdSuperMarquee({
                isMarquee:true,
                isEqual:false,
                scrollDelay:50,
                controlBtn:{left:'#goLM',right:'#goRM'},
                direction:'left'
            });
        });
    </script>
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
                            <li class="one" >
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
                            <li class="one" >
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
                            <li class="one" >
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
        <script type="text/javascript">
            $(document).ready(function(){
                $(".varieties li").click(function(){
                    $(".varieties li").eq($(this).index()).addClass("active").siblings().removeClass("active");
                });
            });
            $(document).ready(function(){
                $(".k_line.show li").click(function(){
                    $(".k_line.show li").eq($(this).index()).addClass("active").siblings().removeClass("active");
                    $(".pic div").hide().eq($(this).index()).show();
                });
            });
            $(document).ready(function(){
                $(".k_line li").click(function(){
                    $(".k_line li").eq($(this).index()).addClass("active").siblings().removeClass("active");
                    $(".pic div").hide().eq($(this).index()).show();
                });
            });
        </script>
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
    <script type="text/javascript">
        $(document).ready(function(){
            var indexCount = 40;
            $(".chip .l li").click(function(){
                indexCount+=10;
                $(this).find('div').css('zIndex', indexCount)
            });
        });
        $(document).ready(function(){
            var indexCount = 40;
            $(".chip .r li").click(function(){
                indexCount+=10;
                $(this).find('div').css('zIndex', indexCount)
            });
        });
    </script>
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
</html>
