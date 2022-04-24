<template>
  <div style="height:100%" class="dashboard">

    <Navbar />

    <Sidebar />

    <v-row no-gutters class="mt-15 pt-10 pl-3 pr-3 pl-md-10 pl-lg-0 pl-lg-0">

      <v-col cols="10" sm="11" md="9" xl="10" offset="2" offset-sm="1" offset-md="3" offset-xl="2">
        <v-row>
          <h2 class="ml-md-5 text-uppercase mb-10"><span>Products</span></h2>
        </v-row>
      </v-col>

      <v-col cols="10" sm="11" md="9" xl="10" offset="2" offset-sm="1" offset-md="3" offset-xl="2">
        <v-row>
          <v-col cols="12" class="mb-15">
            <v-card>
              <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
              </v-card-title>
              <v-data-table :headers="headers" :items="products" :search="search">

                <template v-slot:top>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>

                <template v-slot:[`item.fk_selling_price`]="{ item }">
                    ₹ {{ item.fk_selling_price }}
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon small @click="deleteItem(item)">mdi-delete
                  </v-icon>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
  import Navbar from '../Partials/NavbarComponent.vue'
  import Sidebar from '../Partials/SidebarComponent.vue'
  const axios = require('axios');
  export default {
    components: {
      Navbar,
      Sidebar
    },
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [{
          text: 'Title',
          align: 'start',
          value: 'title',
        },
        {
          text: 'FK Price',
          value: 'fk_selling_price'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        },
      ],
      products: [],
    }),
    methods: {
      getProduct() {
        axios.get('api/products')
          .then(response => {
            this.products = response.data;
          })
      },
      deleteItem(item) {
        this.dialogDelete = true
      },
      deleteItemConfirm() {
        this.closeDelete()
      },

      closeDelete() {
        this.dialogDelete = false
      },
    },
    mounted() {
      this.getProduct();
    },
    watch: {
      dialog(val) {
        val || this.close()
      },
      dialogDelete(val) {
        val || this.closeDelete()
      },
    },
  }

</script>
