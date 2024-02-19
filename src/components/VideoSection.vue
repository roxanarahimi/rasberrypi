<template>
  <div class="p-0 m-0 w-100 vh-100" style=" overflow: hidden">
    <AdvancedVideo class="p-0 w-100" style="margin-bottom: -10px" :cldVid="myVdo" autoplay muted loop/>
  </div>
</template>

<script>
  import {Cloudinary} from "@cloudinary/url-gen";
  import {AdvancedVideo} from "@cloudinary/vue";
  export default {
  name: "VideoSection",
  props: [ 'vdo'],
  components: { Cloudinary, AdvancedVideo},
  setup(_props){
  const cld = new Cloudinary({
  cloud: {
  cloudName: "dpg1tz64p",
},
});
  const myVdo = cld.video(_props.vdo);
  return{
  cld, myVdo,
}
}

}
</script>

<style scoped>

</style>