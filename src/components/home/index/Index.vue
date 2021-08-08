<template>
  <div class="index">
    <search-item class="index-search" @search="search" :placeholder="placeholder"></search-item>
    <div class="index-content" style="width: 1040px">
      <div class="content-main">
        <!--新书速递-->
        <carousel :title="title1" :count="count" :height="'484px'" :sub-title="subTitle1">
          <el-carousel-item v-for="(item, index) in books" :key="index" slot="carousel-item">
            <index-book :books="item"/>
          </el-carousel-item>
        </carousel>
        <!--图书资讯-->
        <carousel :title="title2" :count="count" :height="'242px'">
          <el-carousel-item v-for="(item, index) in bookNews" :key="index" slot="carousel-item">
            <book-news :book-news="item"></book-news>
          </el-carousel-item>
        </carousel>
        <!--最受关注图书榜-->
        <book-rank :popular-books="popularBooks"></book-rank>
        <!--电子图书-->
        <ebook :ebook="books"></ebook>
      </div>
      <div class="content-slide">
        <h2>标签</h2>
      </div>
    </div>
  </div>
</template>

<script>
import SearchItem from './SearchItem'
import Carousel from './carousel/Carousel'
import IndexBook from './book/IndexBook'
import BookNews from './child/BookNews'
import BookRank from './bookrank/BookRank'
import Ebook from './child/Ebook'

export default {
  name: 'Index',
  data () {
    return {
      placeholder: '书名、作者、ISBN',
      books: [],
      bookNews: [],
      popularBooks: [],
      title1: '新书速递',
      subTitle1: ['更多》'],
      title2: '图书资讯',
      count: 4
    }
  },
  components: {
    SearchItem,
    Carousel,
    IndexBook,
    BookNews,
    BookRank,
    Ebook
  },
  methods: {
    search (keyword) {
    }
  },
  created () {
    this.axios.get('/book/recommendBook').then(res => {
      if (res.data.code === 200) {
        this.books = res.data.data
      }
    })
    this.axios.get('/book/bookNews').then(res => {
      if (res.data.code === 200) {
        this.bookNews = res.data.data
      }
    })
    this.axios.post('/book/popularBook/10').then(res => {
      if (res.data.code === 200) {
        this.popularBooks = res.data.data
      }
    })
  }
}
</script>

<style scoped>
  .index {
    margin: 25px auto 0px;
    width: 1040px;
    /*margin-top: 25px;*/
  }
  .index-search {
    width: 50%;
    margin-bottom: 25px;
    /*display: inline;*/
  }
  .content-main {
    width: 675px;
    float: left;
    padding-right: 40px;
  }
  .content-slide {
    width: 300px;
    float: right;
    /*margin: 0px*/
  }
</style>
