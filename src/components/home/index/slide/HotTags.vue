<template>
  <div class="hot-tags">
    <title-item :title="title" :sub-title="subTitle"></title-item>
    <hot-tag-item v-for="(item, index) in tagChild" :key="index" :tag-title="item.category" :tag-names="item.tags"></hot-tag-item>
  </div>
</template>

<script>

import TitleItem from '../child/TitleItem'
import HotTagItem from './HotTagItem'

export default {
  name: 'HotTags',
  props: {
    tagChild: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      title: '热门标签',
      subTitle: ['所有热门标签'],
      tagtitle: '文学',
      tagNames: ['小说', '随笔', '日记', '散文', '诗歌', '童话', '名著', '港台']
    }
  },
  components: {
    TitleItem,
    HotTagItem
  }
}
</script>

<style scoped>
  .hot-tags {
    margin-bottom: var(--bottom);
  }
</style>
