<template>
  <div class="carousel-title">
    <title-item :title="title" :sub-title="subTitle">
      <div slot="slide-control">
        <div class="slide-control">
          <div class="slide-dots">
            <a class="dot"
               v-for="r in count"
               :key="r"
               :class="{active:currentIndex==r}"
               @click="changeIndex(r)"
               href="#"></a>
          </div>
          <div class="slide-btns">
            <a class="lr" @click="pre" href="#">
              <i class="el-icon-arrow-left"></i>
            </a>
            <a class="lr" @click="next" href="#">
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </title-item>
  </div>
</template>

<script>

import TitleItem from '../child/TitleItem'

export default {
  name: 'CarouselTitle',
  data () {
    return {
      currentIndex: 1
    }
  },
  components: {
    TitleItem
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 1
    },
    subTitle: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    changeIndex (index) {
      this.currentIndex = index
      this.$emit('changeIndex', index)
    },
    pre () {
      if (this.currentIndex === 1) {
        this.changeIndex(4)
      } else {
        this.changeIndex(this.currentIndex - 1)
      }
    },
    next () {
      if (this.currentIndex === 4) {
        this.changeIndex(1)
      } else {
        this.changeIndex(this.currentIndex + 1)
      }
    }
  }
}
</script>

<style scoped>
  .slide-control {
    float: right;
    margin-top: -21px;
  }
  .slide-dots {
    display: inline-block;
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
    font-size: 12px;
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
</style>
