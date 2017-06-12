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
  borrowData: '努力里'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
