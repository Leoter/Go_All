// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgHeadPortrait: [
      'https://s.gravatar.com/avatar/b83677b6df7e637782565e8fc6c89455?s=80',
    ],
    icon: [
      '../../images/Checklist_64px.png',
      '../../images/Up_64px.png',
      '../../images/Down_64px.png',
      '../../images/Settings_64px.png',
    ],
  },

  previewHeadPortrait: function (e) {
    var imgArr = this.data.imgHeadPortrait;
    wx.previewImage({
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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