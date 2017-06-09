<template>
	<div>map</div>
	<register></register>
	<footer>footer</footer>
</template>

<script>
	import register from '../pages/register/'
	exports default {
		name: 'home',
		components: {
			register
		}
	}
</script>

<style lang="scss" scoped="scoped">
	body {
		background-color: $dcolor;
	}
</style>
