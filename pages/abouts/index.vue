<template>
  <div class="abouts"><div class="testaa">456</div></div>
  <div id="mapDiv" style="width: 1440px; height: 500px"></div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于',
  description: 'Nuxt 3 + TypeScript + Tailwind CSS',
  keywords: 'Nuxt 3, TypeScript, Tailwind CSS'
})

onMounted(async () => {
  await insertScript('http://api.tianditu.gov.cn/api?v=4.0&tk=f173fa0cb66dc0f7f4c0e0eaf9454987')
  const T = window.T
  const map = new T.Map('mapDiv')
  const pos = T.LngLat(104.006, 30.64535)
  map.centerAndZoom(pos, 14)

  // 缩放
  map.addControl(new T.Control.Zoom())
  // 比例尺
  map.addControl(new T.Control.Scale())
  // 标记
  const marker = new T.Marker(pos)
  map.addOverLay(marker)
  var infoWin1 = new T.InfoWindow()
  var sContent =
    "<div style='margin:0px;'>" +
    "<div style='margin:10px 10px; '>" +
    "<img style='float:left;margin:0px 10px' src='http://lbs.tianditu.gov.cn/images/logo.png' width='101' height='49' title='天安门'/>" +
    "<div style='margin:10px 0px 10px 120px;'>电话 : (010)88187700 <br>地址：北京市顺义区机场东路国门商务区地理信息产业园2号楼天地图大厦" +
    '</div>' +
    '</div>'
  infoWin1.setContent(sContent)
  marker.openInfoWindow(infoWin1)
  // marker.addEventListener('click', function () {
  //   marker.openInfoWindow(infoWin1)
  // }) // 将标注添加到地图中

  // var label = new T.Label({
  //   text: "天地图：<a href='https://www.tianditu.gov.cn'  target='_blank'>https://www.tianditu.gov.cn </a>",
  //   position: pos,
  //   offset: new T.Point(-9, 0)
  // })
  // //创建地图文本对象
  // map.addOverLay(label)
})
</script>

<style scoped lang="scss">
.abouts {
}
</style>
