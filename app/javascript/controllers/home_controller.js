import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.renderHome();
  }

  async renderHome() {
    const url = 'http://localhost:3000/images/4.json';
    const response = await fetch(url);
    const image = await response.json();
    console.log(image);
    
    // Adiciona o conteúdo da Home
    this.element.innerHTML = `
      <div class="w-full h-[800px] px-40 py-60 bg-cover bg-center" style="background-image: url('${image.file_url}');">
        <div class=" text-6xl font-bold text-white">
          <h1>Seu Nome</h1>
        </div>
        <div class=" text-xl text-white">
          <h2>Professional Portfolio</h2>
        </div>
        <div class=" mt-8 text-white">
          <a href="/about" class="border-2 border-white py-2 px-4">Get to know a little about me!</a>
        </div>
      </div>
    `;
    this.renderAbout();
    await this.renderAlbums();
    this.renderContacts();
  }

  renderAbout() {
    // Adiciona o conteúdo do About logo após o conteúdo existente da Home
    this.element.insertAdjacentHTML('beforeend', `
      <section class="bg-white dark:bg-gray-900 py-20">
        <div class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <!-- Texto sobre a pessoa -->
          <div class="w-full lg:w-1/2 text-center lg:text-left">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              About me
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Hello, I'm <strong>João da Silva</strong>, a photographer specialized in transforming emotions into unforgettable images. With over 10 years of experience, I've captured moments from intimate weddings to large corporate events. Photography for me is more than just a job—it's a passion that allows me to tell stories through every click of the camera.  
            </p>
            <a href="/about" class="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
              More
            </a>
          </div>
          <!-- Imagem -->
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
            <img class="rounded-lg shadow-lg max-w-xs lg:max-w-sm" src="https://via.placeholder.com/300" alt="Imagem da Pessoa">
          </div>
        </div>
      </section>
    `);
  }

  async renderAlbums() {
    const url = 'http://localhost:3000/album_images.json'
    const response = await fetch(url);
    const albums = await response.json()
    console.log(albums);
    this.element.insertAdjacentHTML('beforeend', `
    <section class="py-20 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Albums</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Album 1 -->
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
              <div class="p-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Álbum 1: Natureza</h3>
                <p class="mb-4 text-gray-700 dark:text-gray-400">Uma coleção de fotos que capturam a beleza da natureza.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 p-4">
                <!-- Card 1 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 1">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 1</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 1.</p>
                  </div>
                </a>
                <!-- Card 2 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 2">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 2</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 2.</p>
                  </div>
                </a>
                <!-- Card 3 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 3">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 3</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 3.</p>
                  </div>
                </a>
                <!-- Card 4 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 4">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 4</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 4.</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Album 2 -->
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
              <div class="p-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Álbum 2: Retratos</h3>
                <p class="mb-4 text-gray-700 dark:text-gray-400">Retratos que capturam emoções e histórias.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 p-4">
                <!-- Card 1 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 1">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 1</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 1.</p>
                  </div>
                </a>
                <!-- Card 2 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 2">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 2</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 2.</p>
                  </div>
                </a>
                <!-- Card 3 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 3">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 3</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 3.</p>
                  </div>
                </a>
                <!-- Card 4 -->
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img class="object-cover w-full h-48 rounded-t-lg" src="https://via.placeholder.com/300" alt="Descrição da Imagem 4">
                  <div class="p-4">
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white">Imagem 4</h5>
                    <p class="text-gray-700 dark:text-gray-400">Descrição da imagem 4.</p>
                  </div>
                </a>
              </div>
            </div>                  
        </div>
      </div>
    </section>         
    `);
  }

  renderContacts() {
    this.element.insertAdjacentHTML('beforeend', `
      <div class="w-full h-[800px] px-40 flex justify-center items-center bg-cover bg-center" style="background-image: url('https://via.placeholder.com/1980x1020');">
          <div class="bg-white dark:bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Lado Esquerdo: Informações de Contato -->
            <div class="flex flex-col justify-center">
              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Localização</h3>
              <p class="text-lg text-gray-600 dark:text-gray-300">Rua Exemplo, 123<br>Cidade, Estado</p>

              <h3 class="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Telefone</h3>
              <p class="text-lg text-gray-600 dark:text-gray-300">(11) 1234-5678</p>
            </div>

            <!-- Lado Direito: Formulário de Contato -->
            <div>
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
                  <input type="text" id="name" name="name" class="w-full mt-1 p-3 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input type="email" id="email" name="email" class="w-full mt-1 p-3 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
                  <input type="text" id="subject" name="subject" class="w-full mt-1 p-3 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                </div>
                
                <div class="text-right">
                  <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Enviar</button>
                </div>
              </form>
            </div>
          </div>
      </div>  
    `);
  }
}
