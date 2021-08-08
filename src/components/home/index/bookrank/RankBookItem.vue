<template>
  <div class="rank-book-item">
    <div class="cover">
      <a href="#">
        <img :src="popularBook.imageUrl" referrerpolicy="no-referrer"/>
      </a>
    </div>
    <div class="info">
      <h4 class="title">
        <a>{{popularBook.title}}</a>
      </h4>
      <el-rate v-model="popularBook.score"
               class="rate"
               disabled
               show-score
               allow-half
               text-color="#ff9900"
               score-template="{value}"></el-rate>
      <p class="author">{{popularBook.author}}</p>
      <p>历史 / 意大利</p>
      <p class="review">一面镜子，一枚后盾 (四六酱评论)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankBookItem',
  props: {
    popularBook: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style scoped>
  .rank-book-item {
    display: inline-block;
    width: 337px;
    margin-bottom: 30px;
    overflow: hidden;
    vertical-align: top;
    zoom: 1;
    /*float: none;*/
  }
  .cover {
    float: left;
    width: 85px;
    height: 120px;
    margin-right: 18px;
    overflow: hidden;
  }
  .cover img {
    max-height: 100%;
    max-width: 100%;
  }
  .cover a{
    height: 0;
  }
  .info {
    font-size: 13px;
    margin-right: 20px;
  }
  .info p {
    margin: 0;
    word-wrap: break-word;
  }
  .title {
    font-size: 15px;
    height: auto;
    margin: 0;
    background: none;
  }
  .review {
    color: #666;
    clear: both;
    padding-top: 15px;
  }
  /*.rate {*/
  /*  font-size: 12px;*/
  /*}*/
</style>
