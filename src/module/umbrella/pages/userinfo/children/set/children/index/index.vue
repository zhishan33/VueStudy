<template>
	<section class="set">
		<ul>
			<router-link to="aboutour"><li><span>关于我们</span><span></span></li></router-link>
			<li><span>消息设置</span><input type="checkbox" checked="" name="msg" id="msg" /><label for="msg"></label></li>
			<li @click="clearCache"><span>缓存设置</span><span></span></li>
		</ul>
		<button @click="exit" type="button">点击退出</button>
		<dialog-tip></dialog-tip>
	</section>
</template>

<script>

import dialog from '../../../../../../components/dialog'
export default {
  name: 'setindex',
  components: {
    'dialogTip': dialog
  },
  methods: {
    clearCache () {
      if (!this.$store.state.isMaskGrey) {
        this.$store.commit('MASK_GREY')
      }
      this.$store.commit('DIALOG_TYPE', 'clean')
      this.$store.commit('SHOW_WARNING_TIP')
    },
    exit () {
      if (!this.$store.state.isMaskGrey) {
        this.$store.commit('MASK_GREY')
      }
      this.$store.commit('DIALOG_TYPE', 'exit')
      this.$store.commit('SHOW_WARNING_TIP')
    }
  }
}
</script>

<style lang="scss">
	.set {
		a {
			text-decoration: none;
			color: #111;
		}
		ul {
			padding: 0 3%;
		}
		li {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;			
			height: 3rem;
			border-bottom: 1px solid #DDD;
			text-align: left;
			> span:first-child {
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
			}
		}
		li:nth-child(1) {
			span:last-child {
				width: 1rem;
				height: 1rem;
				margin-right: 0.5rem;
				border: 1px solid #AAA;
				border-left: 0;
				border-bottom: 0;
				-webkit-transform: rotate(45deg);
				
			}
		}
		li:nth-child(2) {
			input {
				height: 0;
				width: 0;
				overflow: hidden;
			}
			label {
				position: relative;
				width: 4.3rem;
				height: 2.4rem;
				border-radius: 1.3rem;
				background-color: #AAA;
				border: 0.1rem solid #AAA;
				transition: all .5s ease;
			}
			label::after {
				content: '';
				position: absolute;
				top: 0.03rem;
				left: 0.1rem;
				width: 2.2rem;
				height: 2.2rem;
				border: 0.1rem solid #FFF;
				border-radius: 1.2rem;
				background-color: #FFF;
				transition: all .5s ease;
			}
			input:checked + label {
				background-color: #06CB22;
				border: 0.1rem solid #06CB22;
				transition: all .5s ease;
			}
			input:checked + label::after {
				left: 1.88rem;
				border: 0.1rem solid #FFF;
				border-radius: 1.2rem;
				transition: all .5s ease;
			}
		}
		button {
			width: 90%;
			margin-top: 5%;
			padding: 2% 0;
			background-color: #FEEB02;
			font-size: 1.2rem;
		}
	}
</style>
