<script setup>
const props = defineProps({
    degrees: {
        default: 70,
        required: false
    },
    startColor: {
        default: '#ffffff',
        required: false
    },
    startColorPercent: {
        default: 50,
        required: false
    },
    endColor: {
        default: '#acacac',
        required: false
    },
    endColorPercent: {
        default: 80,
        required: false
    },
    fontSize: {
        default: '20px',
        required: false
    },
    fontWeight: {
        default: '700',
        required: false
    },
    fontStyle: {
        default: 'normal',
        required: false
    }
})
</script>

<template>
    <p
        :style="{
            fontStyle,
            fontWeight,
            fontSize,
            background: `-webkit-linear-gradient(${degrees}deg, ${startColor} ${startColorPercent}%, ${endColor} ${endColorPercent}%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }"
    >
        <slot></slot>
    </p>
</template>