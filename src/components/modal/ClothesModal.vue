<script setup>
import { NModal } from "naive-ui";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  closeModal: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <div>
    <!-- 尺碼 Modal -->
    <n-modal
      :show="props.showModal"
      :on-mask-click="props.closeModal"
      :on-close="props.closeModal"
      transform-origin="center"
      preset="card"
      :title="localLang === 'zh_TW' ? '尺碼指南' : 'SIZE GUIDE'"
      size="huge"
      :bordered="false"
      style="max-width: 1000px"
      class="text-center min-w-[500px]"
    >
      <b class="text-center">{{ $t("sizeSubtitle") }}</b>
      <table
        class="border-collapse table-fixed w-full min-w-[460px] text-left mt-10 overflow-x-scroll"
      >
        <thead>
          <tr class="border-t-2 border-primary-dark">
            <th>{{ $t("international") }}</th>
            <th>XXS</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <th>{{ $t("europe") }}</th>
            <td>36</td>
            <td>38</td>
            <td>40</td>
            <td>42</td>
            <td>44</td>
            <td>46</td>
            <td>48</td>
          </tr>
          <tr>
            <th>{{ $t("italy") }}</th>
            <td>34</td>
            <td>36</td>
            <td>38</td>
            <td>40</td>
            <td>42</td>
            <td>44</td>
            <td>46</td>
          </tr>
          <tr>
            <th>{{ $t("france") }}</th>
            <td>32</td>
            <td>34</td>
            <td>36</td>
            <td>38</td>
            <td>40</td>
            <td>42</td>
            <td>44</td>
          </tr>
          <tr>
            <th>{{ $t("uk") }}</th>
            <td>4</td>
            <td>6</td>
            <td>8</td>
            <td>10</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
          </tr>
          <tr>
            <th>{{ $t("us") }}</th>
            <td>00</td>
            <td>0</td>
            <td>2/4</td>
            <td>4/6</td>
            <td>8</td>
            <td>10</td>
            <td>12</td>
          </tr>
          <tr>
            <th>{{ $t("japan") }}</th>
            <td>3</td>
            <td>5</td>
            <td>7</td>
            <td>9</td>
            <td>11</td>
            <td>13</td>
            <td>15</td>
          </tr>
          <tr>
            <th>{{ $t("Chest (cm)") }}</th>
            <td>75</td>
            <td>78</td>
            <td>81</td>
            <td>85</td>
            <td>89</td>
            <td>93</td>
            <td>97</td>
          </tr>
          <tr>
            <th>{{ $t("Chest (inch)") }}</th>
            <td>30</td>
            <td>31</td>
            <td>32</td>
            <td>33</td>
            <td>35</td>
            <td>37</td>
            <td>38</td>
          </tr>
          <tr>
            <th>{{ $t("Waist (cm)") }}</th>
            <td>62</td>
            <td>65</td>
            <td>68</td>
            <td>72</td>
            <td>76</td>
            <td>80</td>
            <td>84</td>
          </tr>
          <tr>
            <th>{{ $t("Waist (inch)") }}</th>
            <td>24</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>30</td>
            <td>31</td>
            <td>33</td>
          </tr>
          <tr>
            <th>{{ $t("Sleeve (cm)") }}</th>
            <td>61</td>
            <td>62</td>
            <td>63</td>
            <td>64</td>
            <td>65</td>
            <td>65</td>
            <td>66</td>
          </tr>
          <tr>
            <th>{{ $t("Sleeve (inch)") }}</th>
            <td>24</td>
            <td>24</td>
            <td>25</td>
            <td>25</td>
            <td>26</td>
            <td>26</td>
            <td>26</td>
          </tr>
          <tr>
            <th>{{ $t("Armhole (cm)") }}</th>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <th>{{ $t("Armhole (inch)") }}</th>
            <td>9</td>
            <td>10</td>
            <td>10</td>
            <td>11</td>
            <td>11</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
      <p class="text-left py-8">
        {{ $t("notice2") }}
      </p>
    </n-modal>
  </div>
</template>

<style lang="scss" scoped>
th,
td {
  padding: 1.2rem 0;
  border-bottom: 1px solid #ddd;
}
</style>
