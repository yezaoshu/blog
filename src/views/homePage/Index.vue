<template>
<div class="home-page">
  <div class="header">
    <div class="marquee-box">
      <div class="marquee pointer">
        <span v-for="i in 8" :key="i">&#127800;&nbsp;welcome to the nowhere&nbsp;</span>
      </div>
      <div class="marqueeT pointer">
        <span v-for="i in 8" :key="i">&#127800;&nbsp;welcome to the nowhere&nbsp;</span>
      </div>
    </div>
  </div>
  <div class="flex-box-r">
    <div class="flex-box-c flex-nogrow">
      <img src="/src/assets/pic/homePage/dog-welcome.gif" />
      <span>
        <img src="/src/assets/pic/homePage/cat6.gif" />
        <img src="/src/assets/pic/homePage/flower.gif" />
      </span>
      <span>
        <img src="/src/assets/pic/homePage/cat1.gif" />
      </span>
    </div>
    <div class="home-content">
      <router-link :to="{name: 'article'}">
        <div class="to-article pointer" >click to  start</div>
      </router-link>
      <div class="link">
        <div>me alse at:</div>
        <span><a href="https://www.douban.com/people/216728660">douban</a></span>
        <span><a href="https://github.com/yezaoshu">github</a></span>
        <span><a href="https://twitter.com/ShiternetE">twitter</a></span>
      </div>
    </div>
    <div class="flex-box-c flex-nogrow">
      <span>
        <img src="/src/assets/pic/homePage/heart2.gif" />
        <img src="/src/assets/pic/homePage/cat7.gif" />
      </span>
      <span>
        <img src="/src/assets/pic/homePage/fish4.gif" />
        <img src="/src/assets/pic/homePage/kk5.gif" style="width: 50px"/>
      </span>
      <span>
        <img src="/src/assets/pic/homePage/kk6.gif" />
        <img src="/src/assets/pic/homePage/people2.gif" />
      </span>
      <span>
        <img src="/src/assets/pic/homePage/kk1.gif" />
        <img src="/src/assets/pic/homePage/cat2.gif" />
      </span>
    </div>
  </div>
  <div class="footer">
    <div class="fs-14 footer-info">
      <div style="text-align: left">
        <div>Anti-Copyright</div>
        <div>2021 till now</div>
      </div>
      <div>powered by vue | githubPage | ❤️</div>
    </div>
    <div class="mg-min" @click="onAboutMe">
      <div>about me :)</div>
      <img src="/src/assets/pic/homePage/me.jpg" style="width:50px" class="pointer"/>
    </div>
  </div>
</div>
</template>
<script>
  import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const toArticle = ()=> {
      router.push({name: 'article'})
    }
    const onAboutMe = ()=> {
      router.push({name: 'about'})
    }
    return {
      toArticle,
      onAboutMe
    }
  },
}
</script>
<style lang="scss" scoped>
.home-page {
  // background-color: hotpink;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .home-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .to-article {
      background-color: rgb(122, 255, 110);
      color: white;
      font-size: 24px;
      // background-color: rgb(122, 255, 110);
      // color: white;
      &:hover {
        color: rgb(122, 255, 110);
        background-color: rgb(255, 43, 209);
        // background: linear-gradient(to bottom, #ff0022, #ffffff);
      }
    }
    .link {
      a{
        padding: 8px;
        color: rgb(122, 255, 110);
        font-size: 24px;
        text-decoration: line-through;
      }
      a:hover {
        // font-size: 50px;
        color: rgb(255, 43, 209);
      }
    }
  }
  .header {
    height: 50px !important;
    background-color: rgb(255, 176, 72);
    border-bottom: 3px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .marquee-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      font-size: 16px;
      .marquee, .marqueeT {
        animation: marquee 20s linear infinite;
        white-space: nowrap;
        position: absolute;
        user-select:none;
      }
      .marqueeT {
        animation: marqueeT 20s linear infinite;
      }
      @keyframes marquee {
        0% {left: 0;}
        100% {left: -112%;}
      }
      @keyframes marqueeT {
        0% {left: 112%;}
        100% {left: 0;}
      }
    }
    .close {
      background-color: rgb(122, 255, 110);
      // border-radius: 32px;
      // background-size: 100%;
    }
  }
  // rgb(102,253,129)
  // #400D12
  .footer {
    height: 100px !important;
    border-top: 3px solid black;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    user-select:none;
    .footer-info {
      // text-align: left;
      margin: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
</style>