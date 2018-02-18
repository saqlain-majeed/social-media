<template>
  <div>
  <div class="flip-container">
	<div class="flipper">
		<div class="front">
			<h1>Front</h1>
		</div>
		<div class="back">
			<h1>back</h1>
		</div>
	</div>
</div>
<button type="button" name="button" @click="rotate">Change</button>
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
    rotate () {
      let front = document.getElementsByClassName('front')[0]
      let back = document.getElementsByClassName('back')[0]
      if(!this.show){
        back.style.transform = 'rotateY(0deg)'
        front.style.transform = 'rotateY(180deg)'
        this.show = true

      }else{
        back.style.transform = 'rotateY(-180deg)'
        front.style.transform = 'rotateY(0deg)'
        this.show = false
      }
    }
  }
}
</script>

<style lang="css">

.flip-container {
	perspective: 1000px;
	transform-style: preserve-3d;
}

.flip-container, .front, .back {
	width: 320px;
	height: 480px;
}


.front, .back {
	backface-visibility: hidden;
	transition: 1.5s;
	transform-style: preserve-3d;
	position: absolute;
	top: 0;
	left: 0;
}

.front {
	z-index: 2;
	transform: rotateY(0deg);
  background-color: green;
}
.back {
	transform: rotateY(-180deg);
  background-color: red;
}
</style>
