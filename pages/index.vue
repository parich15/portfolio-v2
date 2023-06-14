<template>
    <main class="bg-black overflow-hidden h-[calc(100dvh)] lg:h-full relative z-0">
        <div class="fixed top-0 z-50">
            <h3 class="text-white">{{ y }}</h3>
        </div>
            <InicioHero v-show="isHome"></InicioHero>
            <InicioMenu @back="entradaHero" v-show="!isHome"></InicioMenu>
    </main>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const {$anime} = useNuxtApp();
const isHome = ref(true);

// Animaciones
const entradaHero = () => {
    isHome.value = true
    $anime({
        targets: 'main',
        backgroundColor: '#020617',
        easing: 'easeInQuad',
        duration:3000,
        direction: 'normal'
    })
    
    $anime.timeline({ loop: false})
    .add({
        targets: '.heroWelcome .letra',
        opacity: [0, 1],
        translateZ: 0,
        duration: 1000,
        easing: "easeInOutQuad",
        delay: (el, i) => 150 * (i + 1),
        begin: () => document.querySelector('#Hero').style = ""
        }, '-=100')
        .add({
            targets: '.logo path',
            strokeDashoffset: [$anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            stroke: '#b91c1c',
            delay: (el, i) => 320 * i,
            direction: 'reverse',
        }, 400)
        .add({
            targets: '.logo path',
            fill: '#b91c1c',
            delay: (el, i) => 250 * i,
            easing: 'easeInQuad'
        }, 1500)
        .add({
            targets: ['.location', '.swipeDown'],
            opacity: [0, 1],
            easing: 'linear',
            duration: 500
        }, '-=100').add({
            targets: '.idiomas',
            opacity: [0, 1],
            easing: 'easeInQuad',
            duration: 500,
            complete: () => document.querySelector('#Hero').classList.add('lg:h-[103vh]')
        })

    $anime({
        targets: '.logo .punto',
        translateY: [0, -10, 0],
        direction: 'alternate',
        easing: 'linear',
        duration: 400,
        delay: 4200,
        loop: true
    })
}

const salidaHero = () => {
    $anime.timeline({loop:false})
        .add({
            targets:['.heroWelcome','.location','.swipeDown','.idiomas'],
            opacity: [1,0],
            easing: 'easeOutQuad',
            duration: 500
        })
        .add({
            targets: '.logo path',
            fill: "rgba(0, 0, 0, 0)",
            easing: 'easeOutCubic',
            delay: (el, i) => 250 * i,
            duration:800
        },'-=200')
        .add({
            targets: '.logo path',
            strokeDashoffset: [0, $anime.setDashoffset],
            easing: 'easeOutInSine',
            delay: (el, i) => 320 * i,
            direction: 'reverse',
            duration: 800
        },400)
        .add({
            targets: 'main',
            backgroundColor: "#ef4444",
            easing: 'easeInQuad',
            duration:700,
            complete: () => isHome.value = false
        },'-=10')
}

// Observamos Scroll

watch(y, () => scroll())

function scroll (){
    let limit = 20;
    if(y.value < limit){
        salidaHero()
    }
}

onMounted(()=>{
    // Fundido a negro on start
    entradaHero()
    
})


    
    

</script>

