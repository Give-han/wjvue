<template>
  <div class="book-rank">
    <title-item :title="rankTitle" :sub-title="subTitle" />
    <div class="content">
      <rank-book-item v-for="(popularBook, index) in popularBooks" :key="index" :popular-book="popularBook"></rank-book-item>
    </div>
  </div>
</template>

<script>

import TitleItem from '../child/TitleItem'
import RankBookItem from './RankBookItem'

export default {
  name: 'BookRank',
  props: {
    popularBooks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      subTitle: ['虚构类》', '非虚构类》'],
      rankTitle: '最受关注图书榜'
    }
  },
  components: {
    TitleItem,
    RankBookItem
  }
}
</script>

<style scoped>
  .book-rank{
    margin-bottom: 50px;
  }
  .content {
    font-size: 0;
    margin-bottom: -30px;
  }
</style>
