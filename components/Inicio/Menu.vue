<template>
    <div class="relative h-screen overflow-hidden z-0">
        <div class="fondoMenu absolute w-screen h-screen top-0 left-0 -z-10"></div>
        <div class=" relative z-10 px-10 py-20 container flex flex-col justify-between h-full">
            <!-- Boton atras -->
            <div class="inline-block">
                <button @click="$emit('back')" class="flex items-center backButton ">
                    <ChevronDoubleLeftIcon class="h-5 w-5 text-white mr-2"></ChevronDoubleLeftIcon>
                    <span class=" font-primary font-light text-white text-sm">Back to presentation</span>
                </button>
            </div>

            <!-- Enlaces -->

            <div class="flex flex-col">
                <ul class="enlaces ml-4 font-primary font-semibold text-5xl text-white" v-for="enlace in Enlaces" :key="enlace.id">
                    <li class="my-16">{{enlace.texto}}</li>
                </ul>
            </div>

            <!-- Footer -->
            <div>
                <div class="separador h-0.5 w-full bg-white"></div>
                
            </div>
        </div>


    </div>
</template>

<script setup>
import { ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline';
defineEmits(['back']);

const Enlaces = [
    {   
        id: 1,
        enlace: '/projects',
        texto: 'Projects'
    },
    {
        id: 2,
        enlace: '/about',
        texto: 'About Me'
    },
    {
        id: 3,
        enlace: '/blog',
        texto: 'Dev Blog'
    },
]

</script>

<style>
.fondoMenu{
    background: radial-gradient(
        rgba(2225, 255, 255,  0.1) 9%,
        transparent 9%
    );
    background-position: 0% 0%;
    background-size: 12vmin 12vmin
}
</style>
