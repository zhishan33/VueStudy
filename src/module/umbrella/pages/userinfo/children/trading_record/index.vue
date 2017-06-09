<template>
	<section class="trading-record">
		<template v-if="recordData">
			<ul>
				<li>
					<p><span>消费</span><span>-1.00</span></p>
					<p><time>2017-06-10 12:48</time></p>
					<p>业务单号12323123</p>
				</li>
				<li>
					<p><span>充值</span><span>+20.00</span></p>
					<p><time>2017-06-07 10:01</time></p>
					<p></p>
				</li>
				<li>
					<p class="active"><span>提现中</span><span>-10.00</span></p>
					<p><time>2017-05-03 10:23</time></p>
					<p></p>
				</li>
				<li>
					<p><span>充值赠送</span><span>-8.00</span></p>
					<p><time>2017-06-03 10:24</time></p>
					<p></p>
				</li>
				<li>
					<p><span>体现</span><span>-10.00</span></p>
					<p></p>
					<p></p>
				</li>
			</ul>
			<footer><button type="button">点击加载更多</button></footer>
		</template>
		<template v-else>
			<p class="null">暂无交易记录</p>
		</template>
	</section>
</template>

<script>
</script>

<style lang="scss">
	.trading-record {
		li {
			padding: 3% 5%;
			border-bottom: 1px solid #EEE;
		}
		p {
			margin: 0;
			padding: 0;
			padding: 0.5% 0;
			text-align: left;
			span:last-child {
				float: right;
			}
		}
		.active {
			color: red;
		}
		footer {
			button {
				padding: 5%;
				font-size: 1rem;
			}
		}
		.null {
			padding-top: 15%;
			text-align: center;
			font-size: 1.5rem;
			color: #999;
		}
	}
</style>
