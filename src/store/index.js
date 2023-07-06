import { createStore } from 'vuex'
import movie from './movie'
import about from './about'

// movie, about 과 같은 모듈 연결
// main.js에 연결
export default createStore({
  modules: {
    movie,
    about
  }
})