// pages/programa/advanced_mathematics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    show:false,
    pageData:[
      {
        type:0,
        toView: 0,
        tab:'函数与极限',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png',
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        type:1,
        toView: 0,
        tab:'无穷级数',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        tab:'微分方程',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        tab:'定积分及其应用',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        tab:'不定积分',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        tab:'微分中值定理',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      },
      {
        tab:'导数与微分',
        questions:[
          {
            _id:'A123',
            title:'老师的ppt有点看不懂，求解,老师的ppt有点看不懂，求解',
            pictures:[
              '../../../images/videos.png',
              '../../../images/videos.png',
              '../../../images/videos.png'
            ],
            avatar:'../../../images/videos.png',
            nickname:'无心少年不懂情',
            pubtime:'2019-09-20',
            count:7
          },
        ]
      }
    ]
  },
  enter(e){
    // console.log(event)
    wx.navigateTo({
      url: `../questionDetail/index?_id=${e.currentTarget.dataset.id}`
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
    let categories = [];
    this.data.pageData.forEach(item=>{
      categories.push(item.tab)
    })
    categories = JSON.stringify(categories)
    wx.navigateTo({
      url:`../ask/index?programa=高等数学&categories=${categories}`
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