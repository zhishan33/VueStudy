import axios from 'axios'
var times = 2
var i = 0
var data = []
var recorddata = []
var dataStatus = true
var recorddataStatus = true

export default {
  getData ({commit, state}) {
//  const config = {
//    baseURL: 'http://localhost:8080/static/store/mocks/'
//  }
    axios.get('/api/borrowedRecord').then(function (response) {
//    console.log('data:' + JSON.stringify(response.data[0]))
//    console.log('data:' + JSON.stringify(response.data[1]))
//    console.log('data:' + JSON.stringify(response.data[2]))
//    console.log('data:' + JSON.stringify(response.data))
//    console.log(response.data)
//    console.log(response.status)
//    console.log(response.statusText)
//    console.log(response.headers)
//    console.log(response.config)
      if (i < response.data.length) {
        for (; i < times; i++) {
          data.push(response.data[i])
        }
        times = times + 2
      } else {
        dataStatus = false
      }
//    console.log('i||times||data:' + i + '===' + times + '===' + response.data.length + '===' + JSON.stringify(data))
      commit('GET_BORROWED_RECORD', {data: data, dataStatus: dataStatus})
    }).catch(function (response) {
      console.log('失败：' + response)
      if (response instanceof Error) {
        console.log('Error' + response.message)
      } else {
//      console.log(response.data)
//      console.log(response.status)
//      console.log(response.headers)
//      console.log(response.config)
      }
    })
  },
  getRecordData ({commit, state}) {
    axios.get('/api/tradingRecord').then(function (response) {
      if (i < response.data.length) {
        for (; i < times; i++) {
          recorddata.push(response.data[i])
        }
        times = times + 2
      } else {
        recorddataStatus = false
      }
      commit('GET_TRADING_RECORD', {data: recorddata, dataStatus: recorddataStatus})
    }).catch(function (response) {
      console.log('失败：' + response)
      if (response instanceof Error) {
        console.log('Error' + response.message)
      } else {
        console.log(response)
      }
    })
  }
}
