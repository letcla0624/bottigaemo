import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/solid";
import { toast } from "vue3-toastify";
import axios from "axios";

export const useFrontCartStore = defineStore("frontCart", () => {
  const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
  const cart = reactive({ arr: [] });
  const cartsTotal = ref(0);
  const final_enTotal = ref(0);
  const enTotal = ref(0);
  const loadingCart = ref(false);
  const localLang = ref("");
  const newCartArr = ref([]);

  localLang.value = localStorage.getItem("language");

  const sumCartsTotal = (arr) => {
    let sum = 0;
    arr.forEach(function (item) {
      sum += item.qty;
    });

    return sum;
  };

  const code = ref("");
  const useCoupon = async () => {
    localLang.value = localStorage.getItem("language");
    const data = {
      code: code.value,
    };

    try {
      const res = await axios.post(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/coupon`,
        { data }
      );

      code.value = "";

      getCarts();

      if (localLang.value === "zh_TW") {
        toast(res.data.message, {
          icon: CheckCircleIcon,
          type: "success",
        });
      } else if (localLang.value === "en") {
        toast("Coupon applied", {
          icon: CheckCircleIcon,
          type: "success",
        });
      }
    } catch (err) {
      code.value = "";

      if (localLang.value === "zh_TW") {
        toast(err.response.data.message, {
          icon: ExclamationCircleIcon,
          type: "error",
        });
      } else if (localLang.value === "en") {
        toast("Coupon not found!", {
          icon: ExclamationCircleIcon,
          type: "error",
        });
      }
    }
  };

  const getCarts = async () => {
    loadingCart.value = true;

    try {
      const res = await axios.get(`${VITE_APP_API}/api/${VITE_APP_PATH}/cart`);

      loadingCart.value = false;
      cart.arr = res.data.data;
      cartsTotal.value = sumCartsTotal(cart.arr.carts);

      // 商品數量有沒有大於限定數量
      const overStock = ref(false);
      if (cart.arr.total !== 0) {
        const productArr = cart.arr.carts.map((item) => {
          item.product.in_stock - item.qty > 0
            ? (overStock.value = false)
            : (overStock.value = true);

          return {
            productId: item.product.id,
            overStock: overStock.value,
          };
        });
        newCartArr.value = [...new Set(productArr)];
      } else {
        newCartArr.value = [];
      }

      // 計算美金總價格
      const priceArr = reactive({ arr: [] });
      cart.arr.carts.forEach((item) => {
        priceArr.arr.push(item.item_enTotal);
      });
      enTotal.value = priceArr.arr.reduce((acc, cur) => acc + cur, 0);
      final_enTotal.value = enTotal.value * 0.95;
    } catch (err) {
      loadingCart.value = false;
      alert(err.response.data.message);
    }
  };

  const addToCart = async (
    product_id,
    qty = 1,
    setSize = "",
    item_enTotal = 0
  ) => {
    try {
      loadingCart.value = true;

      const data = reactive({
        product_id,
        qty,
        setSize,
        item_enTotal,
      });

      const res = await axios.post(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/cart`,
        { data }
      );

      loadingCart.value = false;
      getCarts();

      if (localLang.value === "zh_TW") {
        toast(res.data.message, {
          icon: CheckCircleIcon,
          type: "success",
        });
      } else if (localLang.value === "en") {
        toast("Added to shopping bag", {
          icon: CheckCircleIcon,
          type: "success",
        });
      }
    } catch (err) {
      loadingCart.value = false;
      toast(err.response.data.message, {
        icon: ExclamationCircleIcon,
        type: "error",
      });
    }
  };

  const updateCart = async (item) => {
    loadingCart.value = true;

    const data = reactive({
      product_id: item.product_id,
      qty: item.qty,
      item_enTotal: item.product.enPrice * item.qty,
    });

    try {
      const res = await axios.put(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/cart/${item.id}`,
        { data }
      );

      loadingCart.value = false;
      getCarts();

      if (localLang.value === "zh_TW") {
        toast(res.data.message, {
          icon: CheckCircleIcon,
          type: "success",
        });
      } else if (localLang.value === "en") {
        toast("Shopping bag updated", {
          icon: CheckCircleIcon,
          type: "success",
        });
      }
    } catch (err) {
      loadingCart.value = false;
      toast(err.response.data.message, {
        icon: ExclamationCircleIcon,
        type: "error",
      });
    }
  };

  const deleteCartItem = async (id) => {
    loadingCart.value = true;

    try {
      const res = await axios.delete(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/cart/${id}`
      );

      loadingCart.value = false;
      getCarts();

      if (localLang.value === "zh_TW") {
        toast(res.data.message, {
          icon: CheckCircleIcon,
          type: "success",
        });
      } else if (localLang.value === "en") {
        toast("Item deleted", {
          icon: CheckCircleIcon,
          type: "success",
        });
      }
    } catch (err) {
      loadingCart.value = false;
      toast(err.response.data.message, {
        icon: ExclamationCircleIcon,
        type: "error",
      });
    }
  };

  return {
    cart,
    getCarts,
    loadingCart,
    addToCart,
    cartsTotal,
    updateCart,
    deleteCartItem,
    final_enTotal,
    enTotal,
    code,
    useCoupon,
    newCartArr,
  };
});
