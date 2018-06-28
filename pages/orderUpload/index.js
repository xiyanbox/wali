const util = require('../../utils/util.js')


Page({

  data: {
    btnText:'提交',
    time: null,
    rubblishClassifyList: [{
      id: 1,
      name: '金属',
      checked: false,
      color: 'green'


    }, {
      id: 2,
      name: '塑料',
      checked: false,
      color: 'green'


    }, {
      id: 3,
      name: '电器',
      checked: false,
      color: 'green'


    }, {
      id: 4,
      name: '废纸',
      checked: false,
      color: 'green'


    }, {
      id: 5,
      name: '其他',
      checked: false,
      color: 'green'


    }],
    dayList: [],
    tags: [{
        name: '08:00-10:00',
        id: 0,
        checked: false,
        color: 'green'
      },
      {
        name: '08:00-10:00',
        checked: false,
        id: 1,

        color: 'green'
      },
      {
        name: '08:00-10:00',
        id: 2,

        checked: false,
        color: 'green'
      },
      {
        name: '08:00-10:00',
        id: 3,

        checked: false,
        color: 'green'
      },

      {
        name: '10:00-14:00',

        id: 4,

        checked: false,
        color: 'green'
      },
      {
        name: '10:00-14:00',
        id: 5,

        checked: false,
        color: 'green'
      },
      {
        name: '10:00-14:00',
        id: 6,

        checked: false,
        color: 'green'
      },
      {
        name: '10:00-14:00',
        id: 7,

        checked: false,
        color: 'green'
      },

      {
        name: '14:00-18:00',
        id: 8,

        checked: false,
        color: 'green'
      },
      {
        name: '14:00-18:00',
        id: 9,

        checked: false,
        color: 'green'
      },
      {
        name: '14:00-18:00',
        id: 10,

        checked: false,
        color: 'green'
      },
      {
        name: '14:00-18:00',
        id: 11,

        checked: false,
        color: 'green'
      }
    ],
    current: [],
    img_arr:[]

  },

  onChange(event) {
    const detail = event.currentTarget.dataset.id;
    this.setData({
      id: detail
    })

  },
  hello(event) {
    const detail = event.detail;
    this.setData({
      ['rubblishClassifyList[' + event.detail.name + '].checked']: detail.checked
    })

  },


  getFormatDate(arg) {
    if (arg == undefined || arg == '') {
      return '';
    }

    var re = arg + '';
    if (re.length < 2) {
      re = '0' + re;
    }

    return re;
  },



  addDate(date, days) {
    if (days == undefined || days == '') {
      days = 1;
    }
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var weekDay = date.getDay();
    switch (weekDay) {
      case 0:
        weekDay = '日'
        break;
      case 1:
        weekDay = '一'
        break;
      case 2:
        weekDay = '二'
        break;
      case 3:
        weekDay = '三'
        break;
      case 4:
        weekDay = '四'
        break;
      case 5:
        weekDay = '五'
        break;
      case 6:
        weekDay = '六'
        break;
      green:
        break;
    }
    return this.getFormatDate(month) + '-' + this.getFormatDate(day) + '/周' + weekDay;
  },
  upconfirm: function () {  
    this.up();  
  },  
  up: function () {  


    wx.navigateTo({
      url: '../result/index?id=1'
    })
    
    var that = this;  
    data = {  
      'user': 'test'

    }  
    wx.uploadFile({  
      url: 'pg.php/Aishen/upload_photo',  
      filePath: that.data.img_arr[i],  
      name: 'image', //文件对应的参数名字(key)  
      formData: data,  //其它的表单信息  
      success: function (res) {  
      }, complete: function (complete) {  
        console.log(complete)  
        i++  
        if (i == that.data.img_arr.length) {  
          util.request('https://sz800800.cn/pg.php/Aishen/uploade_photo_r', 'post', { 'only_num': only_num }, '正在加载数据', function (res) {  
            console.log(res)  
            if (res.data.state == 1) {  
              wx.showModal({  
                title: '提示',  
                content: '提交成功!',  
                success: function (res) {  
                  that.onLoad()  
                  wx.navigateBack({  
                    delta: 1  
                  })  
                }  
              })  
            } else {  
              wx.showModal({  
                title: '提示',  
                content: '提交失败,请重新提交!',  
              })  
            }  
          })  
        } else if (i < that.data.img_arr.length) {//若图片还没有传完，则继续调用函数  
          that.up()  
        }  
      }  
    })  



  },  
  upimg: function () {  
    var that = this;  
    if (this.data.img_arr.length < 5) {  
      wx.chooseImage({  
        sizeType: ['original', 'compressed'],  
        success: function (res) {  
          that.setData({  
            img_arr: that.data.img_arr.concat(res.tempFilePaths)  
          })  
          var num = that.data.img_arr.length  
        }  
      })  
    } else {  
      wx.showToast({  
        title: '最多上传5张图片',  
        icon: 'loading',  
        duration: 3000  
      });  
    }  
  },  


  onLoad: function (options) {
    if(options&&options.id){
      this.setData({
        btnText:'预约王大爷',
        xiaogeId:options.id
      })
    }
    
    var currentTime = new Date();
    var day,
      dayList = [];
    for (let index = 1; index < 5; index++) {

      var day = this.addDate(currentTime, index)
      dayList.push(day);

    }

    this.setData({
      dayList: dayList
    })



    var time = util.formatTime(currentTime);
    this.setData({
      time: time.substring(0, 10)
    })
  },

  onReady: function (e) {
  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
});