<template>
  <div>
  <div>
		<div class="front">
			<img src="~/assets/images/imgcopia.png" alt="">
		</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
img{
  width: 100%;
}

.front{
  width: 50%;
	height: auto;
	transition: 2s;
}

.front:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  transform: rotate(180deg);
}
</style>
