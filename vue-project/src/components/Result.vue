<script>
export default {
  props: {
    score: {
      type: Number,
 
    },
  },
};
</script>
<template>
  <div>
    <h2>Result</h2>
    <p>Your reaction time is: {{ score }} ms</p>
  </div>
</template>