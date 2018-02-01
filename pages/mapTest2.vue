<template>
  <div class="">
    <headerC></headerC>
    <!--
    <gmap-map :center="{lat:51.5074, lng:0.1278}" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px">
      <gmap-marker :position="{lat:51.5074, lng:0.1278}"></gmap-marker>
    </gmap-map> -->
    <button @click="setPlaceText('Tokyo')">Set to Tokyo</button><br/>
    <button @click="setPlaceText('Shanghai')">Set to Shanghai</button><br/>
    <button @click="setPlaceText('Seoul')">Set to Seoul</button><br/>
    <gmap-place-input :default-place="place" @place_changed="setPlace"></gmap-place-input>
  <br/>
  {{latLng.lat}},
  {{latLng.lng}}
  <a href="#" @click="showInfo">show</a>
</div>
</template>
<script>
import { headerC } from '~/components/common'
import { mapActions } from 'vuex'
// import {GmapPlaceInput} from 'vue2-google-maps'

export default {
  data () {
    return {
      place: 'Singapore',
      latLng: {}
    }
  },
  methods: {
    showInfo () {
      console.log('googlemaps***')
    }
  },
  components: {
    headerC
  },
  computed: {
    ...mapActions(['bindAuth', 'unbindFirebaseReferences']),
    setPlaceText (place) {
      this.place = place
    },
    setPlace (place) {
      console.log('>>>>', place && place.geometry)
      try {
        if (place && 'geometry' in place) {
          this.latLng = {
            // lat: place.geometry.location.lat(),
            // lng: place.geometry.location.lng()
          }
        } else {
          this.latLng = {
            lat: 51.5074,
            lng: 0.1278
          }
        }
      } catch (e) {
        console.error(e, place)
      }
      return this.latLng
    }
  },
  created () {
    this.bindAuth
  },
  destroyed () {
    this.unbindFirebaseReferences
  }
}
</script>

<style media="screen">
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
