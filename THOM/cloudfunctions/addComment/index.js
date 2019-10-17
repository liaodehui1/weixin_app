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
    db.collection("THOM_comments").add({
      data: {
        openid:event.openid,
        post_id:event.post_id,
        pubtime: pubTime,
        content: event.content,
        pictures: event.images_fileID
      },
      success: res => {
        console.log(res)
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}