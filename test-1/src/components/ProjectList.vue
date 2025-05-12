<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods:{
    projectDone(){
      $this.$emit('done')
    }
  }
}
</script>

<template>
  <div>
    {{ project.name }}
  </div>
  <div @click="projectDone">
     done
  </div>
</template>
