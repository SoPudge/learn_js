const { promisifyAll, promisify } = require('miniprogram-api-promise')
const wxp = require('../../utils/promisify')
const wxs = require('../../utils/api')
promisifyAll(wx, wxp)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //获取用户登录信息及图片显示
    authStatu: false,
    avatarImg: "/images/empty_avatar.png",
    work_no:'',
    cn_name:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function () {
    //设置页面数据
    // this.setData({
    //   avatarImg: wx.getStorageSync('sessionId') ? wx.getStorageSync('avatarImg') : "/images/empty_avatar.png"
    // })
  },

  bindGetUserInfo: function (e) {
    wx.navigateTo({
      title: '用户注册',
      url: '/pages/register/register',
    })
    // if (e.detail.userInfo) {
    //   console.log("用户按了允许授权按钮")
    //   //用户点击了授权按钮，应当请求后台数据刷新页面，登陆，同时显示一个转圈
    //   //todo引导用户进入输入用户名工号界面
    // } else {
    //   //用户按了拒绝按钮
    // }
  },
  navToMeatLog: function () {
    wx.navigateTo({
      title: '就餐记录',
      url: '/pages/account/meat_log/meat_log',
    })
  },
  navToTempLog: function () {
    wx.navigateTo({
      title: '临时就餐记录',
      url: '/pages/account/temp_log/temp_log',
    })
  },
  navToDailyLog: function () {
    wx.navigateTo({
      title: '当日用餐记录',
      url: '/pages/account/daily_log/daily_log',
    })
  },
  tapToScanCode: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        // console.log(res)
        var d = new Date
        var timestamp = d.getTime()
        wx.request({
          url: 'http://corp.65536.io:8000/wxmeat/v1/meatlog',
          data: {
            wx_meat_openid: wx.getStorageSync('openid'),
            timestamp: timestamp
          },
          method: "POST",
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            console.log(res.data)
            // wx.setStorageSync('openid', res.data)
          }
        })
      }
    })
  },
  navToTypeLog: function () {
    wx.navigateTo({
      title: '扫码异常录入',
      url: '/pages/account/type_log/type_log',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    //获取是否授权，更新用户图标
    let authStatu = await wxp.getSetting()
    if (authStatu.authSetting['scope.userInfo']) {
      let userInfo = await wxp.getUserInfo()
      let work_no = await wxp.getStorageSync('work_no')
      let cn_name = await wxp.getStorageSync('cn_name')
      this.setData({ authStatu: true, avatarImg: userInfo.userInfo.avatarUrl,work_no:work_no,cn_name:cn_name})
    } else {
      this.setData({ authStatu: false, avatarImg: "/images/empty_avatar.png" })
    }
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