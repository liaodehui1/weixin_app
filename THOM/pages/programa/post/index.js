// pages/programa/post/index.js
var upload = require('../../../utils/upload')
var app =  getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    post:{},
    like:false,
    follow:false,
    default:true,
    show:false,
    content:'',
    loading:true,
    comments:{},
    onThumbs:false
  },
  follow(){
    this.setData({
      follow:!this.data.follow
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
  setContent(e){
    this.setData({
      content:e.detail.value
    })
  },
  favorite(){
    this.setData({
      like:!this.data.like
    })
    if(this.data.like){
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration:500
      });
    }
  },
  submit(){
    var that = this
    var upload_img = this.selectComponent('#upload_img')
    var image_files = upload_img.data.files
  
    upload.uploadPost('THOM/comment_images/',image_files)
      .then(res=>{
        // console.log(res)
        wx.cloud.init()
        return wx.cloud.callFunction({
          name:'addComment',
          data:{
            images_fileID:res,
            content:that.data.content,
            post_id:that.data.post._id,
            openid:app.globalData.userInfo.openid
          }
        })
      }).then(res=>{
        // console.log(res)
        that.setData({
          show:false
        })
        wx.hideLoading()
        wx.showToast({
          title: '评论成功',
          icon: 'success',
          duration: 1000,
        });
      }).catch(err => {
        console.log(err)
      })
    wx.showLoading({
      title: "发布中",
    });
  },
  thumbsUp(e){
    console.log(e)
    this.setData({
      onThumbs:!this.data.onThumbs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
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
    wx.cloud.init()
    wx.cloud.callFunction({
      name:'getComments',
      data:{
        post_id:options._id // 不用this.data.post._id null
      }
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        loading:false,
        comments:res.result.data
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
    })
    wx.showLoading({
      title: "加载中...",
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