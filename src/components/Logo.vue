<template>
  <!-- to = main page로 이동 -->
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  // font이름은 Dash때문에 ""로 묶어서 사용
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none; // 밑줄 제거
  // .com 색상 전환 제거
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>