<script setup>
import { onMounted } from 'vue';
import getProject from '../../composables/getProject';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const { fetchProject, error: fetchError, project } = getProject(props.id);

onMounted(() => {
  fetchProject();
});
</script>

<template>
  <h2>Project Details</h2>

  <div v-if="fetchError">
    <p style="color: red">Error: {{ fetchError }}</p>
  </div>

  <div v-else-if="project">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
