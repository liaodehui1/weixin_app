// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }
const formatPoats = (posts,categories) => {
  var pageData = []
  for(let i=0;i<categories.length;i++){
    let questions = posts.filter(item => {
      return item.category === categories[i]
    })
    let post = {}
    post.toView = 0
    post.questions = questions
    pageData.push(post)
  }
  return pageData
}

module.exports = {
  formatPoats: formatPoats
}
