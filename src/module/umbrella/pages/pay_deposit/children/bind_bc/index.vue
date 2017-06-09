<template>
	<article class="bind-bc" v-title="{title:'绑定银行卡'}">
		<section>
			<form action="" method="post">
				<ul>
					<li>
						<span>姓名</span>
						<input type="text" name="username" maxlength="18" id="username" v-model.trim="username" placeholder="请输入姓名"/>
					</li>
					<li>
						<span>银行卡</span>
						<input type="tel" maxlength="19" name="userbc" id="userbc" v-model.trim="userbc" placeholder="请输入银行卡号" />
					</li>
				</ul>
				<p class="warning">{{msg}}</p>
				<input @click.prevent="checkBindBC" type="submit" value="认证"/>
			</form>
			<p><a href="">跳过</a></p>
		</section>
		<warning-tip type="dialog"></warning-tip>
	</article>
</template>

<script>

import warningTip from '../../../../components/dialog'
export default {
  name: 'bind-bc',
  components: {
    warningTip
  },
  data: function () {
    return {
      username: '',
      userbc: '',
      msg: ''
    }
  },
  methods: {
    checkBindBC: function () {
      if (this.$store.state.type !== 'dialog') {
        this.$store.commit('DIALOG_TYPE', 'dialog')
      }
      if (this.username === '') {
        this.msg = '用户名不能为空'
        this.$store.commit('SET_WARNING_TIP', {msg: '用户名不能为空'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.msg = ''
      }
      if (!/^[\u4E00-\u9FA5]{2,4}$/.test(this.username)) {
        this.msg = '名字不合法'
        this.$store.commit('SET_WARNING_TIP', {msg: '名字不合法'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.msg = ''
      }
      if (this.userbc === '') {
        this.msg = '银行卡不能为空'
        this.$store.commit('SET_WARNING_TIP', {msg: '银行卡不能为空'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.msg = ''
      }
      if (!/^[1-9]\d{15,18}$/.test(this.userbc)) {
        this.msg = '银行卡号不合法'
        this.$store.commit('SET_WARNING_TIP', {msg: '银行卡号不合法'})
        this.$store.commit('SHOW_WARNING_TIP')
        this.hideWarning()
        return false
      } else {
        this.msg = ''
      }
//    this.$parent.$router.push('userinfo')
      this.$router.push('/HomeMap/userinfo')
    },
    hideWarning () {
      var self = this
      var idTime = setTimeout(function () {
        self.$store.commit('SHOW_WARNING_TIP')
        clearTimeout(idTime)
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
	p.warning {
		color: red;
	}
</style>
