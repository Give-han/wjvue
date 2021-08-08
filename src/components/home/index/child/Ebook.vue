<template>
  <div class="e-book">
    <title-item :title="title" :sub-title="subTitle"></title-item>
    <el-carousel height="484px" :autoplay="false" indicator-position="none" arrow="never" ref="carousel">
      <el-carousel-item v-for="(item, index) in ebook" :key="index">
        <index-book :books="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

import TitleItem from './TitleItem'
import IndexBook from '../book/IndexBook'

export default {
  name: 'Ebook',
  props: {
    ebook: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      title: '电子图书',
      subTitle: ['查看全部']
    }
  },
  components: {
    TitleItem,
    IndexBook
  }
}
</script>

<style scoped>

</style>
