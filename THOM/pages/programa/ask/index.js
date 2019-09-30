// pages/programa/ask/index.js
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
    // console.log(upload_img.data.files)
    var image_files = upload_img.data.files
    var images_fileID = []
    var date=new Date()
    var pubTime = date.getFullYear()+"-"
      +(date.getMonth()+1 >= 10 ? date.getMonth()+1 : "0"+(date.getMonth()+1))+"-"
      +date.getDate()
    // console.log(pubTime)
    wx.cloud.init()
    const db = wx.cloud.database()
    for(let i = 0; i < image_files.length; i++){
      var imageUrl = image_files[i].split('/')
      var name = imageUrl[imageUrl.length-1]
      wx.cloud.uploadFile({
        cloudPath:'THOM/post_images/'+name,
        filePath:image_files[i],
        success:res => {
          images_fileID.push(res.fileID)
          if(images_fileID.length === image_files.length){
            db.collection("THOM_posts").add({
              data:{
                pubtime:pubTime,
                programa:that.data.programa,
                category:that.data.category,
                title:that.data.title,
                content:that.data.content,
                images:image_files,
                images_fileID:images_fileID
              },
              success:res => {
                // console.log(res)
                wx.hideLoading()
                wx.showToast({
                  title: '发帖成功',
                  icon: 'success',
                  duration: 2000,
                });
              },
              fail:res => {
                console.log(res)
              }
            })
          }
        }
      })
    }
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
  onClose(){
    let picker = this.selectComponent('#picker')
    // console.log(picker.getValues())
    this.setData({
      show:false,
      category:picker.getValues()
    })
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