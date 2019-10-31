<template>
  <div id="app">
    <router-view id='11'>
    </router-view>
  </div>
</template>

<script>
// import login from './components/login.vue'
// import axios from 'axios'

export default {
  name: 'app',
  // components: {
  //   login
  // },
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
    // const result = await this.$jsonp('http://127.0.0.1:7001/')
    // // const result = await axios({
    // //     method: 'get',
    // //     url: 'http://127.0.0.1:7001/',
    // //     withCredentials: true
    // //   })
    // window.console.log(result)
    // this.msg = result
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/vietnam.jpg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  width: 100%;
  height: inherit;
}
</style>
