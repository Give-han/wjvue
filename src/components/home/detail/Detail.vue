<template>
  <div class="book-detail">
    <div class="title">
      <h1>
        {{book.title}}
      </h1>
    </div>
    <div class="content">
      <div class="main">
        <detail-index :book="book"></detail-index>
      </div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script>

import { getBookBYId } from 'network/detail.js'
import DetailIndex from './child/DetailIndex'

export default {
  name: 'Detail',
  components: { DetailIndex },
  data () {
    return {
      bookId: 1,
      book: {}
    }
  },
  created () {
    this.bookId = this.$route.params.bookId
    getBookBYId(this.bookId).then(res => {
      if (res.code === 200) {
        this.book = res.data
      }
    })
  }

}
</script>

<style scoped>
  .book-detail {
    margin: 25px auto 0px;
    width: 1040px;
  }
  .book-detail h1 {
    margin: 0;
    color: #494949;
    font-size: 26px;
    width: auto;
    display: inline-block;
  }
  .title {
    margin-bottom: 15px;
  }
  .slide {
    width: 300px;
    float: right;
  }
  .main {
    width: 675px;
    float: left;
    padding-right: 40px;
    margin-bottom: var(--bottom);
  }
</style>
