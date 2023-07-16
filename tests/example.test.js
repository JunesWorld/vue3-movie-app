const userA = {
  name: 'JUNE',
  age: 85
}
const userB = {
  name: 'NEO',
  age: 22
}

test('데이터가 일치해야 합니다', () => {
  expect(userA.age).toBe(85)
  expect(userA).toEqual({
    name: 'JUNE',
    age: 85
  })
})

test('데이터가 일치하지 않아야 합니다', () => {
  expect(userB.name).not.toBe('JUNE')
  expect(userB).not.toBe(userA)
})