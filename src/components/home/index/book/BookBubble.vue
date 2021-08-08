<template>
  <div class="book-bubble">
    <div class="content">
      <h4 class="title">{{book.title}}</h4>
      <p>
        <span class="author">{{book.author}}</span>
        <span class="year">{{book.year}}</span>
        <span class="publisher">{{book.publisher}}</span>
      </p>
      <p class="abstract">{{book.abs}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookBubble',
  props: {
    book: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .book-bubble {
    position: absolute;
    z-index: 999;
    width: 300px;
    height: 250px;
    color: #666;
    border: 1px solid #acacac;
    background: #f9f9f7;
    border-radius: 3px;
    box-shadow: 0 1px 1px #fdfdfd inset, 0 1px 1px #dcdbd4;
    padding: 20px;
  }
  .book-bubble::before {
    position: absolute; /* 绝对定位 */
    content: ' '; /* 伪元素需要有个content，这里设了一个空格占位 */
    left: -10px; /* 把这个小尖尖突出来 */
    top:50%; /* 往下挪一点点 */

    width: 15px; /* 20x20的一个元素 */
    height: 15px;

    /*border-radius:2px;!*突出来的角弧度稍微平滑2个像素*!*/
    border: 1px #acacac solid;
    background: #f9f9f7;
    /*box-shadow: 6px 5px 2px -9px white, 5px 6px 2px -9px white;!*box-shadow,左上角,右上角,左下角，右下角*!*/

    -webkit-transform: rotate(45deg);
  }
  .content {
    font-size: 12px;
    word-wrap: break-word;
  }
  .abstract {
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
