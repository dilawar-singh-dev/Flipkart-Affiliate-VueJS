<template>
  <div style="height:100%" class="dashboard">

    <Navbar />

    <Sidebar />

    <v-row no-gutters class="mt-15 pt-10 pl-3 pr-3 pl-md-10 pl-lg-0 pl-lg-0">

      <v-col cols="10" sm="11" md="9" xl="10" offset="2" offset-sm="1" offset-md="3" offset-xl="2">
        <v-row>
          <h2 class="ml-md-5 text-uppercase mb-10"><span>Settings</span></h2>
        </v-row>
      </v-col>

      <v-col cols="10" sm="11" md="9" xl="10" offset="2" offset-sm="1" offset-md="3" offset-xl="2">
        <v-row>
          <v-col cols="12" sm="6" md="8" class="mb-15">
            <v-card class="mt-4 pa-5">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required class="mb-5">
                </v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="mb-5"></v-text-field>

                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item"
                  required class="mb-5"></v-select>

                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?" required class="mb-5"></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                  Save
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                  Reset
                </v-btn>
              </v-form>
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
  export default {
    components: {
      Navbar,
      Sidebar
    },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),
    methods: {
      validate() {
        this.$refs.form.validate()
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
  }

</script>
