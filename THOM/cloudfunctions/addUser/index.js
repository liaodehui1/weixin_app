// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const THOM_users = db.collection('THOM_users');
// 云函数入口函数
exports.main = async (event, context) => {
  // 需要return
  return THOM_users.add({
    data:{
      openid:event.openid,
      avatarUrl:event.userInfo.avatarUrl,
      nickName:event.userInfo.nickName,
      gender:event.userInfo.gender,
      intro:""
    }
  })
}