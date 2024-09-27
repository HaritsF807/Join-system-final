
<script setup>
import ContentFrame1 from './components/ContentFrame1.vue';
import Mitra from './components/Mitra.vue';
import Kartu from './components/Kartu.vue';
import KomponenBawah from './components/KomponenBawah.vue';
import Gabung from './components/GabungBro.vue';
import Kaki from './components/Footer.vue';
</script>

<template>
  <header class="h-20">
    <div class="flex justify-between items-center max-h-[80px] px-32 py-16">
      <img src="./assets/img/Brand.svg" alt="logo join sistem" class="max-w-[117.54px] max-h-[28px]">

      <ul class="flex space-x-4">
        <li class="font sans text-[16px] leading-7"><a href="#">Home</a></li>
        <li class="font sans text-[16px] leading-7"><a href="#">Blog</a></li>
        <li class="font sans text-[16px] leading-7"><a href="#">About Us</a></li>
        <li class="font sans text-[16px] leading-7"><a href="#">Contact Us</a></li>
      </ul>

      <button class="bg-[#075EFD] text-white font-bold px-8 py-3 rounded-[63px]">
        Contact Us
      </button>
    </div>

  </header>

  <main>
    <ContentFrame1 />
    <Mitra />
    <Kartu />
    <KomponenBawah />
    <Gabung />
    <Kaki />
  </main>
</template>
