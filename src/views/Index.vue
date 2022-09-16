<template>
  <div id="index-container">
    <vue-typed :strings="['World', 'John']"
               @onComplete="onTypingComplete">
      <h1>Hello <span class="typing"></span></h1>
    </vue-typed>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { VueTyped, TypedRef } from 'vue3-typed.js'
export default defineComponent({
  name: '',
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
    const onTypingComplete = (ref: TypedRef) => {
      ref.value // Typed.js
      console.log('typing complete')
    }
    return {
      onTypingComplete,
    }
  },
})
</script>
<style lang="sass" scoped>
@import url('./index.scss')
</style>