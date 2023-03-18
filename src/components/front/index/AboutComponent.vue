<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const afterEnter = (el) => {
  setupReveal(el);
};
const afterLeave = (el) => {
  el.ctx && el.ctx.revert();
};

const setupReveal = (container) => {
  container.ctx = gsap.context(() => {
    let revealContainers = container.querySelectorAll(".reveal");

    revealContainers.forEach((el) => {
      let image = el.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
      });

      tl.set(el, { autoAlpha: 1 });
      tl.from(el, {
        duration: 1.5,
        xPercent: -100,
        ease: "power2.out",
      });

      tl.from(
        image,
        {
          duration: 1.5,
          xPercent: 100,
          scale: 1.3,
          ease: "power2.out",
        },
        0
      );
    });
  });
};
</script>

<template>
  <div>
    <div class="text-center">
      <div class="flex items-center">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678687959071.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WfFNvPsGWnViJwPIrMFPNhwwdPdDhqXZ5aKcGJxrQTOrBPPQnwPIupZJtwbsTDIMV4ZaeqJt8hyc1YJyVQgj8IJN94OQsocm%2FgniAn8bEMwZHWx%2Bbw41OGObGGcyl66wLs8vBTYjyth9fE1UitU0mFwyzJFdxvdvqCzBJ4yfEkGdV%2FlyqT5cCdZyu9RzPKaJ4pnB2y37SC%2BydoR2l%2Bmt5Pk%2BvgsDMCACEXzlBOpQ4uWGfz7PIwb0XpHzrh8DbZ1VR%2BkaPfX8Fk%2FgVSSTPkH7XfbVsOQ2e9GH9FUEfx7vvmdGf%2Bqt5mqbfh%2BlZz6%2BjOfo%2FtAknWcxi0mrMjVW34wdQQ%3D%3D"
          alt=""
          class="w-full lg:w-1/2 object-cover lg:aspect-ratio-1-1 grayscale hover:grayscale-0"
        />
        <transition
          appear
          name="slide-fade"
          mode="out-in"
          @after-enter="afterEnter"
          @after-leave="afterLeave"
        >
          <div class="w-1/2 hidden lg:block">
            <div
              class="flex flex-col justify-center items-center reveal overflow-hidden relative max-w-md mx-auto"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678688077911.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GRhnmp%2FQ0ZR5OKHzmjZctnJGpwOKHP0P4INoX%2FZfHUo8DVoJACPOf5OV3i575WQMIHer1UJ4d0tqdIQ0P9loUZkZQmTv%2B7rU7mRYDHSvGoO%2FaZyMPhxyc9LaaSFAricE5CDH3RT%2BZAmrdqPd25Hh8EB5z6TMPPRDscdYLmeXeWUHrID6MhFn7lCvDmaWAxP40%2FtLA4hdqd%2BvVcB2MS7L3b7SflJRFgYPCOylk2POJkD3XGnkxgU8IpI9vFX1nMiZ6uhpMaEaVZSV5U7OrLM75H17ivMdDTdcLJxIJlsNEOQuzcqs53ZjKtRb%2FefBaTixW1Sd%2Fts8YvpzbRstrBnVzA%3D%3D"
                alt="藍洛琳·塔詩·娜潔"
                class="object-cover aspect-ratio-1-1 origin-left"
              />
            </div>
            <p class="text-black/50 my-3">{{ $t("boss") }}</p>
          </div>
        </transition>
      </div>
      <div
        class="text-white mix-blend-difference -translate-y-1/3 lg:-translate-y-1/2"
      >
        <router-link to="/about">
          <h2
            class="text-5xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[20rem] font-bold font-bodoni tracking-tightest mb-3 sm:mb-8 lg:mb-10 xl:mb-14"
          >
            <em>Bottiga</em>emo
          </h2>
          <p
            class="text-white text-xl lg:text-3xl tracking-widest uppercase hoverBar pb-1"
          >
            － {{ $t("history") }} －
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}
</style>
