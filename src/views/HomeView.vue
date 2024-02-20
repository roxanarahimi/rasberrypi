<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade vh-100" data-bs-ride="carousel" data-bs-pause="false"  >
    <div v-if="slides" class="carousel-inner h-100">
      <div v-for="(item, index) in slides" :key="index" :id="index"  class="carousel-item bg-dark h-100" :class="{'active': index == 0}" :data-bs-interval="25000" >
        <div style="background-size:  cover;width: 100%;min-height: 100vh;">
          <video-section :vdo="[item,index]" autoplay loop></video-section>
        </div>
      </div>

    </div>
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
      }, 7200000);
      getSlides();
      getData();

      see();
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
      getData, data, slides, getSlides, url, see
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