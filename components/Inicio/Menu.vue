<template>
    <div id="Menu" class="relative z-0">
        <div class=" relative z-10 container flex flex-col mx-auto justify-between h-[calc(100dvh)]">
            <!-- Boton atras -->
            <div class="inline-block secundarios mx-3 lg:mx-8">
                <button @click="$emit('back')"
                    class="flex items-center backButton mt-10 opacity-60 transition-opacity hover:opacity-100 group">
                    <ChevronDoubleLeftIcon
                        class="h-4 w-4 text-white mr-2 transition-transform group-hover:scale-105 group-hover:animate-pulse  ">
                    </ChevronDoubleLeftIcon>
                    <span class=" font-primary font-light text-white text-sm">Back to presentation</span>
                </button>
            </div>

            <!-- Enlaces -->

            <div class="flex flex-col mx-7 lg:ml-12">
                <ul class="enlaces font-primary font-semibold text-5xl lg:text-7xl text-gray-200/50 flex flex-col">
                    <li v-for="enlace in Enlaces" :key="enlace.id" @mouseenter="cambiarColor(enlace.id)"
                        @mouseleave="resetColor"
                        class="opacity-1 enlace my-6 py-5 relative inline-block transition-all w-max before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-black/10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white/60 before:rounded-sm hover:scale-110 hover:text-white ">
                        <a href="#">{{ enlace.texto }}</a>
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div id="footer">
                <div class="separador h-0.5 scale-x-0 bg-white origin-center transition-transform"></div>
                <div class="pt-3 pb-3 px-3">
                    <div class="flex justify-between items-center">
                        <div class="email">
                            <a class="flex font-primary font-light items-center text-white text-xs">
                                <EnvelopeIcon class="h-5 w-5 mr-2" />
                                GET IN TOUCH
                            </a>
                        </div>
                        <div class="rrss flex gap-4">
                            <a href="#" class="transition-all text-white hover:scale-125 origin-center hover:text-red-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 496 512"
                                    fill="currentcolor">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>
                            <a href="#"
                                class=" transition-all text-white hover:scale-125 origin-center hover:text-red-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 448 512"
                                    fill="currentcolor">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </a>
                            <a href="#"
                                class=" transition-all text-white hover:scale-125 origin-center hover:text-red-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 448 512"
                                    fill="currentcolor">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div class="secundarios flex justify-between items-center my-4 text-white">
                        <h5 class="font-display text-sm cursor-pointer" @click="$emit('animarLogo')">Paric<span id="punto" class=" inline-block">.</span>io
                        </h5>
                        <p class="text-xs font-light font-primary">2018 - {{ new Date().getFullYear() }}. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fondoMenu transition-all absolute w-screen h-screen top-0 left-0 -z-10"></div>

    </div>
</template>

<script setup>
import { ChevronDoubleLeftIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
defineEmits(['back' , 'animarLogo']);

const Enlaces = [
    {
        id: 1,
        css: 'projects',
        enlace: '/projects',
        texto: 'Projects',
    },
    {
        id: 2,
        css: 'about',
        enlace: '/about',
        texto: 'About Me'
    },
    {
        id: 3,
        css: 'blog',
        enlace: '/blog',
        texto: 'Dev Blog'
    },
]

const cambiarColor = (id) => {
    const main = document.querySelector('main');
    const fondo = document.querySelector('.fondoMenu')
    switch (id) {
        case 1:
            main.style.backgroundColor = '#ef4444',
                fondo.style.backgroundPosition = '0% -20%';
            break
        case 2:
            main.style.backgroundColor = '#172554',
                fondo.style.backgroundPosition = '0% -50%';
            break
        case 3:
            main.style.backgroundColor = '#1e1b4b',
                fondo.style.backgroundPosition = '0% -100%';
            break
        default:
            resetColor()
            break
    }
}
const resetColor = () => {
    document.querySelector('main').style = '',
        document.querySelector('.fondoMenu').style = ''
}


</script>

<style>.fondoMenu {
    background: radial-gradient(rgba(2225, 255, 255, 0.1) 9%,
            transparent 9%);
    background-color: rgba(0, 0, 0, 0.342);
    background-position: 0% 0%;
    background-size: 15vmin 15vmin;
    /* box-shadow: inset 0px 0px 20px 20px rgb(0 0 0 / 70%); */
}</style>
