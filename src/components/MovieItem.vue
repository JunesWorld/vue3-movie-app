<template>
  <RouterLink 
    :to="`/movie/${movie.imdbID}`"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie">
    <Loader 
    v-if="imageLoading" 
    :size="1.5"
    absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    movie: {
      type: Object,
      // default: function () { return {} }
      default: () => ({})
    }
  },
  data() {
    return {
      imageLoading: true // Image가 로딩되고 있습니다
    }
  },
  // methods에 html 연결해서 다루기 때문에 mounted
  mounted() {
    this.init()
  }, 
  methods: {
    async init() {
      // const img = document.createElement('img') // img 메모리 생성
      // img.src = this.movie.Poster // poster img 주소 삽입
      // img.addEventListener('load', () => { // load가 되어서 실제 화면에 출력할 상태가 되면 imageLoading을 false로 변경
      //   this.imageLoading = false
      // })

      const poster = this.movie.Poster
      // 예외처리
      // 이미지 값이 없어 N/A 이면 종료 if
      if (!poster || poster === 'N/A') {
        this.imageLoading = false
      } else {
        await this.$loadImage(poster) // image 로드가 끝나면
        this.imageLoading = false // 로딩 종료
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  $width: 168px;
  width: $width;
  height: calc(#{$width} * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid $primary;
  }
  .info {
    background-color: rgba($black, .3);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    .year {
      color: $primary;
    }
    .title {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>