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

        RouterLink
        - vue router plugin 등록하여 전역적으로 사용할 수 있다.
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
    <div
     class="user"
      @click="toAbout">
      <img
       :src="image"
       alt="name" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
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
          href: '/movie/tt4520988',
          path: /^\/movie/ // '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name'
    ]),
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // }
  },
  // Path 일치 Nav 활성화
  methods: {
    isMatch(path) {
      if(!path) return false
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      this.$router.push('/about')
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
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: .4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;
    }
  }
  // viewport가 sm보다 작아지면 header 사라짐
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>