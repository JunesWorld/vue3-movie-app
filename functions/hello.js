// Server에서 함수로 API를 만듦
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    // 문자 데이터만 할당 할 수 있다
    // 복잡할 시 객체 데이터 사용
    body: JSON.stringify({
      name: 'JUNE',
      age: 30,
      email: 'june@gmail.com'
    })
  }
}