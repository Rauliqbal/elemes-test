<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const swiperInstance = ref({});
const onSwiper = (swiper) => {
   swiperInstance.value = swiper;
};

function prev() {
   this.$refs.swiper.$swiper.slidePrev();
}
function next() {
   this.$refs.swiper.$swiper.slideNext();
}

const categories = [
   {
      name: "cupcake",
      qty: 22,
      icon: "ic_cupcake",
   },
   {
      name: "pizza",
      qty: 25,
      icon: "ic_pizza",
   },
   {
      name: "kebab",
      qty: 12,
      icon: "ic_kebab",
   },
   {
      name: "salmon",
      qty: 22,
      icon: "ic_salmon",
   },
   {
      name: "doughnut",
      qty: 11,
      icon: "ic_donut",
   },
   {
      name: "doughnut",
      qty: 22,
      icon: "ic_donut",
   },
];
</script>
<template>
   <section class="py-16">
      <div class="container">
         <h2 class="text-[38px] leading-[50px] font-medium">
            Browser Our Category <br />
            <span class="text-primary">Receipt</span>
         </h2>

         <Swiper
            ref="swiper"
            :slides-per-view="5"
            :space-between="10"
            :loop="true"
            class="mySwiper mt-8"
         >
            <SwiperSlide v-for="item in categories">
               <div
                  :key="item"
                  :class="
                     'flex items-center flex-col py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300  bg-' +
                     item.name
                  "
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        :src="'/icons/' + item.icon + '.png'"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">
                        {{ item.name }}
                     </h5>
                     <h6 class="text-sm mt-1">{{ item.qty }} Items</h6>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>

         <div class="navigation">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
         </div>
      </div>
   </section>
</template>
