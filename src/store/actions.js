import axios from 'axios'

export default {
  getData ({commit, state}) {
    axios.get('mocks/record.json').then(function (response) {
      console.log(response.data)
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.headers)
      console.log(response.config)
    }).catch(function (response) {
      console.log(response)
      if (response instanceof Error) {
        console.log('Error', response.message)
      } else {
        console.log(response.data)
        console.log(response.status)
        console.log(response.headers)
        console.log(response.config)
      }
    })
  }
}
