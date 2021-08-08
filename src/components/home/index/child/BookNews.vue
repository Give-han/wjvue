<template>
  <div class="book-news">
    <div class="img">
      <img :src=bookNews.imageUrl referrerPolicy="no-referrer"  alt=""/>
    </div>
    <div class="content">
      <div class="title">{{bookNews.title}}</div>
      <div class="author">{{bookNews.author}}</div>
      <div class="abs">{{bookNews.abs}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookNews',
  data () {
    return {
      style: ''
    }
  },
  props: {
    bookNews: {
      type: Object,
      default () {
        return null
      }
    }
  },
  computed: {
    getStyle () {
      return 'background: url(' + this.bookNews.imageUrl + ')'
    }
  }
}
</script>

<style scoped>
  .book-news {
    border: solid 1px #ddd;
    border-radius: 2px;
    padding: 25px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }
  .content {
    margin-right: 116px;
  }
  .title {
    line-height: 1.38;
    font-size: 15px;
    color: #37a;
  }
  .author {
    display: block;
    color: #aaa;
    font-size: 13px;
    line-height: 1;
    margin-top: 8px;
  }
  .abs {
    color: #494949;
    line-height: 1.5;
    margin: 8px 0 0 0;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .img {
    float: right;
    width: 96px;
    height: 96px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
  }
  .img img {
    width: 100%;
    height: 100%;
  }
</style>
