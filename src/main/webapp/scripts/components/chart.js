/**
 * Created by zhangzilong on 17-4-7.
 */
var ChartJs = {
    state: {
        proIndex: 0,
        showType: 'L',
    },
    init: function (host,productData) {
        Core.tools.setProInfo(productData)
        var newProData = [];
        for(var i=0;i<productData.length;i++){
            if(productData[i].online==1){
                newProData.push(productData[i])
            }
        }
        productData = newProData;
        var initParam = {
            host: host,
            initValue: productData
        };
        //切换个商品
        if(productData.length==1){
            for(var i=0;i<productData.length;i++){
                var position = i==0?'left':'right';
                var active = i==0?'active':'';
                var indexStr = i==0?'one':'two';
                var text = [
                    '<li class="'+active+'">',
                    '   <div class="'+position+' l" id="'+position+'">',
                    '       <p>' + productData[i].name + '</p>',
                    '       <div class="wrap">',
                    '           <div class="inwrap">',
                    '               <ul class="page">',
                    '                   <li style="display:">',
                    '                       <span id="'+position+'_pro_val" class="left '+indexStr+'">-</span>',
                    '                   </li>',
                    '                   <li style="display:;">',
                    '                       <p id="arrow_'+i+'_red" class="left red b_b" style="display: ;"></p>',
                    '                       <p id="arrow_'+i+'_green" class="left green b_t" style="display: none;"></p>',
                    '                   </li>',
                    '               </ul>',
                    '           </div>',
                    '       </div>',
                    '   </div>',
                    '</li>',
                ];
                $('.nav_list .ul').append(text.join(""))
            };
            $("#list").attr('class','nav_one');
        }else if(productData.length==2){
            for(var i=0;i<productData.length;i++){
                var position = i==0?'left':'right';
                var active = i==0?'active':'';
                var indexStr = i==0?'one':'two';
                var text = [
                    '<li class="'+active+' li" index="'+i+'">',
                    '   <div class="'+position+' l" id="'+position+'">',
                    '       <p>' + productData[i].name + '</p>',
                    '       <div class="wrap">',
                    '           <div class="inwrap">',
                    '               <ul class="page">',
                    '                   <li style="display:">',
                    '                       <span id="'+position+'_pro_val" class="left '+indexStr+'">-</span>',
                    '                   </li>',
                    '                   <li style="display:;">',
                    '                       <p id="arrow_'+i+'_red" class="left red b_b" style="display: ;"></p>',
                    '                       <p id="arrow_'+i+'_green" class="left green b_t" style="display: none;"></p>',
                    '                   </li>',
                    '               </ul>',
                    '           </div>',
                    '       </div>',
                    '   </div>',
                    '</li>',
                ];
                $('.nav_list .ul').append(text.join(""))
            };
        }


        var showHLOC = function () {
            var product = Core.getInstance().currentPrice[Core.getInstance().currentProIndex];
            for (var i = 0, len = productData.length; i < len; i++) {
                if (i == 0) {
                    $("#left_pro_val").html(Core.getInstance().currentPrice[i].N);
                } else if (i == 1) {
                    $("#right_pro_val").html(Core.getInstance().currentPrice[i].N);
                }
                if (Core.getInstance().currentPrice[i].S == "-1") {
                    $("#arrow_" + i + "_red").css('display', 'none');
                    $("#arrow_" + i + "_green").css('display', 'block');
                    $("#left_pro_val").attr('class','left two')
                } else if (Core.getInstance().currentPrice[i].S == "1") {
                    $("#arrow_" + i + "_red").css('display', 'block');
                    $("#arrow_" + i + "_green").css('display', 'none');
                    $("#left_pro_val").attr('class','left one')
                }

            }

            HoldJs.refresh();
            ProfitJs.refresh();
            $("#sh").html(product.H);
            $("#sl").html(product.L);
            $("#so").html(product.O);
            $("#sc").html(product.Y);
        };
        var showK = function (kType, cycleTime) {
            Chart.init({
                type: "K",
                kType: kType,//3 6 D
                lNum: Core.getInstance().currentPro.lNum,
                lCode: Core.getInstance().currentPro.lCode,
                cycleTime: cycleTime || 1000 * 60
            });

        };
        var showLine = function () {
            Chart.init({
                type: 'L',
                name: 'main',
                lNum: Core.getInstance().currentPro.lNum,
                lCode: Core.getInstance().currentPro.lCode,
                minuteStep: 360,
                cycleTime: 1000 * 60,
                isStock:true
            });
        };
        //开始默认展示走势图
        Core.getInstance().currentProIndex = 0;
        Core.getInstance().currentPro = productData[Core.getInstance().currentProIndex];
        showLine();
        Market.init(initParam, showHLOC/*,function () {
            layer.msg('网络异常，请重试');
            // window.location.href = Core.getInstance().host+"IndexController/index?customerKey="+Core.getInstance().userKey;
        }*/);

        //添加监听
        $("#line").tap(function () {
            ChartJs.state.showType = 'L';
            showLine();
        });
        $("#K3").tap(function () {
            ChartJs.state.showType = '3';
            showK('3', 900000);
        });
        $("#K6").tap(function () {
            ChartJs.state.showType = '6';
            showK('6', 1800000);
        });
        $("#KD").tap(function () {
            ChartJs.state.showType = 'D'
            showK('D', 1800000);
        });
        $(".k_line li").tap(function () {
            $(".k_line li").eq($(this).index()).addClass("left active").siblings().removeClass("left active").addClass("left");
        });

        //产品切换
        $("#list ul .li").tap(function () {
            //记录当前所选
            Core.getInstance().currentProIndex = $(this).index();
            Core.getInstance().currentPro = productData[Core.getInstance().currentProIndex];
            switch (ChartJs.state.showType) {
                case 'L':
                    showLine();
                    break;
                case '3':
                case '6':
                case 'D':
                    showK(ChartJs.state.showType);
                    break;
            }
            showHLOC();
            //
            $("#list ul .li").eq($(this).index()).addClass("active").siblings().removeClass("active");

        });
    }
}