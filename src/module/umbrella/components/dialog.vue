<template>
	<transition name="fade">
			<!--<div class="dialog" v-bind:class={dialogHide:isHide}>-->
			<div v-show="isHide" class="dialog">
				<div class="mask" v-bind:class={maskGrey:isMaskGrey}></div>
				<div v-if="type === 'dialog'" class="dialog__content">
					<span>{{warningMSG}}</span>
				</div>
				<div v-else-if="type === 'dialogSuccess'" class="dialog__success">
					<h1>提示</h1>
					<template v-if="btnSingle">
						<p><img src="../images/icon_selected@2x.png"/><strong><!--提现成功-->{{btnSingleCon}}！</strong></p>
						<p>如有疑问请联系客服 <strong><a href="tel:025-88888">025-88888</a></strong></p>
						<p><button @click="dialogDone" type="button">我知道了</button></p>
					</template>
					<template v-else>
						<p class="msg-detail">确定体现<span class="withdraw-money">19.8</span>元到原支付宝账号</p>
						<p class="btn-double"><button type="button" @click="withdrawDone">确定</button><button type="button" @click="dialogHide">取消</button></p>
					</template>
				</div>
				<div v-else-if="type === 'clean'" class="dialog__clean">
					<p>确定清楚本地缓存</p>
					<p><button @click="cleanCache" type="button">清楚</button><button type="button" @click="dialogHide">取消</button></p>
				</div>
				<div v-else-if="type === 'exit'" class="dialog__exit">
					<p>确定退出</p>
					<p><button @click="exit" type="button">确定</button><button @click="dialogHide" type="button">再看看</button></p>
				</div>
			</div>
	</transition>
</template>

<script>
export default {
  name: 'dialog',
  props: ['type'],
  data () {
    return {
      withdraw: '提现成功'
    }
  },
  computed: {
    warningMSG () {
      return this.$store.state.warningMSG
    },
    isHide () {
      return this.$store.state.isHide
    },
    type () {
      return this.$store.state.type
    },
    isMaskGrey () {
      return this.$store.state.isMaskGrey
    },
    btnSingle () {
      return this.$store.state.btnSingle
    },
    btnSingleCon () {
      return this.$store.state.btnSingleCon
    }
  },
  methods: {
    dialogDone () {
      this.$store.commit('SHOW_WARNING_TIP')
      if (this.$store.state.btnDetail === 'recharge') {
        this.$store.commit('BTN_DETAIL', '')
        this.$router.back()
      }
    },
    dialogHide () {
      this.$store.commit('SHOW_WARNING_TIP')
    },
    withdrawDone () {
      this.$store.commit('SHOW_WITHDRAW')
    },
    cleanCache () {
      this.$store.commit('SHOW_WARNING_TIP')
    },
    exit () {
      this.$store.commit('SHOW_WARNING_TIP')
      this.$store.commit('REGISTERED')
      this.$router.push('/HomeMap/register')
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	/*width: 100%;*/
	background: hsla(0, 0%, 100%, 0);
}
.maskGrey {
	background: hsla(0, 0%, 50%, 0.5);
}
.dialog {
	> div:not(.mask) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.2rem;
	}
	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.2rem;
		background: hsla(0, 100%, 0%, 0.7);
		color: #FFF;
		span {
			display: inline-block;
			padding: 0.5rem 1rem;
		}
	}
	&__success {
		width: 95%;
		background-color: #FFF;
		border-radius: 1rem;
		h1 {
			border-radius: 0.5rem;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			background-color: #eee;
			color: #999;
			font-weight: normal;
			padding: 2% 0;
		}
		p:nth-of-type(1) {
			padding: 7% 0;
			img {
				width: 2rem;
				margin-right: 0.5rem;
			}
			strong {
				font-size: 1.6rem;
				vertical-align: super;
				color: #06cb22;
			}
		}
		p:nth-of-type(2) {
			padding-bottom: 6%;
			color: #999;
			a {
				text-decoration: none;
				color: #111;
			}
		}
		p:nth-last-of-type(1) {
			padding-bottom: 3%;
			button {
			   color: #5DADFF;	
			   font-size: 1.2rem;
			}
		}
	}
	&__clean, &__exit {
		width: 60%;
		padding: 5% 0;
		background-color: #FFF;
		p {
			padding: 5% 0;
		}
		p:nth-child(2) {
			padding-bottom: 0;
			button {
				width: 40%;
				font-size: 1.2rem;
			}
			button:last-child {
				margin-left: 5%;
				background: #FFF;
				color: #999;
			}
		}
	}
}
.dialog div.dialog__success {
	border-radius: 0.5rem;
}
.dialogHide {
	display: none;
}
.withdraw-money {
	color: #ff4848;
}
.dialog__success p.msg-detail {
	padding: 12% 0;
}
.dialog__success p.btn-double {
	button:first-child {
		background-color: #ffec00;
		color: #111;
		padding: 1.5% 7%;
	}
	button:last-child {
		background-color: #FFF;
		color: #999;
		padding: 1.5% 6%;
	}
}
</style>
