import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
const opts = {}

const vuetify = new Vuetify({
  customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      themes: {
        options: {
          customProperties: true,
        },
        light: {
          primary: '#ff914d',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  })
  
export default new Vuetify(opts)
