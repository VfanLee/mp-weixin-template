// pages/api/api.js
Page({
  data: {},
  onLoad(options) {},
  clgEnv() {
    console.log('env', wx.env)
    console.log('getAccountInfoSync()', wx.getAccountInfoSync(), wx.getAccountInfoSync().miniProgram.envVersion)
  },
  onJiaohu() {
    // wx.showToast({
    //   title: 'title',
    //   icon: 'none', // success, error, loading, none
    //   duration: 2000,
    // })
    // wx.hideToast()

    // wx.showModal({
    //   title: 'title',
    //   content: 'content',
    //   complete: (res) => {
    //     if (res.cancel) {
    //       console.log('点击了取消')
    //     } else if (res.confirm) {
    //       console.log('点击了确定')
    //     }
    //   },
    // })

    // wx.showLoading({
    //   title: '加载中...',
    // })
    // wx.hideLoading()

    wx.showActionSheet({
      itemList: ['A', 'B', 'C', 'D', 'E', 'F'], // 最多6个
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      },
    })
  },
  onNavbar() {
    // wx.showNavigationBarLoading()
    // wx.hideNavigationBarLoading()

    wx.setNavigationBarTitle({
      title: 'title',
    })

    wx.setNavigationBarColor({
      backgroundColor: '#ff0000',
      frontColor: '#ffffff',
    })

    wx.hideHomeButton()
  },
  onTabbar() {
    wx.showTabBar({
      animation: false,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
    wx.showTabBarRedDot({
      index: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  onBackground() {
    wx.startPullDownRefresh()
    wx.setBackgroundColor({ backgroundColor: '#ff0000' }) // 窗口的背景色
    wx.setBackgroundTextStyle({ textStyle: 'light' }) // 下拉背景字体、loading 图的样式
  },
})
