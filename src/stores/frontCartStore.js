import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/solid";
import { toast } from "vue3-toastify";
import axios from "axios";

export const useFrontCartStore = defineStore("frontCart", () => {
  const cart = reactive({ arr: [] });
  const cartsTotal = ref(0);
  const final_enTotal = ref(0);
  const loadingCart = ref(false);
  const localLang = ref("");

  localLang.value = localStorage.getItem("language");

  const sumCartsTotal = (arr) => {
    let sum = 0;
    arr.forEach(function (item) {
      sum += item.qty;
    });

    return sum;
  };

  const getCarts = async () => {
    loadingCart.value = true;

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API}/api/${
          import.meta.env.VITE_APP_PATH
        }/cart`
      );

      loadingCart.value = false;
      cart.arr = res.data.data;
      cartsTotal.value = sumCartsTotal(cart.arr.carts);

      // 計算美金總價格
      const priceArr = reactive({ arr: [] });
      cart.arr.carts.forEach((item) => {
        priceArr.arr.push(item.item_enTotal);
      });
      final_enTotal.value = priceArr.arr.reduce((acc, cur) => acc + cur, 0);
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
        `${import.meta.env.VITE_APP_API}/api/${
          import.meta.env.VITE_APP_PATH
        }/cart`,
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
        `${import.meta.env.VITE_APP_API}/api/${
          import.meta.env.VITE_APP_PATH
        }/cart/${item.id}`,
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
        `${import.meta.env.VITE_APP_API}/api/${
          import.meta.env.VITE_APP_PATH
        }/cart/${id}`
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
  };
});
