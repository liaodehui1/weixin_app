var app =  getApp();

wx.cloud.init()

var upload = function(url,image_files){
    return new Promise((resolve,reject)=>{
      var images_fileID = []
      for(let i = 0; i < image_files.length; i++){
        var imageUrl = image_files[i].split('/')
        var name = imageUrl[imageUrl.length-1]
        wx.cloud.uploadFile({
          cloudPath:`${url}${name}`,
          filePath:image_files[i],
          success:res => {
            images_fileID.push(res.fileID)
            if(images_fileID.length === image_files.length){
              resolve(images_fileID)
            }
          },
          fail:error => {
            reject(error)
          }
        })
      }
    })
}

module.exports.uploadPost = upload