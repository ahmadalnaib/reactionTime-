<script>

export default{
  props:{
    delay:{
      type:Number,

    }
  },
  data(){
    return{
      showBlock: false,
      timer: null,
      reactionTime: 0,
     
    }
  },

  mounted(){
  setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  updated(){

  },

  methods:{
    startTimer(){
  this.timer=setInterval(() => {
    this.reactionTime +=10;
  }, 10);
    },
    stopTimer(){
      clearInterval(this.timer);
      this.timer = null;
      this.$emit('reactionTime', this.reactionTime);
    }

  },
}

</script>

<template>
<div v-if="showBlock" @click="stopTimer" >
  Click me
</div>
</template>

<style scoped>
div {
  width: 400px;
  height: 400px;
  background-color: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
</style>
