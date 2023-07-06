<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList' // eslint-disable-line no-unused-vars

export default {
  components: {
    Headline,
    Search
  }
}
</script>