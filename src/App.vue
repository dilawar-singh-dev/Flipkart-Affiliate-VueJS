<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      // this.$store.commit('loginModalState', false)
    },
    watch: {
      $route(to, from) {
        // this.$store.commit('loginModalState', false)
      }
    }
  }

</script>

<style>

  .v-responsive__sizer {
    padding: 0px !important;
  }

  @media (min-width: 1366px) {
    .container {
      max-width: 1800px;
    }
  }

  *,#app div,#app .v-application  {
    font-family: 'Poppins', sans-serif!important;
  }

* i{ font-family: 'Material Icons'; }

  .hover-cursor:hover {
    cursor: pointer;
  }

  @media (min-width: 1264px) {
    .h-md-400 {
      height: 350px;
    }
  }
.list__tile {
    height: auto;
    min-height: 48px;
}

.list__tile__title { 
    white-space: normal !important;
    text-overflow: wrap !important;
    word-wrap: break-word;
}
@media (max-width: 960px) {
.dashboard-sidebar{
  max-width: 60px;
}
}
.dashboard .v-sheet--offset {
    top: -24px;
    position: relative;
  }
  .v-application a {
    color: #161615;
}
.theme--light.v-icon {
    color: rgba(0,0,0,.54)!important;
}
aside a.router-link-exact-active .theme--light.v-icon,
aside a.router-link-exact-active .v-list-item__title {
    color: rgb(98 0 234)!important;
  }
  .cursor-pointer{
    cursor:pointer;
  }
  .text-primary{
    color: #ff914d;
  }
</style>
