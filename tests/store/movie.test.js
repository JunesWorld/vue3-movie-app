import movieStore from '~/store/movie'
import _cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'

describe('store/movie.js', () => {
  let store

  beforeEach(() => {
    store = _cloneDeep(movieStore) // 객체데이터 원본 오염 방지를 위해 lodash clone
    store.state = movieStore.state() // state = 함수
    store.commit = (name, payload) => {
      store.mutations[name](store.state, payload)
    }
    store.dispatch = (name, payload) => {
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch
      }
      return store.actions[name](context, payload) // actions 비동기 = return
    }
  })

  test('영화 데이터를 초기화합니다', () => {
    store.commit('updateState', {
      movie: [{ imdbID: '1' }],
      message: 'Hello world',
      loading: true
    })
    store.commit('resetMovies')
    expect(store.state.movies).toEqual([])
    expect(store.state.message).toBe('Search for the movie title!')
    expect(store.state.loading).toBe(false)
  })

  test('영화 목록을 잘 가져온 경우 데이터를 확인합니다', async () => {
    const res = {
      data: {
        totalResults: '1',
        Search: [
          {
            imdbId: '1',
            Title: 'Hello',
            Poster: 'hello.jpg',
            Year: '2021'
          }
        ]
      }
    }
    // 모의함수 : 네트워크 영향 x
    // 가짜 데이터 정의
  //   axios.post = jest.fn(() => {
  //     return new Promise(resolve => {
  //       resolve(res)
  //   })
  // })
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovies')
    expect(store.state.movies).toEqual(res.data.Search)
  })


  test('영화 아이템이 중복된 경우 고유하게 처리합니다', async () => {
    const res = {
      data: {
        totalResults: '1',
        Search: [
          {
            imdbId: '1',
            Title: 'Hello',
            Poster: 'hello.jpg',
            Year: '2021'
          },
          {
            imdbId: '1',
            Title: 'Hello',
            Poster: 'hello.jpg',
            Year: '2021'
          },
          {
            imdbId: '1',
            Title: 'Hello',
            Poster: 'hello.jpg',
            Year: '2021'
          }
        ]
      }
    }
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovies')
    expect(store.state.movies.length).toBe(1)
  })

  test('단일 영화의 상세 정보를 잘 가져온 경우 데이터를 확인합니다', async () => {
    const res = {
      data: {
        imdbID: '1',
        Title: 'Frozen',
        Poster: 'frozen.jpg',
        Year: '2021'
      }
    }
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovieWithId')
    expect(store.state.theMovie).toEqual(res.data)
  })
})