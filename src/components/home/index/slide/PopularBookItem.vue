<template>
    <div class="popular-book-item">
      <span class="num">{{num}}.</span>
      <div class="info">
        <a class="name" href="#">{{name}}</a>
        <div class="author">{{author}}</div>
      </div>
      <a class="tab" href="#">{{tabName}}</a>
    </div>
</template>

<script>
export default {
  name: 'PopularBookItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      tabName: '去购买'
    }
  }
}
</script>

<style scoped>
  .popular-book-item {
    padding: 4px 0;
    overflow: hidden;
    border-bottom: 1px dashed #ddd;
  }
  .info {
    float: left;
    width: 223px;
  }
  .num {
    float: left;
    width: 20px;
    text-align: center;
  }
  .name {
    color: var(--text-color);
    width: auto;
    display: inline-block;
  }
  .author {
    /*width: 223px;*/
    font-size: 13px;
    color: #666;
    min-height: 19px;
  }
  .tab {
    border: 1px solid transparent;
    float: right;
    color: #999;
    font-size: 13px;
    line-height: 100%;
    padding: 6px 8px;
    position: relative;
    top: 8px;
    right: 5px;
  }
</style>
