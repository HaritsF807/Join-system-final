
<template>
    <div class="bg-blue-950 text-white py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <img src="../assets/img/Group 147.png" />
          <div class="py-8">
            <h4 class="text-gray-400 font-bold">Jogja Office</h4>
            <p class="text-gray-400 font-manrope">
              Jl. Kresna, Gamping Kidul, Ambarketawang, Kec. Gamping, Kabupaten
              Sleman, DIY 55294
            </p>
          </div>
          <div>
            <h4 class="text-gray-400 font-bold">Jakarta Office</h4>
            <p class="text-gray-400 font-manrope">
              Cibis Nine Building Lantai 11 Jl. TB Simatupang No. 2 Jakarta
              Selatan
            </p>
          </div>
        </div>
  
        <!-- Bootcamp Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Bootcamp</h3>
          <ul class="text-gray-400 font-semibold space-y-5">
            <li><a href="#" class="hover:underline">Devops</a></li>
            <li><a href="#" class="hover:underline">Quality Assurance</a></li>
            <li><a href="#" class="hover:underline">Full Stack Developer</a></li>
            <li><a href="#" class="hover:underline">Project Manager</a></li>
          </ul>
        </div>
  
        <!-- SISTEM Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">SISTEM</h3>
          <ul class="text-gray-400 font-semibold space-y-5">
            <li><a href="#" class="hover:underline">Tentang Kami</a></li>
            <li><a href="#" class="hover:underline">Events</a></li>
            <li><a href="#" class="hover:underline">FAQ</a></li>
          </ul>
        </div>
  
        <!-- Contact Info -->
        <div>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
          <h3 class="text-lg font-bold mb-4">Ikuti Kami</h3>
          <ul class="text-gray-400 font-semibold space-y-5">
            <li>
              <a href="#" class="flex items-center space-x-2 hover:underline">
                <i class="fab fa-instagram"></i>
                <span>@solutionlabs</span>
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-phone-alt text-green-400"></i>
              <span>+62 811-269-086</span>
            </li>
            <li class="flex items-center space-x-2">
              <i class="fas fa-envelope text-green-400"></i>
              <span>putro@solutionlabs.id</span>
            </li>
          </ul>
        </head>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
