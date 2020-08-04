// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;  // 项目发布产品构建
/* eslint-disable no-new */
// 第一种
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// 第二种
new Vue({
  el:"#app",
  router,
  render:h=>h(App),
})
