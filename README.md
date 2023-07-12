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
