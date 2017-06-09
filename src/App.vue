<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr />
    <ul class="nav-index">
    	<li><router-link to="/">/</router-link></li>
    	<li><router-link :to="{name:'other',query:{plan:'private'}}">other</router-link></li>
    	<li><router-link :to="{name:'param',params:{userId:888}}">param</router-link></li>
    	<li><router-link to="/HomeMap">共享伞</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
    <hr />
    <router-view name="myfirst"></router-view>
    <router-view name="Hello"></router-view>
    <router-view name="other"></router-view>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'js test'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .nav-index {
  	a {
  		font-size: 2rem;
  		background-color: lightseagreen;
  	}
  }
}
</style>
