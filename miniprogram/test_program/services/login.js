const { promisifyAll, promisify } = require('miniprogram-api-promise')
const { tt, te } = require('../utils/await-to')
const wxs = require('../utils/api')
const wxp = {}
promisifyAll(wx, wxp)

let login = async function (work_no, cn_name) {
    let reqCode = await wxp.login()
    let appId = await wx.getAccountInfoSync().miniProgram.appId
    let timeStamp = await (new Date()).getTime().toString()
    let data = { 'reqCode': reqCode.code, 'appId': appId, 'timeStamp': timeStamp, 'work_no': work_no, 'cn_name': cn_name }
    console.log(data)
    //请求和验证登陆信息，正确则返回sessionId正常登陆，错误需处理
    let session = await wxs.request('POST', '/wxmeat/v1/login', data)
    if (session.data.hasOwnProperty('error_code')) {
        await wxp.showModal({ title: session.data.message })
        await wxp.setStorage({ key: 'sessionId', data: '' })
        await wxp.setStorage({ key: 'work_no', data: '' })
        await wxp.setStorage({ key: 'cn_name', data: '' })
        return false
    } else {
        //注册成功，获取了sessionId写入storage
        await wxp.setStorage({ key: 'sessionId', data: session.data.sessionId })
        await wxp.setStorage({ key: 'work_no', data: work_no })
        await wxp.setStorage({ key: 'cn_name', data: cn_name })
        // await wxp.setStorage({ key: 'isRegisted', data: true })
        return true
    }
}

let check = async function () {
    //如果授权过，检查sessionId是否存在
    await wxp.showLoading({ title: '检测登录状态中' })
    if (await wxs.isAuth()) {
        let userInfo = await wx.getUserInfo()
        //再检查sessionId是否为空
        wx.getStorageSync('sessionId') === '' ?
            await wxp.showModal({ title: '请重新输入用户信息' })
            :
            await wxp.navigateTo({ url: '/pages/index/index' })
        await wxp.hideLoading({ success: (res) => { } })
        // await wxp.setStorageSync('isRegisted', true) 
    } else {
        await wxp.hideLoading({ success: (res) => { } })
        await wxp.showModal({ title: '请重新输入用户信息' })
        // await wxp.setStorageSync('isRegisted', false)
    }
}

module.exports = {
    login: login,
    check: check
}