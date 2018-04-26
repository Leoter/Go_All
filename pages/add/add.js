// pages/add/add.js
var util = require('../../utils/util.js');  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskTypes: ["代拿快递","代打印","代课","其它"],
    taskTypeIndex: 1,

    templateTypes: ['express','print','lesson','other'],
    templateIndex: 1,

    templateData: { 
      express:{
        date: util.formatDate(new Date()),
      },
      print: {
        printSize: ['A3', 'A4'],
        printType:[
          ["黑白","彩印"],
          ["单面打印","双面打印"]
        ],
        printSizeIndex: 1,
        printTypeIndex: [0, 0],
        printNum: 1,
      },
    },
    
  },


  bindTaskTypeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      taskTypeIndex: e.detail.value,
      templateIndex: e.detail.value,
 
    })
  },

  bindDateChange: function (e) {
    var date = "templateData.express.date";
    this.setData({
      [date]: e.detail.value,  
    })
  },

  /**
  * 代打印——监听打印纸张大小的变化
  */
  bindPrintSizeChange: function (e) {
    //console.log('picker PintSize 发生选择改变，携带值为', e.detail.value);
    var printSizeIndex = "templateData.print.printSizeIndex";
    this.setData({
      [printSizeIndex]: e.detail.value,
    })
  },

  /**
   * 代打印——监听打印方式的变化
   */
  bindPrintTypeChange: function (e) {
    //console.log('picker PintSize 发生选择改变，携带值为', e.detail.value);
    var printTypeIndex = "templateData.print.printTypeIndex";
    this.setData({
      [printTypeIndex]: e.detail.value,
    })
  },  

  /**
   * 代打印——监听打印份数的改变
   */
  bingPrintNumChange: function (e) {
    console.log('picker PintSize 发生选择改变，携带值为', e.detail.value);
    var printNum = "templateData.print.printNum";
    this.setData({
      [printNum]: e.detail.value,
    })
  },

  TaskSubmit: function (e) {
    // 任务类型
    console.log(e.detail.value);  
    var formData = e.detail.value;
    wx.request({
      url: 'https://test.alvinsite.top/index.php',
      //url: 'http://localhost/goAll/index.php',
      method: 'POST',
      data: formData,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  TaskReset: function (e) {
    console.log('form发生了reset事件');  
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