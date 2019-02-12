<template>
  <div class="counter">
    <h3>{{ msg }}</h3>
    <h1 class="" style="padding: 2.5rem ">
        {{count}}
    </h1>
    <button class="btn btn-info" type="button" name="button" @click="add"> Add 1</button>
    <button class="btn btn-info" type="button" name="button" @click="add2"> Add 2</button>
    <button class="btn btn-info" type="button" name="button" @click="subtract(1)"> Subtract 1</button>
    <button class="btn btn-info" type="button" name="button" @click="subtract(2)"> Subtract 2</button>
    <button class="btn btn-info" type="button" name="button" @click="addThreeAsync"> Add 3 after 3s (async)</button>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'counter',
  computed: {
      count: ()=> store.state.count
  },
  methods: {
    add: () => store.commit('add'),
    add2: () => store.commit('add',2),
    addThreeAsync: () => store.dispatch('addThreeAsync'),
    subtract: (payload) => store.commit('subtract', payload)
    // subtract: (payload) => store.commit('subtract', +payload)
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
    margin: 10px
}
</style>
