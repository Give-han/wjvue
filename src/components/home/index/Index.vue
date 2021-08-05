<template>
  <div class="index">
    <search-item class="index-search" @search="search" :placeholder="placeholder"></search-item>
    <carousel :title="title" :books="books">
    </carousel>
  </div>
</template>

<script>
import SearchItem from './SearchItem'
import Carousel from './carousel/Carousel'

export default {
  name: 'Index',
  data () {
    return {
      placeholder: '书名、作者、ISBN',
      books: [],
      title: '新书速递'
    }
  },
  components: {
    SearchItem,
    Carousel
  },
  methods: {
    search (keyword) {
    }
  },
  created () {
    this.axios.get('/book/RecommendBook').then(res => {
      if (res.data.code === 200) {
        this.books = res.data.data
      }
    })
  }
}
</script>

<style scoped>
  .index {
    margin: auto;
    width: 1040px;
    margin-top: 25px;
  }
  .index-search {
    width: 50%;
    margin-bottom: 25px;
    /*display: inline;*/
  }
  /*.content-parent {*/
  /*  display: inline-block;*/
  /*  width: 4050px;*/
  /*}*/
</style>
