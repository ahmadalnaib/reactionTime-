<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  },
  error: {
    type: String,
    default: null
  }
})

</script>

<template>

  <div>
    <h2>Project List</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-else >
      <li v-for="project in projects" :key="project.id">
        <div :class="{'complete':project.completed}">

          <routerLink :to="{name:'details',params:{id:project.id}}">
            <h3>{{ project.name }}</h3>
          </routerLink>
          <p>{{ project.description }}</p>
        </div>
        <div>
          <div v-for="tag in project.tags" :key="tag.id">
            <span class="tag">{{ tag }}</span>

          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.complete {
  text-decoration: line-through;
  background: rgb(0, 128, 0, 0.1);
}
</style>