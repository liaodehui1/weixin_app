// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const THOM_users = db.collection('THOM_users');
// 云函数入口函数
exports.main = async (event, context) => {
  let user = await THOM_users.where({openid:event.openid}).get()
  return user;
}