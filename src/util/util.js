'use strict'

// 是否为空对象
function isEmptyObject(e) {
  let t
  for (t in e) {
    return !1
  }    
  return !0
}
function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep; //20160614134947
}
// 时间戳
function dateFormat(timestamp, formats) {
  formats = formats || 'Y-m-d'
  var zero = function (value) {
    if (value < 10) {
      return '0' + value
    }
    return value
  }
  var myDate = timestamp ? new Date(timestamp) : new Date()

  var year = myDate.getFullYear()
  var month = zero(myDate.getMonth() + 1)
  var day = zero(myDate.getDate())
  var hour = zero(myDate.getHours())
  var minite = zero(myDate.getMinutes())
  var second = zero(myDate.getSeconds())

  return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches]
  })
}
// 检测授权状态
function checkSettingStatu() {
  let that = this
  // 判断是否是第一次授权，非第一次授权且授权失败则进行提醒
  wx.getSetting({
    success: function success(res) {
      console.log(res.authSetting)
      var authSetting = res.authSetting
      if (isEmptyObject(authSetting)) {
        console.log('首次授权')
      } else {
        // console.log('不是第一次授权', authSetting)
        // 没有授权的提醒
        if (authSetting['scope.userInfo'] === false) {
          wx.showModal({
            title: '用户未授权',
            content: '如需正常使用该功能，请按确定并在授权管理中选中“用户信息”，然后点按确定。最后再重新进入小程序即可正常使用。',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.openSetting({
                  success: function success(res) {
                    var userInfo = res.userInfo
                    wepy.setStorageSync('userInfo', userInfo)
                  }
                })
              }
            }
          })
        }
      }
    }
  })
}

module.exports = {
  isEmptyObject: isEmptyObject,
  checkSettingStatu: checkSettingStatu,
  getCurrentTime: getCurrentTime,
  dateFormat: dateFormat
}