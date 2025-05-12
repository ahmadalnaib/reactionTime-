<template>
  <div class="filter-nav">
    <h2>Filter Projects</h2>
    <div class="filter-options">
      <button @click="uppdateFilter('all')">View all</button>
      <button @click="uppdateFilter('completed')">completed</button>
      <button @click="uppdateFilter('ongoing')">on going</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uppdateFilter(filter) {
      this.$emit('filter', filter);
    },
  },
};
</script>
