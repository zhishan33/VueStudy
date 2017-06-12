import axios from 'axios'

export default {
  getData ({commit, state}) {
//  const config = {
//    baseURL: 'http://localhost:8080/static/store/mocks/'
//  }
    axios.get('/api/borrowedRecord').then(function (response) {
      console.log('data:' + response)
      console.log(response.data)
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.headers)
      console.log(response.config)
      var data = response.data
      commit('GET_BORROWED_RECORD', { data })
    }).catch(function (response) {
      console.log('失败：' + response)
      if (response instanceof Error) {
        console.log('Error' + response.message)
      } else {
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
        console.log(response.config)
      }
    })
  }
}
