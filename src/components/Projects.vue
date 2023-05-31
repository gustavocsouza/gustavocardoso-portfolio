<script setup>
import { ref } from 'vue';
import gsap from 'gsap';
import { storeToRefs } from 'pinia';
import Observer from './Observer.vue';
import Project from './Project.vue';
import Spinner from './Spinner.vue';

import { useProjectStore } from '../store/projects';


const projectStore = useProjectStore();
const { projects } = storeToRefs(projectStore);

setTimeout(() => {
    projectStore.getProjects();
}, 4000)

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
    <div>
        <Spinner v-if="!projects"></Spinner>
        <div v-else class="projects-container">
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