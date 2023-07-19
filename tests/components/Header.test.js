import { shallowMount } from '@vue/test-utils'
import router from '~/routes'
import store from '~/store'
import Header from '~/components/Header'

describe('components/Header.vue', () => {
  let wrapper
  beforeEach(async () => {
    // Mocking
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567') // 영화 상세 page 이동 
    await router.isReady() // page가 준비될 때까지 기다림
    // page가 준비되면 Header component 열어서 테스트 진행
    wrapper = shallowMount(Header, { // shallowMount로 plugin 등록 & wrapper 객체로 반환
      global: {
        plugins: [
          router,
          store
        ]
      }
    })
  })

  test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })

  test('경로 정규표현식과 일치해야 합니다', () => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })
})
