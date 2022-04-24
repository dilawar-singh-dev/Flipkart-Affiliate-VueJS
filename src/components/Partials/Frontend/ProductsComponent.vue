<template>
  <div>
    <v-container fluid py-0 border class="white" px-0>
      <v-row no-gutters>
        <v-container py-5 my-5 px-0>
          <v-row no-gutters>
            <v-col cols="12" class="mb-5">
              <h2 class="ml-md-5 text-uppercase"><span>{{ productName }}</span></h2>
            </v-col>
            <v-col cols="12" px-0>
              <v-sheet class="mx-auto" max-width="1920">

                <v-row no-gutters class="px-3">
                  <v-col cols="12" sm="6" md="6" class="mb-5 px-2 d-flex justify-center" v-for="product in products" :key="product.id">
                    <v-card class="col-12" mx-auto outlined>
                      <router-link :to="{ name: 'SingleProduct', params: { slug: 'dara' }}"
                        class="col-12 px-0 text-decoration-none">
                        <v-row no-gutters>

                          <v-col cols="12" lg="4" px-0>
                            <v-img class="white--text align-end" height="200px"
                              :src="product.image_url_400x400">
                            </v-img>
                          </v-col>

                        </v-row>
                      </router-link>
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
      productName: null,
      products:[],
      isLoading: false
    }),
     methods:{
      getCategoryProducts(){
         axios.get('api/products/'+this.$route.params.slug)
          .then(response => {
            this.products = response.data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      }
    },
    mounted() {
      this.productName = this.$route.params.slug;
      this.getCategoryProducts();
    },
    watch: {
      $route(to, from) {
        this.productName = this.$route.params.slug
        this.getCategoryProducts();
      }
    }
  }

</script>
