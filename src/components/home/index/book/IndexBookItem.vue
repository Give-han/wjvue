<template>
  <div class="book-item">
    <div class="cover">
      <a href="https://book.douban.com/subject/35479545/?icn=index-latestbook-subject" :title=book.title>
        <img :src=book.imageUrl referrerPolicy="no-referrer"  alt=""/>
      </a>
    </div>
    <div class="info">
      <div class="title">
        <a href="https://book.douban.com/subject/35479545/?icn=index-latestbook-subject" :title=book.title>
          {{book.title}}
        </a>
      </div>
      <div class="author">
        {{book.author}}
      </div>
      <div class="more-meta">
        <h4 class="title">铸剑</h4>
        <p>
          <span class="author">
            原著：鲁迅&nbsp;/&nbsp;编绘：昔酒
          </span>
          <span class="year">
            2021-7
          </span>
          <span class="publisher">
            一頁folio | 广西师范大学出版社
          </span>
        </p>
        <p class="abstract">
          【编辑推荐】
          ★冰冷的剑、落下的头，在猛火与滚水中，新的人性诞生了
          ——人要复仇，唯一的出路是向自身复仇。
          “青春和热血浓缩为砍下的头颅，无比轻灵而又勇敢无畏，向那幽冥的深处前行了。”
          ★文学经典的视觉演绎， 诗与魔幻的纸上剧场，人性与艺术的反抗狂死曲
          先锋绘本作家、 图画造梦师——昔酒打破文字与视觉的界限，重建全新绘本美学，以艳异笔触唤醒鲁迅故事...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexBookItem',
  props: {
    book: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .book-item {
    display: inline-block;
    margin: 0 25px 15px 0;
    width: 115px;
  }
  .cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
  }
  .cover a {
    display: flex;
    height: 100%;
    justify-content: center;
  }
  .cover img {
    display: block;
    max-width: 115px;
    max-height: 172px;
    align-self: flex-end;
  }
  a img {
    border-width: 0px;
    vertical-align: middle;
  }
  .info {
    margin: 0px;
    padding: 0 2px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .more-meta {
    display: none;
  }
  /*.year {*/
  /*  */
  /*}*/
  .publisher {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /*.abstract {*/
  /*  */
  /*}*/
</style>
