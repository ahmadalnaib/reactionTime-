<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Import router

const projectName = ref('');
const projectDescription = ref('');
const router = useRouter(); // Get router instance

const submitProject = () => {
  const projectData = {
    name: projectName.value,
    description: projectDescription.value
  };

  axios.post('http://localhost:3000/projects', projectData)
    .then(response => {
      console.log('Project created:', response.data);
      // Redirect to another route, e.g., project list or detail page
      router.push('/'); // change to your desired route
    })
    .catch(error => {
      console.error('Error creating project:', error);
    });
}
</script>


<template>

  <form @submit.prevent="submitProject">
    <div>
      <label for="projectName">Project Name:</label>
      <input type="text" id="projectName" v-model="projectName" required />
    </div>

    <div>
      <label for="projectDescription">Project Description:</label>
      <textarea id="projectDescription" v-model="projectDescription" required></textarea>
    </div>

    <button type="submit">Create Project</button>

  </form>

</template>