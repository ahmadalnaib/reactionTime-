<script >

export default{
  data(){
    return{
      
      projects: []

    }
  },
  mounted(){
    // fetch data from api
    // fetch('http://localhost:3000/projects')
    // return promise
    fetch('http://localhost:3000/projects')
    // return promise
    .then(response => response.json())
    // convert to json
    // then return data
    // then set data to projects
    // set data to projects
    .then(data => {
      this.projects = data
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
    });
  }
}

</script>

<template>
  <main v-if="projects.length">
    <h1>Projects</h1>
    <p>Here are some of the projects I have worked on:</p>
<div v-for="project in projects" :key="project.id">
  <h1>{{ project.name }}</h1>
  <p>{{ project.description }}</p>

  <hr />

</div>
  </main>
</template>
