<template>
    <main class="bg-black overflow-hidden h-[calc(100dvh)] lg:h-full relative z-0 transition-colors ease-in-out">
        <InicioHero v-show="isHome"></InicioHero>
        <InicioMenu @back="salidaMenu" @animarLogo="animarPunto" v-show="!isHome"></InicioMenu>
    </main>
</template>

<script setup>
import { useWindowScroll, useDebounceFn } from '@vueuse/core'
const { y } = useWindowScroll()
const { $anime } = useNuxtApp();
const isHome = ref(true);
const isAnimating = ref(false);
const counterCredits = ref(0);
const themeColor = ref(null)


// Animaciones
const entradaHero = () => {
    isHome.value = true,    
    $anime({
        begin:()=> isAnimating.value = true,
        targets: 'main',
        backgroundColor: '#020617',
        easing: 'easeInQuad',
        duration: 1500,
        complete: () => setTimeout(()=>themeColor.value.content = '#020617',480)
    })

    $anime
    .timeline({ loop: false })
        .add({
            targets: '.heroWelcome .letra',
            opacity: [0, 1],
            translateZ: 0,
            duration: 1200,
            easing: "easeInOutQuad",
            delay: (el, i) => 200 * (i + 1),
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
        }, 0)
        .add({
            targets: '.logo path',
            fill: '#b91c1c',
            delay: (el, i) => 250 * i,
            easing: 'easeInQuad'
        }, 1000)
        .add({
            targets: ['.location', '.swipeDown'],
            opacity: [0, 1],
            easing: 'linear',
            duration: 500
        }, '-=100')
        .add({
            targets: '.idiomas',
            opacity: [0, 1],
            easing: 'easeInQuad',
            duration: 500,
            complete: () => {
                document.querySelector('#Hero').classList.add('lg:h-[103vh]'),
                isAnimating.value = false
            }
        })

    $anime({
        targets: '.logo .punto',
        translateY: [0, -10, 0],
        direction: 'alternate',
        easing: 'linear',
        duration: 500,
        delay: 4200,
        loop: true
    })
}

const salidaHero = () => {
    $anime.timeline(
        { 
            loop: false,
            begin: () => isAnimating.value = true,
            complete: () => isAnimating.value = false
        }
        ).add({
            targets: ['.heroWelcome .letra', '.location', '.swipeDown', '.idiomas'],
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
        }, '-=300')
        .add({
            targets: '.logo path',
            strokeDashoffset: [$anime.setDashoffset],
            easing: 'easeOutInSine',
            delay: (el, i) => 320 * i,
            duration: 600,
        }, 500)
        .add({
            targets: 'main',
            backgroundColor: "#000",
            easing: 'easeInQuad',
            duration: 2000,
            complete: () => entradaMenu()
        },0)
}

const entradaMenu = () => {
    isHome.value = false,
    themeColor.value.content = '#000',

    $anime.timeline({ duration: 2500}).add({
        targets: '.fondoMenu',
        opacity: [0, 1],
        easing: 'linear',
        duration:1000,
        begin:()=> bgMove()
    })
    .add({
        targets: '.enlaces .enlace',
        opacity: [0, 1],
        easing: 'linear',
        delay: (el, i) => i * 350,
        duration: 1500,
    }, 1000).add({
        targets: '.separador',
        opacity: [1, 0.4],
        scaleX: ['0%', '100%'],
        easing: 'easeInExpo',
        duration:1500
    }, 1000).add({
        targets: ['.email', '.rrss', '.secundarios'],
        opacity: [0, 1],
        easing: 'easeInSine',
        duration: 1000
    })
}

const bgMove = () => {
    $anime({
        targets: '.fondoMenu',
        backgroundPosition: '0 1000px',
        duration: 99999,
        easing: 'linear',
        loop: true,
        direction: 'alternate'
    })
}

const salidaMenu = () => {
    $anime.timeline({duration:2000})
    .add({
        begin: () => document.querySelector('.fondoMenu').classList.remove('duration-700', 'ease-in-out'),
        targets: ['.fondoMenu'],
        backgroundPosition: '0% -100%',
        opacity: [1,0],
        easing: 'linear',
    })
    .add({
        targets: ['.enlaces .enlace', '.email', '.rrss', '.secundarios'],
        opacity: [1, 0],
        easing: 'linear',
        delay: (el, i) => i * 250,
    },0)
    .add({
        targets: '.separador',
        opacity: [0.4, 1],
        scaleX: ['100%', '0%'],
        easing: 'easeOutExpo',
        complete: () => entradaHero()
    },0)
}

const animarPunto = () =>{
    counterCredits.value++
    $anime({
        targets: '#punto',
        translateY: [0, -5, 0],
        duration:500,
        easing: 'easeInOutBounce',
        complete: ()=>{
            if(counterCredits.value == 3){
                alert('Pulsado 3 veces'),
                counterCredits.value = 0
            }
        }
    })
}

// Observamos Scroll
watch(y, () => scroll())
const scroll = () => {
    if (isHome.value == false || isAnimating.value == true) {
        return
    }
    if (y.value > 20 && isAnimating.value == false) {
       salidaHero()
    }
}

onMounted(() => {

    // Save theme color meta tag on page load
    themeColor.value = document.querySelector('meta[name="theme-color"]')

    entradaHero()
    // entradaMenu()
})





</script>

