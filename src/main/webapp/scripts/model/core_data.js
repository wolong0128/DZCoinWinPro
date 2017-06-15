// var Core = (function() {
//
// 	var instantiated;
//
// 	var CoreData = function(args) {
// 		var args = args || {};
//         console.log(args)
//         this.profit = args.profit || 0;
//         this.coin = args.coin || 0;
// 		this.coinEarn = args.coinEarn || 0;
// 		this.buyRate = args.buyRate || [];
// 		this.currentPrice = args.currentPrice || [];
// 		this.orderDetail = args.orderDetail || [];
// 	};
//
// 	CoreData.prototype = {
// 		construtor : CoreData,
// 	};
//
// 	var _static_ = {
// 		getInstance: function (args) {
// 			if (!instantiated) {
// 				instantiated = new CoreData(args);
// 			}
// 			return instantiated;
// 		}
// 	};
//
// 	return _static_;
// })();
var Core = (function () {

    var instantiated;

    var CoreData = function () {
    };

    CoreData.prototype = {
        constructor: CoreData,
        init: function () {
            this.profit = 0;
            this.coin = 0;
            this.coinEarn = 0;
            this.buyRate = [];
            this.currentPrice = [];
            this.orderDetail = [];
            this.cache = {
                caches:[],
                push:function (key,value) {
                    this.caches.push({key:key,value:value});
                },
                get:function (key) {
                    for(tmp of this.caches){
                        if(key===tmp.key){
                            return tmp.value;
                        }
                    }
                    return null;
                }
            };
        },
        setProfit: function (profit) {
            this.profit = profit;
        },
        setCoin: function (coin) {
            this.coin = coin;
        },
        setCoinEarn: function (coinEarn) {
            this.coinEarn = coinEarn;
        },
        setBuyRate: function (buyRate) {
            this.buyRate = buyRate;
        },
        setCurrentPrice: function (currentPrice) {
            this.currentPrice = currentPrice;
        },
        setOrderDetail: function (orderDetail) {
            console.log("orderDetail="+JSON.stringify(orderDetail))
            this.orderDetail = orderDetail;
        },
        getDynamicCoinEarn: function () {
            var result = 0;
            for (var detail of Core.getInstance().orderDetail) {
                result += detail.earn;
            }
            return result;
        },
        getSumCoinEarn: function (rate) {
            return Number(this.coinEarn*100) + Number(this.getDynamicCoinEarn()*(rate||1))
        }
    };

    var _static_ = {
        getInstance: function () {
            if (!instantiated) {
                instantiated = new CoreData();
                instantiated.init();
            }
            return instantiated;
        },
        tools: {
            nameMap: [],
            setProInfo: function (productData) {
                for (pro of productData) {
                    Core.tools.nameMap.push({
                        lCode: pro.lCode,
                        name: pro.name,
                        unit: pro.unit,
                    })
                }
            },
            getProInfo: function (symbolid) {
                for (obj of this.nameMap) {
                    if (obj.lCode == symbolid) {
                        return obj;
                    }
                }
                return {};
            }
        }
    };

    return _static_;
})();
