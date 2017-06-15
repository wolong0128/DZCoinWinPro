(function (window) {

    var Market = function () {
    };

    Market.init = function (initParam, success, failure) {
        if (initParam) {
            Core.getInstance().setCurrentPrice(initParam.initValue);
            clearTimeout(Core.getInstance().cache.get('currentTime'));
            currentPriceTimer(initParam, success/*, failure*/);
        }
        else {
            failure();
        }
    };

    var currentPriceTimer = function (initParam, success/*, failure*/) {
        for (var item of Core.getInstance().currentPrice) {
            currentPriceTimerTask(initParam, item, success/*, failure*/);
        }
        var currentTime = setTimeout(function () {
            currentPriceTimer(initParam, success/*, failure*/);
        }, 3000);
        Core.getInstance().cache.push('currentTime',currentTime);
    };

    var currentPriceTimerTask = function (initParam, item, success/*, failure*/) {
        // var url = "http://" + (initParam.host) + "/GetHQ.jsp" +
        //     "?ServiceID=" + item.lNum +
        //     "&SymbolID=" + item.lCode +
        //     "&t=" + new Date().getTime();
        // $.ajax({
        //     url:url,
        //     success:function (data) {
        //         data = JSON.parse(data)
        //         item.S = item.N == data.N ? 0 : (item.N > data.N ? 1 : -1);
        //         item.N = data.N;
        //         item.H = data.H;
        //         item.L = data.L;
        //         item.O = data.O;
        //         item.Y = data.Y;
        //         refreshOrderEarn(item, data.N);
        //         success();
        //     },
        //     error:function (err) {
        //         console.log(failure)
        //         failure();
        //     }
        // })


        $.getJSON(
            "http://" + (initParam.host) + "/GetHQ.jsp" +
            "?ServiceID=" + item.lNum +
            "&SymbolID=" + item.lCode +
            "&t=" + new Date().getTime(),
            function (data) {
                item.S = item.N == data.N ? 0 : (item.N > data.N ? -1 : 1);
                item.N = data.N;
                item.H = data.H;
                item.L = data.L;
                item.O = data.O;
                item.Y = data.Y;
                refreshOrderEarn(item, data.N);
                success();
            }
        );
    };

    var refreshOrderEarn = function (item, currentPrice) {
        for (var detail of Core.getInstance().orderDetail || []) {
            detail.isOriginal = false;
            if (detail.serviceid != item.lNum
                || detail.symbolid != item.lCode) {
                continue;
            }
            var benefit = 0;
            if (detail.Margin == 0) {
                if (detail.bs === "B") {
                    benefit = (currentPrice - detail.Price) * detail.Volume;
                }
                else {
                    benefit = (detail.Price - currentPrice) * detail.Volume;
                }
                detail.earn = benefit;
            }
            else {
                if (detail.bs === "B") {
                    benefit = (currentPrice - detail.Price) * detail.Rate;
                }
                else {
                    benefit = (detail.Price - currentPrice) * detail.Rate;
                }
                detail.earn = benefit;
            }
        }
    };

    window.Market = Market;

})(window);
