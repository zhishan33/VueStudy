import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstcomponent from '@/components/firstcomponent'
import other from '@/components/other'
import param from '@/components/param'
import HomeMap from '@/module/umbrella/pages/home/'
import register from '@/module/umbrella/pages/register/'
import payDeposit from '@/module/umbrella/pages/pay_deposit/'
import findNull from '@/module/umbrella/pages/null/'

const pay = r => require.ensure([], () => r(require('@/module/umbrella/pages/pay_deposit/children/pay')), 'pay_deposit')
const bindBC = r => require.ensure([], () => r(require('@/module/umbrella/pages/pay_deposit/children/bind_bc')), 'pay_deposit')
const userInfo = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo')), 'userinfo')
const main = r => require.ensure([], () => r(require('@/module/umbrella/pages/main')), 'main')
const tradingRecord = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/trading_record')), 'userinfo')
const borrowedRecord = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/borrowed_record')), 'userinfo')
const recharge = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/recharge')), 'userinfo')
const feeState = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/fee_state')), 'userinfo')
const useState = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/use_state')), 'userinfo')
const uusReturn = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/use_state/children/uus_return')), 'userinfo')
const uusBorrow = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/use_state/children/uus_borrow')), 'userinfo')
const answerQ = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/use_state/children/answer_q')), 'userinfo')
const set = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/set')), 'userinfo')
const setIndex = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/set/children/index')), 'userinfo')
const aboutOUR = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/set/children/about_our')), 'userinfo')
const useInfoIndex = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/index/')), 'userinfo')
const myMSG = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/mymsg')), 'userinfo')
const mymsgIndex = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/mymsg/children/index')), 'userinfo')
const mymsgDetail = r => require.ensure([], () => r(require('@/module/umbrella/pages/userinfo/children/mymsg/children/msg_detail')), 'userinfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        myfirst: firstcomponent
      }
    },
    {
      path: '/other',
      name: 'other',
      components: {
        default: other,
        Hello: Hello,
        myfirst: firstcomponent
      }
    },
    {
      path: '/param/:userId',
      name: 'param',
      component: param
    },
    {
      path: '/HomeMap',
      name: 'HomeMap',
      components: {
        default: HomeMap
      },
      children: [
        {
          path: 'HomeMap',
          name: 'findNull',
          component: findNull
        },
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'payDeposit',
          name: 'payDeposit',
          components: {
            default: payDeposit,
            pay: pay,
            bindBC: bindBC
          },
          children: [
            {
              path: 'payDeposit',
              name: 'findN',
              component: findNull
            },
            {
              path: 'pay',
              name: 'pay',
              component: pay
            },
            {
              path: 'bindbc',
              name: 'bindbc',
              component: bindBC
            }
          ]
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: userInfo,
          children: [
            {
              path: 'useInfo',
              name: '',
              component: findNull
            },
            {
              path: 'useInfoIndex',
              name: 'useInfoIndex',
              component: useInfoIndex
            },
            {
              path: 'tradingrecord',
              name: 'tradingrecord',
              component: tradingRecord
            },
            {
              path: 'borrowedrecord',
              name: 'borrowedrecord',
              component: borrowedRecord
            },
            {
              path: 'recharge',
              name: 'recharge',
              component: recharge
            },
            {
              path: 'mymsg',
              name: 'mymsg',
              component: myMSG,
              redirect: 'mymsg/mymsgindex',
              children: [
                {
                  path: 'mymsgindex',
                  name: 'mymsgindex',
                  component: mymsgIndex
                },
                {
                  path: 'mymsgdetail/:msgdetail',
                  name: 'mymsgdetail',
                  component: mymsgDetail
                }
              ]
            },
            {
              path: 'feestate',
              name: 'feestate',
              component: feeState
            },
            {
              path: 'usestate',
              name: 'usestate',
              component: useState,
              redirect: 'usestate/answerq',
              children: [
                {
                  path: 'uusreturn',
                  name: 'uusreturn',
                  component: uusReturn
                },
                {
                  path: 'uusborrow',
                  name: 'uusborrow',
                  component: uusBorrow
                },
                {
                  path: 'answerq',
                  name: 'answerq',
                  component: answerQ
                }
              ]
            },
            {
              path: 'set',
              name: 'set',
              component: set,
              children: [
                {
                  path: 'setindex',
                  name: 'setindex',
                  component: setIndex
                },
                {
                  path: 'aboutour',
                  name: 'aboutout',
                  component: aboutOUR
                }
              ]
            }
          ]
        },
        {
          path: 'main',
          name: 'main',
          component: main
        }
      ]
    }
  ]
})
