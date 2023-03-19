<script setup>
import { ref, onMounted, inject } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import gsap from "gsap";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const detectWidth = inject("detectWidth");

const marqueeRef = ref(null);
const message = ref(
  "Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・Bottigaemo・"
);

function animateMarquee() {
  gsap.to(
    marqueeRef.value,
    {
      x: -1000,
      duration: 10,
      ease: "linear",
      repeat: -1,
    },
    "-=1"
  );
}

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);

  animateMarquee();
});
</script>

<template>
  <div class="about">
    <LoadingComponent v-if="isLoading" />
    <div v-else>
      <div
        class="flex justify-center items-center w-screen h-screen overflow-hidden"
      >
        <img
          v-if="detectWidth >= 768"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678209168605.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UhfHARL1WC5k8AksaEj%2FNXv7Sqk7kPsVI0RRA%2Bp3988DwiYwJf85bIpcnwIiwzj1M4J%2FKwJ6G9ma3HszAqJqvPWcBjyUo00EJrnxq9Ctg%2BCkX7K2fxRyNLqWtqc71RarmItdKrpFbPro7jQBUng5oMjrJp7wNmdJdeCZYWDE6oTgIJ0%2B8%2FahdJKmS8kavMM2QhDvW1EA1dOrmVvvr6dLNT%2Fni%2F%2Fu57gcRqM1A%2FLuHs2TN3xSfWgnd6%2FmWut6WrKni%2BCHYojWwvAgMLZlo95GWCkQ6twrvGkJACTYIk%2F0578w8QaRP2xgiPZ2INTuH5Da6GJ3VAKcelg9w60WMTSv9Q%3D%3D"
          :alt="
            localLang === 'zh_TW'
              ? '洛琳·塔詩·娜潔'
              : 'Lanlorine Tashih NaChieh'
          "
          class="relative object-cover w-full h-full brightness-100"
        />
        <img
          v-else
          src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678201104884.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sfwc9tCdmTk1sqCwpJzv4Dyisp1gDumKSehkmSAXnW4u9a2ZJXed2bdK5ytGo0900RsuKOjsjCOKsHOtZs4RloRAbV3la%2BwWeW7Y0Pnh2LHy8YuPEbbJ14JSP4a5KOFXc3hvOv%2FoqmGg5qo7a58jr9ymJCsCdLukHLSrM9ucq%2FKXWJvcLmgKrPpaQ21ZdY%2BH4PjuABriB0fpgj1D7G99sO03C6aY1SBam3Yjm5A24C%2FG%2FwvTJj0R5OEy9VOe9%2BJtT6qbX4Xef5JK%2BRvt0MhsUVkbTjat%2FQ4Pbm3shW6qnUf22itbi8mntgTCfYuYnt8O5u92DCn6EygGLZaCfBM1lQ%3D%3D"
          :alt="
            localLang === 'zh_TW'
              ? '洛琳·塔詩·娜潔'
              : 'Lanlorine Tashih NaChieh'
          "
          class="relative object-cover w-full h-full brightness-100"
        />
        <div
          class="text-center absolute m-5 p-4 bg-white/30 md:bg-transparent md:text-white mix-blend-difference"
        >
          <h2 class="intro-title uppercase font-bodoni mb-2">
            Lanlorine Tashih NaChieh
          </h2>
          <h2
            class="text-2xl sm:text-3xl md:text-5xl tracking-widest"
            :class="{ hidden: localLang === 'en' }"
          >
            藍洛琳·塔詩·娜潔
          </h2>
        </div>
      </div>
      <div class="container max-w-4xl px-2 py-10 md:py-20">
        <h3 class="text-2xl uppercase mb-5">{{ $t("history") }}</h3>
        <p class="text-base tracking-wider font-light leading-loose">
          <template v-if="localLang === 'zh_TW'">
            創辦人藍洛琳·塔詩·娜潔是一位來自義大利的年輕女性，她有著對時尚的熱情和對品質的追求。
            娜潔從小就對時尚產生了濃厚的興趣。她經常在母親的衣櫥裡翻找各種漂亮的衣服和配件，並且努力地研究如何搭配不同的服裝。這種興趣和熱情一直伴隨著她成長，在她進入大學後更是達到了高峰。<br /><br />
            在大學期間，娜潔學習了設計和時尚方面的知識，並通過各種實習機會獲得了實踐經驗。她在學習過程中深深感受到品質對於時尚產品的重要性，這讓她有了一個想法，即打造一個以品質為核心的時尚品牌。
            於是，在完成大學學業後，娜潔開始了自己的創業之路。她決定回到家鄉義大利，創立自己的時尚品牌，以最高品質的材料和精湛的工藝打造出令人驚艷的產品。<br /><br />
            在 1893 年創立 Bottigaemo
            的初期並不容易，娜潔必須面對各種挑戰和困難。但她始終保持著對自己品牌的信心和熱情，她相信自己的理念和產品能夠贏得消費者的喜愛和信任。
            慢慢地，Bottigaemo
            的產品開始受到越來越多的人們的關注和喜愛。品牌以其獨特的風格和高品質的產品迅速在時尚界站穩了腳跟。Bottigaemo
            的設計師們對於細節的追求和創新精神讓品牌在同行中脫穎而出，贏得了眾多忠實顧客的青睞。<br /><br />
            如今，Bottigaemo
            已經成為一個享譽國際的時尚品牌，其高品質的產品和獨特的風格已經贏得了全球消費者的喜愛和信任。品牌不斷地推陳出新，為消費者帶來更多驚喜和創新的產品，並獲得了業界的高度評價和肯定。
            娜潔始終堅信品質是一個品牌生存和發展的基礎，這也是 Bottigaemo
            成功的關鍵。她對品牌的承諾和不斷地追求卓越品質的精神，成就了
            Bottigaemo 成為時尚界的佼佼者。 最後，Bottigaemo
            將繼續堅持娜潔的初衷，為消費者提供最高品質的時尚產品，讓人們在品味生活的同時，也感受到品質帶來的美好體驗。
          </template>
          <template v-else-if="localLang === 'en'">
            Founder Lanlorine Tashih NaChieh is a young woman from Italy with a
            passion for fashion and a pursuit for quality. Nange has had a
            strong interest in fashion since childhood. She often searched for
            various beautiful clothes and accessories in her mother's wardrobe,
            and worked hard to study how to match different outfits. This
            interest and passion have accompanied her throughout her growth, and
            reached its peak after she entered university.<br /><br />

            During her university years, Nange learned knowledge in design and
            fashion, and gained practical experience through various internship
            opportunities. She deeply felt the importance of quality for fashion
            products in her learning process, which gave her an idea to create a
            fashion brand with quality at its core. So after completing her
            university studies, Nange began her entrepreneurial journey. She
            decided to return to her hometown of Italy and establish her own
            fashion brand, using the highest quality materials and exquisite
            craftsmanship to create stunning products.<br /><br />

            At the beginning of Bottigaemo's establishment in 1893, it was not
            easy. Nange had to face various challenges and difficulties. But she
            always maintained confidence and enthusiasm for her own brand,
            believing that her ideas and products could win consumers' love and
            trust. Gradually, Bottigaemo's products began to attract more and
            more people's attention and love. The brand quickly established its
            foothold in the fashion industry with its unique style and
            high-quality products. Bottigaemo's designers' pursuit of details
            and innovation spirit made the brand stand out among peers, winning
            the favor of many loyal customers.<br /><br />

            Today, Bottigaemo has become an internationally renowned fashion
            brand, and its high-quality products and unique style have won the
            love and trust of consumers worldwide. The brand constantly brings
            more surprises and innovative products to consumers and has been
            highly praised and recognized by the industry. Nange always believes
            that quality is the foundation for a brand's survival and
            development, which is also the key to Bottigaemo's success. Her
            commitment to the brand and the spirit of constantly pursuing
            excellent quality have made Bottigaemo a leader in the fashion
            industry. Finally, Bottigaemo will continue to adhere to Nange's
            original intention, providing consumers with the highest quality
            fashion products, allowing people to experience the beauty of
            quality while enjoying their taste of life.
          </template>
        </p>
        <div class="flex flex-col justify-center items-center py-20">
          <p
            class="text-base tracking-wider leading-relaxed"
            :class="{ hidden: localLang === 'en' }"
          >
            藍洛琳·塔詩·娜潔
          </p>
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678209957301.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=I3%2FoiCPH4zJgjNG0coFt1CGtJwejDtSyZwQ8esec2fnP7UxKpMC0%2FiVeDCAvlzvUw1mGlIDQAh%2FgiY8p0%2FHNIARalFf0RsTmEND3RWoSwEvKoX32nhrigqEYlnHifcxYWv0CACVpDgNHurusAfq3YdtHyRwydhytCB1TLHvAxyrfWx7aVvLW9TNpja40zJsOuVXbwC5KjowddcmaufDt98M2ett2UHZVtfJja4fdYnN2%2B%2B7W%2FoZRAYmZv83s6uv77JJSChFer2uhPEB50SL1F5jcSYVY3YGOnYT%2F5%2FlQMaJZ5TgsiqPL62AkHS6kxgMZw0GDHG6oj6Pv95EnB61oEw%3D%3D"
            alt=""
            class="sm:w-1/2 transform -rotate-3"
          />
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <p
        ref="marqueeRef"
        class="marquee text-8xl md:text-9xl whitespace-nowrap min-w-full uppercase font-bodoni font-bold text-transparent opacity-10"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro-title {
  font-size: max(32px, min(100px, 8vw));
}

.marquee {
  -webkit-text-stroke: 2px var(--color-primary-dark);
}
</style>
