<template>
	<article class="pay">
		<p><strong>押金</strong><strong>99元</strong></p>
		<p>为确保用户合规使用UU伞，需交纳相应的押金<br />客户可随时退回押金</p>
		<section>
			<p>选择支付方式</p>
			<form action="" method="post">
				<ul>
					<li>
						<input type="radio" checked="checked" name="pay" id="alipay" />
						<label for="alipay"><span><img src="../../../../images/icon_alipay@2x.png"/></span>
						<span>支付宝支付</span></label>
					</li>
					<!--<li>
						<span><img src="../../images/icon_wechat_success@2x.png"/></span>
						<span>微信支付</span>
						<input type="radio" name="pay" id="wechat" />
						<label for="wechat"></label>
					</li>-->
					<li>
						<input type="radio" name="pay" id="wechat" />
						<label for="wechat">
							<span><img src="../../../../images/icon_wechat_success@2x.png"/></span>
						<span>微信支付</span>
						</label>
					</li>
				</ul>
				<input @click.prevent="checkPay" type="submit" value="立即支付"/>
			</form>
			<p><a href="">跳过</a></p>
		</section>
	</article>
</template>

<script>
export default {
  name: 'pay',
  data: function () {
    return {}
  },
  methods: {
    checkPay: function () {
      this.$store.commit('PAYED')
      this.$router.push('bindbc')
    }
  },
  beforeCreate: function () {
    console.log(this.$store.state.isActive)
    if (this.$store.state.isActive) {
      this.$store.commit('PAYED')
      console.log('mounted ' + this.$store.state.isActive)
    }
  }
}
</script>

<style lang="scss">
	$grey: #f1f1f1;
	$green: #09cc25;
	article.pay {
		padding: 2rem 1rem 0;
		p {
			text-align: left;
		}
		p {
			strong {
				font-size: 1.5rem;
			}
			strong:nth-of-type(2){
				float: right;
			}
		}
		p:nth-of-type(2) {
			color: #999;
			padding: 1rem 0 2rem;
			line-height: 1.2;
		}
		li {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			height: 4rem;
			text-align: left;
			/*span {
				display: block;
				img {
					width: 1.8rem;
				}
			}*/
			/*span:nth-of-type(2){
				padding-left: 0.5rem;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
			}*/
			label {
				position: relative;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
				width: 100%;
				height: 4rem;
				text-align: left;
				/*border: 1px solid red;*/
				span {
					display: block;
					img {
						width: 1.8rem;
					}
				}
				span:nth-of-type(2){
					padding-left: 0.5rem;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
				}
			}
			label::before {
				content: '';
				display: inline-block;
				position: absolute;
				right: 0;
				top: 0;
				height: 1.4rem;
				width: 1.4rem;
				border: 0.1rem solid #BBB;
				border-radius: 0.8rem;
				margin-top: 1.1rem;
			}
			input {
				width: 0;
				height: 0;
				overflow: hidden;
				opacity: 0;
			}
			input:checked + label::before {
				border: 0.1rem solid $green;
				background: $green;
			}
			input:checked + label::after {
				content: '';
				display: inline-block;
				position: absolute;
				right: 0;
				top: 0.1rem;
				width: 0.8rem;
				height: 0.4rem;
				border: 0.1rem solid #FFF;
				border-top: 0;
				border-right: 0;
				-webkit-transform: rotate(-50deg);
				transform: rotate(-50deg);
				margin-top: 1.45rem;
				margin-right: 0.3rem;
			}
		}
		section p:nth-last-of-type(2) {
			padding-bottom: 0.8rem;
		}
		section p:nth-last-of-type(1) {
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
</style>
