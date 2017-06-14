<template>
	<section class="borrowed-record">
		<template v-if="borrowData">
			<ul>
				<li>
					<div class="unreturn">
						<p>2017-06-10 12:48</p>
						<p>借伞</p>
						<p>业务单号20170610000009</p>
					</div>
				</li>
				<li>
					<div>
						<p>2017-06-05 10:00</p>
						<p>还伞</p>
						<p>业务单号20170605000004</p>
					</div>
					<div>
						<p>2017-06-05 10:00</p>
						<p>借伞</p>
						<p>业务单号20170605000004</p>
					</div>
				</li>
				<li>
					<div>
						<p>2017-06-05 10:00</p>
						<p>还伞</p>
						<p>业务单号20170605000004</p>
					</div>
					<div>
						<p>2017-06-05 10:00</p>
						<p>借伞</p>
						<p>业务单号20170605000004</p>
					</div>
				</li>
				<li v-for="item of borrowDataAdd">
					<div v-for="order of item.orderStatus">
						<p>{{order.time}}</p>
						<p>{{order.type}}</p>
						<p>{{order.orderID}}</p>
					</div>
				</li>
			</ul>
			<p><button @click="getMore" type="button">{{loadingMSG}}</button></p>
		</template>
		<template v-else>
			<p class="null">暂无借还记录</p>
		</template>
			
	</section>
</template>

<script>
export default {
  name: 'borrowedRecord',
  data: function () {
    return {}
  },
  computed: {
    borrowData () {
      return this.$store.state.borrowData
    },
    borrowDataAdd () {
      return this.$store.state.borrowDataAdd
    },
    loadingMSG () {
      return this.$store.state.loadingMSG
    }
  },
  methods: {
    getMore () {
      this.$store.dispatch('getData')
    }
  }
}
</script>

<style lang="scss">
	.borrowed-record {
		ul {
			padding: 3%;
			background-color: #eee;
			li {
				
				padding: 4% 3rem;
				background-color: #FFF;
				div {
					position: relative;
					p {
						padding: 1% 0;
						text-align: left;
					}
					p:nth-child(1)::before {
						content: '';
						position: absolute;
						left: -2rem;
						width: 1rem;
						height: 1rem;
						border-radius: 0.5rem;
						background-color: #06CB22;
						z-index: 2;
					}
				}
				div:nth-of-type(1):not(.unreturn) {
					padding-bottom: 2rem;
				}
				div:nth-of-type(1):not(.unreturn)::after {
					content: '';
					position: absolute;
					left: -1.55rem;
					top: 0;
					bottom: 0;
					margin-top: 1%;
					margin-bottom: -1%;
					border-left: 0.2rem solid #666;
				}
				
			}
			li + li {
				margin-top: 3%;
			}
		}
		p {
			text-align: center;
			button {
				font-size: 1.2rem;
				padding: 5%;
			}
		}
		.null {
			padding-top: 15%;
			color: #999;
			font-size: 1.5rem;
		}
	}
</style>
