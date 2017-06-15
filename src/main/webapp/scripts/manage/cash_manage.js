(function(window) {

    var Cash = function() {};

    Cash.init = function(initParam, success, failter) {
        if (initParam
            && initParam.url
            && initParam.mobile) {
            startWebSocket(initParam, success, failter);
        }
        else {
            failter();
        }
    };

    var startWebSocket = function(initParam, success, failter) {
        var ws = new WebSocket(initParam.url);
        ws.onopen = function() {};
        ws.onmessage = function(event) {
            var ws_data = event.data;
            setCoreProfit(ws_data);
            success();
        };
        ws.onerror = function() {failter()};
        ws.onclose = function() {failter()};
    };

    var setCoreProfit = function(ws_data) {
        Core.getInstance({
            profit : ws_data.profit,
            coin : ws_data.ticket,
            coinEarn : ws_data.coinstatearn
        });
        setOrderDetail(ws_data);
    };

    var setOrderDetail = function(ws_data) {
        console.log("cash_mng_ws_data.vec="+JSON.stringify(ws_data.vec))
        Core.getInstance({
            orderDatail : ws_data.vec
        });
    };

    w.Cash = Cash;

})(window);
