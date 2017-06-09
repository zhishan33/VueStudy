<template>
	<section class="recharge" v-title="{title:'充值'}">
		<form action="" method="post">
			<ul>
				<li><img src="../../../../images/icon_money.png"/><input type="text" name="" id="" value="" placeholder="请输入充值金额（元）" maxlength="6" v-model="money" /></li>
			</ul>
			<h2>选择支付方式</h2>
			<ul>
				<li><input type="radio" name="recharge" id="alipay" checked="checked"/><label for="alipay"><img src="../../../../images/icon_alipay@2x.png"/><span>支付宝</span><span></span></label></li>
				<li><input type="radio" name="recharge" id="wechatpay"/><label for="wechatpay"><img src="../../../../images/icon_wechat_success@2x.png"/><span>微信支付</span><span></span></label></li>
			</ul>
			<input v-on:click.prevent="submit" type="submit" value="去充值"/>
		</form>
		<dialog-tip></dialog-tip>
	</section>
</template>

<script>

import dialog from '../../../../components/dialog'
export default {
  name: 'recharge',
  components: {
    'dialogTip': dialog
  },
  data: function () {
    return {
      money: '',
      withdraw: '充值成功'
    }
  },
  methods: {
    submit: function () {
      this.$store.commit('DIALOG_TYPE', 'dialog')
      if (this.money === '') {
        this.$store.commit('SET_WARNING_TIP', {msg: '请输入充值金额'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.dialogHide()
        return false
      }
      if (!/^\d{1,}(\.\d{1,2})?$/.test(this.money)) {
        this.$store.commit('SET_WARNING_TIP', {msg: '请输入有效的充值金额'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.dialogHide()
        return false
      }
      this.$store.commit('BTN_DETAIL', 'recharge')
      this.$store.commit('DIALOG_TYPE', 'dialogSuccess')
      this.$store.commit('BTNSINGLE_CON', '充值成功')
      if (!this.$store.state.btnSingle) {
        this.$store.commit('SHOW_WITHDRAW')
      }
      if (!this.$store.state.isMaskGrey) {
        this.$store.commit('MASK_GREY')
      }
      this.$store.commit('SHOW_WARNING_TIP')
    },
    dialogHide: function () {
      var self = this
      var idTime = setTimeout(function () {
        if (self.$store.state.isHide) {
          self.$store.commit('SHOW_WARNING_TIP')
          clearTimeout(idTime)
        }
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
	.recharge {
		padding: 15% 5%;
		li {
			display: flex;
			align-items: center;
		}
		form {
			ul:nth-of-type(1) {
				
				li {
					border-bottom: 1px dashed #ccc;
					padding-bottom: 1%;
					img {
						display: block;
						width: 2rem;
						margin-right: 1%;
					}
					input {
						display: block;
						flex: 1;
						font-size: 1.5rem;
						vertical-align: middle;
						height: 2rem;
						line-height: 2rem;
					}
				}
			}
			h2 {
				margin-top: 10%;
				margin-bottom: 4%;
				text-align: left;
				font-size: 1rem;
				font-weight: normal;
			}
			ul:nth-of-type(2) {
				li {
					input {
						width: 0;
						height: 0;
						overflow: hidden;
					}
					label {
						-webkit-box-flex: 1;
						-webkit-flex: 1;
						flex: 1;
						display: -webkit-box;
						display: -webkit-flex;
						display: flex;
						-webkit-box-align: center;
						-webkit-align-items: center;
						align-items: center;
						padding: 3% 0;
						img {
							display: block;
							width: 1.6rem;
							margin-right: 2%;
						}
						span {
							display: block;
						}
						span:nth-of-type(1) {
							-webkit-box-flex: 1;
							-webkit-flex: 1;
							flex: 1;
							text-align: left;
						}
						span:nth-of-type(2) {
							height: 1.4rem;
							width: 1.4rem;
							border: 0.1rem solid #ccc;
							border-radius: 0.8rem;
						}
					}
					input:checked + label span:nth-of-type(2) {
						position: relative;
						border-color: #06CB22;
						background-color: #06CB22;
					}
					input:checked + label span:nth-of-type(2):after {
						content: '';
						position: absolute;
						left: 0.45rem;
						top: 0.2rem;
						width: 0.45rem;
						height: 0.8rem;
						border: 0.1rem solid #FFF;
						border-top: 0;
						border-left: 0;
						transform: rotate(45deg);
						transform-origin: center;
					}
				}
			}
			input[type=submit] {
				width: 100%;
				padding: 2% 0;
				margin-top: 10%;
				background: #FEEB02;
				outline: none;
			}
		}
	}
</style>
