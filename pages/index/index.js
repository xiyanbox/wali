//index.js
//获取应用实例
const app = getApp()
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    address: "位置加载中",
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  goToInputInfo() {
    wx.navigateTo({
      url: '../orderUpload/index'
    })
  },
  goToRubblishList: function () {
    wx.navigateTo({
      url: '../rubblishList/index'
    })
  },
  onLoad: function () {
    var that = this



    // 实例化API核心类
             qqmapsdk = new QQMapWX({
      key: 'CKOBZ-V6R3I-CC2GL-5IENL-BC6HF-BQF6Z'        
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            that.setData({
              address
            })
          },
           fail: function (addressRes) {   
            var address = '地址解析失败';     
            that.setData({
              address
            })
          }
        })
      },
       fail: function (addressRes) {   
        var address = '获取位置失败';     
        that.setData({
          address
        })
      }
    })


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    // 调用接口
    qqmapsdk.search({
      keyword: '中大银座',
      success: function (res) {
        console.log('1', res);
      },
      fail: function (res) {
        console.log('2', res);
      },
      complete: function (res) {
        console.log('3', res);
      }
    });


  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})