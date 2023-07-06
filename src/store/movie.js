export default {
  // module!
  // index.js에 연결해서 별개의 개념으로 활용 가능
  namespaced: true, 
  // data!
  state: () => ({
    movies: []
  }),
  // computed!
  // movieIds 함수 만들어서 imdbID 추출
  // state라는 매개변수 사용해야함
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods!
  // 변이 : 여기서만 데이터 변경 가능
  mutations: {
    resetMovies(state) {
      state.movies = [] // 배열 초기화
    }
  },
  // 비동기
  // 데이터 변경은 mutations 그 외는 actions
  // context 사용해야함
  actions: {
    searchMovies() {

    }
  }
}