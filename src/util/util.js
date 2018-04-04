'use strict'

// 是否为空对象
function isEmptyObject(e) {
  let t
  for (t in e) {
    return !1
  }    
  return !0
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
            content: '如需正常使用阅读记录功能，请按确定并在授权管理中选中“用户信息”，然后点按确定。最后再重新进入小程序即可正常使用。',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.openSetting({
                  success: function success(res) {
                    console.log('openSetting success', res.authSetting)
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
  checkSettingStatu: checkSettingStatu
}