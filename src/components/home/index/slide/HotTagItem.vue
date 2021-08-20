<template>
  <div class="hot-tag-item">
    <div class="tag-title">{{tagTitle}}</div>
    <div class="tab-content">
      <tag-item :tag-name="item.tagName" v-for="(item, index) in tagNames" :key="index"></tag-item>
    </div>
  </div>
</template>

<script>

import TagItem from './TagItem'

export default {
  name: 'HotTagItem',
  components: {
    TagItem
  },
  props: {
    tagTitle: {
      type: String,
      default: ''
    },
    tagNames: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      name: '小说'
    }
  }
}
</script>

<style scoped>
  .hot-tag-item {
    margin-bottom: 15px;
    border-bottom: 1px dashed #ddd;
  }
  .tab-content::after {
    content: '更多';
    width: auto;
    word-break: keep-all;
    white-space: nowrap;
    background-color: #f5f5f5;
    color: #37A;
    font-size: 13px;
    padding: 2px 11px 0;
    display: inline-block;
    margin: 0 3px 5px 0;
    line-height: 20px;
  }
</style>
