// pages/programa/ask/index.js
var upload = require('../../../utils/upload')
var app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    programa:"",
    category:"",
    categories:[],
    show:false,
    title:'',
    content:''
  },
  showDialog(){
    this.setData({
      show:true
    })
  },
  onClose(){
    let picker = this.selectComponent('#picker')
    // console.log(picker.getValues()[0])
    this.setData({
      show:false,
      category:picker.getValues()[0]
    })
  },
  setTitle(e){
    this.setData({
      title:e.detail.value
    })
    // console.log(this.data.title)
    // console.log(app.globalData.userInfo)
  },
  setContent(e){
    this.setData({
      content:e.detail.value
    })
  },
  upload(){
    var that = this
    var upload_img = this.selectComponent('#upload_img')
    var image_files = upload_img.data.files
    var avatarUrl = app.globalData.userInfo.avatarUrl
    var nickName = app.globalData.userInfo.nickName
    upload.uploadPost(image_files)
      .then(res=>{
        // console.log(res)
        wx.cloud.init()
        return wx.cloud.callFunction({
          name:'addPost',
          data:{
            images_fileID:res,
            programa:that.data.programa,
            category:that.data.category,
            title:that.data.title,
            content:that.data.content,
            avatarUrl:avatarUrl,
            nickName:nickName
          }
        })
      }).then(res=>{
        // console.log(res)
        wx.hideLoading()
        wx.showToast({
          title: '发帖成功',
          icon: 'success',
          duration: 2000,
        });
      }).catch(err => {
        console.log(err)
      })
    wx.showLoading({
      title: "发帖中",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      programa:options.programa,
      categories:[].concat(JSON.parse(options.categories)),
    })
    this.setData({
      category:this.data.categories[0]
    })
    // console.log(this.data.programa,this.data.category)
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