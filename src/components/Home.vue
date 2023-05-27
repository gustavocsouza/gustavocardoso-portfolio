<script setup>
import gsap from 'gsap';
import { isMobileView } from '../helpers';

import GrandientText from './GrandientText.vue';
import PrimaryButton from './PrimaryButton.vue';
import VerticalLine from './VerticalLine.vue';

const technologies = ['HTML - CSS', 'Vue.js', 'Javascript', 'React.js', 'Node.js', 'Next.js', 'PHP/Laravel', 'Cypress'];

const emits = defineEmits(['scrollDownToProjects'])

const scrollDownToProjects = () => {
    emits('scrollDownToProjects');
}

//Name Animation
const beforeEnterName = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateX(-400px)'
}

const enterName = (el) => {
    gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: el.dataset.index * 0.2,
        ease: "Power2.easeOut"
    })
}

//Occupation Animation
const beforeEnterOccupation = (el) => {
    el.style.opacity = 0;
}

const enterOccupation = (el) => {
    gsap.to(el, {
        opacity: 1,
        duration: 1,
        ease: "Power2.easeOut"
    })
}

//Technologies animation
const beforeEnterTechnologies = (el) => {
    el.style.opacity = 0;
}

const enterTechnologies = (el) => {
    gsap.to(el, {
        opacity: 1,
        duration: 1,
        delay: el.dataset.index * 0.3,
        ease: "Power2.easeOut"
    })
}

</script>

<template>
    <div class="container">
        <div class="presentation-container">
            <div class="name">
                <TransitionGroup
                    appear
                    @before-enter="beforeEnterName"
                    @enter="enterName"
                >
                    <GrandientText
                        :key="1"
                        :data-index="1"
                        :fontSize="isMobileView() ? '48px' : '70px'"
                    >
                        Gustavo
                    </GrandientText>
                    <GrandientText
                        :key="2"
                        :data-index="2"
                        :degrees="210"
                        :startColorPercent="20"
                        :fontSize="isMobileView() ? '56px' : '96px'"
                    >
                        Cardoso
                    </GrandientText>        
                </TransitionGroup>
            </div>
            <div class="occupation">
                <VerticalLine/>
                <div class="technologies">
                    <Transition
                        appear
                        @before-enter="beforeEnterOccupation"
                        @enter="enterOccupation"
                    >
                        <GrandientText
                            :fontSize="'20px'"
                            :fontWeight="'bold'"
                        >
                            Front-end Developer
                        </GrandientText>
                    </Transition>
                    <TransitionGroup
                        appear
                        @before-enter="beforeEnterTechnologies"
                        @enter="enterTechnologies"
                    >
                        <p 
                            v-for="(tech, index) in technologies"
                            :key="index"
                            :data-index="index"
                        >
                            {{ tech }}
                    </p>
                    </TransitionGroup>
                </div>
            </div>
        </div>
        <PrimaryButton
            @click="scrollDownToProjects"
        >
            See Projects
        </PrimaryButton>
    </div>
</template>

<style scoped>
.container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12rem;
    height: 100vh;
    margin: 0 auto;
}

.presentation-container {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18rem;
    width: 100%;
    gap: 2rem;
}

.name {
    text-align: right;
    width: 47%;
}

.name p{
    line-height: 1;
}

.occupation {
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    width: 49.5%;
    display: flex;
    align-items: center;
}

.technologies {
    padding-left: 1rem;
}

@media only screen and (max-width: 600px) {
.container {
    gap: 8rem;
}
.presentation-container {
    width: 90%;
    flex-direction: column;
    align-items: start;
    padding-left: 4rem;
    gap: 3rem;
}

.name {
    text-align: left;
    width: 100%;
}

.occupation {
    width: 100%;
}
}

@media only screen and (max-width: 960px) {
    .container {
        gap: 4rem;
    }
}
</style>