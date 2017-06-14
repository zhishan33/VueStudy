import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  desc: 'js test',
  author: 'js',
  fromAddr: 'china',
  register: true,
  isActive: false,
  isHide: false,
  warningMSG: '警告: ',
  realname: true,
  type: 'dialog',
  isMaskGrey: false,
  btnSingle: false,
  btnSingleCon: '充值成功',
  btnDetail: '',
  registered: true,
  borrowData: 'default',
  loadingMSG: '点击加载更多',
  borrowDataAdd: null,
  recordData: 'default',
  recordloadingMSG: '点击加载更多',
  recordDataAdd: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
