// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      name:'',
      phone:'',
      detail:''
    }
  },
  formSubmit(){
    if(this.data.address.name&&this.data.address.phone&&this.data.address.detail){
      wx.setStorage({//try
        key: 'address',
        data: this.data.address,
        success: (result)=>{
          wx.navigateBack();
        },
        fail: ()=>{},//catch
        complete: ()=>{}//final
      });
    }else{
      wx.showModal({//提示弹框
        title:'提示',
        content:'请填写完整资料',
        showCancel:false
      })
    }
  },
  bindName(e){
    // console.log(e)
    this.setData({
      'address.name':e.detail.value
    })
  },
  bindPhone(e){
    this.setData({
      'address.phone':e.detail.value
    })
  },
  bindDetail(e){
    this.setData({
      'address.detail':e.detail.value
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