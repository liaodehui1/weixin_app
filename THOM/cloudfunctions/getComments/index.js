// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const THOM_comments = db.collection('THOM_comments');
// 云函数入口函数
exports.main = async (event, context) => {
  let comments = await THOM_comments.where({post_id:event.post_id}).get();
  return comments
}