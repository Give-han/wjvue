<template>
  <div class="tag-item">
    <a href="#" class="tag-link">{{tagName}}</a>
  </div>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    tagName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .tag-item {
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
