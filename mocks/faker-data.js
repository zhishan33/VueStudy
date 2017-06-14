module.exports = function () {
  var faker = require('faker/locale/zh_CN')
//faker.locale = 'zh_CN'
  var _ = require('lodash')
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    address: _.times(100, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    }),
    borrowedRecord: _.times(10, function (n) {
      return {
        orderStatus: [{
          time: faker.date.past(),
          type: '借伞',
          orderID: faker.random.number()
        },{
        	time: faker.date.past(),
          type: '还伞',
          orderID: faker.random.number()
        }]
      }
    }),
    tradingRecord: _.times(10, function(n) {
      return {
          type: '消费',
          money: n,
          time: faker.date.recent(30),
          orderID: faker.random.uuid()
      }
    })
  }
}
