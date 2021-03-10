// pages/user_info/user_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"个人信息",
        isActive:true
      },
      {
        id: 1,
        value: "关注",
        isActive: false
      },
      {
        id: 2,
        value: "承接信息",
        isActive: false
      },
      {
        id: 3,
        value: "捐赠",
        isActive: false
      },
    ],
    uname: "赵政",
    credit: "优",
    uarea:"南京市溧水区实验小学家属院",
    utime_coin_sur: 100,
    slevel_name: "等级1：家政服务类",
    saddress: "南京市",
    stask_retime: "2020-06-29 22:45",
    sduration: "2小时",
    uname: "赵政",
    credit: "优"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleTabsItemChange(e){
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})