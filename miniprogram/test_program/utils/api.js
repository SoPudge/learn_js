//封装微信小程序api方便调用
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';

const baseURL = 'http://corp.65536.io:8000'
function request(method, url, data) {
    return new Promise(function (resolve, reject) {
        let header = {
            'content-type': 'application/json',
            'sessionId': wx.getStorageSync('sessionId'),
            'appId':wx.getAccountInfoSync().miniProgram.appId
        };
        wx.request({
            url: baseURL + url,
            method: method,
            data: method === POST ? JSON.stringify(data) : data,
            header: header,
            success(res) {
                //请求成功
                if (!JSON.stringify(res.data).hasOwnProperty('error_code')) {
                    resolve(res);
                } else {
                    //其他异常
                    reject('运行时错误,请稍后再试');
                }
            },
            fail(err) {
                //请求失败
                reject(err)
            }
        })
    })
}

module.exports = {
    request: request
}