// pages/programa/ask/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    programa:"",
    category:"",
    categories:[],
    temp:"",
    show:false
  },
  showDialog(){
    this.setData({
      show:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    this.setData({
      show:false,
      category:this.data.temp
    })
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    // console.log(event.detail)
    this.setData({
      temp:value
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