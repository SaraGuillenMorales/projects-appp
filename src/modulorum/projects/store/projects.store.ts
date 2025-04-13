import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Project } from "../interfaces/project.interface";
import {v4 as uuidv4} from 'uuid';
import { useLocalStorage } from "@vueuse/core";


export const useProjectsStore = defineStore('projects', () => {

    const projects = ref(useLocalStorage<Project[]>('project', [] ));
    const addereProject = ( nomen: string ) => {

        if ( nomen.length === 0) return;

        projects.value.push({
            id: uuidv4(),
            nomen: nomen,
            chores: [],
        });
    }

    return {

       projects,

        projectList: computed(() => [ ...projects.value ])
        
        addereProject,

        nonproject: computed(() => projects.value.length === 0),
    }
});