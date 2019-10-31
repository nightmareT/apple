<template>
  <div class="hello">
    <div class="title">
      <div>Amer</div>
      <div>wonderLand</div>
    </div>
    <div class="message">{{ msg }}</div>
    <v-form v-model="valid">
      <v-container>
      <v-layout justify-center="true">
          <v-flex md4 >
              <v-text-field
                class="border5"
                label="Solo"
                v-model="userName"
                placeholder="Placeholder"
                append-icon="search"
                @click:append="toggleMarker"
                solo
              ></v-text-field>
            </v-flex>
      </v-layout>
      </v-container>
    </v-form>
    <div>Searching for more</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      valid: true,
      userName: ''
    }
  },
  methods: {
    async toggleMarker() {
      // const result = await axios.post('http://localhost:7001/userNameAuth')
      const params = new URLSearchParams()
      params.append('userName', this.userName);
      const result = await axios({
        method: 'post',
        url: 'http://127.0.0.1:7001/userNameAuth',
        data: params,
        withCredentials: true
      })
      window.console.log(result)
    }
  }
};
</script>

<style lang="less" scoped>
.hello {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 48px;
  justify-content: space-around;
  align-content: center;
  .title {
    display: flex;
    justify-content: space-between;
    div {
      &:nth-child(1) {
        margin-left: 30px;
      }
      &:nth-child(2) {
        margin-right: 30px;
      }
    }
  }
  .border5 {
    border-radius: 20%
  }
  .message {
    margin-bottom: 100px;
  }
}
</style>