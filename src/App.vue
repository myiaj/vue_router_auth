<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <button type="button" class="btn btn-link">Link</button>
    <a href="#">5654</a>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/products`;
    // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMAPI);
    this.$http.get(api).then(response => {
      // console.log({
      //   "app.vue": response.data
      // });
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
