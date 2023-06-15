<template>
    <main class="bg-black overflow-hidden h-[calc(100dvh)] lg:h-full relative z-0 transition-colors ease-in-out duration-1000">
        <InicioHero v-show="isHome"></InicioHero> 
        <InicioMenu @back="salidaMenu" v-show="!isHome"></InicioMenu>
    </main>
</template>

<script setup>
import { useWindowScroll, useDebounceFn } from '@vueuse/core'
const { y } = useWindowScroll()
const { $anime } = useNuxtApp();
const isHome = ref(true);

// Animaciones
const entradaHero = () => {
    isHome.value = true
    $anime({
        targets: 'main',
        backgroundColor: '#020617',
        easing: 'easeInQuad',
        duration: 3000,
        direction: 'normal'
    })

    $anime.timeline({ loop: false })
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
    $anime.timeline({ loop: false })
        .add({
            targets: ['.heroWelcome', '.location', '.swipeDown', '.idiomas'],
            opacity: [1, 0],
            easing: 'easeOutQuad',
            duration: 500
        })
        .add({
            targets: '.logo path',
            fill: "rgba(0, 0, 0, 0)",
            easing: 'easeOutCubic',
            delay: (el, i) => 250 * i,
            duration: 800
        }, '-=200')
        .add({
            targets: '.logo path',
            strokeDashoffset: [$anime.setDashoffset],
            easing: 'easeOutInSine',
            delay: (el, i) => 320 * i,
            duration: 600,
        }, 400)
        .add({
            targets: 'main',
            backgroundColor: "#000",
            easing: 'easeInQuad',
            duration: 1400,
            complete: () => entradaMenu()
        }, 2000)
}

const entradaMenu = () => {
    isHome.value = false
    $anime.timeline({ duration: 4000 }).add({
        targets: '.fondoMenu',
        opacity: [0, 1],
        backgroundSize: ['17vmin 17vmin', '12vmin 12vmin'],
        backgroundPosition: ['0% 50%', '10% -10%'],
        easing: 'easeInOutSine',
    })
        .add({
            targets: '.enlaces .enlace',
            opacity: [0, 1],
            easing: 'linear',
            delay: (el, i) => i * 250,
            duration: 2000,
        }, 1500).add({
            targets: '.separador',
            opacity: [1, 0.4],
            scaleX: ['0%', '100%'],
            easing: 'easeInExpo',
            duration: 3500
        }, 0).add({
            targets: ['.email', '.rrss', '.secundarios'],
            opacity: [0, 1],
            easing: 'easeInSine',
            duration: 800
        })
}

const salidaMenu = () => {
    $anime.timeline({duration:2500}).add({
        targets: ['.enlaces .enlace', '.email', '.rrss', '.secundarios', '.fondoMenu'],
        opacity: [1, 0],
        easing: 'linear',
        delay: (el, i) => i * 250,
        duration: 2000
    }).add({
        targets: '.separador',
        opacity: [0.4, 1],
        scaleX: ['100%', '0%'],
        easing: 'easeOutExpo',
        complete: () => entradaHero()
    }, 250)
}


// Observamos Scroll
watch(y, () => scroll())
const scroll = () => {
    if (isHome.value != true) {
        return
    }
    if (y.value > 20) {
        salidaHero()
    }
}

onMounted(() => {
    // Fundido a negro on start
    entradaHero()
    // entradaMenu()
})





</script>

