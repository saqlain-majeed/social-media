import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAOzFhNFQFvflJJrd6C-OEKKeIj-wV_uXQ',
    v: 3,
    libraries: 'places'
  }
})
