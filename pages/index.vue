<template>
    <main class="bg-black overflow-hidden h-[calc(100dvh)] lg:h-full relative z-0 transition-colors ease-in-out">
        <InicioHero ref="hero" v-show="isHome"></InicioHero>
        <InicioMenu @back="salidaMenu" @animarLogo="animarPunto" v-show="!isHome"></InicioMenu>
        <Transition name="creditos">
            <InicioCredits v-show="showSecretMessage" @close="showSecretMessage = false"></InicioCredits>
        </Transition>
    </main>
</template>

<script setup>
// Usamos Windows scroll para calcular el swipe y el efecto bounce de los moviles
import { useSwipe } from '@vueuse/core'

// Invocamos animejs y flag para saber si una animacion esta corriendo
const { $anime } = useNuxtApp();
const isAnimating = ref(false);

// Variables de la pagina (Estado Inicial, Contador Creditos y Meta ThemeColor)
const isHome = ref(true);
const hero = ref(null)
const counterCredits = ref(0);
const themeColor = ref(null)
const showSecretMessage = ref(false)


// Animaciones
// Animaciones layout
const entradaHero = () => {
    isHome.value = true,
        $anime({
            begin: () => isAnimating.value = true,
            targets: 'main',
            backgroundColor: '#020617',
            easing: 'easeInQuad',
            duration: 1500,
            complete: () => setTimeout(() => themeColor.value.content = '#020617', 480)
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
                window.addEventListener("mousewheel", scroll, true)
                // document.querySelector('#Hero').classList.add('lg:h-[calc(101.5dvh)]'),
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
            begin: () => {
                isAnimating.value = true,
                    window.removeEventListener('mousewheel', scroll, true)
            },
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
            delay: (el, i) => 150 * i,
            duration: 600,
        }, 500)
        .add({
            targets: 'main',
            backgroundColor: "#000",
            easing: 'easeInQuad',
            duration: 500,
            complete: () => entradaMenu()
        }, '-=10')
}

const entradaMenu = () => {
    isHome.value = false,
        themeColor.value.content = '#000',

        $anime.timeline({ duration: 2500 }).add({
            targets: '.fondoMenu',
            opacity: [0, 1],
            easing: 'linear',
            duration: 1000,
            begin: bgMove().play
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
                duration: 1500
            }, 1000).add({
                targets: ['.email', '.rrss', '.secundarios'],
                opacity: [0, 1],
                easing: 'easeInSine',
                duration: 1000
            })
}

const salidaMenu = () => {

    $anime.timeline({ duration: 2500, complete: () => { bgMove().stop, entradaHero() } })
        .add({
            begin: () => document.querySelector('.fondoMenu').classList.remove('duration-700', 'ease-in-out'),
            targets: ['.fondoMenu'],
            backgroundPosition: '0% -100%',
            opacity: [1, 0],
            easing: 'linear',
        })
        .add({
            targets: ['.enlaces .enlace'],
            opacity: [1, 0],
            easing: 'easeOutQuad',
            duration: 1000,
            delay: (el, i) => i * 250,
        }, 500)
        .add({
            targets: ['.email', '.rrss', '.secundarios'],
            opacity: [1, 0],
            easing: 'easeOutQuad',
        }, 1000)
        .add({
            targets: '.separador',
            opacity: [0.4, 1],
            scaleX: ['100%', '0%'],
            easing: 'easeOutExpo',
        }, 0)
}
// Animaciones extra
const bgMove = () => $anime({
    targets: '.fondoMenu',
    backgroundPosition: '100% 100%',
    duration: 70000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
    autoplay: false
})

const animarPunto = () => {
    counterCredits.value++
    if (counterCredits.value > 3) {
        counterCredits.value = 0
        return
    }
    $anime({
        targets: '#punto',
        translateY: [0, counterCredits.value * -10, 0],
        scale: [1, counterCredits.value * -2, 1],
        duration: 800,
        color: ['#fff', '#ef4444', '#fff'],
        easing: 'easeInOutBounce',
        complete: () => {
            if (counterCredits.value == 3) {
                showSecretMessage.value = true,
                    counterCredits.value = 0;
            }
        }
    })
}
// FIN ANIMACIONES

// Observamos Scroll Pc
function scroll(e) {
    if (e.deltaY > 40 && isAnimating.value == false && isHome.value == true) {
        salidaHero()
    }
}

// Observamos Swipe (Movil)
const { direction } = useSwipe(hero, {
    onSwipeEnd: (e, direction) => {
        if (direction == 'up' && isAnimating.value == false) {
            salidaHero()
        }
    }
})

onMounted(() => {
    // Updateamos ref con el obj de la meta etiqueta
    themeColor.value = document.querySelector('meta[name="theme-color"]')

    // Lanzamos animacion de intro
    entradaHero()
})
</script>

