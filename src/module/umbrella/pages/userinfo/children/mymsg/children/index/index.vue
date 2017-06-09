<template>
	<section class="mymsg">
		<dl @click="msgDetail" data-msg="first">
			<dt>vue text, APP 尚小龙上线了</dt>
			<dd>vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了</dd>
		</dl>
		<dl @click="msgDetail" data-msg="second">
			<dt>vue text, APP 尚小龙上线了</dt>
			<dd>vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了</dd>
		</dl>
		<dl @click="msgDetail" data-msg="three">
			<dt>vue text, APP 尚小龙上线了</dt>
			<dd>vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了vue text, APP 尚小龙上线了</dd>
		</dl>
	</section>
</template>

<script>
export default {
  name: 'mymsg',
  methods: {
    msgDetail (event) {
      var param = event.currentTarget.getAttribute('data-msg')
      this.$router.push('mymsgdetail/' + param)
    }
  }
}
</script>

<style lang="scss">
	.mymsg {
		padding: 2%;
		text-align: left;
		background-color: #EEE;
		dl {
			padding: 3%;
			background-color: #FFF;
			dt {
				padding-bottom: 1%;
				font-size: 1.5rem;
			}
			dd {
				color: #999;
			}
		}
		dl + dl {
			margin-top: 2%;
		}
	}
</style>
