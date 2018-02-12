<template>
  <div class="listBloc">
      <singleC v-for="info in mainPosts" :key="info.date" v-if="info.date" :info="info"></singleC>
  </div>
</template>
<script>
  import firebaseApp from '~/firebaseapp'
  import { mapGetters, mapActions } from 'vuex'
  import singleC from '~/components/post/singleC'
  export default {
    data () {
      return {
        information: []
      }
    },
    methods: {
      ...mapActions(['setMainPosts']),
      nPo () {
      }
    },
    components: {
      singleC
    },
    computed: {
      ...mapGetters({ mainPosts: 'getMainPosts' })
    },
    mounted () {
      this.setMainPosts()
      this.nPo()
    }
  }
</script>

<style scoped media="screen">
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
  .listBloc > .mainBloc {
    border-style: none;
  }
}
</style>
