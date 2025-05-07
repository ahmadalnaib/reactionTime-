<script>
export default{
  data(){
    return{
      email: '',
      password: '',
      role: '1',
      checkbox: false,
      names: [],

    }
  },

}

</script>

<template>
  <div>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ role }}</p>
    <p>{{ checkbox }}</p>
    <p>{{ names }}</p>
    <form>
      <div>

        <input type="email" placeholder="Email"  v-model="email"/>
      </div>
      <div>
        <select v-model="role">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div>
        <input type="checkbox" placeholder="checkbox" v-model="checkbox"/>
      </div>
      <div>
        <label for="">ahmad</label>
        <input type="checkbox" value="ahmad" v-model="names"/>
      </div>
      <div>
        <label for="">ali</label>
        <input type="checkbox" value="ali" v-model="names"/>
      </div>
    </form>
  </div>
</template>