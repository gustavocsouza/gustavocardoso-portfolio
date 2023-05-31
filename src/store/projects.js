import { ref } from "vue";
import { supabase } from "../supabase";
import { defineStore } from "pinia";

export const useProjectStore = defineStore('projects', () => {
    const projects = ref(null);

    const getProjects = async () => {
        const { data } = await supabase
            .from('projects')
            .select();

        projects.value = data;
    };

    return {
        projects,
        getProjects
    }
});