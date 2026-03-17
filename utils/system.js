export function getStatusBarHeight() {
  return wx.getWindowInfo().statusBarHeight || 50
}

export function getSafeArea() {
  return wx.getWindowInfo().safeArea
}

export function getMenuButtonBoundingClientRect() {
  const menuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect()
  return menuButtonBoundingClientRect
}
