<template>
  <div style="height:100%" class="dashboard">

    <Navbar/>

    <Sidebar/>

    <v-row no-gutters class="mt-15 pt-10 pl-3 pr-3 pl-md-10 pl-lg-0 pl-lg-0">
      <v-col cols="10" sm="11" md="9" xl="10" offset="2" offset-sm="1" offset-md="3" offset-xl="2">
        <v-row>
          <v-col cols="12" sm="6" md="6" xl="4" class="mb-15" v-for="n in 10" :key="n">
            <v-card class="mt-4" max-width="400">
              <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="12" max-width="calc(100% - 32px)">
                <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">
                  User Registrations
                </div>
                <div class="subheading font-weight-light grey--text">
                  Last Campaign Performance
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import Navbar from './Partials/NavbarComponent.vue'
import Sidebar from './Partials/SidebarComponent.vue'
  export default {
    components:{
      Navbar,
      Sidebar
    },
    data: () => ({
      drawer: false,
      group: null,
      selectedItem: 1,
      items: [{
          text: 'Real-Time',
          icon: 'mdi-clock'
        },
        {
          text: 'Audience',
          icon: 'mdi-account'
        },
        {
          text: 'Conversions',
          icon: 'mdi-flag'
        },
      ],
      dropdownItems: [{
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        },
      ],
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
    watch: {
      group() {
        this.drawer = false
      },
    },
  }

</script>
