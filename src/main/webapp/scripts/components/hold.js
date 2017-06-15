/**
 * Created by zhangzilong on 17-4-8.
 */
var HoldJs = {
    state: {
        reConnectCount:0,
        currentCount:0,
        isReConnectting:false,
    },
    HoldList: {
        isCurrent: function (obj) {
            if (typeof obj === 'object') {
                if (obj.serviceid == Core.getInstance().currentPro.lNum && obj.symbolid == Core.getInstance().currentPro.lCode) {
                    return true;
                } else if (obj.lNum == Core.getInstance().currentPro.lNum && obj.lCode == Core.getInstance().currentPro.lCode) {
                    return true
                }
            }
            return false;
        },
        removeAll: function () {
            $("#hostList").empty();
        },
        addAll: function (array) {
            if (!array) {
                ButtonJs.show();
                return;
            }
            HoldJs.state.currentCount=0
            for (var i = 0; i < array.length; i++) {
                if (this.isCurrent(array[i])) {
                    this.add(array[i], HoldJs.state.currentCount == 0);
                    HoldJs.state.currentCount++;
                }
            }
            /*2笔的开始*/
            // if(HoldJs.state.currentCount==0){
            //     $(".but_write").show();
            //     ButtonJs.show(0);
            // }else if (HoldJs.state.currentCount ==1) {
            //     ButtonJs.show(1);
            //     $(".but_write").hide();
            // } else {
            //     ButtonJs.hide();
            //     $(".but_write").hide();
            // }
            /*2笔的结束*/
            /*1笔的开始*/
            if(HoldJs.state.currentCount==0){
                $(".but_write").show();
                ButtonJs.show(0);
            }else if (HoldJs.state.currentCount ==1) {
                ButtonJs.hide();
                $(".but_write").show();
            } else {
                ButtonJs.hide();
                $(".but_write").hide();
            }
            /*1笔的结束*/
            $(".hold_close").tap(function () {
                //console.log("$(this).attr('orderId')="+$(this).attr('orderId'));
                var obj = {
                    orderid: $(this).attr('orderId'),
                    Price: $(this).attr('price'),
                    Volume: $(this).attr('volume'),
                    earn: $(this).attr('earn'),
                    symbolid: $(this).attr('symbolid'),

                }
                ProfitJs.onclick(obj);
            })

        },
        round: function (v, e) {
            var t = 1;
            for (; e > 0; t *= 10, e--);
            for (; e < 0; t /= 10, e++);
            return Math.round(v * t) / t;
        },
        add: function (obj, isFirst) {
            if(obj.isOriginal){
                 obj.earn *=Utils.formatTool.getTradeEarnByBenefit(1,obj.symbolid);
            }
            var className = isFirst ? 'list clearfix' : 'list clearfix';
            // var className = isFirst ? 'list clearfix' : 'list_o clearfix';

            // //console.log("obj="+JSON.stringify(obj))
            var isB = obj.bs=="B";
            var earnValue = this.round(obj.earn,2);
            var isEarn = earnValue >= 0;
            var symbolid = obj.symbolid;
            var earnValue_bean = this.round(Utils.formatTool.getTradeEarnByBenefit(obj.earn,symbolid));
            var unit = Utils.formatTool.getTradeUnit(obj.symbolid);
            var html = "";
            html += '<div class="' + className + '" style="display: ;">';

            html += '<div class="one left">';
            html += '<div class="top clearfix">';
            // html += '<span class="left"></span>';
            // html += ' <span class="left" style="display:none ;">空</span>';<!--改-->
            // html += '   <span class="left red" style="display: ;">多</span>';<!--改-->

            html += '   <span class="'+(isB?'left red':'left')+'" style="display: ;">'+(isB?'多':'空')+'</span>';<!--改-->

            html += '<p class="right">' + Utils.formatTool.getTradeVolume(1,parseInt(obj.Volume) * parseInt(obj.facevalue),symbolid) + unit +'</p>';
            html += '</div>';
            html += '<div class="bot">';
            html += '<p>' + Core.tools.getProInfo(obj.symbolid).name + '</p>';
            html += '</div>';
            html += '</div>';

            html += '<i class="left"></i>';
            html += '<div class="two left">';
            html += '<div class="top">';
            html += '<p>' + obj.Price + '</p>';
            html += '</div>';
            html += '<div class="bot">';
            html += '<p>建仓价</p>';
            html += '</div>';
            html += '</div>';

            html += '<i class="left"></i>';
            html += '<div class="three left">';
            html += '<div class="top">';
            html += '<p '+(isEarn?'style="color:#e63234;"':'style="color:#1eb83f;"')+'>' +(isEarn ? ('+' +earnValue_bean) : (earnValue_bean)) + '</p>';
            html += '</div>';
            html += '<div class="bot">';
            html += '<p>盈亏（金豆）</p>';
            html += '</div>';
            html += '</div>';

            html += '<i class="left"></i>';
            html += '<div class="four left">';
            html += '<div class="">';
            html += '<a class="hold_close" orderId="' + obj.orderid + '" volume="' + obj.Volume + '" price="' + obj.Price + '" earn="' + earnValue + '" symbolid="'+symbolid+'" href="javascript:;">';
            html += '<p>平仓</p>';
            html += '</a>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#hostList").append(html);

        }
    },
    init: function () {
        var initParam = {
            url: Core.getInstance().localhostWebSocket,
            mobile: Core.getInstance().userKey,
        };
        var success = function () {
            HoldJs.refresh();
            layer.close(HoldJs.state.firstLoad);
            layer.close(HoldJs.state.load);
            HoldJs.state.isReConnectting = false;
            clearInterval(HoldJs.state.reConnectTimer)
        };
        var failure = function (webSocket) {
            webSocket.close();
            if(!HoldJs.state.isReConnectting){
                start();
            }
            HoldJs.state.isReConnectting = true;

        };
        var start = function () {
            HoldJs.state.firstLoad = layer.load(0,{
                offset: (document.body.scrollHeight/2+30) +'px'
            });
            HoldJs.state.isReConnectting = true;
            Coin.init(initParam, success, failure);
        };
        start();
    },
    refresh: function () {
        CurrencyJs.refresh();
        ProfitJs.refreshFromWebsocket(Core.getInstance().orderDetail);
        HoldJs.HoldList.removeAll();
        HoldJs.HoldList.addAll(Core.getInstance().orderDetail);
    }

};