// pages/feishu_center/feishu_center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webViewSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (feishu_value_param) {

    const feishu_value = feishu_value_param.feishu_value;

    switch (feishu_value) {
      case 'update_QR':
        this.handle_update_QR();
        break;

      case 'normal_word':
        this.handle_normal_word();
        break;

      case 'price_reference':
        this.handle_price_reference();
        break;

      case 'reject_detour':
        this.handle_reject_detour();
        break;

      case 'return':
        this.handle_return();
        break;

      case 'upgrade':
        this.handle_upgrade();
        break;

      case 'game_instance':
        this.handle_game_instance();
        break;

      case 'group':
        this.handle_group();
        break;

      case 'weapon':
        this.handle_weapon();
        break;

      case 'dashio':
        this.handle_dashio();
        break;

      case 'mount':
        this.handle_mount();
        break;

      case 'surprising_encounter':
        this.handle_surprising_encounter();
        break;

      case 'plugin':
        this.handle_plugin();
        break;

      case 'power':
        this.handle_power();
        break;

      case 'auto_script':
        this.handle_auto_script();
        break;

      case 'handsome':
        this.handle_handsome();
        break;

      default:
        console.log('未知操作');
    }
  },

  handle_update_QR: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/JvEcdhyDjoUWgrxUWa2cKmSRnbc?from=from_copylink'
    });
  },

  handle_normal_word: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/Uy87dCcm2oO0g3xJFcRcS7GXnfh'
    });
  },

  handle_price_reference: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/HilbdUkyLoPDOnxxyoxcgGQGnZf?from=from_copylink'
    });
  },

  handle_reject_detour: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/VcxEdkSR3ob5Qjx2VIwcG2zpn1b?from=from_copylink'
    });
  },

  handle_return: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/file/GjKEbSckPoTzKlxwggiciYfanjg'
    });
  },

  handle_upgrade: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/file/GjKEbSckPoTzKlxwggiciYfanjg'
    });
  },

  handle_game_instance: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/BfX7d1cnNokTbJxtD8XcxKaAn2b'
    });
  },

  handle_group: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/JHjWdiD1MoLdxMxY45Kc2m67n9d?from=from_copylink'
    });
  },

  handle_weapon: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/Bw0vddsEpo8aHjxpjksc8dXznef?from=from_copylink'
    });
  },

  handle_dashio: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/XErmdbKfSoC7IExuurpc2rrOnfh?from=from_copylink'
    });
  },

  handle_mount: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/WncSdoh2GoKA0TxfIsdcMAfGn0g?from=from_copylink'
    });
  },

  handle_surprising_encounter: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/KVxQdZ4Fro6V8KxFw6tcvLmAnAf?from=from_copylink'
    });
  },

  handle_plugin: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/TOvyd69NNo9OxfxEOqGcd7oOnSh?from=from_copylink'
    });
  },

  handle_power: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/WssDdfuqBo4biqx641ZcgRc6npg?from=from_copylink'
    });
  },

  handle_auto_script: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/drive/folder/Nle6f43uBlF1cId7Gwucp2u6nab'
    });
  },

  handle_handsome: function () {
    this.setData({
      webViewSrc: 'https://vcn1rvxkivyn.feishu.cn/docx/WbOZdbYgTo4awWxcITSc8xU5noh?from=from_copylink'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})