<template>
  <header>
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
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>