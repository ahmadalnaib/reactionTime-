<template>
  <div
    class="flex justify-between items-center border-b-2 border-gray-200 py-2 "
  >
    <div :class="{'completed': project.completed}">
      <router-link :to="`/project/${project.id}`">
        <h2>{{ project.name }}</h2>
      </router-link>
    </div>
    <div class="flex">
      <span @click="projectDone"> {{ project.completed ? "done" : "in Progress" }} </span>
    <router-link :to="{name: 'EditProject', params: { id: project.id } }">
      <span class="bg-blue-400 cursor-pointer"> edit </span>
    </router-link>
      <span class="bg-red-400 cursor-pointer" @click="deleteProject()"> delete </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteProject() {
      fetch(`http://localhost:3000/projects/${this.project.id}`, {
        method: 'DELETE',
      }).then((response) => {
        if (response.ok) {
          this.$emit('delete', this.project.id);
        } else {
          console.error('Failed to delete project');
        }
      });
       
    },
    projectDone() {
      fetch(`http://localhost:3000/projects/${this.project.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !this.project.completed }),
      })
        .then((response) => {
          if (response.ok) {
            this.$emit('completed', this.project.id);
          } else {
            console.error('Failed to update project');
          }
        })
        .catch((error) => {
          console.error('Error updating project:', error);
        });
    },

  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.completed span {
  color: green;
}
.completed h2 {
  color: green;
}
</style>
