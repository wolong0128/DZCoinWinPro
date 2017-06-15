/**
 * Created by zhangzilong on 17-4-7.
 */
var CurrencyJs = {
    state:{

    },
    init:function () {
        // var moneyData = {
        //     coiBalance:allMoney,
        //     coinBonus:coinMoney,
        // };
        $.ajax({
            url:  Core.getInstance().host+'RecordTicketController/ticket/num',
            type: 'post',
            data: {
                faceValue:1,
                mobile:Core.getInstance().userKey,
            },
            async: false,
            success: function (result) {
                if(typeof result==="string"){
                    result=JSON.parse(result)
                }
                if(result&&result.code=='0'){
                    $("#balance").html(result.data);
                }
            },
            error:function (err) {
                layer.msg(err)
            }
        });


        $("#to_oper").tap(function () {
            window.location.href = Core.getInstance().host+'dzkj/RecordOrderController/skip/record?customerKey='+Core.getInstance().userKey;
        })
        $("#free_get").tap(function () {
            window.location.href = Core.getInstance().host+'IndexController/activityList?customerKey='+Core.getInstance().userKey;
        })
    },
    round: function (v, e) {
        var t = 1;
        for (; e > 0; t *= 10, e--);
        for (; e < 0; t /= 10, e++);
        return Math.round(v * t) / t;
    },
    refresh:function () {
        //console.log(Core.getInstance().getDynamicCoinEarn()+">>>>>")
        var rate = 10;
        console.log()
        var sumCoinEarn = this.round(Core.getInstance().getSumCoinEarn(rate));
        $("#balance").html(Core.getInstance().coin);
        $("#bonus").html(sumCoinEarn);
        $("#bonus").css('color',sumCoinEarn>=0?'#eb7d12':'#1eb83f');
        // $.ajax({
        //     url:  Core.getInstance().host+'dzkj/TicketMoneyController/ticket/allMoney',
        //     data:{userKey:Core.getInstance().userKey},
        //     type: 'post',
        //     // async: false,
        //     success: function (result) {
        //         if(result&&result.code=='0'){
        //             //console.log(result)
        //             $("#balance").html(result.data.allMoney);
        //             $("#bonus").html(result.data.coinEarn);
        //         }else{
        //             layer.msg(result.message||'网络异常！');
        //         }
        //     }
        // });
    }
}