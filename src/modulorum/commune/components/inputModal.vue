<template>
    <dialog id="my_modal_1" class="modal" :open="false">
  <div class="modal-box">
    

    <div class="modal-action flex flex-col">

      <form method="dialog" @submit.prevent="submitValorem">
        <input 
        type ="text"
      
        class="input input-bordered w-full flex-1 input-primary"
        v-model="inputValorem"
        >
    <div class="flex justify-end mt-5">
        <button @click="$emit('claudere')" class="btn">Close</button>
        <button type="submit" class="btn btn-primary ml-4">Aceptar</button>
     </div>
      </form>
    </div>
  </div>
</dialog>

<div class="fixed top-0 w-screen h-screen z-10 bg-black opacity-40"></div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
    aperta: boolean;
    placeholder?: string;
    titulus: string;
    subtitulus: string;
};


const emissiones = defineEmits<{
    claudere: [void];
    valorem: [text:string];
}>();

const inputValorem = ref('');
const submitValorem = () => {

    console.log ({ valorem: inputValorem.value });

if (!inputValorem.value) {
    return;
}

    emissiones('valorem', inputValorem.value.trim() );
    emissiones('claudere');

    inputValorem.value = '';
}

</script>