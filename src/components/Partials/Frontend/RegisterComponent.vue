<template>
  <div>
    <v-dialog v-model="registerPopup" max-width="600px" @click:outside="closeRegisterDialog">
      <v-card class="py-3 py-md-6">
        <v-card-title>
          <h2 class="headline mx-auto text-uppercase">Register</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field label="Name*" required></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions class="d-block">
          <v-spacer></v-spacer>
          <v-btn color="primary" block @click="register()">
            Register
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
      registerPopup: false
    }),
    methods: {
      register() {
        this.$store.commit('loginTokenState', 'Daratoken12345')
        this.$store.commit('registerModalState', false)
        this.$router.push({ name: 'AdminDashboard' })
      },
      closeRegisterDialog() {
        this.$store.commit('registerModalState', false)
      }
    },
    mounted() {
      this.registerPopup = this.$store.getters.registerModal
    },
    computed: mapState(
      ['registerModal']
    ),
    watch: {
      registerModal(newValue, oldValue) {
        this.registerPopup = newValue;
      },
    }
  }

</script>
