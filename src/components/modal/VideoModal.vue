<script setup>
import { reactive } from "vue";
import VideoPlayer from "@/components/front/VideoPlayer.vue";
import { NModal } from "naive-ui";

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  closeModal: {
    type: Function,
    default: () => {},
  },
  videoId: {
    type: Number,
    default: 0,
  },
});

const videoOptions = reactive({
  autoplay: true,
  controls: true,
  preload: "auto",
  aspectRatio: "16:9",
  sources: [
    {
      src: `/bottigaemo/video/products/${props.videoId}.mp4`,
      type: "video/mp4",
    },
  ],
});
</script>

<template>
  <div>
    <n-modal
      :show="props.showModal"
      :on-mask-click="props.closeModal"
      :on-close="props.closeModal"
      transform-origin="center"
    >
      <div class="w-11/12 xl:w-9/12">
        <video-player class="w-full" :options="videoOptions" />
      </div>
    </n-modal>
  </div>
</template>

<style lang="scss" scoped></style>
