<template>
  <aside>
    <loginAsideC v-if="!this.logged"></loginAsideC>
    <div v-if="this.logged">
      <singleC v-for="info in infoA" :key="info.title" :info="info" class="widget"></singleC>
    </div>
  </aside>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import singleC from '~/components/post/singleC'
  import loginAsideC from '~/components/loginAsideC'
  export default {
    data () {
      return {
        infoA: [
          {
            id: 2,
            src: 'img3',
            location: '(Las Rozas)',
            title: 'Travesia',
            points: '5.2',
            bill: 2,
            comTitle: '',
            comment: '',
            showButton: false,
            tlf: '736 455 123'
          },
          {
            id: 3,
            src: 'img2',
            location: '(Villalba)',
            title: 'La Fuente',
            points: '8.5',
            bill: 6,
            comTitle: '',
            comment: '',
            showButton: false,
            tlf: '112 432 847'
          }
        ]
      }
    },
    components: {
      singleC,
      loginAsideC
    },
    computed: {
      ...mapGetters({
        logged: 'getProfile'
      })
    }
  }
</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

aside {
  height: 400px;
  display: flex;
  flex-direction:column;
	background:$whiteColor;
  width:100%;
}
aside .widget {
  width:100%;
  margin-bottom: 5%;
	flex-flow: row wrap;
}
.mainBloc{
  width: 100%;
}
@media screen and (min-width: 600px) {
  aside {
    display: flex;
    flex-flow: row nowrap;
  }
  aside .widget { width:50%;}
}
@media screen and (min-width: 950px) {
  aside {
    display: flex;
  	flex-direction:column;
    width:30%;
}
aside .widget { width:100%;}
}

@media screen and (min-width: 1100px) {
  aside {
    padding:10px;
  }
  aside .widget {
    border-right-style: solid;
    border-color: black;
    border-width: 1px;
  }
}

</style>
