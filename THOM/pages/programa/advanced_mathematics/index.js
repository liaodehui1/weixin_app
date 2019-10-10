// pages/programa/advanced_mathematics/index.js
var util = require("../../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    show:false,
    categories:["函数与极限","无穷级数","微分方程","定积分及其应用","不定积分","微分中值定理","导数与微分"],
    pageData:[]
  },
  enter(e){
    // console.log(event)
    wx.navigateTo({
      url: `../post/index?_id=${e.currentTarget.dataset.id}`
    });
  },
  switchTab(){
    this.setData({
      show:!this.data.show
    })
  },
  toTop(e){
    let index=e.currentTarget.dataset.type
    let toview = `pageData[${index}].toView`
    this.setData({
      [toview]:0
    })
  },
  onChange(e){
    // console.log(e)
    this.setData({
      currentIndex:e.detail.index
    })
    // console.log(this.data.currentIndex)
  },
  ask(){
    let categories = JSON.stringify(this.data.categories)
    wx.navigateTo({
      url:`../ask/index?programa=高等数学&categories=${categories}`
    })
  },
  fetchPosts(){
    let that = this
    return new Promise((reslove,reject)=>{
      wx.cloud.callFunction({
        name: 'getPosts',
        data: {
          programa: "高等数学"
        }
      }).then(res =>{
        // console.log(res.result.data)
        let pageData = util.formatPoats(res.result.data,that.data.categories)
        // console.log(pageData)
        reslove(pageData)
      }).catch(error=>{
        reject(error)
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
    wx.showLoading({
      title: "加载中",
      mask: true
    });
    this.fetchPosts()
      .then(res=>{
        console.log(res)
        this.setData({
          pageData:res
        })
        wx.setStorage({
          key: 'posts',
          data: res
        });
        wx.hideLoading();
      }).catch(error=>{
        console.log(error)
        wx.hideLoading();
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
    wx.showLoading({
      title: "加载中",
      mask: true
    });
    this.fetchPosts()
    .then(res=>{
      this.setData({
        pageData:res
      })
      wx.hideLoading();
      wx.stopPullDownRefresh();
    }).catch(error=>{
      console.log(error)
      wx.hideLoading();
      wx.stopPullDownRefresh();
    })
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