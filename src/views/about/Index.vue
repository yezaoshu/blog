<template>
  <div class="flex-box-r">
    <div>
    <img src="/src/assets/pic/about/yezaoshu.jpeg" style="width:100px"/>
    kk.yezao@qq.com
    <p></p>
    <div class="pointer" @click="onBack">click me to back</div>
    </div>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const onBack = ()=> {
      router.go(-1)
    }
    return {
      onBack
    }
  }
}
</script>