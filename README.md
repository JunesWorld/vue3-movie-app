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
