import { double } from './example'

describe('그룹 1', () => {
  // 그룹안의 모든 테스트가 시작되기 전에 단 한번만 실행
  beforeAll(() => {
    console.log('beforeAll!')
  })
  // 모든 테스트가 실행된 후 단 한번만 실행
  afterAll(() => {
    console.log('afterAll!')
  })
  // 각각의 테스트가 실행되기 직전에 동작
  beforeEach(() => {
    console.log('beforeEach!')
  })
  // 각각의 테스트가 동작한 이후에 동작
  afterEach(() => {
    console.log('afterEach!')
  })

  test('첫 테스트', () => {
    console.log('첫 테스트!')
    expect(123).toBe(123)
  })
  
  test('인수가 숫자 데이터입니다', () => {
    console.log('인수가 숫자 데이터입니다!')
    expect(double(3)).toBe(6)
  })
  
  test('인수가 없습니다', () => {
    console.log('인수가 없습니다!')
    expect(double()).toBe(0)
  })
})
