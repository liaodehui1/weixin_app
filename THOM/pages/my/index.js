const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUser:false,
    programas:[
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试卷库'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试卷库'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试卷库'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试卷库'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试卷库'
      }
    ]
  },
  bindGetUserInfo(e){
    console.log(e.detail)
    if(e.detail && e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        hasUser:true,
        userInfo:e.detail.userInfo
      })
      wx.cloud.init()
      wx.cloud.callFunction({
        name:'login',
        success:res => {
          wx.cloud.callFunction({
            name: 'addUser',
            data:{
              userInfo:e.detail.userInfo,
              openid:res.result.openid
            }
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userInfo)
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUser:true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res,
          hasUser: true
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})