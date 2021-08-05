<template>
  <div class="carousel">
    <div class="indicator">
      <div class="title">
        <h2>
          <span class="title-name">{{title}}</span>
          <div class="more">
            更多》
          </div>
        </h2>
        <div class="slide-control">
          <div class="slide-dots">
            <a class="dot"
               :class="{active:currentIndex==0}"
               @click="changeIndex(0)"
               href="#"></a>
            <a class="dot"
               :class="{active:currentIndex==1}"
               @click="changeIndex(1)"
               href="#"></a>
            <a class="dot"
               :class="{active:currentIndex==2}"
               @click="changeIndex(2)"
               href="#"></a>
            <a class="dot"
               :class="{active:currentIndex==3}"
               @click="changeIndex(3)"
               href="#"></a>
          </div>
          <div class="slide-btns">
            <a class="lr" @click="pre" href="#">{{left}}</a>
            <a class="lr" @click="next" href="#">{{right}}</a>
          </div>
        </div>
      </div>
    </div>
    <el-carousel height="484px" :autoplay="false" indicator-position="none" arrow="never" ref="carousel">
      <el-carousel-item v-for="(item, index) in books" :key="index">
        <index-book :books="item"/>
      </el-carousel-item>
    </el-carousel>
<!--    <div class="slide-list">-->
<!--      <div class="content" v-for="(item, index) in books" :key="index">-->
<!--        <index-book :books="item"/>-->
<!--      </div>-->
<!--    </div>-->
<!--    <ol class="slide-list">-->
<!--      <li class="content" v-for="(item, index) in books" :key="index">-->
<!--        <index-book :books="item"/>-->
<!--      </li>-->
<!--    </ol>-->
<!--    <transition-group tag="ul" class='slide-ul' name="list">-->
<!--      <li v-for="(item, index) in books" :key="index" v-show="index===currentIndex" class="content">-->
<!--        <index-book :books="item"/>-->
<!--      </li>-->
<!--    </transition-group>-->
  </div>
</template>

<script>

import IndexBook from '../book/IndexBook'

export default {
  name: 'Carousel',
  components: {
    IndexBook
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    books: {
      type: Array,
      default () {
        return []
      }
    },
    count: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      left: ' < ',
      right: ' > ',
      currentIndex: 0
    }
  },
  methods: {
    changeIndex (index) {
      this.currentIndex = index
      this.$refs.carousel.setActiveItem(index)
    },
    pre () {
      if (this.currentIndex === 0) {
        this.changeIndex(3)
      } else {
        this.changeIndex(this.currentIndex - 1)
      }
    },
    next () {
      if (this.currentIndex === 3) {
        this.changeIndex(0)
      } else {
        this.changeIndex(this.currentIndex + 1)
      }
    }
  }
}
</script>

<style scoped>
  .carousel {
    width: 675px;
    overflow: hidden;
    position: relative;
  }

  /*.content {*/
  /*  display: inline-block;*/
  /*  !*margin-right: -25px;*!*/
  /*}*/
  /*.slide-list {*/
  /*  !*display: block;*!*/
  /*  position: relative;*/
  /*  left: -675px;*/
  /*  width: 4050px;*/
  /*  height: 484px;*/
  /*  !*margin-right: -25px;*!*/
  /*}*/

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
  }
  h2 .more {
    font: 13px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
    padding-left: 10px;
  }
  .slide-control {
    /*display: inline-block;*/
    float: right;
    margin-top: -21px;
  }
  .slide-dots {
    display: inline-block;
    /**display: inline;*/
    zoom: 1;
    font-size: 0;
    margin-right: 6px;
    vertical-align: middle;
  }
  .dot {
    width: 5px;
    height: 5px;
    display: inline-block;
    *display: inline;
    zoom: 1;
    margin-left: 8px;
    border-radius: 5px;
    background: #dfdfdf;
  }
  .slide-btns {
    display: inline-block;
    /**display: inline;*/
    zoom: 1;
    vertical-align: middle;
    _vertical-align: baseline;
    line-height: 1;
  }
  .lr {
    color: #fff;
    width: 18px;
    height: 18px;
    display: inline-block;
    /**display: inline;*/
    zoom: 1;
    font: 100 16px Arial;
    text-align: center;
    line-height: 14px;
    margin-left: 4px;
    outline: none;
    border-radius: 9px;
    background: #9b9a8e;
  }

  .active {
    background-color: #9b9a8f;
  }
  /*.slide-ul {*/
  /*  padding-left: 0px;*/
  /*  width: 100%;*/
  /*  height: 484px;*/
  /*}*/
  /*.slide-ul li{*/
  /*  position: absolute;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
  /*.list-enter-to {*/
  /*  transition: all 1s ease;*/
  /*  transform: translateX(0);*/
  /*}*/

  /*.list-leave-active {*/
  /*  transition: all 1s ease;*/
  /*  transform: translateX(-100%)*/
  /*}*/

  /*.list-enter {*/
  /*  transform: translateX(100%)*/
  /*}*/

  /*.list-leave {*/
  /*  transform: translateX(0)*/
  /*}*/
</style>
