// pages/component/component.js
Page({
  data: {},
  view(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },
})
