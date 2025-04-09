<template>
    <button @click="$emit('click')" :class="['btn btn-circle btn-secondary fixed', positione]">

        <slot />

    </button>
</template>

<script lang="ts" setup>
    interface Props {
        positione?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    }

    withDefaults(defineProps <Props>(), {
        positione: 'bottom-right'
    });

    defineEmits(['click']);

</script>

<style scoped>
@import "tailwindcss";
    .top-left {
        @apply top-10 left-10;
    }
    .top-right {
        @apply top-10 right-10;
    }
    .bottom-left {
        @apply top-10 left-10;
    }
    .bottom-right {
        @apply top-10 rigth-10;
    }
</style>