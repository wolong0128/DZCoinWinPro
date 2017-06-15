/**
 * Created by zhangzilong on 17-4-7.
 */
var Broadcast = {
    state: {
        broad: []
    },
    round: function (v, e) {
        var t = 1;
        for (; e > 0; t *= 10, e--);
        for (; e < 0; t /= 10, e++);
        return Math.round(v * t) / t;
    },
    init: function () {
        Broadcast.getNew();
    },
    cast:function () {
        $(function () {
            $('#rull').kxbdSuperMarquee({
                isMarquee: true,
                isEqual: false,
                scrollDelay: 50,
                controlBtn: {left: '#goLM', right: '#goRM'},
                direction: 'left'
            });
        });
    },
    getNew: function () {
        var href = Core.getInstance().host+'dzkj/RecordOrderController/allOrder/ticket';
        $.ajax({
            url: href,
            // async: false,
            success: function (obj) {
                obj = JSON.parse(obj)
                console.log(obj)

                if (obj.code == '0') {
                    for(var i=0,len=obj.data.length;i<len;i++){
                        var tmp = obj.data[i];
                        console.log(tmp)
                        // Broadcast.state.broad.push(obj.data[i]);
                        var mobile = tmp.mobile.substring(0, 3) + '****' + tmp.mobile.substring(7);
                        var name = Core.tools.getProInfo(tmp.symbolid).name;
                        var earn = Broadcast.round(tmp.earn * 100);
                        var volume = tmp.volume;
                        var unit = window.Utils.formatTool.getTradeUnit(tmp.symbolid);
                        // var text = '止盈' + Core.tools.getProInfo(tmp.symbolid).name + '，赢取<span>' + Broadcast.round(tmp.earn*100) + '金豆</span>！<a href=""><img src="'+Core.getInstance().host+'styles/images/enter.png"/></a>';
                        // $("#broad_text").html(text);
                        var pTag = [
                            '<li class="clearfix">',
                                '<div class="left">',
                                '   <p><span>'+'xxxxx'+'</span>成功猜'+(tmp.direction=='B'?'涨':'跌')+name+'，金豆<span>+35'+earn+'</span></p>',
                                '</div>',
                                '<div class="left">',
                                    '<i>',
                                        '<a href="">',
                                        '   <img src="image/btn.png"/>',
                                        '</a>',
                                    '</i>',
                                '</div>',
                            '</li>',
                        ];

                        $("#toRank").append(pTag.join(''));
                    }
                    $("#toRank").show();
                    Broadcast.cast();
                }
            }
        });
    }
}