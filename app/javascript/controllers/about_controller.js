import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.innerHTML = `
      <div class="w-full flex flex-col justify-center items-center h-[800px] px-40 py-60 bg-cover bg-center" style="background-image: url('https://via.placeholder.com/1980x1020');">
        <h1 class="text-7xl font-bold text-white ">About me</h1>
        <p class="text-md text-white">A little about me!</p>
      </div>
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center">
        <!-- Seção de Apresentação -->
        <section class="w-full max-w-6xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center justify-center gap-8">
          <!-- Foto -->
          <div class="w-full lg:w-1/2">
            <img src="https://via.placeholder.com/500" alt="Fotógrafo em ação" class="rounded-lg shadow-lg">
          </div>
          <!-- Texto de Apresentação -->
          <div class="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 class="text-4xl font-bold">Capturing Unique Moments</h1>
            <p class="text-lg">
              
Hello, I'm <strong>João da Silva</strong>, a photographer specialized in transforming emotions into unforgettable images. With over 10 years of experience, I've captured moments from intimate weddings to large corporate events. Photography for me is more than just a job—it's a passion that allows me to tell stories through every click of the camera.</p>
            <p class="text-lg">
Throughout my career, I've developed a sharp eye for detail and mastered the ability to adapt to different lighting and environments. Whether it's the natural light of an outdoor shoot or the dynamic energy of an indoor event, I ensure every image captures the essence of the moment in its most authentic form.</p>
            <p class="text-lg">
What sets my work apart is my commitment to connecting with clients on a personal level. I love understanding each client's unique vision and bringing it to life while adding my own artistic touch. From the quiet moments to the grand celebrations, I aim to create timeless images that reflect the heart of each story.
            </p>
            <!--<button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Saiba mais</button>-->
          </div>
        </section>

        <!-- Seção de Trabalhos Realizados -->
        <section class="w-full max-w-6xl mx-auto px-8 py-24 space-y-12">
          <h2 class="text-3xl font-bold text-center">Work carried out</h2>

          <!-- Trabalho 1 -->
          <div class="flex flex-col lg:flex-row gap-8 items-center">
            <div class="w-full lg:w-1/2">
              <img src="https://via.placeholder.com/400" alt="Projeto de casamento" class="rounded-lg shadow-lg">
            </div>
            <div class="w-full lg:w-1/2 space-y-4">
              <h3 class="text-2xl font-semibold">Ana and Paulo's wedding</h3>
              <p class="text-lg">Complete coverage of a beach wedding, focusing on the details and the couple's emotions. Equipment used: Canon EOS 5D Mark IV, 50mm f/1.4 lens.</p>
              <p class="text-gray-500">Techniques: Natural light photography, manual exposure adjustments to capture the sunset.</p>
            </div>
          </div>

          <!-- Trabalho 2 -->
          <div class="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div class="w-full lg:w-1/2">
              <img src="https://via.placeholder.com/400" alt="Evento corporativo" class="rounded-lg shadow-lg">
            </div>
            <div class="w-full lg:w-1/2 space-y-4">
              <h3 class="text-2xl font-semibold">Corporate Event - TechConf 2023</h3>
              <p class="text-lg">Photographic record of a corporate event for TechConf, focusing on key moments of the lectures and networking.</p>
              <p class="text-gray-500">Techniques: Photography in low-light environments, use of external flash and editing for color correction.</p>
            </div>
          </div>
        </section>
      </div>
    
      `
  }
}
