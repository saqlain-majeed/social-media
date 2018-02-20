<template>
    <div class="col">
      <div>
        <h5>Busqueda personalizada</h5>
        <input type="text" ref="words" placeholder="restaurante, tipos, palabra clave..">
        <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
        <h5>Filtros</h5>
        <div class="login">
        <div class="cel">
          <h6>Precio Medio</h6>
          <select v-model="bill">
            <option value="-1">sin especif.</option>
            <option value="0">0 - 10 €</option>
            <option v-for="n in 9" :value="n">{{n}}0 - {{n+1}}0 €</option>
          </select>
        </div>
        <div class="cel">
          <h6>Valoración</h6>
          <select v-model="points">
            <option value="-1">sin especif.</option>
            <option v-for="n in 10" :value="n">{{n}}</option>
          </select>
        </div>
        </div>
      </div>
        <button type="button" class="btn btn-danger send" @click="searchRestaurants">Buscar</button>
        <button type="button" @click="locate" class="btn btn-info send">Restaurantes cerca de mí</button>
      </div>
    </div>
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      points: -1,
      bill: -1,
      latLng: {},
      lat: '',
      lng: '',
      place: 'Madrid'
    }
  },
  methods: {
    ...mapActions(['setMainPosts']),
    locate(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.lat = pos.lat;
                this.lng = pos.lng;
                this.$router.push({path: '/searchLocation/' +'query', query: {lat: this.lat, lng: this.lng}})
            }.bind(this));
        }
    },
    searchRestaurants () {
      let searchWords = this.$refs.words.value
      if(searchWords !== ''){
        this.setMainPosts({type: 'wordList', words: searchWords, bill: this.bill, points: this.points})
        this.$router.push({path: '/search/' + 'query', query: { words: searchWords }})
      } else if (this.lat !== ''){
        this.$router.push({path: '/searchLocation/' +'query', query: {lat: this.lat, lng: this.lng}})
      }
    },
    setPlace(place) {
      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.lat = this.latLng.lat
      this.lng = this.latLng.lng
    }
  }
}
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

.login {
  display: flex;
  flex-flow: row nowrap;
}
.cel {
  width: 50%;
}

select {
  width: 90%;
  height: 40px;
  padding: 5px;
}
.fillF {
  width: 85%;
}

.fillF h5 {
  background-color: #E5BE5C;
  border-radius: 5px;
  padding: 5px;
}

aside .col {
  width: 100%;
}

.send {
  width: 100%;
  margin-top: 10px;
  height: 50px;
}

.log {
  background-color: #c0b386;
  border: none;
}

.log:hover {
  background-color: #9a8f67;
}
.inns{
  width: 100%;
  height: 50px;
  padding: 5px;
}
input {
  width: 100%;
  height: 50px;
  padding: 5px;
  margin-top: 15px;
}

h5 {
  background-color: #00a4ba;
  padding: 5px;
  margin-top: 15px;
  color: white;
  font-weight: 300;
}

</style>
