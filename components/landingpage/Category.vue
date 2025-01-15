<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
</script>
<template>
   <section class="py-16">
      <div class="container">
         <h2 class="text-[38px] leading-[50px] font-medium">
            Browser Our Category <br />
            <span class="text-primary">Receipt</span>
         </h2>

         <Swiper
            :slides-per-view="5"
            :space-between="10"
            :loop="true"
            class="mySwiper mt-8"
         >
            <SwiperSlide>
               <div
                  class="py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300 bg-cupcake"
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="flex items-center flex-col relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        src="~/assets/icons/ic_cupcake.png"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">cupcake</h5>
                     <h6 class="text-sm mt-1">22 Items</h6>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                  class="py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300 bg-pizza"
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="flex items-center flex-col relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        src="~/assets/icons/ic_pizza.png"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">pizza</h5>
                     <h6 class="text-sm mt-1">25 Items</h6>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                  class="py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300 bg-kebab"
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="flex items-center flex-col relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        src="~/assets/icons/ic_kebab.png"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">kebab</h5>
                     <h6 class="text-sm mt-1">12 Items</h6>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                  class="py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300 bg-salmon"
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="flex items-center flex-col relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        src="~/assets/icons/ic_salmon.png"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">salmon</h5>
                     <h6 class="text-sm mt-1">22 Items</h6>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                  class="py-[30px] hover:pb-[48px] group rounded-lg transition-all duration-300 bg-doughnut"
               >
                  <div class="inset-0 absolute">
                     <div
                        class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                     ></div>
                  </div>
                  <div class="flex items-center flex-col relative z-10">
                     <img
                        class="w-[47px] h-[47px]"
                        src="~/assets/icons/ic_doughnut.png"
                        alt="icon category"
                     />
                     <h5 class="font-medium capitalize mt-6">doughnut</h5>
                     <h6 class="text-sm mt-1">22 Items</h6>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>
</template>
