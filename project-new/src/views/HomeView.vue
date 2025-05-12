<script >
import Project from '../components/Project.vue'
import Navbar from '../components/Navbar.vue'
import FilterNav from '../components/FilterNav.vue'
export default{
  name: 'HomeView',
  components: {
    Project,
    Navbar,
    FilterNav
  },
  data(){
    return{
      
      projects: [],
      filter: 'all',

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
  ,
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    handleCompleted(id) {
      const project = this.projects.find(project => project.id === id);
      if (project) {
        project.completed = !project.completed;
      }
    },

  },
  computed: {
    filteredProjects() {
      if (this.filter === 'completed') {
        return this.projects.filter(project => project.completed);
      } else if (this.filter === 'ongoing') {
        return this.projects.filter(project => !project.completed);
      }
      return this.projects;
    },
  },

}

</script>

<template>
  <main v-if="projects.length">
    <h1>Projects</h1>
    <p>Here are some of the projects I have worked on:</p>
  <div style="margin-bottom: 1rem;">
    <FilterNav @filter="filter=$event" />
  </div>
 <Navbar/>
<div v-for="project in filteredProjects" :key="project.id">
<Project :project="project" @delete="handleDelete" @completed="handleCompleted"/>

  <hr />

</div>
  </main>
</template>
