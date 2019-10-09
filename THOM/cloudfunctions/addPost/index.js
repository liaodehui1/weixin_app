// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    var date = new Date()
    var pubTime = date.getFullYear() + "-"
      + (date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + "-"
      + (date.getDate() >= 10 ? date.getDate() : "0" + date.getMonth())
    db.collection("THOM_posts").add({
      data: {
        pubtime: pubTime,
        programa: event.programa,
        category: event.category,
        title: event.title,
        content: event.content,
        // pictures:image_files,
        pictures: event.images_fileID,
        avatar: event.avatarUrl,
        nickname: event.nickName,
        count: 0
      },
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}