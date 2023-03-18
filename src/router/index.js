import { createRouter, createWebHashHistory } from "vue-router";
import FrontView from "@/views/front/FrontView.vue";
import IndexView from "@/views/front/index/IndexView.vue";
import AboutView from "@/views/front/about/AboutView.vue";
import FavoriteView from "@/views/front/favorite/FavoriteView.vue";
import ModelFitView from "@/views/front/modelFit/ModelFitView.vue";
import ModelFitDetailView from "@/views/front/modelFit/ModelFitDetailView.vue";
import ProductsView from "@/views/front/products/ProductsView.vue";
import ProdView from "@/views/front/products/ProdView.vue";
import ArticlesView from "@/views/front/articles/ArticlesView.vue";
import ArticleDetailView from "@/views/front/articles/ArticleDetailView.vue";
import PrivacyView from "@/views/front/law/PrivacyView.vue";
import CheckoutView from "@/views/front/CheckoutView.vue";
import OrderFinishView from "@/views/front/checkout/OrderFinishView.vue";
import NotFoundView from "@/views/front/NotFound.vue";

const routes = [
  {
    path: "/",
    component: FrontView,
    children: [
      {
        path: "",
        name: "index",
        component: IndexView,
      },
      {
        path: "products",
        name: "products",
        component: ProductsView,
      },
      {
        path: "prod/:id",
        name: "prod",
        component: ProdView,
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              enName: "Home",
              link: "/",
            },
            {
              name: "產品目錄",
              enName: "Products",
              link: "/products",
            },
          ],
        },
      },
      {
        path: "articles",
        name: "articles",
        component: ArticlesView,
      },
      {
        path: "article-detail/:id",
        name: "article-detail",
        component: ArticleDetailView,
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              enName: "Home",
              link: "/",
            },
            {
              name: "品牌動向",
              enName: "Club",
              link: "/articles",
            },
          ],
        },
      },
      {
        path: "about",
        name: "about",
        component: AboutView,
      },
      {
        path: "favorite",
        name: "favorite",
        component: FavoriteView,
      },
      {
        path: "model-fit",
        name: "model-fit",
        component: ModelFitView,
      },
      {
        path: "fit-detail/:id",
        name: "fit-detail",
        component: ModelFitDetailView,
      },
      {
        path: "order-finish/:id",
        name: "order-finish",
        component: OrderFinishView,
      },
      {
        path: "privacy",
        name: "privacy",
        component: PrivacyView,
      },
    ],
  },
  {
    path: "/checkout",
    component: CheckoutView,
    children: [
      {
        path: "",
        components: {
          leftSide: () => import("@/views/front/checkout/OrderFormView.vue"),
          rightSide: () => import("@/views/front/checkout/OrderCartView.vue"),
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: to.meta.savedPosition || 0 };
    }
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      document.body.scrollTop = vm.scrollTop;
    });
  },
});

export default router;
