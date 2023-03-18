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
      imgURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679154991847.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NLA5Z46mEFTlVuHIekJGWP1CYrHeoVBL1ixZNOfDwy0HVUWNWKrUkrjF4Hzvfp84p6qmFqBaYUv3JgUDs%2Brmfrembb92c2pnLSAagDHI80UJc%2BBbwKnGUn0ZhHMZ4YgVW2%2Fa1gd%2BSSkx4558yFaSlQRKQFs3vFlUtndpuYOzDs0MCUG36IK3pjuR8BdeZbKiNRrjt5Pm%2BT9IniI1noVH8HYq7RQud6sBuf7mc%2BHURMiJmvXgonKz2h%2BwWjw%2BxcSpPCEgM07TPpLrGyHayGxffQB51z9AY%2Fu2sDrZkmuePn8oFmbQ3QlsWxaAE9kh7sD5V3QzwvnxLMLnpinhKGPFgQ%3D%3D",
      bgcolor: "#0f1423",
      poster:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155045826.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=axorXpRDsQpqcqOB8r5QyqIY26KVSg5I2%2BQII7OMVkWImBJCACJgcBMYq%2FLmBKNY%2FTWnDwCCWHdr3EFasaa2Khw%2F7LRX32LYzeCMIxbAXsyvqnuENsDevOaRnDiRCldDr4OSTKsOVPaWpQu6W5d4k7wAqWPJxw%2Bg81zTnowMvYShS4TkoVJJvxwO%2BE4NRXEs1MZR39Q40gP%2B1xhN%2BKfeTn1vKUvkzTw9WwTYFlOL5Mk2SozphJEbi%2BBw8muYaIvboGkveAsRBvfglrYi%2Bvw1NPv5jevzRPS%2BBCmyF1Mc2K8IeVCGA0rrgWQ4ZTiahOpLpoxA%2Bc26K%2F6TjhlPVRtNtA%3D%3D",
      video: "/bottigaemo/video/model/model1.mp4",
      fits: [
        {
          id: "1",
          title: "絲光 V 領長洋裝",
          enTitle: "Silk Satin Long Dress",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155068423.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MNOkvwqda19nPbPZp%2Fh6CMlJQgmkpF8JxaLGtZtKcaH1%2BJ4dNI8aYgtzfEU%2B0lGHpDNWsaK%2BuBrJyhb9Tq6omg1uJ004hfs23eEn%2B3WTWuv3hZR0P1JDGsr78jX3xHf5cDIJuV4rZ5KOxhbMhKsQQ%2BRnDGgqKrcQqASS73LM0Lbhzri5jI6GclVXFcgfDbPEYm8Sz09QWh2mNxeLtwHUkfB0XDCJhZmwGiSx4wMXGb7BVSjOUxx6VZbH551bmyAoqMBoszthzKBLNFkjPPKwffPDe5Mx7M6vL8B76qXDClRjCWJCvpYuBt3XGHS4VjqLNsc1tht%2BFj6evKD1dx3%2F4g%3D%3D",
          link: "-NOsArsdhPFZiGj_-k_9",
        },
        {
          id: "2",
          title: "閃亮羅紋木棉背心",
          enTitle: "Shiny Striped Cotton Tank Top",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155086596.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cpir4yqI9zKvOMsksDGyC%2Fs0efiBZKEGzdfa2oNWI92J9vwYMpQhRTMre%2FUqs55A%2Fi9lElnFobUgaYw2PhNWJJcj5waY%2FNdj67md5T2OUp7RkznIM%2ByJxluXs0jzIVn9A%2FSMTI4WvbDKWY1N%2F10V2ozJ9YTdP9Mn%2FLhUDi1OTfDcanc76gup62V98IvqP2KK21DCEsEEJ78DWUoLxiUWhzpPsvwxxx9iT4Bc0s9ydE6qWKM1V8n3pXlv0V9zzx531D6AFVSIY5ZFQBITB0rPdcBeDHzQiItMIs%2FNdkRU8MWG3oFq6EYbHnj3Lxp7wRKnsMK%2BAH47RENHK1fvIyq5rg%3D%3D",
          link: "-NOsDbaAeeJsSkZrJdO8",
        },
        {
          id: "3",
          title: "瑪格·夸利包",
          enTitle: "MARG QUALLY Backpack",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155103606.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iLjz4k%2BsXOKT9m2iUt0VqiVx3sPchDZldaJr4p3wyj1IjGhWu6M4D8FikH%2BXBVdHpOVAPFLi0%2BMo5o%2Bh9y92pO76VDAeklHgTKW66cWcdzb8VBf7h6NYRrGGBrVCIykT%2F4gnjGjrj7clzTDFlrdouz0m%2F1l%2F2Wtc%2BVFOvYPfOCxNqTenFTu7MlSLaQAde4sojLULpYWhBqOVd09NhKNo8kaK3DU8AZWceaQV8L%2B%2BFifefOPVisVzlvECW1DJ2a0DY7tfa%2BN78LYVPQF%2BOuKsb0UlrfIZvgM57v0a1TcNa7Fx1Q7J8nQyWosAeIgrjhTjTXx6rsB1T8LApWnnTPBuyA%3D%3D",
          link: "-NOrgOp1wQVl5_DcyQbX",
        },
        {
          id: "4",
          title: "O’LOCK 項圈項鏈",
          enTitle: "O’LOCK Choker",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155120100.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qxxPhh5IdsbVz8rhmWOQKvUKn7QOAjRplZ3kcDDF6eMtrGkefqXIP000jQpmCRptUp6rG0dmHdcn6hesLZulBTIuNyv8vvHn%2FJlE5%2B15n66jwNWLe92QD8haEmIJ0Shy8XMgzh7rSg1i8byXaDNDj09EvkNa89Uq9ZTdEGjItI4MRebcPVWs0lYSq6mXDyJsAKhvH%2B2MU0VLOzbb5fVh8WaE%2FWONgWsy866x5mJRmCQy5EYdRo9i80Zl1FgmdjdYoaD7OKQLM7f12e4n4aq%2B5LMyYC7KmBgRHsWTNs6%2BbJGAPyTsPIK5GV6g2BreXwzT%2FjBRFxuWsbMC6M10zs5ofw%3D%3D",
          link: "-NOs6q-LHPGKzyggwSM_",
        },
        {
          id: "5",
          title: "BAGUETTE 手套",
          enTitle: "BAGUETTE Gloves",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155136820.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cZlCzNtTJJpafHaljX1SpgNvdcg4yL7k2PFN2tb4o6p83h2ZitYjL9I0kn6duRXespM%2Fl78SF%2B%2FHmaTJuUcojrEvRzIrQ14uGlxuXMidfKFjsSdr6gk1be1fOz%2BNIEeCkKv7XXlCz2Au7iWQ3v9sNsVzu4xTOKMAAd7pLrOAoIckXqi9UDYEJcxrHx2CpmPXfoYde2oyU%2FduO%2BdOtH9z4nvrb5EtZkQkxdZDMxk1eVEZJ5lAqvpRkttEhr8EICmSfmiXOibl%2BN39y9EBuyFAJTocfeyypGPq0cGTAS1yKJdHJK796C0FFQfgAgrRXBG79FJMwdt5eveFcYvEkBROmA%3D%3D",
          link: "-NOs1jZ_Lo_8Q4VUvj3z",
        },
        {
          id: "6",
          title: "高跟皮繩高跟鞋",
          enTitle: "High Heel Leather Strappy Sandals",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155151777.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KCZ9XDmIZxDxAeT6pjph8WX8v5Ev6SgjxHX0XvCbrSXtoqs01RWb8RL0e1lcu5u42q3eWZMkda6q6jKPMf8QOmre1iHFxLEyXAQYMlsjMppVgxBuf6yxT1fLOUt2P6RFcGVrWjQtpy8IfZ6CIE%2FttMs3hYYFnCeVzGtEZVZbMAn9R6hzZVznVZ%2FRrIRwIj1uBPs6wDOfN4xU5Y4V60IVqAaAOk%2BTK55tPz%2Feszr22ROGG8r4iDIuS5rtpesFscPpZiKPNaNsMlRa1PMGaSm1dva9p42vNTzm%2F49aZYUSr2lNmHt4LFiJ3vC%2B791nKsk99qCZ3BcZEnTazSAWLWX74Q%3D%3D",
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
      imgURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155279971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WiTvrISP9C%2FSDfo5bQYWRzQSG7CwYk6peIBMwOv7iDN8A2JunG1flvYsfhY0Rd9uPKLEXiwLWBxm20%2Fs5Gpv4jWbVxn1pg3i5ys3ZfuGJirNa7cZnAreR6DpzyTvVV7hycKq8%2FgX3%2BCR%2FCzaxfMtuj8xPNx%2Fj2ri3gu%2FO%2Br%2BNjb3oY2eDEk72be17LthAeV3eB%2BlcyNsXEqVR4kj0Nk%2FsyTcNFUdY%2BtKLv2K5stn1GqaNVp9eLotczpkERXxSaMbWWBmMG95T%2BmUbY%2F2WAibC%2Fi%2B6zjyjnRyEuTHRfCF0dfK5c%2FwbXUD2apJDDRVct%2FlA9p5pT3gN458k%2F1QyT8PfA%3D%3D",
      bgcolor: "#98191b",
      poster:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155307505.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pcJkkP73Ssh4E0b4UY78nuU3wIZ7Uc9e3o7cIbdvT3ngQSOXno9atZi%2B5D8eZtWFVQZRJo%2FCMZ4P0b3YsKlDgDoK5PALc5SARR3ytVYx908BWcZSAeDPcbcR6FEx2SMH5cr%2Fn2ohjfOfemZPuZII8obUdcbLBg4CJuA9uklsDPpV0YypjkD0F1QP8bdq%2Bl0CdVKSMb7tQ0bvSYJbPYt%2BawXBmmZOWocLuzf%2FVcedDovFgHPjuoG5sbWE%2BvbJK4UF3loK9bdUf5BafDkxDE4VsDgpxgzA14%2FZ4soZ%2BmhZu94%2BzQ47z%2FBENms9t%2FH7PfFqjpQNEW3CRpsVe5Vggh2hWg%3D%3D",
      video: "",
      fits: [
        {
          id: "1",
          title: "拼色馬海羊毛套頭毛衣",
          enTitle: "Multicolor mohair sweater",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155325351.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aV3BGSHgWUh3cFHF7pb0MHFQL%2FVO4SZQNk20xvdm91dBr2XIXciAUsQiBqFvKlImJZhtB44o2BdW8gfjTjjQQk9dV9cK31dPV2uLEHIwctl5AmoIcEkIntGzbmidnUKPyP2KNlAt3o8dCwOAB2d22vyUqRi372ZUimtHHTy0fLsQQ84cu38DVswb0pstBUp%2Fqy4AdsZdgtrVss6xQepEdgWYmYun4e6Uzc%2BvRy91DTEohwPn7dxoZo3Wll9yDsE8PeLIeJU7C3EI7evMEBtu5wQe48ClwDVtb8jlIjTZqm54JfWO%2BOTYRSzSPJ%2BnHuMs%2BUfwJC5pb85BiMmHX1c%2BhA%3D%3D",
          link: "-NOrrhKyqS_uG__hX1Bg",
        },
        {
          id: "2",
          title: "雪紡紗半身裙",
          enTitle: "Chiffon Midi Skirt",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155346635.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bEsLwNvogSEXHZIUMMNl%2Bk6tyakf6BJyFpHSTrzBxQRqd9s3fPcu2IrW5leyuLxejjIVrQfIex%2FwyiPnCFFdP9HeJePTuJoZOc6yZkXt8lF%2FFBKxIoxRWopxAnMNI%2BHgVleJur%2B%2FFS6i0QmuwZCP4kGfrTih%2BmTua9L%2FskK1UgGujmqgIbEw19LmK34L7nIvFTPnrG3hSeWjNPLt2DpzP8hpYTfzkwNPYS%2FaaKgJ8U%2BlRUiGG3jWKo9sHyCvXuxo%2BVzBSpa5KZbty5wdY5i1A2VVw%2FXTwqaEf%2FGJsjZadZoHYxs688Vn97fKyknO9KtnoEYjCAf1WI9yHUZ%2F0FTTCA%3D%3D",
          link: "-NOsFFRN2pssMQEnMPlT",
        },
        {
          id: "3",
          title: "迷你款式 BAGUETTE",
          enTitle: "Baguette Mini",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155362138.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eC0dxXL%2BVK869%2FR8shr4Gv3V8AE5aAsdWfZEeLNO4CHKo5QXfwcqoj6Q0VvlyFdJv4zZtpJXUYsk1fvB2OdH%2FSzUqYN2IN%2BNGllKAAFodO%2Bg2%2F6FIm%2BcMdaMIYLgKNe0DJcxpN9Oje4ZsGtazFr%2BTPRdAxllb806xI9svs%2BSf5rCdp%2FbCUxDJnIWs9q8kxHx%2Baao7w1azSyznRw9gG5Bq%2FnmwfNrHbeu%2FFRek%2Fs60C5n0JHQNS0G3VzFDFF97UZTPUWrGImmw2myu3y9wKpU5Am91Yb98WLkf4G3%2FamB5y7OGUZP3MvVmykFqKbPeB0hmbIhSRZ8qO6fGrkPmiLBaA%3D%3D",
          link: "-NOsHEjO2m1MNXiRhgch",
        },
        {
          id: "4",
          title: "黑色羊毛針織帽",
          enTitle: "Beanie",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155377263.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=luMpIvp6La9coKAhBzrOGSnbOzI6LisAinNjX1G375ofYXG3Q5m2nTd2Gp09T%2BHLt4%2BwUzCK86ESw8bdW7Y20sS8baY8aJi0%2B3WNYPC3YhFKffY42VvZHNDGv8c%2BJhaKZdlaW7bHLIKiSixBpRNHkkGhbEQE4JBVFtxwbw%2BGZhjLaHXtWFEPXhbTc8GuCYGaK3kQl1PtEpOQTY9Oc7H3VU7ox4mwXoF4Q%2FjaXss6GO3NcXyrWCVglfMeOxtC9fInbjqjq1zYR3Py5SxGeZ%2Fheah8s58ANgeo3MJ36wflouGd9BAgghUr%2FtOSPS%2FA4Q0yHJxNcGWnahBM6mROxh3ufg%3D%3D",
          link: "-NOsJ68twtBSKftLaW9c",
        },
        {
          id: "5",
          title: "BAGUETTE 襪子",
          enTitle: "BAGUETTE Socks",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155392579.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Wl6jKHASIvyH5goIA9GkmNFM6C%2Fn1w9nYeYgQrbZe9lc4UlQjHhL25Fyw0O7EGqeTuMnQVnK2kVX5OEvxu14jtNY46IkGpa8QvvsMlkoEfn4%2Ba4w0IydEhJ6ShhgPvUDfejzmo89EGlbm5zPTLOS1UT552nyo96XbRMcXSetFYzbHbdEr3A2T6FtuFvgMPpQlPJKB1M3KXTd6lGMqSxx6R1kWDCcjKLx8tcoTR8mJBM8w%2FCLopqGFG5WPka410wMJ3CL94yddDyR7c9LVgL2jAEVgzBzS97fy6%2FM0QTiPDXaM61vTYHuZQcAklYtvApU1GBfsiu47evK%2BDXOBr1c2g%3D%3D",
          link: "-NOsKHRwLs9EL4yt_Meg",
        },
        {
          id: "6",
          title: "黑色皮革高跟木底鞋",
          enTitle: "BAGUETTE SHOW",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155406533.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=C1ekHQ4u9xY8D%2FNLGyOa5iaPZRZujqAOM9tfJdJp7ywKFsctGSrOYYiUUlpzqtdt30yup%2F4KokTq8SkzfyWCA1f8PIA1xISTT43JmierhueM2dnkqzu2AOrR0hohOuHmoltfNfCBUCibw8R1tv5o8xLkeOMT6nMlFNDzo%2FHbqlEp%2By3MISm4Tmeu5Hd0MNVO8ivyrACDfNqxAmykg0t91U2A0ossCvDRJ4zJ1liEkSGqefTviBzAK5EEsAEBFbNmVXJJh5wcTxZJTDIi9jbd2vZ1BWLc63oL10rOOgs762WDkw0DhczIzN4wABbh6kZstrC6dAk1q%2FdKCD7afesccA%3D%3D",
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
      imgURL:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155428603.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g%2FssgILsrhBA6BBeXpLhRJ3Z40r%2BuOHrNPftPDRzaIW13dVEzbv6oEsuEtn9aTgP%2Bil9Ti%2BuUxHOcb%2Fqz%2FdzQPQUi%2BH4UIEjVGs9%2BJGMDjC1wVnlDbUUx%2BA%2B6B8ana4%2BAwYJ2Gysb6L9t5Bje4mmb66EsBDBuYkmvU6nbs0osdx7fYtafLBF8uj8PiIz5FyT30Dnobi3lCKrD%2BLKv5%2Fq8a%2B3mS%2FdR%2F%2Fish4N%2BpxNiyiQgqBMc65H3UxRXNwHYwSJ7yPrUCDT%2BwOy6x3r5b9VinaD74CdYNjem8%2FMKJngj%2F97mesm2bAQWZGAJALr1Z1t5OWCZypdDcEMm2%2BHitABgQ%3D%3D",
      bgcolor: "#915937",
      poster:
        "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155516087.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZVZRtrtq6DnZgUfml5oiNw1fj8ekE%2FKpEp0BxSFgNXrBwcon1f737D2Ae4fV7aqxO3r4hNwyVWBOwi2pco%2BHCZMnwBG8BWRK4SbpgJEY2cThPDOso4L40AAn7nQ9rcsTtdQ513uWWbKN5FLt%2FTwPjgqkO73ZkEdjQJp7qkrbeWqCX6R4hVFagDzR5rSyaWjXT2RpfU5vHOtKK2ZDvu9GqirlXZhsJ%2Bb%2Fo2UfIpiPJJ1AqlVqMZ4BnphCNjmQ6wjbxMZvQnmw1KakiWzSb5uPoNkNnVxYVpCtNhh%2FvXAvzSXI75Xl9B5ktiz3h0rtWA3iV7xChxf%2BDpp0xMjTMgiDeA%3D%3D",
      video: "/bottigaemo/video/model/model3.mp4",
      fits: [
        {
          id: "1",
          title: "斜紋軟呢裙裝",
          enTitle: "DIAGONAL TWILL WOOL DRESS",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155539208.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jY9wd2bKKvonl8ya6vF0wpTvDLGlI39KYtChDtg6MrANaI8EJHZm7uLXGJYxKrtMXt3gCWUKI4PBagvHnhHR%2FAu7ldlrqV5xNJN48do8jRckXSdB2%2F84VluATzinAtlON1IVtzKBNUOBxpzh70mz2YVhCv9i7%2Bdu8vKmGRE3d7T%2B2979x15QGpq8W9bg%2BfzgjKI1Sh1GVOVaoqoJnTKg5PuWJncfAtg2WGZQ0MiNNoU4NumBoH4IEiomFFACizJv7CxOcHhnyP65eYE1Rnyx9M5X7NmpKek1CXHC40wqwBzZLaG5lOLoO063FYyR8usF30V1ITrRlr6tIhBctKB7Jg%3D%3D",
          link: "-NOsQlmYYT0hsyG-ETUM",
        },
        {
          id: "2",
          title: "BAGUETTE 草帽",
          enTitle: "FANTASY STRAW & RIBBON",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155557348.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Upk%2B9rKI6IdsQ9izZKDlMTs6bWNNDPTIcIWlf0r61Kz83uF%2Fg1lPdtFG1c9qXx9kkJ3VhR6QIU5YqYBOOzunKvU9FuWEP%2B3F%2FBYRqOUNSJp2iyCwk6AjbIgQPhtEbuHEzWxoGQfM6I1JPJLf1FMSzmhmHT%2Fk2Qyq3YHdKZujIdF2Epp7hlYlO8nyipJHtxGWN9Aq9dh0Psn2hNrL2GTpK64iNx5vZk6EACYlPm3TClCsAMfaCjqF8Vvh%2FIBdaOXG1iU2O9PenCqW53wg4HlBh4BM2u%2Fv7evvb6D9%2Bm1eexy5xOTIc3gmFMCoOzdQpRMpt%2BhczZYJ3T7GBlptZr4WoA%3D%3D",
          link: "-NOsUZifoL8fWnlP8zMe",
        },
        {
          id: "3",
          title: "B IS 半月手環",
          enTitle: "B IS CUFF",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155574683.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HHxyluIQu%2FnUf7si6oBJ9wfaqvSOVID5rfD%2BdW3fyvPPwIIWgwixOVwtCWTx4kP8COxGoN8knoqbOoE0bvkwL11Sf6XEewn1GoIfvtg1hj89MS0E2jJDv2%2BtG7NbiURYPyk9reJex792GqDSSbjaxC%2Bfphq6GEe1OPIMQeRZsdNdsc8C11CaWNyzmFAVvofnuIugIr%2FDN9qLoN31o3Z6DtFMDDGk8RpxTiei8PgPzRk0ZiBiBznIPlsVpJBh4W3fud3VY6Wx1thcqiwSWdAgrNEgsyK8aoQn5prFueGwrJkSuvYMOhi5LF5ETc8HXVPhIPuWl56qfZALL8jzDk5e%2BQ%3D%3D",
          link: "-NOsSRj24EVsJtA2oPJF",
        },
        {
          id: "4",
          title: "ZIRCON 項鍊",
          enTitle: "ZIRCON Necklace",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155593600.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hAkmUEM%2BTV1hxHTZAsoaMsgxOgm49dA6wOta3hzLKJD2lXNcyFNFQ9GG4GQQ3i%2F5EM0xSOduC1S4Jkr%2F2YLBhszhRqs8fyLFskDVuJ1XkGXnNAAf5DgbM0Hvnm9bLRZkJATR6IsT0SVqsKnwPxRhdaxOVQytv41OhvgqlQhOGVqqWKLxBWUqdciMB7YjhgWSNs9u6gIGxfFjNuj6WjvJnDtadcQH%2FNpbSK2i573g21I1jRf3psL8B6FjtymRKuai%2Bvd9%2Bh0DYM3UuXoZoUnxtkoDLTG99uOxh%2BqfdulMFg4gU6k09Eb0pxhzl4AyoQLQBqxhg5rD6xGpXom3hVsNVQ%3D%3D",
          link: "-NOsWTYTuVyNIJXC0xtX",
        },
        {
          id: "5",
          title: "口蓋包",
          enTitle: "FLAP BAG",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155607845.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oAp8He4cg5Vy%2Ftt%2B%2FY6eA%2FI90MUFqmRvS%2FSSBobCJfQp%2BMjUiHN%2F%2BEcDSQgguZT8FjS1BoJRoWooLgxpyUgG23O7u%2Bl9OE3exFCBSEI%2BsNwKiMOihB1DJqqk7oRcJ%2FINwROuFf9w%2BHDIsjcwXtrH3Zj8eyrGLphviFRW3TkVozI9p2xeVu8NEfUB38WbZ2ZvxQ4FVRzJzy%2F6uX1UGwK4U0JikUJdTJlsKFThHpYTL%2FROm4G35fLPsDATzuDdjkfU7xJ9ZsZm9Nqs%2FrTCmXwh276UnE8W4YMJC5R2zfeW7jODItUB7gRK1GFl0IBozTAm9wTvf6jGyZtlf%2F76yA8spg%3D%3D",
          link: "-NOsOgCbpTMBzX2DMR03",
        },
        {
          id: "6",
          title: "SATIN 包頭鞋",
          enTitle: "SATIN PUMPS",
          imgUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679155621153.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FSBNSQR9pJ%2BbhO1CDpDs1lKBAJqAJ%2BVeGRLvm01EJZJsWvo2T8GpNyx53k4%2BopIr%2Bh1OpcsTGHquO9P%2BF1yn7gcZa5yxEqnfiwjDnBxifmVgZiHyLAnaK6NbwtYKFIpo4fPN9LFOAGPCc8QxLSG1BZRdnPl3rqQRhJz7QVFYXQu3jJ3MWl6bPzj%2Bbq%2BcOz6dBoKHV%2FY2EZgiwZvfeEG0iCrovKzPmCCpTSwd2PvYk8UeuI68l7j3n80a00%2F8dIDI4JDVEbb3iuDEN95mK%2Fg941Ps%2BUegQVJqNxz57vQG7OfZ%2FVk9zHAJqPtvg%2BQeI1EsD2bv9sPx9o7qDdHuaTLiXw%3D%3D",
          link: "-NOsx8Cqm7Diq2HlIkRo",
        },
      ],
    },
  ];
  const models = reactive(data);
  const modelId = ref(1);

  return { models, modelId };
});
