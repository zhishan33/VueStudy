<template>
	<div class="map" id="map" v-title="{title:'Vue Study'}">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'map',
  created: function () {
    this.$router.replace('/HomeMap/register')
  }
}
</script>

<style lang="scss">
  $dcolor: hsla(180,100%,50%,1);
  $whiteBG: #FFF;
  .map {
  	/*height: 3rem;*/
  	/*background: lightblue;*/
  	/*background: $dcolor;*/
  	background: $whiteBG;
  	position: absolute;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  }
</style>
