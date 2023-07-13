<!-- PageView가 바뀔때마다 RouterView만 바뀌고 Header는 고정 -->
<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    Footer
  }
}
</script>

<!-- 
  [scoped] 
  - style 내용을 App.vue 파일에 있는 template 부분에만 적용하겠다
-->
