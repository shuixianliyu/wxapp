// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCover: true,
    type: 0,
    titleList: [
      '羊肉窜', '凉菜', '特色菜', '米粉', '热菜'
    ],
    detailList: [{
        title: '羊肉窜',
        foods: [{
            img: '/images/kc.jpg',
            name: '烤肠',
            price: '20.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/kc.jpg',
            name: '烤肠',
            price: '20.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          }
        ]
      },
      {
        title: '凉菜',
        foods: [{
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/kc.jpg',
            name: '烤肠',
            price: '20.00',
            info: 'fjkfjk'
          },
        ]
      },
      {
        title: '特色菜',
        foods: [{
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          }
        ]
      },
      {
        title: '米粉',
        foods: [{
            img: '/images/kc.jpg',
            name: '烤肠',
            price: '20.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          }
        ]
      },
      {
        title: '热菜',
        foods: [{
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          },
          {
            img: '/images/htc.jpg',
            name: '火腿肠',
            price: '10.00',
            info: 'fjkfjk'
          }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    const title = this.data.titleList[0];
    this.setData({
      menuTitle: title
    })
    this.scrolltop()
    this.height()
  },
  chooseMenu(e) {
    const index = e.currentTarget.dataset.index;
    const title = this.data.titleList[index];
    this.setData({
      type: index,
      menuTitle: title,
      tab: 'list' + index
    })
  },
  //计算滚动距离
  scrolltop() {
    //index=1,detailList[0]的距离:(25 + 89 * detailList[0].foods.length)
    //index=2,detailList[0]的距离+detailList[1]的距离
    //(25 + 89 * detailList[0].foods.length)+(25 + 89 * detailList[1].foods.length)=292+203
    var totalTop = 0;
    var positionArray = [];
    var detailList = this.data.detailList;
    for (let i = 0; i < detailList.length; i++) {
      const length = detailList[i].foods.length;
      totalTop += (24 + 89 * length);
      positionArray.push(totalTop);
    }
    console.log(positionArray)
    let lastheight = 25 + 89 * (detailList[detailList.length - 1].foods.length)
    console.log(lastheight)
    this.setData({
      positionArray,
      lastheight
    })
  },
  //计算bottom
  height() {
    const that = this
    var bottomheight = 0
    const lastheight = this.data.lastheight
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.screenHeight);
        console.log(res.windowHeight);
        console.log(res.statusBarHeight);
        if (lastheight < res.windowHeight) {
          bottomheight = res.windowHeight - lastheight
        }
        console.log(bottomheight)
        that.setData({
          bottomheight
        })
      },
    })
  },
  //滚动
  menuTab(e) {
    const that = this
    const position = e.detail.scrollTop
    const titleList = this.data.titleList
    const positionArray = this.data.positionArray
    var ttype, tmenuTitle
    console.log(position)
    positionArray.filter(function(element, index) {
      if (position > element) {
        ttype = index + 1;
        tmenuTitle = titleList[index + 1];
      }
      if (position < positionArray[0]) {
        ttype = 0;
        tmenuTitle = titleList[0];
      }
    })
    that.setData({
      type: ttype,
      menuTitle: tmenuTitle
    })
  },
  //滚动到底部
  scrollbottom(){
    const titleList = this.data.titleList;
    this.setData({
      type: titleList.length-1,
      menuTitle: titleList[titleList.length - 1]
    })
  },
  bindPlus(e) {
    //单个商品所在小组索引
    const index = e.currentTarget.dataset.index;
    //商品大组中的索引值
    const menuIndex = e.currentTarget.dataset.menuindex;
    const detailList = this.data.detailList
    const food = detailList[menuIndex].foods[index]
    if (!food.count) {
      food.count = 1;
    } else {
      food.count++;
    }
    detailList[menuIndex].foods[index] = food
    this.setData({
      detailList
    })
    this.total()
  },
  bindMinus(e) {
    //单个商品所在小组索引
    const index = e.currentTarget.dataset.index;
    //商品大组中的索引值
    const menuIndex = e.currentTarget.dataset.menuindex;
    const detailList = this.data.detailList
    const food = detailList[menuIndex].foods[index]
    food.count--
      detailList[menuIndex].foods[index] = food
    console.log(detailList)
    this.setData({
      detailList
    })
    this.total()
  },
  // 结算数量和总价
  total() {
    let foods = [];
    let t = 0;
    let sumPrice = 0;
    this.data.detailList.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food)
        }
      })
    })
    foods.forEach((food) => {
      t += food.count;
      sumPrice += food.count * food.price;
    })
    this.setData({
      num: t,
      sum: Number(sumPrice.toFixed(2))
    });
  },
  detail(e) {
    const index = e.currentTarget.dataset.index;
    const menuIndex = e.currentTarget.dataset.menuindex;
    const detailList = this.data.detailList;
    const food = detailList[menuIndex].foods[index];
    const selectfood = food;
    this.setData({
      selectfood: selectfood,
      isCover: false
    })
  },
  close() {
    this.setData({
      isCover: true
    })
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

  }
})