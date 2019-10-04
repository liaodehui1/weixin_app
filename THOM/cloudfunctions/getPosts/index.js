// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const $ = db.command.aggregate
const THOM_posts = db.collection('THOM_posts');
// 云函数入口函数
exports.main = async (event, context) => {
  let posts = THOM_posts.where({programa:event.programa}).get();
  return posts
}