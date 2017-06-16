<template>
	<section class="uus-return">
		<dl>
			<dt><h2>第一步</h2></dt>
			<dd>
				<p>扫描伞柜屏幕上的二维码，<strong>蓝灯亮</strong>时，将对应伞架上的伞移至最前端</p>
				<p><img src="../../../../../../../../assets/logo.png"/></p>
			</dd>
		</dl>
		<dl>
			<dt><h2>第二步</h2></dt>
			<dd>
				<p>等待数秒，<strong>绿灯亮</strong>时，完成操作</p>
				<p><img src="../../../../../../../../assets/logo.png"/></p>
			</dd>
		</dl>
	</section>
</template>

<script>
</script>

<style lang="scss">
	.uus-return {
		padding: 0 2%;
		margin-top: 5%;
		text-align: left;
		dt {
			padding-bottom: 1%;
			border-bottom: 0.1rem solid hsla(240, 0%, 90%, 1);
		}
		dd {
			p:first-child {
				padding-top: 2%;
			}
			p:last-child {
				text-align: center;
				img {
					width: 50%;
					padding: 2%;
					margin-bottom: 5%;
				}
			}
		}
	}
</style>
