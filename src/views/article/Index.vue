<template>
  <div class="article-page">
    <div class="article-page-header">
      <div class="index fs-16">index</div>
      <div class="title"></div>
      <div class="return fs-20" @click="onBackHome">x</div>
    </div>
    <div class="article-page-body">
      <div class="article-list">
        <div v-for="(item, index) in articleConfig" :key="item" class="list-item">
          <div :class="state.activeIndex === index ? 'article-collapse pointer active':'article-collapse pointer'" @click="onchoosePost(item, index)">
            <span class="article-collapse-left">
              <span class="index fs-16 fb">{{articleConfig.length -  index}}</span>
              <span class="title fs-16 fb">{{item.title}}</span>
            </span>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="article-content" v-if="state.activeIndex === index">
            <div>
              <div class="article-header">
                <span>
                  <img src="/src/assets/pic/homePage/bug3.gif" v-if="state.currentPost?.category.includes('code')"/>
                  <img src="/src/assets/pic/homePage/eye.gif" v-if="state.currentPost?.category.includes('notes')" style="width: 80px"/>
                  <img src="/src/assets/pic/homePage/computer-mouse.gif" v-if="state.currentPost?.category.includes('project')" style="width: 80px"/>
                  <span class="fs-32">{{state.currentPost?.title}}</span>
                </span>
                <span>( {{state.currentPost.category ? String(state.currentPost.category) : '-'}} )</span>
              </div>
              <div  class="md-file">
                <div v-html="mdFile"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="article-page-footer">
      <div class="about pointer" @click="onAboutPage">about</div>
      <div class="info">
        <span>anticopyrigth</span>
        <span>:::::))))))))))))))))))))</span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import {articleConfig} from '../../common/dataSource/config'
import {reactive, computed, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import * as Posts from '../../common/dataSource/index.js'
import hljs from 'highlight.js'

// todo  配置
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).vlue
  },
  langPrefix: 'hljs language-',
  pedantic :false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false
})

export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      content: `# 测试`,
      currentPost: null,
      activeIndex: null
    })
    const onchoosePost = (item, index)=> {
      state.content = Posts[item.sourceName]
      state.currentPost = item
      if(index=== state.activeIndex)  {
        state.activeIndex = null
      } else {
        state.activeIndex = index
      }
    }
    const onBackHome = ()=> {
      router.push({name: 'home'})
    }
    const onAboutPage = ()=> {
      router.push({name: 'about'})
    }
    const mdFile = computed(()=> {
      return marked.parse(state.content)
    })
    onMounted(()=> {
      // onchoosePost(Posts[0])
    })
    return {
      state,
      articleConfig,
      mdFile,
      onchoosePost,
      onBackHome,
      onAboutPage
    }
  },
}
</script>

<style lang="scss" scoped>
.article-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  &::selection {
    color: rgb(255, 43, 209) !important;
  }
  .article-page-header{
    height: 30px;
    background-color: rgb(255, 176, 72);
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .index, .return {
      background-color: rgb(122, 255, 110);
      width: 60px;
      border-right: 2px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .return {
      border-left: 2px solid black;
      border-right: none;
      cursor: crosshair;
    }
  }
  .article-page-footer{
    height: 60px;
    .about{
      height: 30px;
      background-color: cyan;
      border-top: 2px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      height: 30px;
      background-color: rgb(122, 255, 110);
      border-top: 2px solid black;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .article-page-body{
    display: flex;
    flex-direction: row;
    overflow: auto;
    height: 100%;
    .article-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      // width: 300px;
      width: 100%;
      flex-shrink: 0;
      height: 100%;
      .list-top {
        height: 30px;
        width: 100%;
        text-align: left;
        border-bottom: 2px solid black;

      }
      .list-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .article-collapse {
          height: 30px;
          border-bottom: 2px solid black;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:hover {
            background-color: rgb(217, 217, 255);
          }
          &.active {
            background-color: rgb(217, 217, 255);
          }
          .article-collapse-left {
            height: 100%;
            display: flex;
            align-items: stretch;
            justify-content: center;
            .index{
              width: 60px;
              background-color: rgb(217, 217, 255);
              border-right: 2px solid black;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 8px;
            }
          }
          .time {
            margin-right: 8px;
          }
        }
        .article-content {
          border-bottom: 2px solid black;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          > div {
            text-align: left;;
            width: 100%;
          }
          .article-header {
            border-bottom: 2px solid black;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 8px;
          }
          .md-file {
            width: 100%;
            // text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              text-align: left;;
              width: 60%;
            }
          }
        }
      }
      .bottom {
          background-color: rgb(122, 255, 110);
          width: 100%;
        border-bottom: 2px solid black;

      }
    }
  }
}
</style>