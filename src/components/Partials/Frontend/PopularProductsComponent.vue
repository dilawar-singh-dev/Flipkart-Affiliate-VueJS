<template>
  <div>
    <v-container fluid py-0 border class="white" px-0>
      <v-row no-gutters>
        <v-container py-5 my-5 px-0>
          <v-row no-gutters>
            <v-col cols="12" class="mb-5">
              <h2 class="ml-5 pl-5 text-uppercase"><span class="ml-5">Popular Products</span></h2>
            </v-col>
            <v-col cols="12" px-0>
              <v-sheet class="mx-auto" max-width="1920">

                <!-- DESKTOP VIEW  -->
                <v-slide-group multiple show-arrows cycle v-if="screenWidth == 1200">

                  <v-slide-item v-for="product in products" :key="product.id">
                    <v-card class="ml-3 pt-4 d-flex flex-column justify-space-between" max-width="250" outlined>

                      <div>
                        <v-img height="200px" contain :src="product.image_url_400x400"
                          :lazy-src="product.image_url_200x200" aspect-ratio="1" class="white">
                          <template v-slot:placeholder class="p-0">
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>

                        </v-img>
                      </div>

                      <div>
                        <v-card-title class="text-md-body-1">{{product.title}}</v-card-title>

                        <v-card-subtitle class="pb-0 text-h6 font-weight-bold mt-0">
                          {{product.fk_selling_currency}} {{product.fk_selling_price}}
                        </v-card-subtitle>

                        <v-card-actions class="mt-auto">
                          <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug }}"
                            class="col-12 px-0 text-decoration-none">
                            <v-btn color="warning" small outlined block>
                              Buy
                            </v-btn>
                          </router-link>
                        </v-card-actions>
                      </div>

                    </v-card>
                  </v-slide-item>

                </v-slide-group>

                <!-- MOBILE VIEW  -->
                <v-row no-gutters class="px-3" v-if="screenWidth == 959">
                  <v-col cols="12" sm="6" class="mb-5 px-2 d-flex justify-center" v-for="product in products" :key="product.id">

                     <v-card class="col-12" mx-auto outline>

                      <div>
                        <v-img height="200px" contain :src="product.image_url_400x400"
                          :lazy-src="product.image_url_200x200" aspect-ratio="1" class="white">
                          <template v-slot:placeholder class="p-0">
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>

                        </v-img>
                      </div>

                      <div>
                        <v-card-title class="text-md-body-1">{{product.title}}</v-card-title>

                        <v-card-subtitle class="pb-0 text-h6 font-weight-bold mt-0">
                          {{product.fk_selling_currency}} {{product.fk_selling_price}}
                        </v-card-subtitle>

                        <v-card-actions class="mt-auto">
                          <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug }}"
                            class="col-12 px-0 text-decoration-none">
                            <v-btn color="warning" small outlined block>
                              Buy
                            </v-btn>
                          </router-link>
                        </v-card-actions>
                      </div>

                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const axios = require('axios');
  export default {
    data: () => ({
      products:[]
    }),
    computed: {
      screenWidth() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 959;
          case 'sm':
            return 959
          case 'md':
            return 1200
          case 'lg':
            return 1200
          case 'xl':
            return 1200
        }
      },
    },
    methods: {
      getProducts(){
        axios.get('api/products').then(
            response => {
              this.products = response.data;
              // this.$store.dispatch('commitGetProducts', response.data.data)
        });
      }
    },
    mounted() {
      // Fetch initial results
      this.getProducts();
    }
  }

</script>
