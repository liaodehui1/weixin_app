// components/upload/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    files: {
      type: Array,
      value: []
    },
    maxFileCount: { //允许最多9张图片
      type: Number,
      value: 9
    },
    isCanAddFile: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _chooseImage:function (e){
      // console.log(e)
      let that = this
      wx.chooseImage({
        count: that.data.maxFileCount - that.data.files.length,
        sizeType: ['original','compressed'], //原图还是压缩图
        sourceType: ['album','camera'], //相册或相机
        success: (result)=>{
          // console.log(result)
          let allFiles = result.tempFilePaths
          let allowCount =  that.data.maxFileCount - that.data.files.length
          let isCanAddFile = true
          if(allFiles.length >= allowCount){
            allFiles = allFiles.slice(0,allowCount)
            isCanAddFile = false
          }
          that.setData({
            files: that.data.files.concat(allFiles),
            isCanAddFile:isCanAddFile
          });
        },
        // fail: ()=>{},
        // complete: ()=>{}
      });
    },
    _deleteImage:function(e){
      console.log(e)
      let index = e.currentTarget.dataset.index
      this.data.files.splice(index,1)
      if(this.data.files.length < this.data.maxFileCount){
        this.data.isCanAddFile = true
      }
      this.setData({
        files:this.data.files,
        isCanAddFile:this.data.isCanAddFile
      })
    }
  }
})
