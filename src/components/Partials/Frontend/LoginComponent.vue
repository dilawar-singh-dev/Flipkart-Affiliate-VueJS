<template>
  <div>
    <v-dialog v-model="loginPopup" max-width="600px" @click:outside="closeLoginDialog">
      <v-card class="py-3 py-md-6">
        <v-card-title>
          <h2 class="headline mx-auto text-uppercase">Login</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-block">
          <v-spacer></v-spacer>
            <v-btn color="primary" block @click="login()">
                Login
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  export default {
    data: () => ({
      loginPopup: false
    }),
    methods: {
      login() {
        this.$store.commit('loginTokenState', 'Daratoken12345')
        this.$store.commit('loginModalState', false)
        this.$router.push({ name: 'AdminDashboard' })
      },
      closeLoginDialog(){
        this.$store.commit('loginModalState', false)
      }
    },
    mounted() {
      this.loginPopup = this.$store.getters.loginModal
    },
    computed: mapState(
        ['loginModal']
    ),
    watch: {
      loginModal(newValue, oldValue) {
        this.loginPopup = newValue;
      },
    }
  }

</script>
