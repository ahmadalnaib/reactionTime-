<script setup>
import ProjectList from '@/components/ProjectList.vue';
import getProjects from '../../composables/getProjects';
import {onMounted} from 'vue'

const {projects, error,fetchProjects} = getProjects();



  onMounted(() => {
    fetchProjects()
  });



</script>

<template>
  <main>
    <h1>Home </h1>
    <routerLink :to="{ name: 'createproject' }">
      <button>create project</button>
    </routerLink>

  <ProjectList :projects="projects" :error="error"/>
  </main>
</template>
