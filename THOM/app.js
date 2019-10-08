//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    let that = this;
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        // console.log("openid:"+res.result.openid)
        wx.cloud.callFunction({
          name:'getUserById',
          data:{
            openid:res.result.openid
          },
          success: function(res) {
            // console.log(res.result.data[0])
            that.globalData.userInfo =  res.result.data[0];
            if (that.userInfoReadyCallback) {
              that.userInfoReadyCallback(res.result.data[0])
            }
          },
          fail: console.error
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})