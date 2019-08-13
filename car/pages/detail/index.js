// pages/detail/index.js
const db=require('../../assets/db.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id=options.id
    // console.log(id)
    // console.log(typeof item.id,typeof id)//number string
    const entity=db.vehicles.find(item=>item.id==id)
    // console.log(entity)
    if(entity){
      this.setData({
        entity:entity
      })
      wx.setNavigationBarTitle({
        title: entity.header,
      });
    }else{
      wx.redirectTo({
        url: '../index/index',
      });
    }
    // console.log(this.data.entity)
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