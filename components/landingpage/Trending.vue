<script setup>
const items = [
   {
      name: "pizza paperoni",
      category: "pizza",
      image: "item-1",
      rating: 4,
      background: "#E6F3F5",
   },
   {
      name: "Pizza Meat",
      category: "pizza",
      image: "item-2",
      rating: 3,
      background: "#E6F3F5",
   },
   {
      name: "Doner Kebab",
      category: "kebab",
      image: "item-3",
      rating: 5,
      background: "#EAEEFA",
   },
   {
      name: "Salmon Roll",
      category: "salmon",
      image: "item-4",
      rating: 4,
      background: "#F9EEF3",
   },
   {
      name: "Cupcake Choco",
      category: "cupcake",
      image: "item-5",
      rating: 4,
      background: "#F0FEEB",
   },
   {
      name: "Doughnut Milk",
      category: "doughnut",
      image: "item-6",
      rating: 5,
      background: "#F3F7D9",
   },
   {
      name: "Doughnut Unicorn",
      category: "doughnut",
      image: "item-7",
      rating: 4,
      background: "#F3F7D9",
   },
   {
      name: "Kathi Kebab",
      category: "kebab",
      image: "item-8",
      rating: 4,
      background: "#EAEEFA",
   },
];
</script>
<template>
   <section class="py-16">
      <div class="container">
         <h2 class="text-[38px] leading-[50px] font-medium">
            Browser Our Tending <br />
            <span class="text-primary">Receipt</span>
         </h2>

         <div class="grid lg:grid-cols-4 gap-x-5 gap-y-[30px] mt-8">
            <div
               v-for="item in items"
               :key="item"
               :class="
                  'py-[33px] px-5 rounded-[17px] relative shadow-[0px_11px_39px_0px_rgba(0,0,0,0.07)] group bg-' +
                  item.category
               "
            >
               <div class="inset-0 absolute">
                  <div
                     class="bg-[url('~/assets/images/bg-category.png')] h-full bg-cover bg-center opacity-0 group-hover:opacity-[7%] transition-all duration-300"
                  ></div>
               </div>

               <div class="relative">
                  <img
                     :src="'/images/' + item.image + '.png'"
                     :alt="'Item image ' + item.name"
                  />
                  <h5
                     class="text-[26px] font-medium leading-[50px] text-black capitalize mt-[19px]"
                  >
                     {{ item.name }}
                  </h5>
                  <h6
                     class="text-primary text-lg font-medium leading-[21.33px] capitalize"
                  >
                     {{ item.category }}
                  </h6>

                  <NuxtRating
                     class="mt-[19px]"
                     active-color="#FF8412"
                     inactive-color="#C9C9C9"
                     :rating-step="0.1"
                     :rounded-corners="true"
                     :rating-size="10"
                     :rating-value="item.rating"
                  />
               </div>
            </div>
         </div>

         <div class="text-center mt-[68px]">
            <button class="btn btn--primary btn--rounded">
               <span class="w-[122px] text-white font-medium">ALL Receipt</span>
            </button>
         </div>
      </div>
   </section>
</template>
