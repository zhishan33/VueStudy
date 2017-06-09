<template>
	<section class="mymsg-detail" v-title="{title: '消息详情'}">
		<dl>
			<dt>{{ this.$route.params.msgdetail }}这里是消息的详细信息标题</dt>
			<dd>这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，这里是消息的详细吗、内容。，</dd>
		</dl>
	</section>
</template>

<script>
</script>

<style lang="scss">
	.mymsg-detail {
		padding: 2% 2%;
		text-align: left;
		background-color: #EEE;
		dl {
			padding: 3% 3% 5%;
			background-color: #FFF;
			dt {
				padding-bottom: 1%;
				font-size: 1.5rem;
			}
			dd {
				color: #999;
			}
		}
	}
</style>
