<template>
  <div class="containe-r">
    <headerC></headerC>
    <addLocationMapC></addLocationMapC>
  </div>
</template>
<script>
import { headerC } from '~/components/common'
import addLocationMapC from '~/components/profile/addLocationMapC'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  description: 'Autocomplete Example (#164)',
  components: {
    headerC,
    addLocationMapC
  },
  computed: {
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>

<style scoped media="screen">
  #map {
    height:300px;
    width: 100%;
  }
  img {
    width: 100%;
  }
  .load {
    padding-top: 20%;
    padding-left: 47%;
    z-index: 1;
    position: absolute;
    width: 100%;
    height:100%;
    background-color: rgba(255,255,255,0.8);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  @media screen and (min-width: 750px) {
    .containe-r{
      width: 100%;
      display:flex;
      flex-flow:row wrap;
    }
  }
</style>
