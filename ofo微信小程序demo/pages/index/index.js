// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"31.23",
    longitude:"121.47",
    controls:[]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer=options.timer;
    wx.getLocation({//获取经纬度
      success:(res) =>{
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
      },
    })
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
    this.mapctx=wx.createMapContext("ofo-map", this);
    this.movetoCenter();
  },

  movetoCenter:function(){
    this.mapctx.moveToLocation();
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