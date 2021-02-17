// pages/register/register.js
const wxp = require('../../utils/promisify')
const wxs = require('../../utils/api')
const login = require('../../services/login')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        errors: [],
        isChecked: false,
        rules: [{
            name: 'work_no',
            rules: [{ required: true, message: '用户工号必填' }, { maxlength: 6, minlength: 4 }]
        }, {
            name: 'name',
            rules: { required: true, message: '姓名必填' },
        }]
    },
    formInputChange(e) {
        const { field } = e.currentTarget.dataset
        this.setData({
            [`formData.${field}`]: e.detail.value
        })
        //实时变更错误信息
        this.selectComponent('#form').validate((valid, errors) => {
            // console.log('valid', valid, errors)
            if (!valid) {
                const temp = []
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    temp.push(errors[firstError[0]].message)
                    this.setData({
                        errors: temp,
                        isChecked: false
                    })
                }
            } else {
                this.setData({
                    isChecked: true,
                    errors: []
                })
            }
        }
        )
    },
    submitForm() {
        //如果填写信息正确，直接访问后台login接口更新用户openid
        console.log('submitForm')
    },
    showToolTips() {
        //如果isChecked为false，则点击登陆触发此方法，显示tooltips
        this.selectComponent('#form').validate((valid, errors) => {
            // console.log('valid', valid, errors)
            if (!valid) {
                const temp = []
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    temp.push(errors[firstError[0]].message)
                    this.setData({
                        errors: temp,
                        isChecked: false
                    })
                }
            } else {
                this.setData({
                    isChecked: true,
                    errors: []
                })
            }
        }
        )
    },

    bindGetUserInfo: async function (e) {
        if (e.detail.userInfo) {
            let loginResult = await login.login(this.data.formData.work_no, this.data.formData.name)
            //获取sessionId成功，跳转到index
            loginResult ?
                await wxs.showToast('登陆成功', 'success', () => { wx.navigateTo({ title: '微用餐', url: '/pages/index/index', }) })
                :
                // await wxs.showToast('请重试', 'error')
                ''
        } else {
            //用户按了拒绝按钮以游客模式进入，清除sessionId保持为空，提示以游客模式进入
            await wxp.setStorage({ key: 'sessionId', data: '' })
            wxs.showToast('游客模式进入', 'error', () => { wx.navigateTo({ title: '微用餐', url: '/pages/index/index', }) })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        login.check()
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
        login.check()
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