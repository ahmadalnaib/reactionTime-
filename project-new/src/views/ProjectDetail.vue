<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      project: null,
    }
  },
  mounted() {
    fetch(`http://localhost:3000/projects/${this.id}`)
      .then(res => res.json())
      .then(data => {
        this.project = data
      })
      .catch(err => {
        console.error('Failed to load project details:', err)
      })
  }
}
</script>
