// index.js
const { format } = require('../../utils/date')

const defaultAvatarUrl =
  'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const shareTitle = `mp-weixin-template`
const shareImageUrl = `https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0`

Page({
  nowTimeTimer: null,
  shareTitle: `mp-weixin-template`,
  data: {
    nowTime: format(),
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onLoad() {
    wx.showShareMenu({ withShareTicket: true })
    this.startNowTimeCounter()
  },
  onShareAppMessage() {
    return {
      title: shareTitle,
      path: '/pages/index/index',
      imageUrl: shareImageUrl,
    }
  },
  onShareTimeline() {
    return {
      title: shareTitle,
      query: '',
      imageUrl: shareImageUrl,
    }
  },
  onShow() {
    this.startNowTimeCounter()
  },
  onHide() {
    this.stopNowTimeCounter()
  },
  onUnload() {
    this.stopNowTimeCounter()
  },
  updateNowTime() {
    this.setData({
      nowTime: format(),
    })
  },
  startNowTimeCounter() {
    if (this.nowTimeTimer) return
    this.updateNowTime()
    this.nowTimeTimer = setInterval(() => {
      this.updateNowTime()
    }, 1000)
  },
  stopNowTimeCounter() {
    if (!this.nowTimeTimer) return
    clearInterval(this.nowTimeTimer)
    this.nowTimeTimer = null
  },
  bindViewTap() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      'userInfo.avatarUrl': avatarUrl,
      'hasUserInfo': nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      'userInfo.nickName': nickName,
      'hasUserInfo': nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      },
    })
  },
})
