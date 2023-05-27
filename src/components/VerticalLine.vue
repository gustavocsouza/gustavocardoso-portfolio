<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);

onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 1600)
})
</script>
<template>
    <div  class="vertical-line">
        <div class="solid"></div>
        <Transition
            name="fade"
        >
            <div v-if="show" class="blur"></div>
        </Transition>
    </div>
</template>

<style scoped>
.vertical-line {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 1.5%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.solid, .blur {
    background: linear-gradient(0deg, rgba(167,60,60,1) 0%, rgba(58,57,151,1) 100%);
    height: 100%;
    position: absolute;
}

.solid {
    z-index: 999;
    opacity: 0.4;
    width: 20%;
    border-radius: 50px;
}

.blur {
    width: 100%;
    filter: blur(25px);
}

@media only screen and (max-width: 600px) {
.vertical-line {
    width: 10%;
}
}
</style>