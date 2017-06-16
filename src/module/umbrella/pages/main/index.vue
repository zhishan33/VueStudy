<template>
	<section class="main">
		<header>
			<router-link to=""><span></span></router-link>
			<h1>TITLE</h1>
			<router-link to=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB6ElEQVRYR+1X7VXDMBCTJgAmgE4ATECZgG4ATAAbABMAE0AnoExAOwGwARtQJhBPfXZw0vQlTsPHD/KnbXq+k+R7to745Yer6kvaBLDbE75XkvO6XEsAJO0AuAYw6ql4THMP4IrkW5q3BEDSEMADALMfA5gCKC3oAMqEnPcYgFU4JPkS8xQAAvNnAH43TIM6FF1aImkvEBKA/ahECsASGaX/LBD2UTzmCCBMckzyxO9TAJZnSrLvvS9xkDQBcEByqwCQIHOTXPbJuppLkvNfABh4GxYKhOZ7Cl36UwDcjNO/D0CSm2U7c1tmZle3JtmCdgpIcnNuZAJ4XNXM2QAyCzeG/wPIVqBjE8at8C3og6d4ugDo0oSx4AdJX2zdATR2VWZAtgKZ+RvD/wGsUsCN8g7gluR5o45rBEi6AXBGcnEPpX7A1kskB2vkb1wqyXXmJO2QSgB86dx955Uc2QM4JWkH9gUg+AIfGkcA/OmgWivdSLMSUHHapYuq6ordC94je0M/9oYpCH+vBRbmCCtYOnjC74XcqReMGGsHk+CQ7A3jwpTTqKpMKG5H5fhZjUImMqnzCCsno7YyV4oXe9t2fR8AzM4jXHbxpSZsizrGSYqzRGc33VmBxEkXQ0YugT4U8AhXaz7bgvkEBV4rMGNc+rYAAAAASUVORK5CYII="/></router-link>
		</header>
		<section class="map-baidu">
			<input type="text" id="suggestId" name="address_detail" placeholder="如门牌号等" v-model="address_detail" class="input_style">
    		<div id="allmap"></div>
		</section>
	</section>
</template>

<script>
import { MP } from './map.js'
export default {
  data () {
    return {
      address_detail: null,
      userlocation: {lng: '', lat: ''}
    }
  },
  mounted () {
    /**
     * @description 文档说明
     */
    this.$nextTick(function () {
      MP('U1arTYd06ThWbdgsDFeKPQEYbeuD7S0q').then(BMap => {
        var th = this
        var map = new BMap.Map('allmap')
        var point = new BMap.Point(116.404, 39.915)
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom()
        var ac = new BMap.Autocomplete({'input': 'suggestId', 'location': map})
        var myValue
        ac.addEventListener('onconfirm', function (e) {
          var _value = e.item.value
          myValue = _value.province + _value.city + _value.district + _value.street + _value.business
          this.address_detail = myValue
          setPlace()
        })
        function setPlace () {
          map.clearOverlays()
          function myFun () {
            th.userlocation = local.getResults().getPoi(0).point
            map.centerAndZoom(th.userlocation, 18)
            map.addOverlay(new BMap.Marker(th.userlocation))
          }
          var local = new BMap.LocalSearch(map, {
            onSearchComplete: myFun
          })
          local.search(myValue)
        }
      })
    })
  }
}
</script>

<style lang="scss">
	.main {
		& > header {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			padding: 2%;
			background-color: hsla(0, 0%, 10%, 1);
			& > a {
				display: block;
				& > span {
					display: inline-block;
					/*width: 1rem;*/
					min-width: 1rem;
					max-width: 3rem;
					height: 1rem;
					padding: 20% 30%;
					background: linear-gradient(to bottom, hsla(0, 0%, 100%, 1) 10%, hsla(0, 0%, 100%, 1) 10%, transparent 10%, transparent 45%, hsla(0, 0%, 100%, 1) 45%, hsla(0, 0%, 100%, 1) 55%, transparent 55%, transparent 90%, hsla(0, 0%, 100%, 1) 90%, hsla(0, 0%, 100%, 1) 100%);
				}
				& > img {
					max-width: 3rem;
				}
			}
			& > h1 {
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				color: hsla(0, 0%, 100%, 1);
			}
		}
		.map-baidu {
			height: 500px;
			width: 100%;
			background-color: hsla(180, 60%, 50%, 1);
			#allmap {
				height: 300px;
				background-color: lightcoral;
			}
		}
	}
</style>
