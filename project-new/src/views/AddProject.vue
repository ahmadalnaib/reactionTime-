<template>
  <div>
    <h1>Add Project</h1>
    <form @submit.prevent="addProject">
      <label for="name">Project Name:</label>
      <input type="text" id="name" v-model="projectName" required />

      <label for="description">Description:</label>
      <textarea id="description" v-model="projectDescription" required></textarea>

      <button type="submit">Add Project</button>
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      projectName: '',
      projectDescription: '',
    };
  },
  methods: {
    addProject() {
      const newProject = {
        name: this.projectName,
        description: this.projectDescription,
        completed: false,
      };

      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Project added:', data);
          this.$router.push('/'); // Redirect to the home page after adding the project
        })
        .catch((error) => {
          console.error('Error adding project:', error);
        });
    },
  },
};
</script>