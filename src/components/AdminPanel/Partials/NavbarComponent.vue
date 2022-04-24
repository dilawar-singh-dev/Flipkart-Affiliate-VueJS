<template>
      <v-app-bar color="deep-purple accent-4" dark fixed style='z-index:20001;'>
        {{ $store.getters.loginToken }}
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="cursor-pointer" @click="settings()">Settings</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="cursor-pointer" @click="logout()">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({}),
    methods: {
      settings(){
         this.$router.push({ name: 'AdminSettings' })
      },
      logout(){
        this.$store.commit('loginTokenState', null)
        this.$router.push({ name: 'Home' })
      }
    },
    mounted() {
      if(!this.$store.getters.loginToken) {
        this.$store.commit('loginModalState', true)
        this.$router.push({ name: 'Home' })
      }
    },
  }

</script>
