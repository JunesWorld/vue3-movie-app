// CDN
// import Vue from 'vue'

// CLI
// Vue 객체가 없다
import { createApp } from 'vue'
import App from './App'
import store from './store' // same as './store/index.js'
// Router
// 특정 폴더에 있는 index 파일은 생략 가능
import router from './routes'


// HTML에서 app이라는 값을 가지고 있는 해당 요소에 vue 프로젝트 연결
// 1. CDN
//Vue.createApp(App).mount('#app')

// 2. CLI
// plugin으로 연결 & Library 지정
createApp(App)
  .use(store)
  .use(router) 
  .mount('#app')