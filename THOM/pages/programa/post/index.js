// pages/programa/post/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{},
    like:false,
    default:true,
    show:false
  },
  follow(){
    this.setData({
      like:!this.data.like
    })
  },
  toUser(){
    wx.navigateTo({
      url: `../userIntro/index?_openid=${this.data.post._openid}`,
    });
  },
  switch(){
    this.setData({
      default:!this.data.default
    })
  },
  discuss(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'posts',
      success: (result)=>{
        // console.log(result)
        let post = {}
        for(let item of result.data){
          post = item.questions.find(cur=>{
            return cur._id === options._id
          })
          if(post){
            break
          }
        }
        wx.setNavigationBarTitle({
          title: post.category
        })
        this.setData({
          post:post
        })
        console.log(post)
      }
    });
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