<template>
  <div>
    <v-container fluid py-0 mt-5 px-0 border class="white">
      <v-row no-gutters>
        <v-container py-0 px-0>
          <v-row no-gutters>
            <v-col cols="12">
              <v-row no-gutters class="py-0">
                <v-footer color="white" padless class="w-100" width="100%">
                  <v-row justify="center" no-gutters>
                    <v-btn v-for="link in links" :key="link" color="dark" text small rounded class="my-2">
                      {{ link }}
                    </v-btn>
                    <v-col class="primary py-4 text-center white--text" cols="12">
                      {{ new Date().getFullYear() }} — <strong>Stack Sellers</strong>
                    </v-col>
                  </v-row> 
                </v-footer>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ]
    }),
}
</script>
