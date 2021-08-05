<template>
  <div id="home">
    <div class="nav-p">
      <nav-bar class="nav-bar"></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>

import NavBar from 'common/components/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .nav-bar {
    margin: auto;
    width: 1040px;
  }
  .nav-p {
    background-color: #ebebeb;
  }
</style>
