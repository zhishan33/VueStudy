<template>
	<div class="register" v-title="{title:'注册'}">
		<header>
			<img src="../../../../assets/logo.png" />
		</header>
		<section>
			<form action="" method="post">
				<ul>
					<li>
						<span>手机号</span>
						<input v-on:input="smsAction" required="required" type="tel" v-model.trim="userphonevalue" maxlength="11" placeholder="请输入手机号码" id="userphone" />
						<span></span>
					</li>
					<li>
						<span>验证码</span>
						<input @input="smsAction" type="tel" maxlength="6" required="required" v-model.trim="usersmsvalue" placeholder="请输入手机号验证码" id="smscode" />
						<span><button @click="getsms(self)" v-bind:class={active:isActive} v-bind:disabled="disabled" type="button">{{btnText}}</button></span>
					</li>
				</ul>
				<template v-if="unRegister">
					<p><input v-model.lazy="checked" type="checkbox" name="" id="agreement" value="" /><label @click="checkboxAction" for="agreement">我已阅读，并同意签署</label>
						<a href="javascript:;">《用户注册协议》</a>
					</p>
					<p class="warning">{{warning}}</p>
					<button v-on:click="invalidForm" class="submit" v-bind:class={disable:disable,active:isActiveSubmit} type="button">注册</button>
					<footer>
						已有账号？<button @click="trigger" type="button">立即登录</button>
					</footer>
				</template>
				<template v-else>
					<p class="warning">{{warning}}</p>
					<button v-on:click="invalidFormLogin" class="submit" v-bind:class={disable:disable,active:isActiveSubmit} type="button">登录</button>
					<footer>
						没有账号？<button @click="trigger" type="button">立即注册</button>
					</footer>
				</template>
			</form>
		</section>
		<warningTip type="dialog"></warningTip>
	</div>
</template>


<script>
import warningTip from '../../components/dialog'
export default {
  name: 'register',
  components: {
    'warningTip': warningTip
  },
  data: function () {
    return {
      btnText: '获取验证码',
      warning: '',
      userphonevalue: '',
      usersmsvalue: '',
      isActive: false,
      isActiveSubmit: false,
      disable: true,
      disabled: true,
      checked: false
    }
  },
  computed: {
    unRegister () {
      return this.$store.state.registered
    }
  },
  methods: {
    invalidForm: function () {
      if (this.userphonevalue === '') {
//      this.warning = '请输入手机号码'
        this.$store.commit('SET_WARNING_TIP', {msg: '请输入手机号码'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.warning = ''
      }
      if (!/^1\d{10}$/.test(this.userphonevalue)) {
//      this.warning = '您输入的手机号码不正确'
        this.$store.commit('SET_WARNING_TIP', {msg: '您输入的手机号码不正确'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.warning = ''
      }
      if (this.usersmsvalue === '') {
//      this.warning = '请输入验证码'
        this.$store.commit('SET_WARNING_TIP', {msg: '请输入验证码'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.warning = ''
      }
      if (!this.checked) {
        this.warning = '请您阅读，并同意签署 《用户注册协议》'
        return false
      } else {
        this.warning = ''
      }
//    this.$store.commit('REGISTER_HIDE')
//    this.$store.state.register = false
      this.$router.push('payDeposit')
//    this.$router.push('pay')
    },
    invalidFormLogin: function () {
      if (this.userphonevalue === '') {
        this.warning = '请输入手机号码'
        return false
      } else {
        this.warning = ''
      }
      if (!/^1\d{10}$/.test(this.userphonevalue)) {
        this.warning = '您输入的手机号码不正确'
        return false
      } else {
        this.warning = ''
      }
      if (this.usersmsvalue === '') {
        this.warning = '请输入验证码'
        return false
      } else {
        this.warning = ''
      }
      this.$router.push('main')
    },
    smsAction: function () {
      if (this.userphonevalue.length === 11) {
        this.disabled = false
        this.isActive = true
      } else {
        this.disabled = true
        this.isActive = false
        this.warning = ''
      }
      if (this.unRegister) {
        if (/^1\d{10}$/.test(this.userphonevalue) && /^\d{4,6}$/.test(this.usersmsvalue) && this.checked) {
          this.isActiveSubmit = true
          this.disable = false
          return false
        } else {
          this.isActiveSubmit = false
          this.disable = true
          this.warning = ''
        }
      } else {
        if (/^1\d{10}$/.test(this.userphonevalue) && /^\d{4,6}$/.test(this.usersmsvalue)) {
          this.isActiveSubmit = true
          this.disable = false
          return false
        } else {
          this.isActiveSubmit = false
          this.disable = true
          this.warning = ''
        }
      }
    },
    checkboxAction: function () {
      if (/^1\d{10}$/.test(this.userphonevalue) && /^\d{4,6}$/.test(this.usersmsvalue) && !this.checked) {
        this.isActiveSubmit = true
        this.disable = false
        return false
      } else {
        this.isActiveSubmit = false
        this.disable = true
        this.warning = ''
      }
    },
    getsms: function (e) {
      if (!/^1\d{10}$/.test(this.userphonevalue)) {
        this.warning = '您输入的手机号码不正确'
        return false
      } else {
        this.warning = ''
      }
      this.btnText = 60 + 'S'
      this.disabled = true
      this.isActive = false
      var timeS = 60
      var self = this
      var timesID = setInterval(function () {
        if (timeS > 0) {
          timeS = timeS - 1
          self.btnText = timeS + 'S'
        } else {
          self.btnText = '获取验证码'
          self.disabled = false
          self.isActive = true
          clearInterval(timesID)
        }
      }, 1000)
    },
    hideWarning: function () {
      var self = this
      var idTime = setTimeout(function () {
        self.$store.commit('SHOW_WARNING_TIP')
        clearTimeout(idTime)
      }, 2000)
    },
    trigger () {
      this.$store.commit('TRIGGER_LOGIN')
    }
  },
  mounted: function () {
    if (this.$store.state.isHide) {
      this.$store.commit('SHOW_WARNING_TIP')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
	$lineBM: #EEE;
	$Ddisabled: #eee;
	$darkgrey: #DDD;
	$whiteBG: #FFF;
	$fontCDis: #999;
	$fontWarning: red;
	$fontCA: #000;
	$BtnBGA: #feeb02;
	$pramary: #5dadff;

	header img {
		width: 30%;
		margin: 20% 0;
	}
	
	section {
		padding: 0 5%;
	}
	
	ul li {
		border-bottom: 0.1rem solid $lineBM;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		align-items: flex-end;
	}
	
	li input,
	li span {
		display: block;
		margin-bottom: 0.2rem;
	}
	
	li span:first-child {
		width: 3.5rem;
	}
	
	li span:last-child button {
		padding: 0.5rem 0;
		height: 2.5rem;
		width: 6.8rem;
		font-size: 1rem;
		border-radius: 0.2rem;
		background-color: $Ddisabled;
		color: $fontCDis;
		cursor: pointer;
		font-family: inherit;
		margin-bottom: -0.3rem;
		border: 0.2rem solid #FFF;
	}
	li span:last-child button[disabled] {
		cursor: no-drop;
		-webkit-transition: width 1s;
		transition: width 1s;
	}
	ul li {
		height: 2rem;
	}
	
	ul li:nth-child(n+2) {
		height: 3rem;
	}
	
	li input {
		font-size: 1rem;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}
	form p:nth-of-type(1) {
		padding: 1rem 0;
		text-align: left;
	}
	form p:nth-of-type(2) {
		height: 2rem;
	}
	form p:nth-of-type(1) input {
		overflow: hidden;
		height: 0;
		width: 0;
		border: 0;
	}
	form p:nth-of-type(1) input:checked + label::before {
		background: url(../../images/checkbox_true@2x.png) no-repeat center;
		background-size: 110%;
		-webkit-background-clip: border-box;
		background-clip: border-box;
		
	}
	
	form p:nth-of-type(1) label::before {
		content: '';
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border: 0.1rem solid #d3d3d3;
		vertical-align: sub;
		margin-right: 0.5rem;
	}
	.warning {
		color: $fontWarning;
		text-align: left;
	}
	.submit {
		display: block;
		width: 100%;
		margin-top: 5%;
		padding: 0.5rem 0;
		border-radius: 0.2rem;
		font-family: inherit;
		cursor: pointer;
	}
	.active {
		background-color: $BtnBGA;
		color: $fontCA;
	}
	.disable {
		background-color: $darkgrey;
		color: $whiteBG;
	}
	li span button.active {
		background-color: $BtnBGA;
		color: $fontCA;
	}
	
	p a {
		color: $pramary;
		text-decoration: none;
	}
	.register {
		footer {
			padding: 8% 0 0;
			& > button {
				font-size: inherit;
				color: hsla(200, 100%, 50%, 1);
			}
		}
	}
</style>
