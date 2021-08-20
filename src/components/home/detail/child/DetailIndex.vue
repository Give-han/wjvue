<template>
  <div class="detail-index">
    <div class="left">
      <div class="main-img">
        <img :src="book.imageUrl" referrerpolicy="no-referrer"/>
      </div>
      <div class="info">
        <span class="p1" v-if="isNotBlank(book.author)">作者：</span>{{book.author}}
        <br v-if="isNotBlank(book.author)"/>
        <span class="p1" v-if="isNotBlank(book.publisher)">出版社：</span>{{book.publisher}}
        <br v-if="isNotBlank(book.publisher)"/>
        <span class="p1" v-if="isNotBlank(book.producer)">出品方：</span>{{book.producer}}
        <br v-if="isNotBlank(book.producer)"/>
        <span class="p1" v-if="isNotBlank(book.translator)">译者：</span>{{book.translator}}
        <br v-if="isNotBlank(book.translator)"/>
        <span class="p1" v-if="isNotBlank(book.pubYear)">出版年：</span>{{book.pubYear}}
        <br v-if="isNotBlank(book.pubYear)"/>
        <span class="p1" v-if="isNotBlank(book.pageNum)">页数：</span>{{book.pageNum}}
        <br v-if="isNotBlank(book.pageNum)"/>
        <span class="p1" v-if="isNotBlank(book.price)">定价：</span>{{book.price}}
        <br v-if="isNotBlank(book.price)"/>
        <span class="p1" v-if="isNotBlank(book.binding)">装帧：</span>{{book.binding}}
        <br v-if="isNotBlank(book.binding)"/>
        <span class="p1" v-if="isNotBlank(book.isbn)">ISBN：</span>{{book.isbn}}
      </div>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailIndex',
  props: {
    book: {
      type: Object,
      default () {
        return null
      }
    }
  },
  methods: {
    isNotBlank (item) {
      if (item !== null && item !== '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .left{
    float: left;
    width: 500px;
  }
  .left a img{
    margin-bottom: 10px;
  }
  .right{
    float: left;
    width: 155px;
    margin: 2px 0 0 0;
    padding: 0 0 0 15px;
    border-left: 1px solid #eaeaea;
    color: #9b9b9b;
  }
  .main-img {
    max-width: 155px;
    float: left;
    text-align: center;
    margin: 3px 12px 0 0;
    overflow: hidden;
  }
  .main-img img {
    max-width: 135px;
    max-height: 200px;
  }
  .info {
    float: left;
    word-wrap: break-word;
    max-width: 333px;
    font-size: 12px;
    line-height: 1.92;
  }
  .p1 {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
  }
</style>
