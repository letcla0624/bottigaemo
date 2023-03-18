<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import videojs from "video.js";

const props = defineProps({
  options: {
    type: Object,
    default() {
      return {};
    },
  },
});

const videoPlayer = ref(null);
const player = ref(null);

onBeforeMount(() => {
  if (player.value) {
    player.value.dispose();
  }
});

onMounted(() => {
  player.value = videojs(videoPlayer.value, props.options);
  player.value.volume(0.5);
});
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js w-full"></video>
  </div>
</template>
