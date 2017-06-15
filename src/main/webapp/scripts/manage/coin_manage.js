(function(window) {

	var w = window;


	
	var Coin = function() {};

	Coin.init = function(initParam, success, failure) {
		if (initParam
			&& initParam.url
			&& initParam.mobile) {
			startWebSocket(initParam, success, failure);
		}
		else {
            failure();
		}
	};

	var startWebSocket = function(initParam, success, failure) {
		var ws = new WebSocket("ws://"+initParam.url+"/QueryUserInfo2.jsp?mobile="+Core.getInstance().userKey);
		ws.onopen = function() {};
		ws.onmessage = function(event) {
			var ws_data = JSON.parse(event.data);
			setCoreProfit(ws_data);
            console.log("来自coin_manage.js，相当于第一次的")
            console.log("ws_data="+JSON.stringify(ws_data))
			success();
		};
		ws.onerror = function() {failure(ws)};
		ws.onclose = function() {failure(ws)};
	};

	var setCoreProfit = function(ws_data) {
        Core.getInstance().setProfit(ws_data.profit);
        Core.getInstance().setCoin(ws_data.ticket);
        Core.getInstance().setCoinEarn(ws_data.coinstatearn);
		setOrderDetail(ws_data);
	};
	
	var setOrderDetail = function(ws_data) {
		for(tmp of ws_data.vec){
			tmp.isOriginal = true;
        }
		console.log("ws_data.vec="+JSON.stringify(ws_data.vec))
        Core.getInstance().setOrderDetail(ws_data.vec);
	};

	w.Coin = Coin;

})(window);
