<template>
	<section>
		<router-view></router-view>
	</section>
</template>

<script>
export default {
  name: 'aboutout',
  created () {
    this.$router.replace('set/setindex')
  }
}
</script>

<style lang="scss">
</style>
