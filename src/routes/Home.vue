<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList' 

export default {
  components: {
    Headline,
    Search,
    MovieList
  },
  // Home Click -> 초기화
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>