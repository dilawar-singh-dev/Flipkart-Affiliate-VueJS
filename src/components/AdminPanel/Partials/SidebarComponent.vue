<template>
  <v-navigation-drawer v-model="drawer" fixed left height="100%" permanent class="dashboard-sidebar">
    <v-list flat class="mt-15">
      <v-card-title class="d-none d-md-block">Admin Panel</v-card-title>
      <v-list-item-group v-model="selectedItem" color="primary">

        <v-list-item>
          <router-link to="/" class="col-12 px-0 pb-0 pt-0 text-decoration-none d-flex dark">
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="d-none d-md-block">
              <v-list-item-title class="dark"><span class="text-dark">Home</span></v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>

        <v-list-item v-for="(item, i) in items" :key="i">
          <router-link :to="'/'+item.link" class="col-12 px-0 pb-0 pt-0 text-decoration-none d-flex">
            <v-list-item-content class="d-none d-md-block">
              <v-list-item-title class="d-flex align-center">
                <v-list-item-icon class="py-0 px-0 my-0">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>{{item.text}}
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
  export default {
    data: () => ({
      drawer: false,
      selectedItem: 1,
      items: [{
          text: 'Products',
          link: 'admin-panel/products',
          icon: 'mdi-view-module'
        },
        {
          text: 'Users',
          link: 'admin-panel/users',
          icon: 'mdi-account-multiple'
        },
        {
          text: 'Settings',
          link: 'admin-panel/settings',
          icon: 'mdi-settings'
        },
      ],
    }),
  }

</script>
