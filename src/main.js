// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
//自己寫的部分往下放
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      next()
      console.log('是否是登入狀態:', response.data);
      //     if (response.data.success) {
      //       next()
      //     }
      //   });
      // } else {
      //   next({
      //     path: '/login'
      //   })
      // }
    })
  }
});
