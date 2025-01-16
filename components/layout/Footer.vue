<script setup>
const contacts = [
   {
      label: "elemesid@gmail.com",
      icon: "ic_mail.svg",
      url: "#",
   },
   {
      label: "0888 1111 2222 ",
      icon: "ic_phone.svg",
      url: "#",
   },
   {
      label: "elemes.id",
      icon: "ic_instagram.svg",
      url: "#",
   },
];
</script>
<template>
   <footer class="container">
      <div class="bg-[#F9FFF6] rounded-[20px] p-16">
         <div class="grid grid-cols-5">
            <div class="col-span-2">
               <img src="~/assets/images/nav-logo.png" alt="Logo Elemes" />
               <p class="text-sm text-secondary mt-4">
                  Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                  Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus
                  Ibukota Jakarta 12950
               </p>
               <div class="flex items-center gap-2 mt-[33px]">
                  <div
                     v-for="item in contacts"
                     :key="item"
                     class="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary group transition-all duration-300"
                  >
                     <img
                        class="group-hover:brightness-[5] w-5 transition-all duration-300"
                        :src="'/icons/' + item.icon"
                        alt="icon"
                     />
                  </div>
               </div>
            </div>
            <div>
               <h5 class="text-lg font-medium">Categories</h5>

               <ul class="flex flex-col gap-[19px] text-sm mt-[33px]">
                  <li class="text-secondary capitalize">cupcake</li>
                  <li class="text-secondary capitalize">pizza</li>
                  <li class="text-secondary capitalize">kebab</li>
                  <li class="text-secondary capitalize">salmon</li>
                  <li class="text-secondary capitalize">doughnut</li>
               </ul>
            </div>
            <div>
               <h5 class="text-lg font-medium">About us</h5>

               <ul class="flex flex-col gap-[19px] text-sm mt-[33px]">
                  <li class="text-secondary">About Us</li>
                  <li class="text-secondary">FAQ</li>
                  <li class="text-secondary">Report Problem</li>
               </ul>
            </div>
         </div>
      </div>
      <p
         class="text-center uppercase text-secondary text-[12px] tracking-[5%] pt-[48px] pb-8"
      >
         &copy; 2021 Elemes id. All rights reserved
      </p>
   </footer>
</template>
