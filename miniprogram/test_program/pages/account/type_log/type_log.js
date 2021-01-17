// pages/account/type_log/type_log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2021-01-04",
    formData:{
    },
    rules: [{
      name: 'name',
      rules: {required: true, message: '姓名必填'},
  }, {
      name: 'mobile',
      rules: [{required: true, message: '手机号必填'}, {mobile: true, message: '手机号码格式不对'}]
  }]
},
  bindDateChange: function (e) {
    this.setData({
        date: e.detail.value,
        [`formData.date`]: e.detail.value
    })
},
formInputChange(e) {
  const {field} = e.currentTarget.dataset
  this.setData({
      [`formData.${field}`]:e.detail.value
  })
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