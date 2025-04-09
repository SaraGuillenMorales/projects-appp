<template>
    <button @click="$emit('click')" class="btn btn-circle btn-secondary fixed bottom-10 right-10">

        <slot></slot>

    </button>
</template>

<script lang="ts" setup>
    interface Props {
        positione?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    }

    //withDefaults(defineProps <Props>(), {
   //     positione: 'bottom-right'
    //});

    defineEmits(['click']);

</script>


<style scoped>

</style>