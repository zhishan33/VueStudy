<template>
	<section class="fee-state">
		<dl>
			<dt class="fee-detail"><span>1、关于佣金</span><span @click="change"></span></dt>
			<dd>关于永靖额详细信息,关于永靖额详细信,息关于永靖额详细信息关于永靖额详,细信息.</dd>
		</dl>
		<dl>
			<dt><span>2、如何退款？</span><span @click="change"></span></dt>
			<dd>关于永靖额详细信息,关于永靖额详细信息,关于永靖额详细信息,关于永靖额详细信息,关于永靖额详细信息,</dd>
		</dl>
		<dl>
			<dt><span>3、如何交押金？</span><span @click="change"></span></dt></dt>
			<dd>关于永靖额详细信息</dd>
		</dl>
		<dl>
			<dt><span>4、如何扣款？</span><span @click="change"></span></dt></dt>
			<dd>关于永靖额详细信息</dd>
		</dl>
	</section>
</template>

<script>
export default {
  name: 'feestate',
  data: function () {
    return {}
  },
  methods: {
    change: function (event) {
      var ddC = document.querySelectorAll('section.fee-state dt')
      if (event.target.parentNode.className === 'fee-detail') {
        event.target.parentNode.className = ''
      } else {
        for (var i = 0; i < ddC.length; i++) {
          ddC[i].className = ''
        }
        event.target.parentNode.className = 'fee-detail'
      }
    }
  }
}
</script>

<style lang="scss">
	.fee-state {
		text-align: left;
		padding: 0 4%;
		dl {
			padding: 2% 0;
			border-bottom: 1px solid #ccc;
			dt {
				padding: 2% 0;
			}
			dd {
				display: none;
				font-size: 0.9rem;
				line-height: 1.6;
				color: #888;
			}
			dt span:last-child {
				float: right;
				display: inline-block;
				width: 1rem;
				height: 1rem;
				background: url(../../../../images/status_open@2x.png) no-repeat center;
				background-size: 100%;
				cursor: pointer;
				
			}
			.fee-detail span:last-child {
				background: url(../../../../images/status_close@2x.png) no-repeat center;
				background-size: 100%;
			}
			.fee-detail + dd {
				display: block;
			}
		}
	}
</style>
