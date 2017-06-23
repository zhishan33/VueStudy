<template>
	<section class="answer-q">
		<dl>
			<dt>1、情况一如何处理<span @click="switchEl" id="firstEl">-</span></dt>
			<dd>遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。</dd>
		</dl>
		<dl>
			<dt>2、情况一如何处理<span @click="switchEl">+</span></dt>
			<dd>遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。</dd>
		</dl>
		<dl>
			<dt>3、情况一如何处理<span @click="switchEl">+</span></dt>
			<dd>遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。</dd>
		</dl>
		<dl>
			<dt>4、情况一如何处理<span @click="switchEl">+</span></dt>
			<dd>遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。遇到情况一的时候应该怎么去处理，咨询。</dd>
		</dl>
	</section>
</template>

<script>
export default {
  data () {
    return {
      showEl: document.getElementById('firstEl')
    }
  },
  methods: {
    switchEl (e) {
      this.showEl.parentNode.nextElementSibling.style.display = 'none'
      this.showEl.innerHTML = '+'
      e.currentTarget.parentNode.nextElementSibling.style.display = 'block'
      e.currentTarget.innerHTML = '-'
      this.showEl = e.currentTarget
    }
  }
}
</script>

<style lang="scss">
	.answer-q {
		margin-top: 3%;
		padding: 0 2%;
		text-align: left;
		dl {
			border-bottom: 0.1rem solid hsla(0, 0%, 90%, 1);
		}
		dt {
			padding: 2% 0;
			font-size: 1.1rem;
			span {
				font-weight: bold;
				/*font-size: 1em;*/
				color: #999;
				float: right;
				cursor: pointer;
			}
		}
		dd {
			line-height: 1.7;
			color: #888;
		}
		dl + dl dd {
			display: none;
		}
	}
</style>
