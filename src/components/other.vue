<template>
	<transition name="fade" mode="out-in">
		<div id="other">
			<h1 v-on:click="reverseFun">{{ msg }}</h1>
			<h2>{{ author }}</h2>
			<h2>{{ age }}</h2>
			<h3>时间： {{now}}</h3>
			<button @click="reverseFun">翻转字符</button><br />
			<a v-bind:href="urlT">到百度</a>
		</div>
	</transition>
</template>

<script>
export default {
  name: 'other',
  data () {
    return {
      msg: 'other',
      urlT: 'www.baidu.com'
    }
  },
  computed: {
    author () {
//    this.msg = 'other 2'
      return this.$store.state.author
    },
    age () {
      return this.msg.split('').join('<==>').toUpperCase()
    },
    now () {
      return Date.now()
    }
  },
  methods: {
    reverseFun: function () {
//    return this.msg.split().join('@@@@@').toUpperCase()
      alert('js test')
    }
  }
}
</script>

<style>
	button {
		font-size: 1.5rem;
		background: pink;
	}
</style>
