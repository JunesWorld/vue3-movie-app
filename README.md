# vue3-movie-app

## Router

페이지 구분하는 용도

vue3 Router = Vue-router next

- Install
  ```bash
  npm i vue-router@4
  ```

Install 후 main.js에 연결 및 routes폴더 / index.js & Home.vue & About.vue 파일 생성

## Bootstrap Install

```bash
npm i bootstrap
```

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
