App({
  onLaunch: function () {
    //如果本地缓存有openid则直接读取
    if (wx.getStorageSync('openid') != '') {
      console.log(wx.getStorageSync('openid'))
    } else {
      //如果没有openid则直接获取
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'http://corp.65536.io:8000/wxmeat/v1/login',
              method: 'POST',
              data: {
                appId:wx.getAccountInfoSync().miniProgram.appId,
                reqCode:res.code,
                timeStamp: new Date().getTime()
              },
              success(res) {
                console.log(res.data)
                // wx.setStorageSync('openid', res.data)
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    };
    //加载登录状态，存储第二页登陆状态到localStorage，避免载入用户信息时产生延迟变化
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //console.log('ok')
              // console.log(res.userInfo)
              wx.setStorageSync('isRegisted', true)
              wx.setStorageSync('avatarImg', "/images/excel.png")
              //用户已经授权过
            },
            fail: function (res) {
              console.log('here')
              wx.setStorageSync('isRegisted', false)
              wx.setStorageSync('avatarImg', "/images/empty_avatar.png")
            }
          })
        } else {
          //authSettings未取得用户信息授权，即未注册过
          wx.setStorageSync('isRegisted', false)
          wx.setStorageSync('avatarImg', "/images/empty_avatar.png")
        }
      },
      fail: function (res) {
        console.log('fail')
      }
    })
  }
})
