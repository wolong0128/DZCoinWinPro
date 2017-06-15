/**
 * Created by zilong on 2017/4/18.
 */
(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(['config'],function (config) {
            return factory(global,config)
        })
    else
        factory(global)
}(this, function (window,Config) {
    var Utils = {
        formatTool:{
            getShowTime:function (time) {
                time = new Date(time);
                var year = time.getYear() + 1900;
                var month = time.getMonth() + 1;
                var date = time.getDate();
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();
                function format(time) {
                    if(time<10){
                        return '0'+time;
                    }
                    return time;
                }
                return year + "-" + month + "-" + date + "   " + format(hour) + ":" + format(minute) + ":" + format(second);
            },
            getShowDate:function (time) {
                time = new Date(time);
                var year = time.getYear() + 1900;
                var month = time.getMonth() + 1;
                var date = time.getDate();
                return year + "-" + month + "-" + date;
            },
            getShowPrice:function (price) {
                price = price + '';
                if (price.indexOf('.') == -1) {
                    return price + ".00";
                } else {
                    if (price.indexOf('.') == price.length - 2) {
                        return price + '0';
                    } else {
                        return price;
                    }
                }
            },
            getShowMobile:function(mobile) {
                return mobile.substring(0,3)+'****'+mobile.substring(7);
            },
            round:function(v,e){
                var t=1;
                for(;e>0;t*=10,e--);
                for(;e<0;t/=10,e++);
                return Math.round(v*t)/t;
            },
            abs:function(v){
                return Math.abs(v);
            },
            urlEncode:function(str) {
                // return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf18c35f1803b9f51&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2FCoinProject%2Fchat%2Fshare%3FredPacketId%3D-1%26fromInviteCode%3Dc000fd85b882683f622b672a376c3a2d%26isRed%3D0&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect';
                return encodeURIComponent(str);
            },
            wxShare:function (url) {
                var redirectUrl = Utils.formatTool.urlEncode(url);
                var href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+Config.appid+'&redirect_uri='+redirectUrl+'&response_type=code&scope=snsapi_base&state=1#wechat_redirect';
                return href;
            },
            getTradeVolume:function (faceValue, volume,symbolid) {
                for(tradeRate of Config.tradeRateArray){
                    if(tradeRate.symbolid == symbolid){
                        return  this.round(faceValue*tradeRate.volume*volume/tradeRate.faceValue,2);
                    }
                }
                return  this.round(faceValue*volume,2);
            },
            getTradeEarnByBenefit:function (benefit,symbolid) {
                //market_manage.js传来的波动点（含数量）——首页持仓展示用
                for(tradeRate of Config.tradeRateArray){
                    if(tradeRate.symbolid == symbolid){
                        var rate=tradeRate.floatEarn/tradeRate.volume;
                        return  this.round(rate*benefit,2);
                    }
                }
                return  0;
            },
            getTradeEarnByDb:function (data,symbolid) {
                //数据库传来传来的波动点（含数量）——首页持仓展示用
                // for(tradeRate of Config.tradeRateArray){
                //     if(tradeRate.symbolid == symbolid){
                //         var rate=tradeRate.floatEarn/tradeRate.volume;
                //         console.log("rate="+rate)
                //         return  this.round(rate*data*100,2);
                //     }
                // }
                return  data*100;
            },
            getTradeUnit:function (symbolid) {
                for(tradeRate of Config.tradeRateArray){
                    if(tradeRate.symbolid == symbolid){
                        return  tradeRate.unit;
                    }
                }
                return  '件';
            },
        },
        checkTool:{
            mobileCheck:function (phoneNum) {
                var reg = /^1[0-9]{10}$/;
                return reg.test(phoneNum);
            },
            mobileCodeCheck:function (code) {
                return code.length==4;
            },
            //6到18位，数字大小写字母
            pwdCheck:function (pwd) {
                var reg = /^[a-zA-Z0-9]{6,18}$/;
                return reg.test(pwd)
            },
            appFilter:function (basePath) {
                // if(!window.webkit&&!window.android){
                //      window.location.href = basePath + 'chat/download';
                // }
            }
        },
    };
    window.Utils = Utils;
    return Utils;
}));