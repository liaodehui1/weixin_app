// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval:4000,
    duration:200,
    current:0,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    programas:[
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/testPaper.png',
        title:'试题库'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/videos.png',
        title:'视频'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/noto-share.png',
        title:'笔记分享'
      },
      {
        programaUrl:'../programa/papers/index',
        imgUrl:'../../images/concern.png',
        title:'我的关注'
      }
    ]
  },
  onSlideChangeEnd(e){
    // console.log(e)
    this.setData({
      current:e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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