<template>
  <div style="display: inline-flex">
    <el-input
      v-model="keyword"
      :disabled="disabled"
      :placeholder="placeholder"
      prefix-icon="el-icon-search"
      style="width: 500px"
      clearable
      @keydown.enter.native="search"></el-input>
    <el-button
      :disabled="disabled"
      icon="el-icon-search"
      style="background-color: #a19f96; border-color: #a19f96; padding: 12px"
      type="primary"
      @click="search">
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入昵称进行搜索，可以直接回车搜索...'
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style scoped>
</style>
