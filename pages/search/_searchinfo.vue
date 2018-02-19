<template>
  <div>
    <headerC></headerC>
    <searcherC></searcherC>
    <div v-if="loaded">
    <gmap-map :center="center" :zoom="13" style="color:blue;width: 100%; height: 300px" v-if="loaded">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false"><a :href="this.ancla(infoContent)">{{infoContent}}</a></gmap-info-window>
      <gmap-marker :key="index" v-for="(m, index) in markers" :icon="m.ico" :position="m.position" :clickable="true" :draggable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
    </gmap-map>
    </div>
    <h3>{{nRestaurants}} resultados en tu zona</h3>
    <div class="listBloc">
        <singleC v-for="info in mainPosts" :key="info.date" v-if="info.date" :info="info"></singleC>
    </div>
  </div>
</template>

<script>
import { headerC, footerC, searcherC } from '~/components/common'
import singleC from '~/components/post/singleC'
import { mapGetters, mapActions } from 'vuex'
export default{
  data(){
    return {
      center: {lat: parseFloat(this.$route.query.lat), lng: parseFloat(this.$route.query.lng)},
      markers: [],
      infoContent: '',
      infoWinOpen: false,
      infoWindowPos: { lat: 0, lng: 0 },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      loaded: true,
      nRestaurants: 0
    }
  },
  methods: {
    ...mapActions(['setMainPosts']),
    toggleInfoWindow: function(marker, idx) {

      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;

      }
    },
    ancla (name){
      return '#' + name
    }
  },
  computed: {
    ...mapGetters({ mainPosts: 'getMainPosts' }),
    ...mapActions(['bindAuth', 'unbindFirebaseReferences'])
  },
  components: {
    headerC,
    singleC,
    searcherC
  },
  created (){

  },
  mounted () {
    this.setMainPosts({type: 'searchlist', cords: {lat: parseFloat(this.$route.query.lat), lng: parseFloat(this.$route.query.lng)}})
    let c = 0
    this.mainPosts.forEach(info => {
      this.markers.push({position: {lat: info.lat, lng: info.lng}, infoText: info.title})
      c++
    })
    this.nRestaurants = c
    this.markers.push({position: {lat: parseFloat(this.$route.query.lat), lng: parseFloat(this.$route.query.lng)}, ico: 'https://firebasestorage.googleapis.com/v0/b/wtedata-eb0c5.appspot.com/o/defaultImages%2Ficonloc.png?alt=media&token=5e159963-4a60-42e0-8eea-e81701e40072', infoText: 'Tu'})
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
h3{
  text-align: center;
  padding: 20px;
  color: #00a4ba;
}
.listBloc{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
@media screen and (min-width: 650px) {
  .listBloc {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
