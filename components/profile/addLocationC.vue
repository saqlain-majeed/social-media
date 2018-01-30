<template>
  <div class="" id="showMapLocation" tabindex="-1" aria-labelledby="showL" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="showL">Localiza tu restaurante</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <addLocationMapC @coordinates="set($event)"></addLocationMapC>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import addLocationMapC from '~/components/profile/addLocationMapC'
export default {
  data () {
    return {
    }
  },
  components: {
    addLocationMapC
  },
  methods: {
    set (data) {
      this.$emit('setCoor', data)
    }
  }
}
</script>
<style scoped media="screen">
@import "assets/sass/colors.scss";
h3 {
  color: #a85122;
}
</style>
