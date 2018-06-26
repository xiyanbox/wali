Page({

  data: {
    tags: [{
      "name": "全部",
      "id": 0
    }, {
      "name": "金属",
      "id": 1
    }, {
      "name": "塑料",
      "id": 2
    }, {
      "name": "电器",
      "id": 3
    }, {
      "name": "废纸",
      "id": 4
    }, {
      "name": "其他",
      "id": 5
    }],
    id: 0
  },
  choicetags: function (e){
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      id: id
    })  


  },

  onLoad: function(options) {

  },

  onReady: function() {

  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function() {

  }
});