<template>
  <div>
    <el-menu mode="horizontal"
             :default-active= "currentIndex"
             :background-color="backcolor"
             text-color="#000"
             router
             active-text-color="#1e90ff">
      <el-menu-item v-for="(item, index) in navList"
                    :key="index"
                    :index="item.name">
        {{item.navItem}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import { BACKCOLOR } from 'common/constant.js'

export default {
  name: 'NavBar',
  data () {
    return {
      navList: [
        { name: '/index', navItem: '首页' },
        { name: '/jotter', navItem: '笔记本' },
        { name: '/library', navItem: '全部图书' },
        { name: '/profile', navItem: '个人中心' }
      ],
      currentIndex: '/index',
      backcolor: BACKCOLOR
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
