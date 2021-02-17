const drawQrcode = require("../../utils/weapp-qrcode")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    qrcode_width: 0,
    qrcode_height: 0,
    qrcode_text: "{'deviceid':'0','timestamp':0,'temporary':1}",
    foreground: "#808080"
  },
  navigate_temp_apply: function () {
    wx.navigateTo({
      title: '临时就餐',
      url: '/pages/temp_apply/temp_apply',
    })
  },
  navigate_record: function () {
    wx.navigateTo({
      title: '就餐记录',
      url: '/pages/account/account',
    })
  },
  //二维码生成工具
  draw() {
    drawQrcode({
      width: this.data.qrcode_width,
      height: this.data.qrcode_height,
      // foreground:'#2E8B57',
      foreground: '#808080',
      canvasId: 'myQrcode',
      text: this.data.qrcode_text,
    })
  },
  //根据不同机型，设置二维码长宽为相关px，实际由rpx200转换而来
  convertPx: function () {
    var rpx = 250;
    var systemInfo = wx.getSystemInfoSync();
    var px = rpx / 750 * systemInfo.windowWidth;
    //设置data数据
    // console.log('set data')
    this.setData({
      qrcode_width: px,
      qrcode_height: px
    })
  },
  //获取用户信息写入二维码
  //{'date':'','work_no':'','openid':''}
  setQrcodeText: function () {
    var d = new Date
    var timestamp = d.getTime()
    // var openid = wx.getStorageSync('openid')
    this.setData({
      qrcode_text: `{"deviceid":0,"sessionId":"${wx.getStorageSync('sessionId')}","timestamp":${timestamp},"temporary":1}`
    })
    // console.log(this.data.qrcode_text)
  },
  //点按二维码刷新状态
  refreshQrcode: function () {
    wx.request({
      url: '',
      data: {
        code: res.code
      },
      success(res) {
        this.draw()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setQrcodeText()
    this.convertPx()
    this.draw()
    // console.log(this.data.qrcode_height)
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
  onShareAppMessage() {
    return {
      title: '点击报餐',
      path: 'page/deal/deal'
    }
  }
})