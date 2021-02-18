/*
 * @Description: 
 * @Version: 1.0
 * @Autor: SoPudge
 * @Date: 2021-02-07 06:29:27
 * @LastEditors: SoPudge
 * @LastEditTime: 2021-02-18 20:33:58
 */
const { promisifyAll, promisify } = require('miniprogram-api-promise')
const { tt, te } = require('../utils/await-to')
const wxp = {}
promisifyAll(wx, wxp)
//封装微信小程序api方便调用
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const FORM = 'FORM';
const DELETE = 'DELETE';


const baseURL = 'http://corp.65536.io:8000'
/**
 * @description: 封装wx.request请求，默认带有sessionId和appId在header当中，其中sessionId通过getStorage获取本地存储
 * @param {*} method: 字符串，请求方法如'POST'
 * @param {*} url: 请求URL，格式必须带根目录，如'baseurl/xx/v1/xx'
 * @param {*} data: 传入对象即可，会按照GET/POST自动转换为json
 * @return {*} 
 */
function request(method, url, data) {
    return new Promise(function (resolve, reject) {
        let header = {
            'content-type': 'application/json',
            'sessionId': wx.getStorageSync('sessionId'),
            'appId': wx.getAccountInfoSync().miniProgram.appId
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

/**
 * @description: 封装wx.showToast方法，使得toast后可以执行函数后再消失
 * @param {*} title: toast显示内容
 * @param {*} icon: toast显示图标，在开发工具内总是显示success，真机调试正常显示
 * @param {*} func: 需要配合执行的函数
 * @return {*} 无返回
 * @author: SoPudge
 */
let showToast = async function (title, icon = 'success', func) {
    wx.showToast({
        title: title,
        icon: icon,
        complete: () => {
            setTimeout(func, 2000)
        }
    })
}

/**
 * @description: 检查是否有用户授权微信获取用户信息authSetting['scope.userInfo']
 * @return {*} 根据是否获得用户授权返回true/false
 * @author: SoPudge
 */
let isAuth = async function () {
    let authStatu = await wxp.getSetting()
    // console.log(authStatu.authSetting['scope.userInfo'] ? true : false)
    return authStatu.authSetting['scope.userInfo'] ? true : false
}

module.exports = {
    request: request,
    showToast: showToast,
    isAuth: isAuth
}