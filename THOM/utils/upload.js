var app =  getApp();

wx.cloud.init()
const db = wx.cloud.database();

var upload = function(event){
    return new Promise((resolve,reject)=>{
      var images_fileID = []
      var date = new Date()
      var pubTime = date.getFullYear()+"-"
        +(date.getMonth()+1 >= 10 ? date.getMonth()+1 : "0"+(date.getMonth()+1))+"-"
        +date.getDate();
      var avatarUrl = app.globalData.userInfo.avatarUrl
      var nickName = app.globalData.userInfo.nickName
      for(let i = 0; i < event.image_files.length; i++){
        var imageUrl = event.image_files[i].split('/')
        var name = imageUrl[imageUrl.length-1]
        wx.cloud.uploadFile({
          cloudPath:'THOM/post_images/'+name,
          filePath:event.image_files[i],
          success:res => {
            images_fileID.push(res.fileID)
            if(images_fileID.length === event.image_files.length){
              db.collection("THOM_posts").add({
                data:{
                  pubtime:pubTime,
                  programa:event.programa,
                  category:event.category,
                  title:event.title,
                  content:event.content,
                  // pictures:image_files,
                  pictures:images_fileID,
                  avatar:avatarUrl,
                  nickname:nickName,
                  count:0
                },
                success:res => {
                  resolve(res)
                  // return res;
                },
                fail:error => {
                  reject(error)
                  // return error
                }
              })
            }
          }
        })
      }
    })
}

module.exports.uploadPost = upload