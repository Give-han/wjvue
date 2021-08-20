<template>
  <div class="book-item">
    <el-popover trigger="hover"
                width="300px"
                id="popover"
                :open-delay=200
                placement="right">
      <div class="cover" slot="reference">
        <a href="https://book.douban.com/subject/35479545/?icn=index-latestbook-subject" :title=book.title @click.prevent="clickBook(book.bookId)">
          <img :src=book.imageUrl referrerPolicy="no-referrer"  alt=""/>
        </a>
      </div>
      <div class="book-bubble">
        <div class="content">
          <h4 class="title">{{book.title}}</h4>
          <p>
            <span class="author">{{book.author}}/</span>
            <span class="year">{{book.year}}/</span>
            <span class="publisher">{{book.publisher}}</span>
          </p>
          <p class="abstract">{{book.abs}}</p>
        </div>
      </div>
    </el-popover>
    <div class="info">
      <div class="title">
        <a href="https://book.douban.com/subject/35479545/?icn=index-latestbook-subject" :title=book.title @click.prevent="clickBook(book.bookId)">
          {{book.title}}
        </a>
      </div>
      <div class="author">
        {{book.author}}
      </div>
      <div class="more-meta">
        <h4 class="title">{{book.title}}</h4>
        <p>
          <span class="author">
            {{book.author}}
          </span>
          <span class="year">
            {{book.year}}
          </span>
          <span class="publisher">
            {{book.publisher}}
          </span>
        </p>
        <p class="abstract">
          {{book.abs}}
        </p>
      </div>
    </div>
<!--    <book-bubble class="book-tip" :class="{active: isHover}" :book="book"></book-bubble>-->
  </div>
</template>

<script>

// import BookBubble from './BookBubble'

export default {
  name: 'IndexBookItem',
  // components: { BookBubble },
  data () {
    return {
      isHover: false
    }
  },
  props: {
    book: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    enter () {
      this.isHover = true
    },
    leave () {
      this.isHover = false
    },
    clickBook (boodId) {
      this.$router.push({
        name: 'bookDetail',
        params: {
          bookId: boodId
        }
      })
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
  .book-bubble {
    width: 300px;
    /*background: #f9f9f7;*/
  }
  .abstract {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;

  }
</style>
