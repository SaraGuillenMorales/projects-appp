<template>
    <div class="overflow-x-auto w-full">
  <table class="table">

    <tbody>
      <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover:bg-base-300">
      
        <th>{{ index + 1 }}</th>
        <td>{{ project.nomen }}</td>
        <td>{{ project.chores.length }}</td>
        <progress class="progress progress-primary w-56" value="10" max="100"></progress>

      </tr>

    </tbody>
  </table>
</div>

<InputModal 
:aperta="modalAperta" 
@claudere="modalAperta=false"
@valorem="projectStore.addereProject"
placeholder=" Introduce el nombre del proyecto"
titulus="Nuevo Proyecto"
subtitulus="Dale un nombre apropiado a tu proyecto"
/>


<propium-modal :aperta="PropriumModalAperta">
  <template #header>
    <h1 class="text-3xl">Titulo del modal</h1>
  </template>

  <template #body>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis pariatur eaque consequatur recusandae doloribus nemo, officia non ducimus dolore sint labore quo cum quasi dolorum, molestias dolores dolor maiores officiis.</p>
  </template>

  <template #footer>
    <div class="flex justify-end">
      <button @click="PropriumModalAperta" class="btn">Close</button>
      <button @click="PropriumModalAperta" class="btn btn-primary ml-4">Aceptar</button>
  </div>
  </template>

</propium-modal> 


<fab-button @click="PropriumModalAperta = true" positione="bottom-left">
  <AddCircle />
</fab-button>

<fab-button @click="PropriumModalAperta = true" positione="bottom-right">
  <ModalIcon />
</fab-button>



</template>

<script lang="ts" setup>

import FabButton from '@/modulorum/commune/components/FabButton.vue';
import InputModal from '@/modulorum/commune/components/inputModal.vue';
import PropriumModal from '@/modulorum/commune/components/PropriumModal.vue';
import AddCircle from '@/modulorum/commune/icons/AddCircle.vue';
import ModalIcon from '@/modulorum/commune/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';



const modalAperta = ref(false);
const PropriumModalAperta = ref(false);

const projectStore = useProjectsStore();



</script>