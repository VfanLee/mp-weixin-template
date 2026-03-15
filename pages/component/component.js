// pages/component.js
Page({
  data: {},
  view() {
    wx.navigateTo({
      url: '/subpackages/component/button/button',
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    })
  },
})
