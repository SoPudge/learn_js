const wxp = require('../utils/promisify')

let loginCheck = async function () {
    //检查用户是否给过登陆权限，即是否注册过选择性显示用户信息
    let authStatu = await wxp.getSetting()
    if (authStatu.authSetting['scope.userInfo']) {
        let userInfo = await wx.getUserInfo()
        wx.setStorageSync('avatarImg', userInfo.userInfo.avatarUrl)
        wx.setStorageSync('isRegisted', true)
    } else {
        wx.setStorageSync('avatarImg', "/images/empty_avatar.png")
        wx.setStorageSync('isRegisted', false)
    }
}

// module.exports = {
//     loginCheck:loginCheck
// }
module.exports = loginCheck