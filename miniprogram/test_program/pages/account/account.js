Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isRegisted: false,
    avatarImg: "/images/empty_avatar.png"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo){
      console.log("用户按了允许授权按钮")
    } else {
      //用户按了拒绝按钮
    }
  },
  navToMeatLog: function(){
    wx.navigateTo({
      title: '就餐记录',
      url: '/pages/account/meat_log/meat_log',
    })
  },
  navToTempLog: function(){
    wx.navigateTo({
      title: '临时就餐记录',
      url: '/pages/account/temp_log/temp_log',
    })
  },
  navToDailyLog: function(){
    wx.navigateTo({
      title: '当日用餐记录',
      url: '/pages/account/daily_log/daily_log',
    })
  },
  tapToScanCode: function(){
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
      }
    })    
  },
  navToTypeLog: function(){
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