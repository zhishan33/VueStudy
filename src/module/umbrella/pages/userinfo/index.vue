<template>
	<section v-title="{title:'个人中心'}">
		<router-view></router-view>
	</section>
</template>

<script>

export default {
  name: 'userinfo',
  created: function () {
    this.$router.replace('userinfo/useInfoIndex')
  }
}
</script>

<style lang="scss">
</style>
