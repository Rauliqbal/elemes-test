<script setup>
function showHide() {
   document.getElementById("hamburger").checked = false;
}

const links = [
   {
      title: "Home",
      url: "/",
      hot: false,
   },
   {
      title: "About",
      url: "/",
      hot: false,
   },
   {
      title: "Promotions",
      url: "/",
      hot: true,
   },
   {
      title: "Blogs",
      url: "/",
      hot: false,
   },
   {
      title: "Contact Us",
      url: "/",
      hot: false,
   },
];
</script>

<template>
   <nav class="py-6">
      <div class="container">
         <div class="flex items-center justify-between">
            <div class="relative">
               <NuxtLink to="/">
                  <img
                     class="h-[50px]"
                     src="~/assets/images/nav-logo.png"
                     alt="Elemes group"
                  />
               </NuxtLink>
            </div>

            <div class="md:flex items-center hidden">
               <ul
                  class="bg-white flex px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-8 md:pt-0"
               >
                  <li v-for="link in links" :key="link">
                     <NuxtLink
                        @click="showHide"
                        class="capitalize font-Medium text-sm hover:text-primary transition ease-out duration-200 relative"
                        :to="link.url"
                        >{{ link.title }}
                        <p
                           v-if="link.hot"
                           class="-top-4 -right-4 absolute leading-[14px] text-[8px] text-white inline-flex items-center bg-[#E7462D] px-[9px] py-[2px] font-bold rounded-lg"
                        >
                           HOT
                        </p>
                     </NuxtLink>
                  </li>
               </ul>
            </div>
            <div class="flex items-center gap-6">
               <UiButton class="hidden md:block" label="Masuk" />
               <UiButton
                  class="btn--primary btn--rounded"
                  label="Daftar Sekarang"
               />
            </div>
         </div>
      </div>
   </nav>
</template>
