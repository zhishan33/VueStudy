<template>
	<section class="use-state">
		<header>
			<nav>
				<ul>
					<router-link to="uusborrow"><li><span>借伞</span></li></router-link>
					<router-link to="uusreturn"><li><span>还伞</span></li></router-link>
					<router-link to="answerq"><li><span>答疑</span></li></router-link>
				</ul>
			</nav>
		</header>
		<router-view></router-view>
	</section>
</template>

<script>
</script>

<style lang="scss">
	.use-state {
		ul {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			background-color: hsla(0, 1%, 96%, 1);
			width: 100%;
			a {
				display: block;
				width: 100%;
				span {
					display: inline-block;
					padding: 5% 15%;
					font-size: 1.2rem;
					color: #666;
					border-bottom: 0.2rem solid hsla(0, 1%, 96%, 1);
				}
			}
			.router-link-active span {
				border-bottom: 0.2rem solid hsla(160, 100%, 50%, 1);
			}
		}
	}
</style>
