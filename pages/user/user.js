var app = getApp(); //获取小程序实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: "H5170101",
    userName: "未登录",
    bool: 0,
    arr: [
      {name: "AA"},{name:"BB"},{name:"CC"}
    ],
    flag:true,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    console.log(app.globalData)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("隐藏")
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
    console.log("刷新");
    setTimeout(()=>{wx.stopPullDownRefresh()},500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("底部")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("分享");
    return {
      title: "转发",
      path: "/page/user?id=123"
    }
  },
  handleClick(){
    console.log("点击");
    this.setData({
      userName: "迪根"
    })
  },
  goUrl(){
    wx.navigateTo({
      url: '/pages/logs/logs?like=ABC',
    })
  },
  showDetails(event){
    console.log(event.detail,event.target)
  },
  handleName(event){
    console.log(event.target.dataset)
  },
  upper(){
    console.log("到顶了")
  },
  lower(){
    if(this.data.flag){
      
      this.setData({
        flag:false
      })
      console.log("到底了")
    }
    
  },
  scroll(){

  },
  swiperChange(detail){
    // console.log(detail.detail.current)
  },
  formSubmit: function (e) {
    console.log('输入内容：', e.detail.value)
  }
})