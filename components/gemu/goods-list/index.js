// commons/goodsList/goodsList.js
Component({
  options: {
    multipleSlots: true //在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImage(e) {
      var goods=this.properties.goods
      var current = e.target.dataset.src;
      var imgalist=[];
      goods.filter(function(element){
        imgalist.push(element.imgNail)
      })
      wx.previewImage({
        current: current,// 当前显示图片的http链接		  	
        urls: imgalist // 需要预览的图片http链接列表		
      })
    }
  }
})