<template>
  <div id="firstcomponent">
  	<h1>I am a title</h1>
  	<a href="#">write by {{author}}</a>
  </div>
</template>

<script>
export default {
  name: 'firstcomponent',
  data () {
    return {
      author: '江山'
    }
  }
}
</script>

<style scoped>
	a {
		color: pink;
	}
</style>
