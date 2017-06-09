<template>
	<section class="userinfo">
		<header>
			<p><img src="../../../../images/head_default@2x.png"/></p>
			<p><span>18751815071</span></p>
			<p v-if="realname"><img src="../../../../images/real_name@2x.png"/><span>已实名</span></p>
			<p class="not-real" v-else><span>未实名&nbsp;&gt;</span></p>
		</header>
		<main>
			<p><span>账户余额（元）</span></p>
			<p><strong>25</strong></p>
			<p><button @click="recharge" type="button">充值</button><button @click="showTip" type="button">体现</button></p>
			<p></p>
		</main>
		<nav>
			<ul>
				<li>
					<router-link to="/HomeMap/userinfo/tradingrecord">
						<p><span>交易记录</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
				<li>
					<router-link to="/HomeMap/userinfo/borrowedrecord">
						<p><span>借还记录</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
				<li>
					<router-link to="/HomeMap/userinfo/mymsg">
						<p><span class="msg-tip">我的消息</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
				<li>
					<router-link to="/HomeMap/userinfo/usestate">
						<p><span>使用说明</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
				<li>
					<router-link to="/HomeMap/userinfo/feestate">
						<p><span>费用说明</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
				<li>
					<router-link to="/HomeMap/userinfo/set">
						<p><span>设置</span><span><img src="../../../../images/arrow_left@2x.png"/></span></p>
					</router-link>
				</li>
			</ul>
		</nav>
		<dialog-tip></dialog-tip>
	</section>
</template>

<script>

import dialog from '../../../../components/dialog'
export default {
  name: 'userinfo',
  components: {
    'dialogTip': dialog
  },
  computed: {
    realname: function () {
      return this.$store.state.realname
    }
  },
  methods: {
    showTip: function () {
      this.$store.commit('BTNSINGLE_CON', '体现成功')
      this.$store.commit('DIALOG_TYPE', 'dialogSuccess')
      if (!this.$store.state.isMaskGrey) {
        this.$store.commit('MASK_GREY')
      }
      if (this.$store.state.btnSingle) {
        this.$store.commit('SHOW_WITHDRAW')
      }

      this.$store.commit('SHOW_WARNING_TIP')
    },
    recharge () {
      this.$router.push('/HomeMap/userinfo/recharge')
    }
  }
}
</script>

<style lang="scss">
.userinfo {
	header {
		padding: 5% 0;
		background: url(../../../../images/userinfo_hbg@2x.png) no-repeat center;
		background-size: cover;
		p:nth-of-type(1){
			img {
				width: 20%;
			}
		}
		p:nth-of-type(2) {
			padding: 2% 0 1%;
			font-size: 1.8rem;
		}
		p:nth-of-type(3) {
			img {
				width: 1.4rem;
				margin-right: 0.5rem;
			}
			span {
				vertical-align: super;
			}
		}
		.not-real {
			color: #666;
		}
	}
	main {
		padding-top: 5%;
		p:nth-of-type(1) {
			color: #999;
		}
		p:nth-of-type(2) {
			padding: 5% 0;
			strong {
				font-size: 3rem;
				font-weight: normal;
			}
		}
		P:nth-of-type(3) {
			button {
				padding: 0.6rem 2.6rem;
				padding: 1.8% 8%;
			}
			button:first-child {
				background: #FEEB02;
				margin-right: 10%;
			}
			button:last-child {
				background: #e2e2e2;
			}
		}
		p:nth-of-type(4) {
			height: 1rem;
			margin-top:5%;
			background: #f0f0f0;
		}
	}
	nav {
		padding: 0 5% 20%;
		li {
			border-bottom: 1px solid #eee;
			a {
				text-decoration: none;
				color: #333;
			}
			p {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
				/*height: 2.5rem;*/
				padding: 4% 0;
				text-align: right;
				span ,img {
					display: block;
				}
				img {
					width: 0.6rem;
				}
				span:first-child {
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					text-align: left;
				}
			}
		}
		.msg-tip {
			position: relative;
		}
		.msg-tip:after {
			content: '';
			position: absolute;
			left: 4.5rem;
			width: 0.4rem;
			height: 0.4rem;
			margin-top: 0.4rem;
			border-radius: 0.2rem;
			background-color: red;
		}
	}
}
</style>
