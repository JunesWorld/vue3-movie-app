<template>
  <header>
    <!-- Logo 출력 -->
    <Logo />
    <!-- 
        [Header] search, movie, about
        반복몬 [v-for]
        - nav라는 이름으로 navigations 반복
        - :key = 반복되는 item들이 고유하다.
        :to [v-bind]
        - 하나의 데이터
        - = a tag href 어느 주소로 이동할 것인지 명시할 수 있다.
        - active-class = router active를 변경하여 적용
    -->
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520998',
          path: /^\/movie/ // '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  // Path 일치 Nav 활성화
  methods: {
    isMatch(path) {
      if(!path) return false
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
// Header 수평정렬
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>