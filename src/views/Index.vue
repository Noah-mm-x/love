<template>
  <div id="index-container">
    <!-- <vue-typed :strings="['在一起的一百天你了']"
               :typeSpeed="300"
               :fadeOut="true">
    </vue-typed> -->
    <!-- 页面一 -->
    <div class="page-container page1-container">
      <div class="title">送你的一封信</div>
      <div class="envelope-wrap">
        <img class="envelope"
             src="@/assets/img/envelope.png"
             alt="">
        <img class="heart animate__animated  animate__heartBeat animate__infinite"
             src="@/assets/img/heart.png"
             alt="">
      </div>
      <a class="start"
         href="javascript:;">开启</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { VueTyped, TypedRef } from 'vue3-typed.js'
export default defineComponent({
  name: '',
  components: {
    VueTyped,
  },
  setup: () => {
    // const originTxt: Ref<string> = ref('你在哪里呢我又在哪呢')
    // const resultTxt: Ref<string> = ref('')
    // const fontAni = (txt: string) => {
    //   const txtArr: string[] = []
    //   for (let i = 0; i < txt.length; i++) {
    //     txtArr.push(txt[i])
    //     setTimeout(() => {
    //       resultTxt.value += txt[i]
    //       console.log('1111', resultTxt.value)
    //     }, 10000)
    //   }
    //   console.log(txtArr)
    // }
    // fontAni(originTxt.value)

    return {}
  },
})
</script>
<style lang="less">
@import url('./index.less');
</style>  