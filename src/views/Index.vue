<template>
  <div id="index-container">
    <!-- <vue-typed :strings="['在一起的一百天你了']"
               :typeSpeed="300"
               :fadeOut="true">
    </vue-typed> -->
    <!-- 页面一 -->
    <div v-if="page === 1"
         class="page-container page1-container">
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
         href="javascript:;"
         @click="handleJump(2)">开启</a>
    </div>
    <!-- 页面二 -->
    <transition name="fade">
      <div v-if="page === 2"
           class="page-container page2-container">
        <div class="title">
          <p>我们已经相识</p>
          <p><span>3 </span>个月了！</p>
        </div>
        <div class="con">
          <p>第一天聊天，仿佛昨日</p>
          <p>
            <span>7</span>月<span>24</span>日
          </p>
          <img src="../assets/img/one.jpeg"
               alt="">
        </div>
        <a class="start"
           href="javascript:;"
           @click="handleJump(3)">开心</a>
      </div>
    </transition>
    <!-- 页面三 -->
    <!-- '我们之间有太多太多的相似' -->
    <div v-if="page === 3"
         class="page-container page3-container">
      <vue-typed class="font"
                 :showCursor="typeOpt.showCursor"
                 :strings="[typeOpt.page3Txt]"
                 :typeSpeed="typeOpt.typeSpeed"
                 :fadeOut="typeOpt.fadeOut"
                 :onComplete="handleTypeComplete">
      </vue-typed>
      <a class="start"
         href="javascript:;"
         @click="handleJump(4)">好梦</a>
    </div>
    <!-- 页面四 -->
    <div v-if="page === 4"
         class="page-container page4-container">
      <vue-typed class="font"
                 :showCursor="typeOpt.showCursor"
                 :strings="[typeOpt.page4Txt]"
                 :typeSpeed="typeOpt.typeSpeed"
                 :fadeOut="typeOpt.fadeOut"
                 :onComplete="handleTypeComplete">
      </vue-typed>
      <swiper class="img-wrap"
              :modules="modules"
              :speed="page4SwiperOpt.speed"
              :autoplay="{
                delay: page4SwiperOpt.delay
              }">
        <swiper-slide v-for="(item,index) in page4List"
                      :key="index">
          <img class="img-item"
               :src="item"
               alt="ta" />
        </swiper-slide>
      </swiper>
      <a class="start"
         href="javascript:;"
         @click="handleJump(5)">爱你</a>
    </div>
    <div v-if="page === 5"
         class="page-container page5-container">
      <img @click="handleJump(6)"
           class="bg"
           src="@/assets/img/cat/bg.png"
           alt="">

      <img class="yueliang animate__animated animate__swing animate__infinite"
           src="@/assets/img/cat/2.png"
           alt="">
      <img class="changge animate__animated animate__bounce animate__infinite"
           src="@/assets/img/cat/3.png"
           alt="">
      <img class="feixiang animate__animated animate__rotateInDownRight animate__infinite"
           src="@/assets/img/cat/6.png"
           alt="">
      <img class="kanshu animate__animated animate__zoomInDown animate__infinite"
           src="@/assets/img/cat/5.png"
           alt="">
      <img class="daoli animate__animated animate__slideInDown"
           src="@/assets/img/cat/7.png"
           alt="">
      <img class="duzixiao animate__animated animate__tada animate__infinite"
           src="@/assets/img/cat/9.png"
           alt="">
      <img class="chi animate__animated animate__tada animate__infinite"
           src="@/assets/img/cat/10.png"
           alt="">
      <img class="feilai animate__animated animate__jackInTheBox animate__infinite"
           src="@/assets/img/cat/12.png"
           alt="">
    </div>
    <div v-if="page === 6"
         class="page-container page6-container">
      <div class="content-wrap">
        <p class="font txt">到这里，也就写完了。</p>
        <p class="font txt">最后，我想说</p>
        <p class="font txt">你愿意做我的女朋友吗？</p>
        <div class="btn-group">
          <a class="yes animate__animated animate__pulse animate__infinite"
             href="javascript:;"
             @click="handleYesShow">愿意</a>
          <a class="no"
             href="javascript:;"
             @click="handleNoShow">拒绝</a>
        </div>
      </div>
      <!-- 拒绝弹窗 -->
      <div v-if="noStatus"
           class="popup-wrap">
        <div class="mask"></div>
        <div class="content">
          <img class="img"
               src="@/assets/img/kelian.jpeg"
               alt="">
          <p class="txt">不然你在考虑考虑🤕</p>
          <a class="btn"
             href="javascript:;"
             @click="handleNoHid">好吧(╯▽╰)</a>
        </div>
      </div>
      <!-- 接受弹窗 -->
      <div v-if="yesStatus"
           class="popup-wrap">
        <div class="mask"></div>
        <div class="content">
          <img class="img"
               src="@/assets/img/chaoxiao.jpeg"
               alt="">
          <p class="txt">你愿意，但我不愿意哈哈</p>
          <a class="btn"
             href="javascript:;"
             @click="handleYesHid">哼😕</a>
        </div>
      </div>
      <!-- 接受2弹窗 -->
      <div v-if="yesReStatus"
           class="popup-wrap">
        <div class="mask"></div>
        <div class="content">
          <img class="img"
               src="@/assets/img/ai.jpeg"
               alt="">
          <p class="txt">不要生气嘛，我怎么可能不愿意</p>
          <p class="txt">你永远是我最爱的人！</p>
          <a class="btn"
             href="javascript:;"
             @click="handleYesReHid">爱你呦❤️</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
// import { VueTyped } from '../../node_modules/vue3-typed.js/dist/vue3-typed.js'
import { VueTyped } from 'vue3-typed.js'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import ta1 from '../assets/img/ta/1.jpg'
import ta2 from '../assets/img/ta/2.jpg'
import ta3 from '../assets/img/ta/3.jpg'
import ta4 from '../assets/img/ta/4.jpg'
import ta5 from '../assets/img/ta/5.jpg'
import ta6 from '../assets/img/ta/6.jpg'
import ta7 from '../assets/img/ta/7.jpg'
import ta8 from '../assets/img/ta/8.jpg'
import ta9 from '../assets/img/ta/9.jpg'
export default defineComponent({
  name: '',
  components: {
    VueTyped,
    Swiper,
    SwiperSlide,
  },
  setup: () => {
    // : Ref<Number>
    const page = ref(1)

    const page3Txt = ref(
      `
      <div>我们之间有太多太多的相似</div>
      <div>都喜欢，旅行，自驾，看书，猫狗，大海。。。</div>
      <div>最重要的是</div>
      <div>我们的牙齿都一样！</div>
      <div>一切仿佛上天注定一般</div>
      <div>我的日常，其实很黑暗。</div>
      <div>但是 遇到了你</div>
      <div>你，就像一道耀眼的流星，坠入我的生命里，给我带来光亮和快乐。</div>
      <div>咱俩的相遇，我一直觉得是一场梦</div>
      <div>一切都太过美好了</div>
      <div>如果真的是一场梦</div>
      <div>我希望</div>
      <div>永远不要醒来~</div>
      `
    )
    // const page3Txt: Ref<String> = ref(
    //   `
    //   1111
    //   `
    // )
    const page4Txt = ref(
      `
      <div>我喜欢用照片记录生活~</div>
      <div>更喜欢记录</div>
      <div>和你的点点滴滴!</div>
      `
    )
    const typeOpt = reactive({
      showCursor: false,
      typeSpeed: 200,
      page3Txt: page3Txt.value,
      page4Txt: page4Txt.value,
      fadeOut: true,
    })
    const handleTypeComplete = () => {
      console.log(111)
    }
    const handleJump = (pageParam) => {
      console.log(page)
      page.value = pageParam
    }
    const page4List = reactive([ta1, ta2, ta3, ta4, ta5, ta6, ta7, ta8, ta9])
    const page4SwiperOpt = reactive({
      autoplay: true,
      delay: 3000,
      speed: 1500,
    })
    const noStatus = ref(false)
    const yesStatus = ref(false)
    const yesReStatus = ref(false)
    const handleNoShow = () => {
      noStatus.value = true
    }
    const handleNoHid = () => {
      noStatus.value = false
    }
    const handleYesShow = () => {
      yesStatus.value = true
    }
    const handleYesHid = () => {
      yesStatus.value = false
      yesReStatus.value = true
    }
    const handleYesReHid = () => {
      yesReStatus.value = false
    }
    return {
      page,
      typeOpt,
      handleJump,
      handleTypeComplete,
      page4List,
      page4SwiperOpt,
      modules: [Pagination, Autoplay],
      noStatus,
      yesStatus,
      yesReStatus,
      handleNoShow,
      handleYesShow,
      handleNoHid,
      handleYesHid,
      handleYesReHid
    }
  },
})
</script>
<style lang="less">
@import url('./index.less');
</style>  