import axios from 'axios'

export default {
  // module!
  // index.js에 연결해서 별개의 개념으로 활용 가능
  namespaced: true, 
  // data!
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  // computed!
  // movieIds 함수 만들어서 imdbID 추출
  // state라는 매개변수 사용해야함
  getters: {},
  // methods!
  // 변이 : 여기서만 데이터 변경 가능
  mutations: {
    // state 데이터 갱신
    updateState(state, payload) {
      // 객체 데이터의 속성이름만 가지고 배열 데이터 생성
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = [] // 배열 초기화
    }
  },
  // 비동기
  // 데이터 변경은 mutations 그 외는 actions
  // context 사용해야함 : state, getters, mutation 활용
  // payload : searchMovies가 실행될 때 인수로 들어온 특정한 데이터를 받는 역할
  // Search.vue -> apply -> Network 전송
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload // eslint-disable-line no-unused-vars
      // Search Movies...
      const OMDB_API_KEY = '7035c60c'
      // await = 처리 결과 나올때까지
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data // eslint-disable-line no-unused-vars
      // mutation / updateState를 commit 메소드로 실행
      // 객체데이터를 담아 payload에 전달
      // MovieList.vue에서 사용
      commit('updateState', {
        movies: Search
      })
    }
  }
}