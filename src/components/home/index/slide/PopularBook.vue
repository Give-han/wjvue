<template>
  <div class="popular-book">
    <title-item :title="title"></title-item>
    <popular-book-item v-for="(item, index) in popuBook" :key="index" :name="item.title" :author="item.author" :num="index + 1"></popular-book-item>
  </div>
</template>

<script>

import TitleItem from '../child/TitleItem'
import PopularBookItem from './PopularBookItem'

export default {
  name: 'PopularBook',
  components: { PopularBookItem, TitleItem },
  data () {
    return {
      title: '畅销图书榜'
    }
  },
  props: {
    popuBook: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .popular-book {
    font-size: 14px;
  }
</style>
