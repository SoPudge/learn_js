const { promisifyAll, promisify } = require('miniprogram-api-promise')
const { tt, te } = require('../utils/await-to')
const wxs = require('../utils/api')
const wxp = {}
promisifyAll(wx, wxp)

let login = async function () {
    let reqCode = await wxp.login()
    let sessionId = await wxs.request('POST', '/wxmeat/v1/login', { appId: wx.getAccountInfoSync().miniProgram.appId, reqCode: reqCode.code, timeStamp: new Date().getTime() })
    await wxp.setStorage({ key: 'sessionId', data: sessionId.data.sessionId })
    return sessionId.data
}

module.exports = login