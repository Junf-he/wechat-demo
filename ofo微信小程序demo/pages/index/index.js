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
  bindcontroltap: function (e) {
    switch (e.controlId) {
      case 1:
        this.movetoCenter();
        break;
    }
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
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [
            {
              id: 1,
              iconPath: "/image/ic_location.png",
              position: {
                width: 30,
                height: 30,
                left: 50,
                top: res.windowHeight - 120
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: "/image/timg.jpg",
              position: {
                width: 100,
                height: 100,
                left: res.windowWidth / 2 - 50,
                top: res.windowHeight - 200
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: "/image/journey.png",
              position: {
                width: 100,
                height: 100,
                left: 280,
                top: res.windowHeight - 160
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: "/image/bicycle1.png",
              position: {
                width: 30,
                height: 30,
                left: 250,
                top: res.windowHeight - 300
              },
            },
            {
              id: 5,
              iconPath: "/image/mine.png",
              position: {
                width: 100,
                height: 100,
                left: 250,
                top: res.windowHeight - 300
              },
              clickable: true
            }
          ]
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