<template>
  <div
    class="bg-purple-50 py-8 px-6 shadow-md max-w-5xl mx-auto relative overflow-hidden"
  >
    <!-- Top bar with solid colors: white, yellow, and blue -->
    <div class="absolute top-0 left-0 right-0 h-4 flex">
      <div class="bg-white w-1/4"></div>
      <!-- White block -->
      <div class="bg-yellow-400 w-5/6 -ml-32"></div>
      <!-- Yellow block -->
      <div class="bg-blue-600 w-1/4"></div>
      <!-- Blue block -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      <!-- About Us Section -->
      <div>
        <h2 class="text-sm font-semibold text-gray-600">TENTANG KAMI</h2>
        <h1 class="text-2xl font-bold text-gray-900 mt-2">
          Mulai Karir Sukses Anda di Teknik Perangkat Lunak dengan SISTEM
          BOOTCAMP
        </h1>
        <p class="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <!-- Our Mission Section -->
      <div>
        <h2 class="text-sm font-semibold text-gray-600">MISI KAMI</h2>
        <h1 class="text-2xl font-bold text-gray-900 mt-2">
          Membuat Peradaban Teknologi yang Terbaik untuk seluruh dunia
        </h1>
        <p class="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* Custom styles if needed */
</style>