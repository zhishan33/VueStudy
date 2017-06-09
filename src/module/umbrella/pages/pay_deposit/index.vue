<template>
	<section class="pay-and-bindbc">
		<header>
			<ul>
				<li class="active"><span></span></li>
				<li class="active"><span></span></li>
				<li v-bind:class={active:isActive}><span></span></li>
				<li><span></span></li>
			</ul>
			<table>
				<tr>
					<td>手机验证</td>
					<td>押金交纳</td>
					<td>实名认证</td>
					<td>完成注册</td>
				</tr>
			</table>
		</header>
		<router-view></router-view>
	</section>
</template>

<script>
export default {
  name: 'pay-and-bindbc',
  data: function () {
    return {}
  },
  computed: {
    isActive: function () {
      return this.$store.state.isActive
//    return this.$store.commit('PAYE')
    }
  },
  created: function () {
    this.$store.commit('PAY')
    this.$router.replace('payDeposit/pay')
  }
}
</script>

<style lang="scss">
	$grey: #f1f1f1;
	$green: #09cc25;
	.pay-and-bindbc {
		header {
			background: $grey;
			padding: 1.5rem 0 1.2rem;
				ul {
					li {
						display: inline-block;
						float: left;
						width: 25%;
						padding-bottom: 0.5rem;		
						span {
							display: inline-block;
							width: 1.5rem;
							height: 1.5rem;
							border-radius: 0.75rem;
							background: #cacaca;
							-webkit-box-shadow: 0 0 0 0.3rem hsla(120, 0%, 85%, 0.7);
							box-shadow: 0 0 0 0.3rem hsla(120, 0%, 85%, 0.7);
						}
					}
					li.active {
						span {
							background: $green;
							-webkit-box-shadow: 0 0 0 0.3rem hsla(120, 80%, 80%, 0.7);
							box-shadow: 0 0 0 0.3rem hsla(120, 60%, 80%, 0.7);
							
						}
					}
					li:nth-of-type(n + 2) span::before{
						content: '';
						display: inline-block;
						position: absolute;
						width: 25%;
						margin-left: -25%;
						height: 1.5rem;
						/*border: 0.1rem solid #CACACA;*/
						background: linear-gradient(top, transparent 45%, #cacaca 45%, #cacaca 55%, transparent 51%, transparent 100%);
						padding: 0 1.2rem;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						-webkit-background-clip: content-box;
						background-clip: content-box;
					}
					li.active span::before {
						background: linear-gradient(top, transparent 45%, $green 45%, $green 55%, transparent 51%, transparent 100%);
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						-webkit-background-clip: content-box;
						background-clip: content-box;
					}
				}
				table {
					width: 100%;
					font-family: "微软雅黑";
					font-weight: bold;
				}
		}
		article.bind-bc {
			padding: 2rem 1rem 0;
			li {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
				height: 4rem;
				text-align: left;
				margin-bottom: 2rem;
				border: 1px solid #ddd;
				border-radius: 0.1rem;
				span {
					display: block;
					width: 5rem;
					border-right: 1px solid #DDD;
					text-align: center;
				}
				input {
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					padding-left: 1rem;
				}
			}
			section p:nth-last-of-type(1) {
				margin-top: 1rem;
				text-align: center;
				color: #5dadff;
			}
			section p:nth-last-of-type(1) a {
				text-align: center;
				color: #5dadff;
				text-decoration: none;
			}
			section form > input {
				width: 90%;
				height: 3rem;
				margin-top: 2rem;
				font-size: 1rem;
				border-radius: 0.2rem;
				background: #feeb02;
				font-weight: bold;
				font-family: "微软雅黑";
				color: #444;
			}

		}
	}
</style>
