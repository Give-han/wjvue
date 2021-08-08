<template>
  <div class="carousel">
    <carousel-title :title="title" :sub-title="subTitle" :count="count" @changeIndex="changeIndex"></carousel-title>
    <el-carousel :height="height" :autoplay="false" indicator-position="none" arrow="never" ref="carousel">
      <slot name="carousel-item"></slot>
    </el-carousel>
  </div>
</template>

<script>

import CarouselTitle from './CarouselTitle'

export default {
  name: 'Carousel',
  components: {
    CarouselTitle
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 1
    },
    height: {
      type: String,
      default: '200px'
    },
    subTitle: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    changeIndex (index) {
      // v-for遍历从1开始，carousel从0开始
      this.$refs.carousel.setActiveItem(index - 1)
    }
  }
}
</script>

<style scoped>
  .carousel {
    width: 675px;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
  }
</style>
