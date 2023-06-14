import anime from "animejs";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('anime', anime)
})