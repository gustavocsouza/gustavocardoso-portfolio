<script setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';

const { VITE_BACKGROUND_IMG_URL } = import.meta.env;

const projectsDivRef = ref(null);

const scrollDownToProjects = () => {
  projectsDivRef.value.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main
    :style="{
      backgroundImage: `url(${VITE_BACKGROUND_IMG_URL})`
    }"
  >
    <Home @scroll-down-to-projects="scrollDownToProjects"/>
    <div ref="projectsDivRef">
      <Projects />
    </div>
  </main>
</template>

<style scoped>
main {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>