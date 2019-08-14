//index.js
const db=wx.cloud.database()
const productsCollection=db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[],
    page:0
  },
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    wx.showLoading();
    let page=this.data.page+20
    productsCollection.skip(page).get().then(res=>{
      wx.hideLoading();
      let new_data=res.data
      let old_data=this.data.products
      this.setData({
        products:old_data.concat(new_data),
        page:page
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.get().then(res=>{
      // console.log(res.data)
      this.setData({
        products:res.data
      })
    })
    // console.log(this.data.products)
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
    productsCollection.get().then(res=>{
      this.setData({
        page:0,
        products:res.data
      },res=>{
        wx.stopPullDownRefresh()
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})