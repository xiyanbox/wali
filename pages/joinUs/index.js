// pages/joinUs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '输入框已禁用',
    value5: '',
    value6: '',
    value7: '',
    rubblishClassifyList: [{
      id: 1,
      name: '金属',
    }, {
      id: 2,
      name: '塑料'
    }, {
      id: 3,
      name: '电器'
    }, {
      id: 4,
      name: '废纸',
    }, {
      id: 5,
      name: '其他',
    }],
    current: ['其他', '金属', '塑料', '电器','废纸'],
    position: 'right',
    checked: false,

  },
  handleFruitChange({ detail = {} }) {
    const index = this.data.current.indexOf(detail.value);
    index === -1 ? this.data.current.push(detail.value) : this.data.current.splice(index, 1);
    this.setData({
      current: this.data.current
    });
  },
 
  formSubmit: function (e) {
      console.log(this.data)
  },
  formReset: function () {

  },

  
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})