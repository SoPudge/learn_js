// pages/account/meat_log/meat_log.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // array: [1,2,3,4,5,6,7]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var d = new Date()
        var date_start_stamp = 1609502182000
        var date_end_stamp = d.getTime()
        wx.request({
          url: 'http://corp.65536.io:8000/wxmeat/v1/meatlog',
          data: {
              openid: wx.getStorageSync('openid'),
              date_start_stamp: date_start_stamp,
              date_end_stamp: date_end_stamp
          },
          method: "GET",
          success(res) {
            //wx.setStorageSync('openid', res.data)
            console.log(res.data)
          },
          fail(err){
              //console.log(err)
          }
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