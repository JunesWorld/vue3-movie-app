<template>
  <!-- 
    v-if = loading 전 skeletons(true)
    v-else = 영화정보 출력(false)
   -->
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader
      :size="3"
      :zIndex="9"
      fixed />
    </template>
    <div 
      v-else  
      class="movie-details">
      <div 
        :style="{ backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})` }"
        class="poster">
        <Loader 
          v-if="imageLoading"
          absolute />
      </div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{ theMovie.Runtime }}</span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div 
              v-for="{ Source: name, Value: score } in theMovie.Ratings"
              :key="name"
              :title="name"
              class="rating">
              <img 
                :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`" 
                :alt="name" />
                <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors }}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Production</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  // 영화 상세 정보
  computed: {
    theMovie() {
      return this.$store.state.movie.theMovie
    },
    data() {
      return {
        imageLoading: true
      }
    },
    loading() {
      return this.$store.state.movie.loading
    }
  },
  // movie.js => _fetchMovie -> theMovie
  created() {
    this.$store.dispatch('movie/searchMovieWithId', {
      // movie/tt12312
      id: this.$route.params.id
    })
  },
  // Image Resizing
  methods: {
    // if 예외 처리 img 없을때
    requestDiffSizeImage(url, size = 700) {
      if (!url || url === 'N/A') { // 해당사항이 없으면
        this.imageLoading = false // 이미지 로딩을 종료하고
        return '' // 빈 문자열 반환해서 background img 아무것도 출력 x
      }
      // return url.replace('SX300', `SX${size}`)
      const src = url.replace('SX300', `SX${size}`)
      // 비동기 처리
      this.$loadImage(src)
        .then(() => { // image loading 기다리지 않고 반환 (await는 반대)
          this.imageLoading = false
        }) 
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0; // 감소 너비 사용 x
    width: 500px;
    height: calc(500px * 3 / 2);
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1; // 증가 너비 최대 사용
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: 20px;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: 20px;
    }
  }
}
.movie-details {
  display: flex; //poster specs 수평
  color: $gray-600; // 모든 글자 색상 (main.scss)
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: calc(500px * 3 / 2);
    margin-right: 70px;
    border-radius: 10px;
    background-color: $gray-200;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .specs {
    flex-grow: 1;
    .title {
      color: $black;
      font-family: 'Oswald', sans-serif;
      font-size: 70px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels {
      color: $primary;
      span {
        &::after {
          content: "\00b7"; // Labels 가운데 점 표시
          margin: 0 6px; 
        }
        &:last-child::after { // 마지막 점 제거
          display: none;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    .ratings {
      .rating-wrap {
        display: flex;
        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;
          img {
            height: 30px;
            flex-shrink: 0;
            margin-right: 6px;
          }
        }
      }
    }
    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }
  }
}
</style>