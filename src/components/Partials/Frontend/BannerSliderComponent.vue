<template>
  <div>
    <v-container fluid py-0 border class="white" px-0>
      <v-row no-gutters>
        <v-container py-0 px-0>
          <v-row no-gutters>
            <v-col cols="12" px-0 class="py-5">
              <v-carousel :show-arrows="true" cycle hide-delimiters :height="bannerHeight" hide-delimiter-background>
                <v-carousel-item v-for="(offer,i) in offers" :key="i" primary>

                  <v-row no-gutters class="align-items-center fill-height">
                    <v-col cols="5" px-0 class="d-flex align-center justify-center flex-column">
                      <div>
                        <v-img width="400px" height="400px" contain :src="offer.image_default"
                          :lazy-src="offer.image_low" aspect-ratio="1" class="white mx-auto my-auto">
                          <template v-slot:placeholder class="p-0 ">
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </div>

                    </v-col>

                    <v-col cols="7" px-0 class="d-flex align-center justify-center flex-column">
                      <div class="">

                        <h2 class="text-primary font-weight-bold text-h2 mb-5 mr-10">{{offer.title}} on {{offer.name}}
                        </h2>

                        <span class="d-block">
                          <a :href="offer.fk_url" target="_blank" class="px-0 text-decoration-none">
                            <v-btn color="primary" class="px-10" small outlined>
                              Go to Store
                            </v-btn>
                          </a>
                        </span>

                      </div>
                    </v-col>
                  </v-row>

                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  const axios = require('axios');
  import moment from 'moment'
  export default {
    data: () => ({
      offers: [],
      bannerItems: [{
          src: 'https://footballqueensland.com.au/wp-content/uploads/2018/08/1808007-Sports-Armour-40-Offer-Web-Banner-Image-1920x580.png',
        },
        {
          src: 'https://footballqueensland.com.au/wp-content/uploads/2019/04/190328-IFCCA-Price-Strategy-10-PASS-Web-Banner-1920-x-580-V02.jpg',
        },
        {
          src: 'https://www.endeavorcareers.com/wp-content/uploads/2019/08/anniversary-banner.jpg',
        }
      ]
    }),
    computed: {
      bannerHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return 200
          case 'sm':
            return 300
          case 'md':
            return 350
          case 'lg':
            return 400
          case 'xl':
            return 500
        }
      },
    },
    methods: {
      getOffers() {
        axios.get('api/offers/')
          .then(response => {
            this.offers = response.data;
          })
      }
    },
    mounted() {
      this.getOffers();
    },
  }

</script>
