//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:800
  }
  })