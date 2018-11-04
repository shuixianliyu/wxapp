// pages/goodslist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.title)
    const name = options.title;
    const that=this;
    if (name == 1) {
      wx.setNavigationBarTitle({
        title: '美食精选'
      })
      that.setData({
        list: that.data.goodslist
      })
    }else{
      wx.setNavigationBarTitle({
        title: '门店环境'
      })
      that.setData({
        list: that.data.placelist
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})