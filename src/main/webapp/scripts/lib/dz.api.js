(function (w) {

  function callNative(args) {
    try {
      var funName = 'executeNative';
      var formatArgs = JSON.stringify(args);
      if (typeof (android) === 'undefined') {
        window.webkit.messageHandlers[funName].postMessage(formatArgs);
      } else {
        window.android[funName](formatArgs);
      }
    } catch (e) {
      console.log('js 调用 native', e);
    }
  }

  function sendCommand(cmd, params) {
    callNative({
      command: cmd,
      params: {
        param: params
      }
    });
  }

  function objectToUrlParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str
  }

  function sendURLCommand(url, params) {
    console.log('以新视图跳转URL','url=', url, 'params=', params);
    var p = params || '';
    if (typeof params === 'object') {
      p = objectToUrlParams(params);
    }
    var u = url;
    if (url.indexOf('?') !== -1 && params === undefined) {
      var arr = url.split('?');
      u = arr[0];
      p = arr[1];
    }
    // url 不以 http 开头时，自动添加 http://
    if (url.indexOf('http') !== 0) {
      u = 'http://' + u;
    }

    callNative({
      command: 'http://' + u,
      params: {
        urlParams: p
      }
    });
  }

  w.dz = {
    /**
     * 以新视图跳转URL
     * @param url {string} url地址 , 如: http://www.baidu.com  , www.baidu.com , www.baidu.com?a=1&b=2
     * @param urlParam {object|string} url参数,可传入object或者string
     */
    toURL: function (url, urlParam) {
      sendURLCommand(url, urlParam)
    },
    /**
     * 分享
     * @param param {object} {"title":"标题","content":"内容","url":"分享的链接","thumb":"分享显示的图片地址"}
     */
    share: function (param) {
      sendCommand('view://showShareView', param);
    },
    /**
     * 支付
     * @param param {object} {"type:"策略类型",strategyCode:"策略代码",strategyName:"策略名称"}
     */
    payment: function (param) {
      sendCommand('view://payment', param);
    },
    /**
     * 跳转到金币明细页
     */
    toCoinDetails: function () {
      sendCommand('view://toCoinDetails');
    },
    /**
     * 跳转登录页
     */
    login: function () {
      sendCommand('view://login');
    },
    /**
     * 跳转注册页
     */
    register: function () {
      sendCommand('view://register');
    },
    /**
     * 跳转分享得金币页
     */
    toCoinShareView: function () {
      sendCommand('view://toCoinShareView');
    },
    // 顶部导航条
    navigationBar: {
      // 导航条右边按钮条
      rightBarItem: {
        // 隐藏
        hidden: function () {
          sendCommand('msg://HIDDEN_RIGHT_BAR_ITEM');
        },
        // 显示
        show: function () {
          sendCommand('msg://SHOW_RIGHT_BAR_ITEM');
        }
      },
      // 顶部导航条左边按钮条
      leftBarItem: {
        hidden: function () {
          sendCommand('msg://HIDDEN_LEFT_BAR_ITEM');
        },
        show: function () {
          sendCommand('msg://SHOW_LEFT_BAR_ITEM');
        }
      },
      // 顶部导航条标题
      titleView: {
        hidden: function () {
          sendCommand('msg://HIDDEN_TITLE_VIEW');
        },
        show: function () {
          sendCommand('msg://SHOW_TITLE_VIEW');
        },
        /**
         * 设置标题栏文本属性
         * @param param {object} {"title":"标题"}
         */
        setTitle: function (param) {
          sendCommand('msg://SET_TITLE_VIEW', param);
        }
      }
    }

  };

})(window);
