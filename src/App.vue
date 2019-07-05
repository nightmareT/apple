<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  async created() {
    // const result = await axios({
    //   method:'get',
    //   url:'http://localhost:7001/',
    // })
    const result = await this.$jsonp('http://localhost:7001/')
    window.console.log(result)
    this.msg = result
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
