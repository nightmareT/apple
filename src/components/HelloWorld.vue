<template>
  <div class="hello">
    <div class="title">
      <div>11</div>
      <div>22</div>
    </div>
    <div>{{ msg }}</div>
    <v-alert
        :value="true"
        type="success"
      >
        This is a success alert.
      </v-alert>
      <div>this is a new shit</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>
 .hello {
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
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
 }
</style>