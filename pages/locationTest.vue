<template>
    <div>
        <gmap-map id="map" :center="center" :zoom="18" style="width: 100%; height: 300px">
            <gmap-marker :key="index" v-for="(m, index) in markers" :position="center = m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
        </gmap-map>
        {{this.latLng}}{{this.center}}{{location}}
    </div>
</template>

<style>

</style>

<script>
    export default{
        data(){
            return {
                center: {lat: 23.8103, lng: 90.4125},
                markers: [
                    {position: {lat: 10.0, lng: 10.0}}
                ],
                getMap: this.$root.mapping,
                description: '',
                place: null,
                location: false
            }
        },

        mounted(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.center.lat = pos.lat;
                    this.center.lng = pos.lng;
                    this.markers[0].position.lat = pos.lat;
                    this.markers[0].position.lng = pos.lng;
                    this.location = true

                    this.geocodeLatLng(new google.maps.Geocoder, pos, google.maps.InfoWindow);

                }.bind(this));
            }
        },
        methods: {
            geocodeLatLng(geocoder, map, infowindow){
                geocoder.geocode({'location':this.center}, function(results, status){
                    console.log(results, status);
                });
            }
        },
    }
</script>
