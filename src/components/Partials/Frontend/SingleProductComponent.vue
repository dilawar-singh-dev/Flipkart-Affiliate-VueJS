<template>
  <div>
    <v-container fluid py-0 border class="white">
      <v-row no-gutters>
        <v-container py-5 my-5 px-0 px-md-10>
          <v-row no-gutters>
            <v-col cols="12" sm="10" md="4" class="mb-5 mx-auto">

              <div class="overflow-hidden">
                <zoom-on-hover style="width:300px" class="img-fluid mx-auto" :scale="2" :img-normal="product.image_url_800x800"></zoom-on-hover>
              </div>
 
              <!-- <v-row no-gutters>

                <v-col cols="12" class="d-flex flex-wrap align-center justify-center mt-4">
                  <v-sheet color="primary" elevation="1" class="mr-2 hover-cursor mb-4"
                    @click="productPrimaryImage('assets/product/product-1.png')">
                    <v-img width="70px" height="70px" contain :src="require('@/assets/product/product-1.png')"
                      :lazy-src="require('@/assets/product/product-1.png')" aspect-ratio="1" class="white ">
                      <template v-slot:placeholder class="p-0 ">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-sheet>
                  <v-sheet color="primary" elevation="1" class="mr-2 hover-cursor mb-4"
                    @click="productPrimaryImage('assets/product/product-2.png')">
                    <v-img width="70px" height="70px" contain :src="require('@/assets/product/product-2.png')"
                      :lazy-src="require('@/assets/product/product-2.png')" aspect-ratio="1" class="white">
                      <template v-slot:placeholder class="p-0">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-sheet>
                  <v-sheet color="primary" elevation="1" class="mr-2 hover-cursor mb-4"
                    @click="productPrimaryImage('assets/product/product-3.png')">
                    <v-img width="70px" height="70px" contain :src="require('@/assets/product/product-3.png')"
                      :lazy-src="require('@/assets/product/product-3.png')" aspect-ratio="1" class="white">
                      <template v-slot:placeholder class="p-0">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-sheet>
                  <v-sheet color="primary" elevation="1" class="mr-2 hover-cursor mb-4"
                    @click="productPrimaryImage('assets/product/product-4.png')">
                    <v-img width="70px" height="70px" contain :src="require('@/assets/product/product-4.png')"
                      :lazy-src="require('@/assets/product/product-4.png')" aspect-ratio="1" class="white">
                      <template v-slot:placeholder class="p-0">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-sheet>
                  <v-sheet color="primary" elevation="1" class="mr-2 hover-cursor mb-4"
                    @click="productPrimaryImage('assets/product/product-5.png')">
                    <v-img width="70px" height="70px" contain :src="require('@/assets/product/product-5.png')"
                      :lazy-src="require('@/assets/product/product-5.png')" aspect-ratio="1" class="white">
                      <template v-slot:placeholder class="p-0">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-sheet>
                </v-col>

              </v-row> -->

            </v-col>

            <v-col cols="12" sm="12" md="8" class="mb-5">
              <div class="ml-sm-5 pl-sm-5">

                <h2 class="text-uppercase mb-4"><span>{{product.title}}</span></h2>

                <p class="text-uppercase mb-5"><span class="font-weight-bold">Best Price: ₹ {{formatPrice(product.fk_selling_price)}}</span></p>


                <v-row no-gutters class="dark flex-nowrap mb-5 mt-5">

                  <v-col cols="3" sm="3" class="d-flex align-center mb-3">
                    <v-img width="100px" height="33px" contain :src="require('@/assets/product/flipkart_store.png')"
                      :lazy-src="require('@/assets/product/flipkart_store.png')" aspect-ratio="1" class="white">
                      <template v-slot:placeholder class="p-0">
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>

                  <v-col cols="4" sm="3" class="d-flex align-center mb-3">
                    <p class="mb-0 mx-auto"><span class="font-weight-bold">₹ {{formatPrice(product.fk_selling_price)}}</span></p>
                  </v-col>

                  <v-col cols="4" sm="3" class="d-flex justify-center align-center mb-3">
                    <div>
                        <a :href="product.fk_product_url" target="_blank" class="col-12 px-0 text-decoration-none">
                        <v-btn color="warning" small outlined block>
                            Go to Store
                        </v-btn>
                        </a>
                    </div>
                  </v-col>

                </v-row>
                <!-- PRICE LIST END  -->

                <v-col cols="3" class="px-0">
                  <v-btn color="primary" small outlined block>
                    Compare
                  </v-btn>
                </v-col>

                <p class="text-uppercase mb-5 mt-5 text-h6"><span class="font-weight-bold">Key Specifications</span>
                </p>

                <v-row no-gutters class="dark mb-5 mt-5">

                  <v-col v-for="short_specification in product.short_specifications" :key="short_specification.id" cols="12" sm="6" class="mb-3">
                    <span>{{short_specification.title}}</span>
                  </v-col>

                </v-row>

              </div>

            </v-col>

          </v-row>

          <v-row no-gutters>
            <v-col cols="12">
              <p class="text-uppercase text-h6 mt-10"><span class="font-weight-bold">Specifications</span>
              </p>
            </v-col>

            <v-col cols="12" class="mb-5" v-for="product_specification_category in product.product_specification_categories" :key="product_specification_category.id">
              <p class="text-uppercase mb-5"><span class="font-weight-bold">{{product_specification_category.title}}</span>
              </p>
              <v-sheet elevation="1" class="mr-2" >
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="product_specification in product_specification_category.detail_specifications" :key="product_specification.id">
                        <td style="width:20%">{{ product_specification.title }}</td>
                        <td>{{ product_specification.description }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
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
      product:{},
      tableData: [{
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
      productImage: 'assets/product/product-1.png'
    }),
    methods: {
      productPrimaryImage(imageUrl) {
        this.productImage = imageUrl;
      },
      getProduct() {
        axios.get('api/product/' + this.$route.params.slug)
          .then(response => {
            this.product = response.data;
          })
      },
      formatPrice(value) {
        let val = (value/1)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    },
    mounted() {
      this.getProduct();
      window.scrollTo(0, 0);
    },
    watch: {
      $route() {
        this.getProduct();
        window.scrollTo(0, 0);
      }
    }
  }

</script>
