/**
 * Created by tians_000 on 2017/6/13.
 */
/**
 * Created by zilong on 2017/5/15.
 */
(function (global, factory) {
    if (typeof define === 'function' && define.amd)
        define(['jquery', 'mock'], function ($, Mock) {
            return factory(global, Mock)
        })
    else
        factory(global)
}(this, function (window, Mock) {
    //手机验证码
    Mock.mock("http://localhost:8080/DZCoinWinPro/dzkj/RecordOrderController/allOrder/ticket",
        {
            "code": 0,
            "message": "操作成功",
            "data|3": [
                {
                    "id": 1404,
                    "mobile": "18710102107",
                    "symbolid": "FGLGDK",
                    "direction": "B",
                    "createPrice": 296.5,
                    "used": 0.0,
                    "fee": 0.0,
                    "closePrice": 296.7,
                    "earn": 0.020001,
                    "volume": 1,
                    "faceValue": 1,
                    "createTime": 1496977347000,
                    "closeTime": 1496977902000,
                    "operid": 708,
                    "closeFlag": 1,
                    "productName": "西瑞烃"
                }, {
                    "id": 1271,
                    "mobile": "17501092307",
                    "symbolid": "000001",
                    "direction": "S",
                    "createPrice": 339.9,
                    "used": 0.0,
                    "fee": 0.0,
                    "closePrice": 339.1,
                    "earn": 0.079999,
                    "volume": 1,
                    "faceValue": 1,
                    "createTime": 1495619029000,
                    "closeTime": 1495620508000,
                    "operid": 644,
                    "closeFlag": 1,
                    "productName": "硅品"
                }, {
                    "id": 1271,
                    "mobile": "17501092307",
                    "symbolid": "SIMFOBCNY3",
                    "direction": "S",
                    "createPrice": 339.9,
                    "used": 0.0,
                    "fee": 0.0,
                    "closePrice": 339.1,
                    "earn": 0.079999,
                    "volume": 1,
                    "faceValue": 1,
                    "createTime": 1495619029000,
                    "closeTime": 1495620508000,
                    "operid": 644,
                    "closeFlag": 1,
                    "productName": "螺纹钢"
                },
            ]
        }
    );
    //点击注册按钮
    Mock.mock("/hello",
        {
            "string|1-10": "★"
        }
    );
}));