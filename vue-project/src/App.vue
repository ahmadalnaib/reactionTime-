<script>
import Block from './components/Block.vue';
import Result from './components/Result.vue';
export default {
  components: {
    Block,
    Result,
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
  <Result v-if="showResult" :score="score"/>
  </div>
  <Block v-if="isPlaying" :delay="delay" @reactionTime="endGamge"/>
  <button @click="start" :disabled="isPlaying">Play</button>
</template>
