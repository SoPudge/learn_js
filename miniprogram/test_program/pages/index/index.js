Page({

  /**
   * 页面的初始数据
   */
  navigate_temp_apply: function(){
    wx.navigateTo({
      title: '临时就餐',
      url: '/pages/temp_apply/temp_apply',
    })
  },
  navigate_record: function(){
    wx.navigateTo({
      title: '就餐记录',
      url: '/pages/record/record',
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
  onShareAppMessage() {
    return {
      title: '点击报餐',
      path: 'page/deal/deal'
    }
  }
})