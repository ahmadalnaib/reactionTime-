<template>
  <div>
    <h1>edit Project</h1>
    <form @submit.prevent="editProject">
      <label for="name">Project Name:</label>
      <input type="text" id="name" v-model="projectName" required />

      <label for="description">Description:</label>
      <textarea id="description" v-model="projectDescription" required></textarea>

      <button type="submit">update Project</button>
    </form>
  </div>

</template>

<script>
export default {
  props:{
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      projectName: '',
      projectDescription: '',
    };
  },

  mounted() {
    // Fetch the project data from the API using the ID from the route params
    fetch(`http://localhost:3000/projects/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.projectName = data.name;
        this.projectDescription = data.description;
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
      });
  },
  methods: {
    editProject() {
      const updatedProject = {
        name: this.projectName,
        description: this.projectDescription,
        completed: false,
      };

      fetch(`http://localhost:3000/projects/${this.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProject),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Project updated:', data);
          this.$router.push('/'); // Redirect to the home page after updating the project
        })
        .catch((error) => {
          console.error('Error updating project:', error);
        });
    },
  },
  
};
</script>