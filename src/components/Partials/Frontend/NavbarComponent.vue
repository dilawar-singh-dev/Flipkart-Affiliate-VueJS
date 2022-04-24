<template>
  <div>
    <v-container fluid py-0 border class="white">
      <v-row no-gutters>
        <v-container py-0 mt-3 mb-4>
          <v-row no-gutters>
            <v-col cols="10" md="3">
            <!-- <img src="../../../assets/stack-sellers-logo.png" /> -->
            <router-link to="/">
              <v-img width="160px" height="80px" contain
                :src="require('@/assets/stack-sellers-logo.png')"
                :lazy-src="require('@/assets/stack-sellers-logo.png')"
                aspect-ratio="1" class="white">
                <template v-slot:placeholder class="p-0">
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </router-link>
            </v-col>
            <!-- MOBILE NAV  -->
            <v-col cols="2" class="d-flex d-md-none align-center justify-end">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list nav dense>
                  <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

                    <v-list-item v-for="(navLink, i) in navLinks" :key="i">
                      <router-link :to="{ name: 'Products', params: { slug: navLink.slug }}" class="col-12 px-0 text-decoration-none">
                      <v-list-item-title class="text-uppercase">{{ navLink.name }}</v-list-item-title>
                      </router-link>
                    </v-list-item>

                    <v-list-item v-if="auth == false" @click="loginModalChangeState()">
                      <v-list-item-title class="text-uppercase">Login</v-list-item-title>
                    </v-list-item>

                     <v-list-item v-if="auth == false" @click="registerModalChangeState()">
                      <v-list-item-title class="text-uppercase">Register</v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="auth == true">
                      <router-link to="/admin-dashboard" class="text-decoration-none d-flex dark">
                         <v-list-item-title class="text-uppercase">Dashboard</v-list-item-title>
                      </router-link>
                    </v-list-item>

                    
                  </v-list-item-group>
                </v-list>
              </v-navigation-drawer>
            </v-col>
            <!-- MOBILE NAV END  -->
            <v-col cols="12" md="6">
              <v-toolbar color="white" :elevation="0" rounded-xl>
                <v-autocomplete @input="searchInput()" v-model="model" :items="items" :loading="isLoading"
                  :search-input.sync="search" clearable hide-selected item-text="slug"
                  label="Search millions of products" dense small filled flat full-width shaped default hint
                  color="dark" background-color="white lighten-5">
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        Search for your
                        <strong>products</strong>
                      </v-list-item-title>
                    </v-list-item>
                  </template>

                  <template v-slot:selection="{ attr, on, item, selected }">
                    <p v-bind="attr" :input-value="selected" color="white" class="my-0" v-on="on">
                      <span v-text="item.title"></span>
                    </p>
                  </template>
                  
                  <template v-slot:item="{ item }">
                    <v-list-item-avatar style="border-radius:0px">
                      <v-img width="50px" :src="item.image_url_200x200" contain></v-img>
                    </v-list-item-avatar>
                    
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                  
                </v-autocomplete>
              </v-toolbar>
            </v-col>
            <v-col cols="12" md="3" class="d-none d-md-flex">
              <v-card-actions class="justify-center justify-md-end items-center mt-1 py-0">
                <v-btn class="ma-2 px-4" small text color="dark" v-if="auth == false" @click="loginModalChangeState()">
                  Login
                </v-btn>

                 <v-btn class="ma-2 px-4" small text color="dark" v-if="auth == false" @click="registerModalChangeState()">
                  Register 
                </v-btn>

                <router-link to="/admin-dashboard" v-if="auth == true" class="text-decoration-none d-flex dark">
                <v-btn class="ma-2 px-4" small text color="dark">
                  Dashboard 
                </v-btn>
                </router-link>

              </v-card-actions>

              <!-- LOGIN MODAL -->
              <Login/>
              <!-- LOGIN MODAL END-->

              <!-- REGISTER MODAL -->
              <Register/>
              <!-- REGISTER MODAL END-->

            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
    <v-container fluid py-0 border class="white d-none d-md-flex">
      <v-row no-gutters>
        <v-container py-0>
          <v-row no-gutters>
            <v-col cols="12">
              <v-row no-gutters class="justify-center items-center py-0">
                <v-card-actions class="justify-center items-center mt-0 py-0" v-for="(navLink, i) in navLinks" :key="i">
                  <router-link :to="{ name: 'Products', params: { slug:  navLink.slug }}" class="col-12 px-0 text-decoration-none mt-0 py-0">
                  <v-btn class="ma-2 px-0 px-md-4" small text color="dark">
                    {{ navLink.name }}
                  </v-btn>
                  </router-link>
                </v-card-actions>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Login from './LoginComponent.vue'
import Register from './RegisterComponent.vue'
const axios = require('axios');
export default {
    components:{
        Login,
        Register
    },
    data: () => ({
      loginModal: false,
      registerModal: false,
      socials: [{
          icon: 'mdi-facebook',
          color: 'indigo',
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],
      navLinks: [],
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      drawer: false,
      group: null,
      auth:false
    }),
    methods:{
      loginModalChangeState(){
        this.$store.commit('loginModalState', true)
      },
      registerModalChangeState(){
        this.$store.commit('registerModalState', true)
      },
      searchInput(val){

        if(val.length < 3){
          return false;
        }

        this.isLoading = true

         axios.get('api/products?search='+val)
          .then(response => {
            this.items = response.data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
      getCategories(){
         axios.get('api/categories')
          .then(response => {
            this.navLinks = response.data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      }
    },
    mounted(){
      if(this.$store.getters.loginToken){
        this.auth = true;
      }
      this.getCategories();
    },
    watch: {
      loginToken(newValue, oldValue) {
        if(this.$store.getters.loginToken){
            this.auth = true;
        }
      },
      model(val) {
        // console.log(val)
        this.$router.push({ name: 'SingleProduct' ,params: { slug: val } })
        // if (val != null) this.tab = 0
        // else this.tab = null
      },
      search(val) {
       this.searchInput(val)
      },
      group() {
        this.drawer = false
      },
    },
}
</script>
