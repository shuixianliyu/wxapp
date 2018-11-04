//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    phone:'028 - 56937987',
    bannerlist:[
      {
        picture:'/images/banner01.jpg'
      },
      {
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        duration:10000
      },  
      {
        picture:'/images/banner02.jpg'
      },
      {
        picture:'/images/banner03.jpg'
      }
    ],
    goodslist: [{
      imgNail: 'http://img.cdkbit.com/images/2018/10/09/222c7c802518cce6ea8197125fdaba86.jpg',
        name: '火腿'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/10/09/2c686751b4504cc4a852338d0328cf81.jpg',
        name: '海鲜肠'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/10/09/0ccdc92ae6d5451ea74832ba3bf42a12.jpg',
        name: '烤肠'
      }
    ],
    placelist: [
      {
        imgNail: 'http://img.cdkbit.com/images/2018/10/09/222c7c802518cce6ea8197125fdaba86.jpg'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/10/09/0ccdc92ae6d5451ea74832ba3bf42a12.jpg',
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/09/27/_20180825141427.jpg'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/09/27/project.jpg'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/09/27/job.jpg'
      },
      {
        imgNail: 'http://img.cdkbit.com/images/2018/09/27/repair.jpg'
      }
    ]
  },
  onLoad: function() {

  },
  mapViewTap: function () {
    const that = this
    wx.openLocation({
      latitude: 30.534344,
      longitude: 104.068277,
      scale: 16,
      name: '匠人专业美发沙龙',
      address: '天府五街美年广场A座654号'
    })
  },
  callPhone(){
    const that=this
    wx.makePhoneCall({
      phoneNumber: that.data.phone
    })
  }
})