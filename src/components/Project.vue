<script setup>
import { isMobileView } from '../helpers';

import GrandientText from './GrandientText.vue';
import PrimaryButton from './PrimaryButton.vue';
import VueIcon from '../assets/icons/VueIcon.vue';
import ReactIcon from '../assets/icons/ReactIcon.vue';

const { project } = defineProps(['project']);

const getIcon = (tech) => {
    const icons = {
        'vue': VueIcon,
        'react': ReactIcon
    }

    return icons[tech];
}
</script>

<template>
    <div class="container"
        :style="{
            flexDirection: isMobileView() ? 'column-reverse' : (project.id % 2 === 0 ? 'row' : 'row-reverse')
        }"
    >
        <div class="text-container">
            <div>
                <GrandientText
                    :degrees="180"
                    :startColorPercent="20"
                    :endColorPercent="50"
                    :fontSize="'36px'"
                    :fontWeight="'bold'"    
                >
                    {{ project.title }}
                </GrandientText>
                <GrandientText
                    :startColorPercent="50"
                    :endColorPercent="80"
                    :fontSize="'20px'"
                    :fontWeight="500"    
                >
                    {{ project.description }}
                </GrandientText>
            </div>
            <div class="techs">
                <component 
                    v-for="(tech, index) in project.techs"
                    :key="index"
                    :is="getIcon(tech)"
                />
            </div>
            <div class="buttons-container">
                <PrimaryButton
                    :href="project.website"
                    :newTab="true"
                >
                    Go to Project
                </PrimaryButton>
                <PrimaryButton
                    :href="project.repository"
                    :newTab="true"
                >
                    Repository
                </PrimaryButton>
            </div>
        </div>
        <div class="image-container">
            <img :src="project.img_url" alt="Rick And Morty App">
        </div>
    </div>
    
</template>

<style scoped>
.container {
    width: 60rem;
    margin: auto;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
}
.text-container {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

.text-container > div {
    text-align: center;
}

.buttons-container {
    display: flex;
    gap: 1rem;
}

.image-container {
    width: 50%;
}

.image-container img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

@media only screen and (max-width: 960px) {

.container {
    width: 100vw;
}
.buttons-container {
    flex-direction: column;
}

.image-container, .text-container {
    width: 80%;
}
}
</style>