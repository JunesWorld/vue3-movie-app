import { asyncFn } from './example'

// 2초 뒤에 비동기 코드 동작
// 테스트 코드 동작
// done() 동작
describe('비동기 테스트', () => {
  // 직관적!!(추천)
  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('Done!')
  }, 7000)
})