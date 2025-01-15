<template>
   <button
      @click="slideNext"
      class="swiper-next-btn absolute top-[calc(50%-20px)] right-0 z-2 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
   >
      &gt;
   </button>
</template>

<script setup>
const props = defineProps({
   swiper: {
      type: Object,
      required: true,
   },
});

const slideNext = () => {
   if (props.swiper) {
      props.swiper.slideNext();
   }
};
</script>
