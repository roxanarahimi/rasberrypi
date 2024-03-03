<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade vh-100" data-bs-ride="carousel" data-bs-pause="false"  :data-bs-interval="2000" >
<!--    <div v-if="slides" class="carousel-inner h-100">-->
<!--      <div v-for="(item, index) in slides" :key="index" :id="index"  class="carousel-item bg-dark h-100" :class="{'active': index == 0}" :data-bs-interval="25000" >-->
<!--        <div style="background-size:  cover;width: 100%;min-height: 100vh;">-->
<!--          <video-section :vdo="[item,index]" autoplay loop></video-section>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
    <video src="/vdo/vdo.mp4" autoplay loop class="w-100"></video>
<!--    <video-section :vdo="'01/x'" autoplay loop></video-section>-->

  </div>

</template>
<script>
// @ is an alias to /src

import {onMounted, ref} from "vue";
import videoSection from "@/components/VideoSection";
import VideoSection from "@/components/VideoSection";

export default {
  name: 'HomeView',
  components: {VideoSection},
  setup(){
    const data = ref();
    const slides = ref([]);
    const slides1 = ref([]);
    const url = 'https://panel.recycle.webagent.ir';
    const getSlides = () => {
      slides.value = [
          '01/01',
          '01/02',
          '01/03',
          '01/04',
          '01/05',
          '01/06',
          '01/07',
          '01/08',
      ];
      slides1.value = [
        ['/vdo/birth.mp4',27],
        ['/vdo/code.mp4',31],
        ['/vdo/copa.mp4',21],
        ['/vdo/football.mp4',10],
        ['/vdo/qym.mp4',27],
        ['/vdo/travel.mp4',28],

      ];
    };
    const getData = () => {
        fetch("https://panel.recycle.webagent.ir/api/site")
            .then((res) => res.json())
            .then((res) => data.value = res)
            .catch((e) => console.error(e));
    }
    onMounted(()=>{
      setInterval(function(){
        window.location.reload(1);
      }, 147000000);
      getSlides();
      getData();
      // see();
    })

    const see = ()=>{
      var intervalID = window.setInterval(myCallback, 200);

      function myCallback() {
        let x = document.querySelector('.active');
        let id = x.id;
        document.querySelectorAll('.vdo').forEach((element)=>{
          if (element.id == 'vdo_'+id){
            element.removeAttribute('muted')
          }else{
            element.setAttribute('muted', 'muted')

          }
        })
      }

    }
    return{
      getData, data, slides,slides1, getSlides, url, see
    }
  }
}
</script>
<style>
svg {
  fill: currentColor !important;
  height: auto;
  transform-origin: center;
  max-width: 42%;
  width: 66%;
  direction: ltr !important;
  font-weight: bolder !important;
}
</style>