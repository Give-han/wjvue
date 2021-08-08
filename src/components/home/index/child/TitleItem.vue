<template>
  <div class="title">
    <h2>
      <span class="title-name">{{title}}</span>
      <div class="more" v-for="(subitem, index) in subTitle" :key="index">
        {{subitem}}
      </div>
    </h2>
    <slot name="slide-control"></slot>
  </div>
</template>

<script>
export default {
  name: 'TitleItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .title {
    display: block;
    padding-bottom: 3px;
    margin-bottom: 16px;
    border-bottom: 1px solid #ddd;
  }
  .title h2 {
    font-size: 18px;
    margin: 0;
  }
  .more {
    display: inline-block;
    font: 13px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
    padding-left: 10px;
  }
</style>
