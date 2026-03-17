// pages/list/list.js
Page({
  data: {},
  view(e) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },
})
