const GET_DATA = 'GET_DATA'
const SET_DATA = 'SET_DATA'
const REGISTER_HIDE = 'REGISTER_HIDE'
const PAYED = 'PAYED'
const PAY = 'PAY'
const SET_WARNING_TIP = 'SET_WARNING_TIP'
const SHOW_WARNING_TIP = 'SHOW_WARNING_TIP'
const DIALOG_TYPE = 'DIALOG_TYPE'
const MASK_GREY = 'MASK_GREY'
const SHOW_WITHDRAW = 'SHOW_WITHDRAW'
const BTNSINGLE_CON = 'BTNSINGLE_CON'
const BTN_DETAIL = 'BTN_DETAIL'
const REGISTERED = 'REGISTERED'
const GET_BORROWED_RECORD = 'GET_BORROWED_RECORD'
const GET_TRADING_RECORD = 'GET_TRADING_RECORD'

export default {
  [GET_DATA] (state, payload) {
    console.log(state.fromAddr)
  },
  [SET_DATA] (state, payload) {
    console.log(state.author)
    state.author = payload.ahthor
    console.log(state.author)
  },
  [REGISTER_HIDE] (state, payload) {
    state.register = !state.register
  },
  [PAY] (state, payload) {
    state.isActive = !state.isActive
    console.log(state.isActive + ' pay')
  },
  [PAYED] (state, payload) {
    state.isActive = !state.isActive
    console.log(state.isActive + ' payed')
  },
  [SET_WARNING_TIP] (state, payload) {
    state.warningMSG = '警告： ' + payload.msg
  },
  [SHOW_WARNING_TIP] (state, payload) {
    state.isHide = !state.isHide
  },
  [DIALOG_TYPE] (state, payload) {
    state.type = payload
  },
  [BTNSINGLE_CON] (state, payload) {
    state.btnSingleCon = payload
  },
  [MASK_GREY] (state, payload) {
    state.isMaskGrey = !state.isMaskGrey
  },
  [SHOW_WITHDRAW] (state, payload) {
    state.btnSingle = !state.btnSingle
  },
  [BTN_DETAIL] (state, payload) {
    state.btnDetail = payload
  },
  [REGISTERED] (state, payload) {
    state.registered = false
  },
  [GET_BORROWED_RECORD] (state, payload) {
    state.borrowDataAdd = payload.data
    if (!payload.dataStatus) {
      state.loadingMSG = '没有更多了'
    }
  },
  [GET_TRADING_RECORD] (state, payload) {
    state.recordDataAdd = payload.data
    if (!payload.dataStatus) {
      state.recordloadingMSG = '没有更多了'
    }
  }
}
