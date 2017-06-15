var data = Mock.mock({
    'list|1-8': [{
        "id|+1": 0,
        "mobile": "18710102107",
        "symbolid": "FGLGDK",
        "direction": "B",
        "createPrice|100-300": 100,
        "used": 0,
        "fee": 0,
        "closePrice|100-300": 100,
        "earn": -0.009998,
        "volume": 1,
        "faceValue": 1,
        "createTime": 1497347774000,
        "closeTime": 1497348394000,
        "operid+1": 0,
        "closeFlag": 1,
        "productName": null
    }]
});
Mock.mock('http://tg.cf300888.com.cn/CoinProject/dzkj/RecordOrderController/allOrder/ticket', {
    'code|0-10'     : 0,
    'message': '@name',
    'data'    :null

});
Mock.mock('https://www.baidu.com', {
    'code|0-10'     : 0,
    'message': '@name',
    'data'    :data

});
function test() {
    $.ajax({
        type:"get",
        url:"http://tg.cf300888.com.cn/CoinProject/dzkj/RecordOrderController/allOrder/ticket",
        data:{},
        dataType:"json",
        success:function(data) {
            console.log(JSON.stringify(data, null, 4));
        },
        error: function(e) {
            console.log(e);
        }
    });
}
function testOrder() {
    $.ajax({
        type:"get",
        url:"https://www.baidu.com",
        data:{},
        dataType:"json",
        success:function(data) {
            console.log(JSON.stringify(data, null, 4));
        },
        error: function(e) {
            console.log(e);
        }
    });
}

// <script src="http://mockjs.com/dist/mock.js"></script>
//     <script src="js/mockData.js"></script>




