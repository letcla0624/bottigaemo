<script setup>
import { reactive, onMounted } from "vue";
import { Accordion } from "flowbite";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const openArr = reactive({ arr: [] });
onMounted(() => {
  const accordionItems = [
    {
      id: "accordion-flush-heading-1",
      triggerEl: document.querySelector("#accordion-flush-heading-1"),
      targetEl: document.querySelector("#accordion-flush-body-1"),
      active: false,
    },
    {
      id: "accordion-flush-heading-2",
      triggerEl: document.querySelector("#accordion-flush-heading-2"),
      targetEl: document.querySelector("#accordion-flush-body-2"),
      active: false,
    },
    {
      id: "accordion-flush-heading-3",
      triggerEl: document.querySelector("#accordion-flush-heading-3"),
      targetEl: document.querySelector("#accordion-flush-body-3"),
      active: false,
    },
  ];

  const options = {
    activeClasses: "bg-transparent",
    onToggle: (item) => {
      item._items.forEach((item, index) => {
        openArr.arr[index] = item.active;
      });
    },
  };

  new Accordion(accordionItems, options);
});
</script>

<template>
  <div>
    <div
      class="bg-gray-50 px-3 border border-t-0 md:mx-3 md:px-0 md:border-0 md:border-t md:bg-transparent"
      id="accordion-flush"
      data-accordion="collapse"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span class="font-medium text-primary-dark">
            {{ $t("questionTitle1") }}
          </span>
          <ChevronDownIcon
            class="w-5 h-5 duration-300"
            :class="{ 'rotate-180': openArr.arr[0] == true }"
          />
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        class="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <div class="w-11/12">
            <p>
              {{ $t("answerText1") }}
            </p>
            <div class="mt-4 tracking-wider hoverBar hover:text-primary">
              <a href="tel:+88622984765"> {{ $t("callUs") }} +886-22984765 </a>
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="true"
          aria-controls="accordion-flush-body-2"
        >
          <span class="font-medium text-primary-dark">
            {{ $t("questionTitle2") }}
          </span>
          <ChevronDownIcon
            class="w-5 h-5 duration-300"
            :class="{ 'rotate-180': openArr.arr[1] == true }"
          />
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        class="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <div class="w-11/12">
            <p>
              {{ $t("answerText2") }}
            </p>
          </div>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 border-b border-gray-200"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="true"
          aria-controls="accordion-flush-body-3"
        >
          <span class="font-medium text-primary-dark">
            {{ $t("questionTitle3") }}
          </span>
          <ChevronDownIcon
            class="w-5 h-5 duration-300"
            :class="{ 'rotate-180': openArr.arr[2] == true }"
          />
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        class="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <div class="w-11/12">
            <p>
              {{ $t("answerText3") }}
            </p>
            <div class="flex mt-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
              >
                <rect width="36" height="24" rx="4" fill="#DFE3E8" />
                <g opacity="0.01">
                  <rect
                    x="3.4873"
                    y="2.40002"
                    width="29.0325"
                    height="19.2"
                    fill="white"
                  />
                </g>
                <rect
                  x="14.1748"
                  y="5.745"
                  width="7.6575"
                  height="12.51"
                  fill="#F26122"
                />
                <path
                  d="M14.9996 12C14.9869 9.56519 16.0928 7.25933 17.9996 5.74504C14.7373 3.17951 10.051 3.55206 7.23504 6.6008C4.41905 9.64954 4.41905 14.3505 7.23504 17.3993C10.051 20.448 14.7373 20.8206 17.9996 18.255C16.0928 16.7408 14.9869 14.4349 14.9996 12Z"
                  fill="#EA1D25"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.1551 16.69V17.03H30.0951V16.69H29.9551V16.62H30.3051V16.69H30.1551ZM30.8351 16.62V17.03H30.7651V16.72L30.6551 16.99H30.5751L30.4551 16.72V17.03H30.3851V16.62H30.4851L30.6151 16.91L30.7351 16.62H30.8351Z"
                  fill="#F69E1E"
                />
                <path
                  d="M30.87 12.0001C30.868 15.0446 29.1291 17.8211 26.3909 19.1519C23.6527 20.4827 20.3951 20.1346 18 18.2551C21.45 15.5385 22.0475 10.5408 19.335 7.08755C18.9462 6.5875 18.4979 6.13668 18 5.74505C20.3951 3.86555 23.6527 3.51736 26.3909 4.84818C29.1291 6.179 30.868 8.95554 30.87 12.0001Z"
                  fill="#F69E1E"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
              >
                <rect width="36" height="24" rx="4" fill="#DFE3E8" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.7626 13.2525C22.7672 12.1089 21.8241 11.615 21.0922 11.2317C20.6288 10.989 20.2501 10.7907 20.2501 10.5C20.2501 10.2525 20.4901 9.98999 21.0001 9.92249C21.6071 9.86243 22.219 9.96873 22.7701 10.23L23.0851 8.72999C22.5478 8.5285 21.9789 8.42438 21.4051 8.42249C19.6351 8.42249 18.4051 9.36749 18.4051 10.7175C18.4051 11.715 19.2976 12.27 19.9726 12.6C20.6476 12.93 20.9101 13.1625 20.9026 13.4625C20.9026 13.9275 20.3476 14.1375 19.8301 14.145C19.1918 14.1532 18.5619 13.9983 18.0001 13.695L17.6776 15.195C18.3132 15.4431 18.9903 15.5678 19.6726 15.5625C21.5551 15.5625 22.7926 14.6325 22.8001 13.1925L22.7626 13.2525ZM17.8951 8.54249L16.3951 15.48H14.5951L16.0951 8.54249H17.8951ZM25.4401 13.0425L26.3851 10.44L26.9326 13.0425H25.4401ZM29.1076 15.5025H27.4426L27.2251 14.4675H24.9676L24.6001 15.5025H22.7101L25.4026 9.07499C25.5267 8.76918 25.8226 8.568 26.1526 8.56499H27.6526L29.1076 15.5025ZM12.4576 15.4575L15.3676 8.51999H13.4176L11.5501 13.2375L10.8001 9.22499C10.7337 8.81725 10.3807 8.5183 9.96762 8.51999H6.91512L6.87012 8.72249C7.48237 8.84227 8.07707 9.03883 8.64012 9.30749C8.87994 9.42024 9.04245 9.65118 9.06762 9.91499L10.5001 15.4575H12.4576Z"
                  fill="#2A2A6C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
              >
                <rect width="36" height="24" rx="4" fill="#DFE3E8" />
                <rect
                  x="8"
                  y="4"
                  width="20"
                  height="16"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_3681_23730"
                      transform="translate(-0.0153846) scale(0.00769231 0.00961538)"
                    />
                  </pattern>
                  <image
                    id="image0_3681_23730"
                    width="134"
                    height="104"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
              >
                <rect width="36" height="24" rx="4" fill="#DFE3E8" />
                <path
                  d="M2.73766 7.905L3.14266 8.895H1.78516L2.19766 7.905L2.46766 7.245L2.73766 7.905Z"
                  fill="#296DB6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.2675 6.67502V5.43002H33.96V11.55H31.425L30.675 10.365V11.55H27L26.6325 10.635H25.7925L25.4475 11.55H23.295C22.6459 11.5663 22.009 11.3716 21.48 10.995V11.55H17.8725L17.0025 10.455V11.55H3.2475L2.9025 10.635H2.0625L1.71 11.55H0V10.635H1.14L1.5 9.75002H3.4725L3.8325 10.605H4.9875L3.1725 6.37502H1.8375L0 10.635V8.25002L1.2 5.40002H3.645L4.35 6.97502V5.40002H7.35L7.8 6.75002L8.25 5.43002H21.48V6.04502C22.0143 5.62791 22.6774 5.41039 23.355 5.43002H27.36L28.11 7.00502V5.43002H30.465L31.2675 6.67502ZM9.4425 10.605H10.4325V6.37502H8.775L7.935 8.82002L7.8 9.28502L7.665 8.82002L6.84 6.37502H5.1825V10.605H6.165V7.83002V7.18502L6.375 7.83002L7.335 10.605H8.25L9.2475 7.83002L9.4425 7.18502V7.83002V10.605ZM14.625 7.27502H12.2475V8.02502H14.565V8.92502H12.2475V9.67502H14.625V10.575H11.25V6.37502H14.625V7.27502ZM16.8075 9.10502L18.0675 10.605H19.3725L17.9625 9.04502C18.634 8.96407 19.134 8.38614 19.1175 7.71002C19.123 7.32462 18.9606 6.95587 18.6727 6.69961C18.3848 6.44336 17.9997 6.3249 17.6175 6.37502H15.3V10.605H16.3425V9.10502H16.8075ZM20.61 10.605H19.5825V6.37502H20.61V10.605ZM23.175 10.605H23.235L23.6475 9.70502H23.325C23.0137 9.72102 22.7115 9.59791 22.4999 9.36901C22.2884 9.1401 22.1895 8.82906 22.23 8.52002V8.46002C22.1943 8.1534 22.2954 7.84663 22.5063 7.62125C22.7173 7.39587 23.0167 7.27473 23.325 7.29002H24.4425V6.37502H23.25C22.6897 6.33515 22.1401 6.54366 21.7472 6.94519C21.3544 7.34673 21.1579 7.90068 21.21 8.46002V8.52002C21.1473 9.06862 21.3297 9.61695 21.7084 10.0188C22.0871 10.4206 22.6237 10.6351 23.175 10.605ZM27.57 10.605L27.21 9.75002H25.2075L24.8475 10.635H23.7525L25.5675 6.37502H26.9175L28.725 10.605H27.57ZM31.7625 10.605H32.9625L33 6.34502H31.95V8.59502V9.10502L31.665 8.62502L30.165 6.37502H28.92V10.635H29.925V8.28002V7.78502L30.195 8.25002L31.7625 10.605ZM26.925 8.89502L26.52 7.90502L26.25 7.24502L25.98 7.90502L25.59 8.89502H26.925ZM16.3425 7.27502H17.5275C17.6603 7.26017 17.7932 7.30226 17.8933 7.39089C17.9934 7.47951 18.0512 7.60637 18.0525 7.74002C18.0562 7.87531 17.9998 8.0053 17.8985 8.09504C17.7972 8.18477 17.6614 8.22504 17.5275 8.20502H16.3425V7.27502Z"
                  fill="#296DB6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.0002 14.37H33.8027C33.4261 14.3263 33.0491 14.4485 32.7698 14.7048C32.4905 14.961 32.3364 15.3261 32.3477 15.705C32.3249 16.0552 32.4595 16.3973 32.7147 16.6381C32.97 16.8789 33.3194 16.9933 33.6677 16.95H34.6352C34.787 16.9195 34.9423 16.9836 35.0284 17.1123C35.1146 17.2411 35.1146 17.409 35.0284 17.5378C34.9423 17.6665 34.787 17.7306 34.6352 17.7H32.4677V18.6H34.6202C35.2158 18.6552 35.7748 18.3051 35.9852 17.745V19.17C35.5755 19.4233 35.1017 19.5535 34.6202 19.545H22.9052L22.0352 18.45V19.545H19.4627V18C19.0984 18.1127 18.7189 18.1684 18.3377 18.165H17.9177V19.545H14.1302L13.5002 18.63L12.8552 19.545H6.66016V13.425H12.8702L13.5002 14.325L14.1452 13.425H36.0002V14.37ZM35.5952 15.27H33.7502C33.5983 15.2395 33.443 15.3036 33.3569 15.4323C33.2707 15.5611 33.2707 15.729 33.3569 15.8578C33.443 15.9865 33.5983 16.0506 33.7502 16.02H34.7327C35.2515 15.9667 35.7465 16.2504 35.9627 16.725V14.4L35.5952 15.27ZM11.0327 15.27H8.65516V16.02H10.9877V16.905H8.65516V17.655H11.0327V18.555H7.63516V14.37H11.0327V15.27ZM13.5002 17.25L14.5202 18.6L15.8102 18.63L14.1002 16.5L15.7802 14.37H14.5352L13.5002 15.705L12.4727 14.385H11.1977L12.9002 16.5L11.2502 18.6H12.4427L13.5002 17.25ZM18.2702 17.205H16.9952V18.6H15.9902V14.37H18.3227C18.716 14.3281 19.108 14.4599 19.3963 14.7308C19.6845 15.0017 19.8402 15.3849 19.8227 15.78C19.8356 16.1806 19.6748 16.5672 19.3815 16.8403C19.0883 17.1134 18.6913 17.2464 18.2927 17.205H18.2702ZM21.8027 17.1L23.0627 18.6H24.3677L22.9502 17.04C23.4271 16.9838 23.8378 16.6773 24.0275 16.2361C24.2173 15.795 24.1573 15.2861 23.8701 14.9011C23.5828 14.5162 23.1121 14.3138 22.6352 14.37H20.3402V18.6H21.3377V17.1H21.8027ZM27.9977 15.27H25.6427V16.02H27.9602V16.905H25.6427V17.655H28.0202V18.555H24.6077V14.37H28.0202L27.9977 15.27ZM28.5602 18.6H30.7502C31.1227 18.6301 31.4904 18.5 31.761 18.2422C32.0316 17.9845 32.1795 17.6236 32.1677 17.25C32.1866 16.9034 32.0496 16.5664 31.7942 16.3313C31.5387 16.0961 31.1916 15.9875 30.8477 16.035H29.8652C29.7133 16.0656 29.558 16.0015 29.4719 15.8728C29.3857 15.744 29.3857 15.5761 29.4719 15.4473C29.558 15.3186 29.7133 15.2545 29.8652 15.285H31.6877L32.0927 14.385H29.8952C29.5213 14.3417 29.1469 14.4619 28.8681 14.7149C28.5893 14.9678 28.4333 15.3287 28.4402 15.705C28.4174 16.0552 28.552 16.3973 28.8072 16.6381C29.0625 16.8789 29.4119 16.9933 29.7602 16.95H30.7502C30.902 16.9195 31.0573 16.9836 31.1434 17.1123C31.2296 17.2411 31.2296 17.409 31.1434 17.5378C31.0573 17.6665 30.902 17.7306 30.7502 17.7H28.5602V18.6ZM22.5452 15.27H21.3602V16.2H22.5452C22.679 16.2201 22.8149 16.1798 22.9162 16.0901C23.0175 16.0003 23.0739 15.8703 23.0702 15.735C23.0713 15.6006 23.0141 15.4722 22.9135 15.3831C22.8128 15.2939 22.6785 15.2527 22.5452 15.27ZM17.0177 15.27H18.2327C18.5185 15.27 18.7502 15.5017 18.7502 15.7875C18.7502 16.0734 18.5185 16.305 18.2327 16.305H17.0177V15.27Z"
                  fill="#296DB6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
