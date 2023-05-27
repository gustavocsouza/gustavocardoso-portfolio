<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
import Observer from './Observer.vue';
import Project from './Project.vue';
import { projects } from '../store/projects';

const showProjects = ref(false);

const intersect = () => {
    showProjects.value = true;
}

//Project animation
const beforeEnter = (el) => {
    el.style.opacity = 0;
}

const enter = (el) => {
    gsap.to(el, {
        opacity: 1,
        duration: 2,
        delay: el.dataset.index * 0.4
    })
}
</script>

<template>
    <div class="projects-container">
        <Observer @intersect="intersect"/>
        <TransitionGroup
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <Project 
                v-if="showProjects"
                v-for="project in projects" 
                :key="project.id"
                :project="project"
                :data-index="project.id"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.projects-container {
    min-height: 100vh;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    padding-bottom: 4rem;
}
</style>