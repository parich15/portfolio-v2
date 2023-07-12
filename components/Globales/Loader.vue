<template>
    <div id="loader" class="absolute top-0 left-0 z-0 h-[calc(100dvh)] w-screen opacity-0 bg-black">
        <div class="grid h-full gap-1"
            :style="`grid-template-columns:repeat(${columns}, 1fr); grid-template-rows:repeat(${rows}, 1fr)`">
            <div class="box  bg-slate-950" v-for="box in boxes"></div>
        </div>
    </div>
</template>

<script setup>
const boxes = ref(0)
const columns = ref(null);
const rows = ref(null)

function calcularGrid() {
    boxes.value = 0;
    columns.value = Math.floor(document.body.clientWidth / 50);
    rows.value = Math.floor(document.body.clientHeight / 50);
    boxes.value = columns.value * rows.value;
}

onMounted(() => {
    calcularGrid();
    window.onresize = () => calcularGrid()
})

</script>

