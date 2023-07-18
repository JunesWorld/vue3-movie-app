# vue3-movie-app

## Router

페이지 구분하는 용도

vue3 Router = Vue-router next

- Install
  ```bash
  npm i vue-router@4
  ```

Install 후 main.js에 연결 및 routes폴더 / index.js & Home.vue & About.vue 파일 생성

## Bootstrap 

- Install

```bash
npm i bootstrap
```

## Header(Nav)
- main.scss에 연결
- Bootstrap Homepage/Customize/Sass
  - !default
    - scss에서 제공하는 기능으로 새롭게 지정되는 값이 있으면 기존값을 무시하겠다는 의미
    - 즉, Bootstrap에서 지정한 '파란색'의 primary 색상을 우리가 외부에서 수정할 수 있다는 의미
  - main.scss(Required)
    ```html
    // Required
    @import "../../node_modules/bootstrap/scss/functions";
    
    // Default variable overrides
    $body-bg: #000;
    $body-color: #111;
    
    // Required
    @import "../../node_modules/bootstrap/scss/variables";
    @import "../../node_modules/bootstrap/scss/variables-dark";
    @import "../../node_modules/bootstrap/scss/maps";
    @import "../../node_modules/bootstrap/scss/mixins";
    @import "../../node_modules/bootstrap/scss/root";
    
    @import "../../node_modules/bootstrap/scss/bootstrap";
    ```

- Header(Nav)
  - Bootstrap Homepage/Components/Navs & Tabs/Pills
  - 경로
    - components/Header.vue
   
## Header(Logo&Google Fonts)

- Header.vue / Logo.vue / index.html

Google Fonts (index.html)
- Roboto(Regular400, Bold700) -> Project 전체
- oswald(500) -> Logo에서만 사용
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet">

  <style>
    body {
      line-height: 1.4;
      font-family: 'Roboto', sans-serif;
    }
  </style>
  ```

## Axios Install

HTTP 연결 요청
```bash
npm i axios
```
통신기록
- 개발자도구/Network/XHR
  - XHR은 XMLHttpRequest의 약어로 웹 브라우저와 웹 서버 간에 데이터 전송 API를 의미합니다.</br> 그래서 개발자 도구의 네트워크 탭으로 페이지에서 발생하는 데이터 요청은 XHR 메뉴로 필터링할 수 있습니다.
  - 검색 후 Headers
    - API key등 정보 확인 가능
  - Previe & Response
    - 응답 결과

## Vuex Install

```bash
npm i vuex@next
```

## Lodash Install

배열 데이터 고유화

```bash
npm i lodash
```

movie.js
```html
import _uniqBy from 'lodash/uniqBy'
```

## 말줄임 표시(div 3가지 요소) 

`white-space: nowrap;` : 배경에 감싸지 않고 한줄로 표현

`overflow: hidden;` : 넘치는 부분 숨기기

`text-overflow: ellipsis;` : 넘치는 부분 말줄임 표시(...)

- 블러 처리
  ```css
  div {
    background-color: orange;
    font-size: 30px;
    padding: 20px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }
  div::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%
    height: 100%
    border: 4px solid red;
    box-sizing: border-box;
    backdrop-filter: blur(4px) grayscale();
  }
   
## 강제 지연 필요시

작업관리자 / Network / No throttling

## Skeleton UI

UI의 뼈대

## 더 높은 해상도의 영화 포스터 가져오기

[Google] 실시간 이미지 리사이징
- AWS Lambda@edge로 실시간 이미지 리사이징
- 이미지 URL에서 리사이징

## Plugin = $

## 404 Page Not Found

[Goggle] vue router next (Vue Router Home)
- Dynamic Rout Matching / Catch all 404 Not found Route

## 부트스트랩 Breakpoint(반응형)

- Layout / Breakpoints

## 모든 컴포넌트에서 전역 스타일 가져오기

[Google] sass-loader github
- webpack-contrib/sass-loader: Compiles Sass to CSS -Github
- additionalData
  - webpack.config.js
    ```js
    {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/scss/main";'
            }
          }
    ```
- 모든 파일에서 `@import "~/scss/main";` 제거(돋보기)

## Vues Helpers

State에서 자주 활용 (Actions, Mutations에서는 비추)
[Google] vuex next
- Core Concepts / State / mapstate Helper
- Header.vue
  ```js
  import { mapState } from 'vuex'
  
  computed: {
    ...mapState('about'(모듈), [
      'image',
      'name'
    ])
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // }
  },
  ```

## 검색 정보 초기화 및 페이지 전환 스크롤 위치 복구

[Google] Vue Router
- Advanced / Scroll Behavior

## Vue Router 정리

- <RouterView> : 페이지가 출력(렌더링)되는 영역 컴포넌트
  - App.vue, Header, Footer
- <RouterLink> : 페이지 이동을 위한 링크 컴포넌트
  - A tag
- $route(속성) : Route(페이지) 정보를 가지는 객체
  - fullPath : 해당 페이지의 전체경로
  - params : 해당 페이지의 파라미터정보
- $router(메소드) : Route(페이지) 조작을 위한 객체
  - push : 페이지 이동

## Netlify 배포

`New site from Git`  
`Continous Deployment/Github`  
`vue-movie-app`  
`Team/master/npm run build/dist`  
`Deploy Site`  

## Netlify Serverless Functions

보안 이슈 : Network 모두 노출
- Functions
- `netify.toml`
- functions 파일 생성
- 파일 작성 후 Github push
- Netlify deploy 완료 후 site overview에서 주소로 이동
  - #/ 삭제
  - netlify/functions/hello 접근

## Netlify - CLI 구성

Netlify Docs
- CLI / Command reference / Netlify Dev

CLI Install & 실행
- `npm i -D netlify-cli`
- `npm run dev:netlify` -> localhost:8888 

## 로컬 및 서버의 환경 변수 구성

코드에 API Key 노출 방지  
`npm i -D dotenv-webpack`

- .env 파일 생성 후 API key 입력
- webpack.config.js
  - `const Dotenv = require('dotenv-webpack')`
- movie.js
  - `const OMDB_API_KEY = process.env.OMDB_API_KEY`

- Netlify에서 환경변수 관리
  - Site settings / Environment / Environment variables
  - OMDB_API_KEY

## 포트 수정 및 배포

package.json
```js
"scripts": {
    "dev:webpack": "webpack-dev-server --mode development",
    "dev": "netlify dev",
    "build": "webpack --mode production",
    "lint": "eslint --fix --ext .js,.vue"
  },
```
- `npm run dev` = serverless
- `npm run dev:webpack`
- netlify.toml 파일 command 수정

## 단위 테스트

Unit Test(테스트 코드)
- 단위(Unit) 테스트란 데이터(상태), 함수(메소드), 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인하는 방법
- Framework : Jest, Vue Test Utils

E2E Test(화면에서 테스트)
- E2E(End to End) 테스트란 애플리케이션의 처음부터 끝까지의 실제 사용자의 관점에서 사용 흐름을 테스트하는 방법
- Framework : Cypress

## 테스트 환경 구성

`npm i -D jest @vue/test-utils@next vue-jest@next babel-jest`
- jest.config.js 파일 생성
- tests 폴더
  - example.js / export
  - example.test.js / import
- package.json
  - scripts
    - "test:unit": "jest --watchAll"
    - jest를 통해서 테스트 환경을 실행하고 변경사항들을 watchAll로 감지해서 동작
    - `npm run test:unit`

## Jest Globals

[Google] Jest Testing
- API/Globals/example.test.js
  ```js
  import { double } from './example'

  describe('그룹 1', () => {
    // 그룹안의 모든 테스트가 시작되기 전에 단 한번만 실행
    beforeAll(() => {
      console.log('beforeAll!')
    })
    // 모든 테스트가 실행된 후 단 한번만 실행
    afterAll(() => {
      console.log('afterAll!')
    })
    // 각각의 테스트가 실행되기 직전에 동작
    beforeEach(() => {
      console.log('beforeEach!')
    })
    // 각각의 테스트가 동작한 이후에 동작
    afterEach(() => {
      console.log('afterEach!')
    })
  
    test('첫 테스트', () => {
      console.log('첫 테스트!')
      expect(123).toBe(123)
    })
    
    test('인수가 숫자 데이터입니다', () => {
      console.log('인수가 숫자 데이터입니다!')
      expect(double(3)).toBe(6)
    })
    
    test('인수가 없습니다', () => {
      console.log('인수가 없습니다!')
      expect(double()).toBe(0)
    })
  })
  ```
example.js
  ```js
  export function double(num) {
  if(!num) {
    return 0
  }
  return num * 2
}
```
  - toBe() : 원시형 데이터 비교
  - toEqual() : 객체(참조형) 데이터 비교

## Jest Matchers

```js
const userA = {
  name: 'JUNE',
  age: 85
}
const userB = {
  name: 'NEO',
  age: 22
}

test('데이터가 일치해야 합니다', () => {
  expect(userA.age).toBe(85)
  expect(userA).toEqual({
    name: 'JUNE',
    age: 85
  })
})

test('데이터가 일치하지 않아야 합니다', () => {
  expect(userB.name).not.toBe('JUNE')
  expect(userB).not.toBe(userA)
})
```

## 비동기 테스트

example.testt.js
```js
import { asyncFn } from './example'

// 2초 뒤에 비동기 코드 동작
// 테스트 코드 동작
// done() 동작
describe('비동기 테스트', () => {
  test('done', (done) => {
    asyncFn().then(res => {
      expect(res).toBe('Done!')
      done()
    })
  })

  // return으로 반환하면 비동기로 반환
  test('then', () => {
    return asyncFn().then(res => {
      expect(res).toBe('Done!')
    })
  })

  test('resolves', () => {
    return expect(asyncFn()).resolve.toBe('Done!')
  })

  // 직관적!!(추천)
  // 최대 5초까지만 기다릴 수 있음으로 넘어갈 시 명시
  test('async/await', async () => {
    const res = await asyncFn()
    expect(res).toBe('Done!')
  }, 7000)
})
```

example.js
```js
export function asyncFn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done!')
    }, 2000);
  })
}
```

## 모의(Mock) 함수

example.test.js
```js
import axios from 'axios'
import { fetchMovieTitle } from './example'

describe('비동기 테스트', () => {
  test('영화 제목 변환', async () => {
    // 모의함수
    // test의 외부요인 제거
    axios.get = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          data: {
            Title: 'Frozen II'
          }
        })
      })
    })
    const title = await fetchMovieTitle()
    expect(title).toBe('Frozen ii')
  })
})
```

example.js
```js
import axios from 'axios'
import _upperFirst from 'lodash/upperFirst'
import _toLower from 'lodash/toLower'

export async function fetchMovieTitle() {
  const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988')
  return _upperFirst(_toLower(res.data.Title)) // Frozen II => Frozen ii
}
```
