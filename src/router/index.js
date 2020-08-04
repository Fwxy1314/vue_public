import Vue from 'vue';
import Router from 'vue-router';
// import index from '../views/index.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';


Vue.use(Router)

// 第一种方式
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     },
//   ]
// })

// 第二种方式
// 第一步
const routes  = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
];
// 第二步
const router = new Router({
  routes,
  mode:'history',   // 去掉路径上的 # 号
});
// 第三步
export default router;

