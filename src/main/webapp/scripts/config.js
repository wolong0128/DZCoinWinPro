/**
 * Created by tians_000 on 2017/6/13.
 */
/**
 * Created by zilong on 2017/5/15.
 */
(function(global, factory) {
    if (typeof define === 'function' && define.amd)
        define(function() { return factory(global) })
    else
        factory(global)
}(this, function(window) {
    var config = {
        userMockData:true,
        tradeRateArray:[
            {
                symbolid:'FGLGDK',
                faceValue:1,
                volume:0.1,
                floatEarn:1,
                unit:'瓶',
            },
            {
                symbolid:'000001',
                faceValue:10,
                volume:0.1,
                floatEarn:0.1,
                unit:'件',
            },
            {
                symbolid:'SIMFOBCNY3',
                faceValue:10,
                volume:0.1,
                floatEarn:0.1,
                unit:'件',
            },
            {
                symbolid:'SIMFOBUSD3',
                faceValue:10,
                volume:0.1,
                floatEarn:0.1,
                unit:'件',
            },
        ],
    };
    window.config = config;
    return config

}));