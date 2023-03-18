import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useModelsStore = defineStore("models", () => {
  const data = [
    {
      id: "1",
      title: "Bourbon",
      subtitle: "Antonia",
      description: `Bottigaemo 度假系列，你會感受到春天的清新，夏天的舒適，秋天的優雅和冬天的純淨。這款洋裝擁有簡單優雅的設計，能夠輕鬆地融入你的日常穿著中，並為你的造型增添一份高貴和優雅的氣息。你可以搭配不同的飾品和鞋子，讓它變得更加的多變和有趣。無論你是要參加正式場合，還是約會或是度假，這條白色長洋裝都是你最好的選擇之一。`,
      enDescription: `"Bottigaemo Vacation Series" will make you feel the freshness of spring, the comfort of summer, the elegance of autumn, and the purity of winter. This dress features a simple and elegant design that can easily blend into your daily wardrobe, adding a touch of nobility and elegance to your style. You can match it with different accessories and shoes to make it more versatile and interesting. Whether you're attending a formal occasion, going on a date, or on vacation, this white maxi dress is one of your best choices.`,
      imgURL: "../src/assets/images/model/model1/model1.png",
      bgcolor: "#0f1423",
      poster: "../src/assets/images/model/model1/0.jpg",
      video: "/video/model/model1.mp4",
      fits: [
        {
          id: "1",
          title: "絲光 V 領長洋裝",
          enTitle: "Silk Satin Long Dress",
          imgUrl: "../src/assets/images/model/model1/1.jpg",
          link: "-NOsArsdhPFZiGj_-k_9",
        },
        {
          id: "2",
          title: "閃亮羅紋木棉背心",
          enTitle: "Shiny Striped Cotton Tank Top",
          imgUrl: "../src/assets/images/model/model1/2.jpg",
          link: "-NOsDbaAeeJsSkZrJdO8",
        },
        {
          id: "3",
          title: "瑪格·夸利包",
          enTitle: "MARG QUALLY Backpack",
          imgUrl: "../src/assets/images/model/model1/3.jpg",
          link: "-NOrgOp1wQVl5_DcyQbX",
        },
        {
          id: "4",
          title: "O’LOCK 項圈項鏈",
          enTitle: "O’LOCK Choker",
          imgUrl: "../src/assets/images/model/model1/4.jpg",
          link: "-NOs6q-LHPGKzyggwSM_",
        },
        {
          id: "5",
          title: "BAGUETTE 手套",
          enTitle: "BAGUETTE Gloves",
          imgUrl: "../src/assets/images/model/model1/5.jpg",
          link: "-NOs1jZ_Lo_8Q4VUvj3z",
        },
        {
          id: "6",
          title: "高跟皮繩高跟鞋",
          enTitle: "High Heel Leather Strappy Sandals",
          imgUrl: "../src/assets/images/model/model1/6.jpg",
          link: "-NOrwjWuRfalPOsbyIGY",
        },
      ],
    },
    {
      id: "2",
      title: "Osezane",
      subtitle: "Isabel",
      description: `由高品質的羊毛和馬海毛混紡而成，輕柔舒適，穿起來非常舒適且保暖。獨特的拼色設計，讓這件毛衣充滿了時尚感和活力，吸引眼球的同時也能展現你獨特的個性。你可以搭配牛仔褲、長裙或緊身褲等不同風格的下身，輕鬆打造出不同的穿搭風格。這款毛衣適合各種場合，從日常休閒到正式場合都非常適合，是你衣櫃中不可缺少的時尚單品。`,
      enDescription: `Made from a blend of high-quality wool and cashmere, this sweater is lightweight, soft, comfortable, and incredibly warm. Its unique color-blocking design gives it a trendy and lively look that not only catches the eye but also showcases your unique personality. You can pair it with different styles of pants, such as jeans, long skirts, or leggings, to effortlessly create various fashion looks. This sweater is suitable for various occasions, from casual to formal, making it an essential fashion item in your wardrobe.`,
      imgURL: "../src/assets/images/model//model2/model2.png",
      bgcolor: "#98191b",
      poster: "../src/assets/images/model/model2/0.jpg",
      video: "",
      fits: [
        {
          id: "1",
          title: "拼色馬海羊毛套頭毛衣",
          enTitle: "Multicolor mohair sweater",
          imgUrl: "../src/assets/images/model/model2/1.jpg",
          link: "-NOrrhKyqS_uG__hX1Bg",
        },
        {
          id: "2",
          title: "雪紡紗半身裙",
          enTitle: "Chiffon Midi Skirt",
          imgUrl: "../src/assets/images/model/model2/2.jpg",
          link: "-NOsFFRN2pssMQEnMPlT",
        },
        {
          id: "3",
          title: "迷你款式 BAGUETTE",
          enTitle: "Baguette Mini",
          imgUrl: "../src/assets/images/model/model2/3.jpg",
          link: "-NOsHEjO2m1MNXiRhgch",
        },
        {
          id: "4",
          title: "黑色羊毛針織帽",
          enTitle: "Beanie",
          imgUrl: "../src/assets/images/model/model2/4.jpg",
          link: "-NOsJ68twtBSKftLaW9c",
        },
        {
          id: "5",
          title: "BAGUETTE 襪子",
          enTitle: "BAGUETTE Socks",
          imgUrl: "../src/assets/images/model/model2/5.jpg",
          link: "-NOsKHRwLs9EL4yt_Meg",
        },
        {
          id: "6",
          title: "黑色皮革高跟木底鞋",
          enTitle: "BAGUETTE SHOW",
          imgUrl: "../src/assets/images/model/model2/6.jpg",
          link: "-NOsLvqfUr9uXPc9H84x",
        },
      ],
    },
    {
      id: "3",
      title: "Dcqumus",
      subtitle: "Elicha",
      description: `獨特的斜紋設計，讓這條裙子更加的時尚和特別，讓你在人群中脫穎而出。它的設計非常的多變，可以搭配不同的上衣和鞋子，打造出不同的風格。你可以搭配一件簡單的T恤和運動鞋，創造出休閒舒適的穿搭風格；也可以搭配一件正式的襯衫和高跟鞋，打造出優雅的正式場合穿搭。`,
      enDescription: `The unique diagonal stripe design of this skirt makes it even more fashionable and distinctive, allowing you to stand out from the crowd. Its design is very versatile, allowing you to pair it with different tops and shoes to create different styles. You can pair it with a simple T-shirt and sneakers to create a casual and comfortable outfit, or you can pair it with a formal shirt and high heels to create an elegant formal look.`,
      imgURL: "../src/assets/images/model/model3/model3.png",
      bgcolor: "#915937",
      poster: "../src/assets/images/model/model3/0.jpg",
      video: "/video/model/model3.mp4",
      fits: [
        {
          id: "1",
          title: "斜紋軟呢裙裝",
          enTitle: "DIAGONAL TWILL WOOL DRESS",
          imgUrl: "../src/assets/images/model/model3/1.jpg",
          link: "-NOsQlmYYT0hsyG-ETUM",
        },
        {
          id: "2",
          title: "BAGUETTE 草帽",
          enTitle: "FANTASY STRAW & RIBBON",
          imgUrl: "../src/assets/images/model/model3/2.jpg",
          link: "-NOsUZifoL8fWnlP8zMe",
        },
        {
          id: "3",
          title: "B IS 半月手環",
          enTitle: "B IS CUFF",
          imgUrl: "../src/assets/images/model/model3/3.jpg",
          link: "-NOsSRj24EVsJtA2oPJF",
        },
        {
          id: "4",
          title: "ZIRCON 項鍊",
          enTitle: "ZIRCON Necklace",
          imgUrl: "../src/assets/images/model/model3/4.jpg",
          link: "-NOsWTYTuVyNIJXC0xtX",
        },
        {
          id: "5",
          title: "口蓋包",
          enTitle: "FLAP BAG",
          imgUrl: "../src/assets/images/model/model3/5.jpg",
          link: "-NOsOgCbpTMBzX2DMR03",
        },
        {
          id: "6",
          title: "SATIN 包頭鞋",
          enTitle: "SATIN PUMPS",
          imgUrl: "../src/assets/images/model/model3/6.jpg",
          link: "-NOsx8Cqm7Diq2HlIkRo",
        },
      ],
    },
  ];
  const models = reactive(data);
  const modelId = ref(1);

  return { models, modelId };
});
