const wxp = require('./utils/promisify')
const wxs = require('./utils/api')

App({
  onLaunch: function () {
  },
  onShow: async function(){
    //每次开启小程序检查是否拥有sessionId
    // wx.showToast({
    //   title: 'onshow',
    // })
  }
})
