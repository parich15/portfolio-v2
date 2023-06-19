<template>
    <div class="absolute top-0 z-40 h-screen w-full overflow-hidden bg-black/80">
        <section class="flex h-full p-12">
            <div class="container relative mx-auto bg-slate-950 h-[500px] ring rounded-sm ring-slate-800">
                <button class="absolute right-5 top-5 text-slate-800 hover:text-red-500 transition-all"
                    @click="$emit('close')">
                    <XMarkIcon class="h-5 w-5 fill-inherit"></XMarkIcon>
                </button>
                <div class="p-7">
                    <h4 class=" font-display text-white text-2xl">Credits</h4>
                    <div class="overflow-y-auto my-4 text-white font-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis quas architecto labore porro voluptate dicta modi, minima ad nam, similique mollitia. Error fugit, quisquam repellat et iusto ullam! Ducimus.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
defineEmits(['close'])
</script>
