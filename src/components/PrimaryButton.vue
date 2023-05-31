<script setup>
const { href, newTab } = defineProps({
    href: {
        required: false
    },
    newTab: {
        default: false,
        required: false
    }
});
</script>
<template>
    <a
        v-bind:href="href"
        v-bind:target="newTab ? '_blank' : ''"
    >
        <div class="content">
            <slot></slot>
        </div>

        <div class="solid">
        </div>
        <div class="blur">
        </div>
    </a>
</template>

<style scoped>
a {
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;    
    color: white;
    border: none;
    width: 214px;
    height: 49px;
    background: transparent;
    border-radius: 48px;
    transition: all 0.3s ease;
    opacity: 0.7;
}

a:hover {
    opacity: 1;
}

.content, .solid, .blur {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.content {
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.solid, .blur {
    background: linear-gradient(90deg, rgba(167,60,60,1) 0%, rgba(58,57,151,1) 100%);
    border-radius: 48px;
}
.solid {
    opacity: 0.8;
}

.blur {
    filter: blur(25px);
}
</style>