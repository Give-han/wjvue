<template>
  <div class="search-view">
    <div v-for="(book, index) in books" :key="index">
      <detail-index :book="book">
        <div class="score" slot="default">
          <span>评分：</span>
          <span>{{book.score}}</span>
        </div>
      </detail-index>
    </div>
  </div>
</template>

<script>
import DetailIndex from '../../detail/child/DetailIndex'
export default {
  name: 'SearchView',
  components: { DetailIndex },
  data () {
    return {
      books: []
    }
  },
  created () {
    this.books = this.$route.params.books
  }
}
</script>

<style scoped>
.search-view {
  margin: 25px auto 0px;
  width: 1040px;
}
</style>
