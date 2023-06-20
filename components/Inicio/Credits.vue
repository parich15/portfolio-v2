<template>
    <div class="absolute top-0 z-40 h-screen w-full overflow-hidden bg-black/10 backdrop-blur-md">
        <section class="flex h-full p-12 items-center">
            <div
                class="container max-w-2xl shadow-xl shadow-gray-700/60 relative mx-auto bg-slate-950 h-[500px] ring rounded-sm ring-slate-800">

                <div class="p-7">
                    <div class="flex justify-between items-center">
                        <h4 class=" font-display text-white text-2xl">Credits</h4>
                        <button class="text-slate-700 hover:text-white transition-all hover:scale-105" @click="$emit('close')">
                            <XMarkIcon class="h-7 w-7 fill-inherit"></XMarkIcon>
                        </button>
                    </div>
                    <div class="my-5 text-white font-primary">
                        <p class="text-sm md:text-base">
                            Hey! You found this secret message! I'm glad to let you know that the magic behind this site
                            is possible thanks to an amazing set of tools and an awesome group of people:
                        </p>
                        <div class="border-2 border-slate-900 rounded-sm h-[270px] md:h-[320px] overflow-auto  p-2 mt-4">
                            <!-- Tecnologias -->
                            <h5 class="font-display text-sm opacity-50 mt-1 text-center mb-3">Powered by:</h5>
                            <div class="grid grid-cols-2 gap-y-3 md:gap-y-5 mb-5">
                                <a :href="tecnologia.url" target="_blank" v-for="tecnologia in poweredBy" :key="tecnologia.id">
                                     <p class="flex gap-3 justify-center text-xs md:text-base hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img loading="lazy" :src="`assets/logos/${tecnologia.nombre.replace(/ /g,'')}.svg`" :alt="`Logo ${tecnologia.nombre}`" class="h-3 w-3 md:h-5 md:w-5">
                                        {{tecnologia.nombre}}
                                    </p>
                                </a>
                            </div>

                            <!-- Separador -->
                            <hr class=" w-8/12 mx-auto opacity-10">

                            <!-- Inspiracion -->
                            <h5 class="font-display text-sm opacity-50 mt-5 text-center mb-3 ">Inspired by:</h5>
                            <div class="grid grid-cols-2 mb-5">
                                <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                                     <p class="flex gap-3 justify-center items-center text-xs md:text-base hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img loading="lazy" src="assets/logos/Youtube.svg" alt="Logo Youtube" class="h-3 w-3 md:h-5 md:w-5">
                                        Hyperplexed
                                    </p>
                                </a>
                                <a href="https://www.awwwards.com/" target="_blank">
                                     <p class="flex gap-3 items-center justify-center text-xs md:text-base hover:scale-110 transition-transform duration-200 ease-in-out">
                                        <img loading="lazy" src="assets/logos/Awwwards.svg" alt="Logo Awwwards" class="h-3 w-3 md:h-5 md:w-5">
                                        Awwwards
                                    </p>
                                </a>
                            </div>

                            <!-- Separador 2 -->
                            <hr class=" w-8/12 mx-auto opacity-10">
                            <h5 class="font-display text-sm opacity-50 mt-5 text-center mb-3 ">Special Thanks</h5>
                            <div class="mx-4">
                                <p class="text-xs text-center">
                                    I want to thank to all my people who helped me during the development of this website and/or other projects:
                                </p>
                                <ul class="text-center text-xs mt-2">
                                    <li>- My Parents</li>
                                    <li class=" opacity-30 mb-3">For being always there</li>
                                    <li>- My Gf Paola</li>
                                    <li class=" opacity-30 mb-3">For supporting and loving me</li>
                                    <li>- Ivan & Eric Martin</li>
                                    <li class=" opacity-30 mb-3">For being the best mates</li>
                                    <li>- Edu G.</li>
                                    <li class=" opacity-30 mb-3">For being faithfull in me  always</li>
                                    <li>- My Dog Milú</li>
                                    <li class=" opacity-30 mb-3">'Cause he is a good boy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
defineEmits(['close']);
const poweredBy = [
    {id:1,nombre:'Nuxt 3', url:'https://nuxt.com/'},
    {id:2,nombre:'Anime Js', url:'https://animejs.com/'},
    {id:3,nombre:'VueUse', url:'https://vueuse.org/'},
    {id:4,nombre:'Tailwind Css', url:'https://tailwindcss.com/'},
    {id:5,nombre:'Splide', url:'https://splidejs.com/'},
    {id:6,nombre:'Netlify', url:'https://www.netlify.com/'},
]
</script>
