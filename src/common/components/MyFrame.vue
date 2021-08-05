<template>
  <div>
    <el-container direction="horizontal">
      <el-aside width="591px" class="index-aside">
        <slot name="aside"></slot>
      </el-aside>
      <el-main class="main-frame">
        <div class="index-main">
          <slot name="main"></slot>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MyFrame'
}
</script>

<style scoped>
  .index-main {
    width: 66%;
    /*background-color: #ebebeb;*/
  }

  .index-aside {
    padding: 20px;
  }

  .main-frame {
    padding: 20px 0px;
  }
</style>
