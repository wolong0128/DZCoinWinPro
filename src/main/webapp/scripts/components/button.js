
/**
 * Created by zhangzilong on 17-4-8.
 */
var ButtonJs={
    state:{

    },
    init:function () {
        $("#lookRise1,#lookRise0").tap(function () {
            //console.log("button")
            var topClass = $(".list .one .top span").attr('class');
            if(topClass=='left'){
                layer.msg('同一账号下同一商品不能反向建仓');
                return;
            }      RiseJs.onclick();
        });
        $("#lookReduce1,#lookReduce0").tap(function () {
            var topClass = $(".list .one .top span").attr('class');
            if(topClass=='left red'){
                layer.msg('同一账号下同一商品不能反向建仓');
                return;
            }
            ReduceJs.onclick();
        });
    },
    hide:function () {
        $("#buttons0").hide();
        $("#buttons1").hide();
    },
    show:function (type) {
        switch (type){
            case 0:
                //无单
                $("#buttons0").show();
                $("#buttons1").hide();
                break;
            case 1:
                //1单
                $("#buttons1").show();
                $("#buttons0").hide();
                break;
        }
    }
}