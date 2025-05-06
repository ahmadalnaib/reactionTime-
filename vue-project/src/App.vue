<script>
import Block from './components/Block.vue';
export default {
  components: {
    Block,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000+ Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
      endGamge(reactionTime) {
        this.isPlaying = false;
        this.score = reactionTime;
        this.showResult = true;
        
      },
    },
  
};
</script>

<template>
  <div id="app">
    <h1>Welcome to Your Vue.js App</h1>
    <p>This is a simple Vue.js application.</p>
    <p v-if="showResult">reactionTime is {{ score }}ms</p>
  </div>
  <Block v-if="isPlaying" :delay="delay" @reactionTime="endGamge"/>
  <button @click="start" :disabled="isPlaying">Play</button>
</template>
