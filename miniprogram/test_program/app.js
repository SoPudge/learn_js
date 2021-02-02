const wxp = require('./utils/promisify')
const wxs = require('./utils/api')

const login = require('./services/login')
App({
  onLaunch: async function () {
    // //登录逻辑，如果不存在sessionId则登录
    // if (wx.getStorageSync('sessionId') === '') {
    //   return login()
    // }

    // //检查用户是否给过登陆权限，即是否注册过
    // let authStatu = await wxp.getSetting()
    // if (authStatu.authSetting['scope.userInfo']) {
    //   let userInfo = await wx.getUserInfo()
    //   // console.log(userInfo.userInfo.avatarUrl)
    //   wx.setStorageSync('avatarImg', userInfo.userInfo.avatarUrl)
    //   wx.setStorageSync('isRegisted', true)
    // } else {
    //   wx.setStorageSync('avatarImg', "/images/empty_avatar.png")
    //   wx.setStorageSync('isRegisted', false)
    // }
  },
  // onError: function (err) {
  //   console.log('cowu' + err)
  // }
})
