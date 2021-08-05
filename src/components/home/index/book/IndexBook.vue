<template>
  <div class="book">
    <index-book-item v-for="(item, id) in books" :key="id" :book="item"></index-book-item>
  </div>
</template>

<script>

import IndexBookItem from './IndexBookItem'

export default {
  name: 'IndexBook',
  props: {
    books: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    IndexBookItem
  }
}
</script>

<style scoped>
  .book{
    width: 700px;
  }
</style>
