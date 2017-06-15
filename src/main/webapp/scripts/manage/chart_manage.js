(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(global)
        })
    }
    else {
        factory(global)
    }
}(this, function (window) {
    var Chart = (function () {
        var w = window, d = w.document, myChart, timer;
        var Z = function () {
        };
        /**
         * 程序入口
         * @param initParam
         */
        Z.init = function (initParam) {
            myChart = echarts.init(d.getElementById(initParam.name || "main"));
            myChart.showLoading();
            drawChartTimer(initParam || {});
        };
        /**
         * 根据请求的类型，定时获取远程图表数据
         * @param initParam
         */
        var drawChartTimer = function (initParam) {
            var chartType = initParam.type || "L";
            clearTimeout(timer);
            if (chartType === "L") {
                drawLChartTask(initParam);
            }
            else {
                drawKChartTask(initParam);
            }
            timer = setTimeout(function () {
                drawChartTimer(initParam);
            }, (initParam.circleTime || 60000));
        };
        /**
         * 走势图的初始化数据
         */
        var LOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        type: 'solid',
                        width: 1,
                        color: '#e63234'
                    }
                },
                formatter: function (params) {
                    return [
                        '  日期 : ' + params[0].name,
                        '<br/>  价格 : ' + params[0].value
                    ].join('');
                }
            },
            //animation: false,
            grid: {x: 20, y: 10, x2: 20, y2: 40},
            xAxis: {
                data: [],
                axisLabel: {
                    formatter: function (v) {
                        /*var tmp = v.split(":");
                        if (tmp[1] === "00" || tmp[1] === "30") {
                            return v;
                        }
                        return "";*/
                        return v;
                    },
                    interval: 0
                },
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: true,interval:59}
            },
            yAxis: [
                {
                    scale: true,
                    splitNumber: 2,
                    axisLabel: {
                        margin: -24,
                        formatter: '{value}'
                    },
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dotted',
                            width: 1
                        }
                    }
                },
                {
                    scale: true,
                    splitNumber: 2,
                    axisLabel: {
                        margin: -20,
                        formatter: function (value) {
                            return (value.toFixed(2)) + "%";
                        }
                    },
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false}
                }
            ],
            series: [
                {
                    name: "价格",
                    type: 'line',
                    symbol: 'none', // 取消连接处的点样式
                    data: [],
                    yAxisIndex: 0,
                    itemStyle: {normal: {color: "#87BAE3", areaStyle: {color: "#B4D6F2"}}},
                },
                {
                    name: "均线",
                    type: 'line',
                    symbol: 'none', // 取消连接处的点样式
                    data: [],
                    yAxisIndex: 1,
                    itemStyle: {normal: {color: "none"}}
                }
            ]
        };
        /**
         * K线图的初始化数据
         */
        var KOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        type: 'solid',
                        width: 1,
                        color: '#e63234'
                    }
                },
                formatter: function (params) {
                    return [
                        '  日期 : ' + params[0].name,
                        '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3],
                        '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2]
                    ].join('');
                }
            },
            grid: {
                x: 20, y: 10, x2: 20, y2: 40
            },
            xAxis: {
                data: [],
                scale: true,
                boundaryGap: false,
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitNumber: 2,
                axisLabel: {
                    margin: -24,
                    formatter: '{value}'
                },
                axisLine: {show: false},
                axisTick: {show: false},
                splitArea: {show: false},
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted',
                        width: 1
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 60,
                    end: 100
                },
                {
                    show: false,
                    type: 'slider',
                    y: '90%',
                    start: 60,
                    end: 100
                }
            ],
            series: [
                {
                    type: 'candlestick',
                    data: [],
                    itemStyle: {
                        normal: {
                            color: '#ef232a', color0: '#14b143',
                            borderColor: '#ef232a', borderColor0: '#14b143'
                        }
                    }
                }
            ]
        };
        /**
         * 获取远程图表数据并加载数据到走势图表
         * @param initParam
         */
        var drawLChartTask = function (initParam) {
            var url = [
                'http://' + (initParam.host || 'tg.cf300888.com.cn:8801') + '/GetMIN.jsp?',
                '&ServiceID=' + (initParam.lNum),
                '&SymbolID=' + (initParam.lCode),
                '&From=0'
            ].join('');
            $.getJSON(url, function (data) {
                var chartData = calculateLData(initParam, data || {});
                LOption.xAxis.data = chartData.DT;
                LOption.series[0].data = chartData.CP;
                LOption.series[1].data = chartData.YP;
                LOption.xAxis.axisLabel.interval=chartData.DIS - 1;
                LOption.xAxis.splitLine.show = initParam.isStock;
                myChart.hideLoading();
                myChart.setOption(LOption);
            });
        };
        /**
         * 获取远程图表数据并加载数据到K线图表
         * @param initParam
         */
        var drawKChartTask = function (initParam) {
            var url = [
                'http://' + (initParam.host || 'tg.cf300888.com.cn:8801') + '/GetKLine.jsp?',
                'Type=' + initParam.kType,
                '&ServiceID=' + (initParam.lNum),
                '&SymbolID=' + (initParam.lCode),
                '&From=-100&To=0'
            ].join('');
            $.getJSON(url, function (data) {
                var chartData = calculateKData(initParam, data || {});
                KOption.dataZoom.start = initParam.kStartZoom || 80;
                KOption.dataZoom.end = initParam.kEndZoom || 100;
                KOption.xAxis.data = chartData.DT;
                KOption.series[0].data = chartData.CP;
                myChart.hideLoading();
                myChart.setOption(KOption);
            });
        };
        /**
         * 计算走势图数据
         * @param initParam
         * @param data
         * @returns {{DT: Array, CP: Array, YP: Array}}
         */
        var calculateLData = function (initParam, data) {
            var DTArray = [], CPArray = [], YPArray = [];
            var distance = 30;
            if(initParam.isStock){
                distance = 60;

                DTArray.push("09:30");
                CPArray.push(data.M[0].P);
                YPArray.push(eval((data.M[0].P - data.Y) / data.Y * 100).toFixed(2));
                for (var i = 0, len = data.M.length; i<240; i++) {
                    var startTime = calculateStartTime(initParam, data.D + "");
                    var str = getShowTimeL(startTime.setMinutes(i+(initParam.isStock?31:1)+(i>=120?90:0)));
                    if(str=="11:30"){
                        DTArray.push("11:30/13:00");
                    }else{
                        DTArray.push(str);
                    }
                    if(i<len){
                        CPArray.push(data.M[i].P);
                        YPArray.push(eval((data.M[i].P - data.Y) / data.Y * 100).toFixed(2));
                    }else{
                        CPArray.push();
                        YPArray.push();
                    }
                }
            }else{
                for (var i = 0, len = data.M.length; i < len; i++) {
                    var startTime = calculateStartTime(initParam, data.D + "");
                    if (len < 60 * 2) {
                        distance = 30;
                    } else if (len < 60 * 8) {
                        distance = 120;
                    } else {
                        distance = 240;
                    }
                    DTArray.push(getShowTimeL(startTime.setMinutes(i)));
                    CPArray.push(data.M[i].P);
                    YPArray.push(eval((data.M[i].P - data.Y) / data.Y * 100).toFixed(2));
                }
            }
            return {DT: DTArray, CP: CPArray, YP: YPArray, DIS: distance};
        };
        /**
         * 计算K线图数据
         * @param initParam
         * @param data
         * @returns {{DT: Array, CP: Array}}
         */
        var calculateKData = function (initParam, data) {
            var DTArray = [], CPArray = [];
            for (var i = 0, len = data.K.length; i < len; i++) {
                DTArray.push(getShowTimeK(data.K[i].T + ""));
                // 开盘，收盘，最低，最高
                CPArray.push([data.K[i].O, data.K[i].C, data.K[i].L, data.K[i].H]);
            }
            return {DT: DTArray, CP: CPArray};
        };
        /**
         * 走势图的每天开始时间
         * 默认为：08:00:00
         *
         * @param initParam
         * @param date
         * @returns {Date}
         */
        var calculateStartTime = function (initParam, date) {
            var result = date.substring(0, 4) + "/" + date.substring(4, 6) + "/" + date.substring(6, 8);
            return new Date(result + " " + (initParam.time || (initParam.isStock?"09:30:00":"08:00:00")));
        };
        /**
         * 走势图X轴的日期格式
         * @param date
         * @returns {string}
         */
        var getShowTimeL = function (date) {
            function fix(num) {
                return num < 10 ? ("0" + num) : (num);
            }

            var newDate = new Date(date);
            return fix(newDate.getHours()) + ":" + fix(newDate.getMinutes());
        };
        /**
         * K线图X轴的日期格式
         * @param date
         * @returns {string}
         */
        var getShowTimeK = function (date) {
            return date.substring(4, 6) + "/" + date.substring(6, 8) + " " + date.substring(8);
        };
        return Z;
    })();
    window.Chart === undefined && (window.Chart = Chart);
    return Chart;
}));
