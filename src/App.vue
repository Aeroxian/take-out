<template>
  <div id="app">
    <router-view />
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
// import {reqFoodCategorys,reqAddress} from "./api"
import { mapActions } from 'vuex';
export default {
  name: "App",
  components: {
    FooterGuide,
  },
  mounted(){ //async
    // this.$store.dispatch('getAddress')
    // const result =await reqFoodCategorys()
    // console.log(result);
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  }
};
</script>

<style lang="stylus" scoped>
.app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
