export default {
  namespaced: true, // stroe의 하나의 module이 되기 위함
  // state = 하나의 상태 정의
  // data는 함수로 만든다(데이터의 불변성)
  // return에서 data 정의
  // store에서 data 정의 -> About.vue에서 사용
  state: () => ({
    name: 'JunesWorld',
    email: 'JunesWorld@gmail.com',
    blog: 'http://JunesWorld.blog',
    phone: '+82-10-1234-5678',
    image: 'http://heropy.blog/css/images/logo.png'
  })
}