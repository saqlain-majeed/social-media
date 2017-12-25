<template>
  <div class="main">
    <img src="~/assets/images/img1.jpg" alt="">
  </div>
</template>

<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.main {
  background:$whiteColor;
  flex:1 1 70%;
  padding: 5px;
}

@media screen and (min-width: 650px) {
  .mainBloc{
    min-width: 100%;
  }
}

@media screen and (min-width: 800px) {
  .main{

  }
}
</style>
