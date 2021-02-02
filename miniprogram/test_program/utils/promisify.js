//promisify化
const { promisifyAll, promisify } = require('miniprogram-api-promise')
const wxp = {}
promisifyAll(wx, wxp)

module.exports = wxp