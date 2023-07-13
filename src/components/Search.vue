<template>
  <!-- 
    Bootstrap Forms
    - form-control
    - select
  -->
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="Search for Movies, Series & more" 
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters" 
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option 
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      // page 요청 10, 20, 30
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          // 최대 3 page만 나오도록!!
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear() // 올해 
            for(let i = thisYear; i >= 1985; i -= 1) {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods: { 
    // async = 비동기
    // store의 mutations를 실행할 때는 .commit() 메소드를,
    // actions를 실행할 때는 .dispatch() 메소드 사용
    // movie = index.js
    apply() {
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * { // 전체 선택자
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
  // view port가 large 보다 작으면 
  // flex -> block
  @include media-breakpoint-down(lg) {
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>