// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    selectAllStatus:false,
    totalPrice:'',
    count:''
  },

  getTotalPrice(){
    let carts=this.data.carts
    let total=0
    for(let i=0;i<carts.length;i++){
      if(carts[i].selected){
        total+=carts[i].num*carts[i].price
      }
    }
    this.setData({
      totalPrice:total.toFixed(2)
    })
  },
  selectList(e){
    // console.log(e)
    let index=e.currentTarget.dataset.index
    let select=`carts[${index}].selected`
    this.setData({
      // this.data.carts[index].selected:!this.data.carts[index].selected 错误
      [select]:!this.data.carts[index].selected
    })
    this.setData({
      num:this.data.carts[index].selected?this.data.num+1:this.data.num-1
    })
    // console.log(this.data.num)
    this.setData({
      selectAllStatus:this.data.num===this.data.carts.length?true:false
    })
    this.getTotalPrice()
  },
  selectAll(e){
    let selectAllStatus=this.data.selectAllStatus
    selectAllStatus=!selectAllStatus
    let carts=this.data.carts
    for(let i=0;i<carts.length;i++){
      carts[i].selected=selectAllStatus
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts,
    })
    this.setData({
      num:selectAllStatus?this.data.carts.length:0
    })
    // console.log(this.data.num)
    this.getTotalPrice()
  },
  daleteList(e){
    const index=e.currentTarget.dataset.index
    let carts=this.data.carts
    carts.splice(index,1)
    this.setData({
      carts:carts
    })
    this.getTotalPrice()
    if(!carts.length){
      this.setData({
        hasList:false
      })
    }
  },
  reduceCount(e){
    const index=e.currentTarget.dataset.index
    if(this.data.carts[index].num===1){
      return
    }
    let num=`carts[${index}].num`
    this.setData({
      [num]:--this.data.carts[index].num
    })
    this.getTotalPrice()
  },
  addCount(e){
    const index=e.currentTarget.dataset.index
    let num=`carts[${index}].num`
    this.setData({
      [num]:++this.data.carts[index].num
    })
    this.getTotalPrice()
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
    setTimeout(()=>{
      this.setData({//直接赋值不会刷新页面状态
        hasList:true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: false },
          { id: 2, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: false },
          { id: 3, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: false },
          { id: 4, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: false },
          { id: 5, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: false }
        ],
        num:0
      })
      this.getTotalPrice()
      // console.log(this.data.num)
    },1000)
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